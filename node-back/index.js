require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongo = require('mongodb')
const Todo = require('./models/todo')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('content', function getId (req) {
    return JSON.stringify(req.body)
  })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.get('/api/todos', (req, res) => {
    Todo.find({}).then( notes => {
        res.json(notes)
    })
})

app.post('/api/todos', (req, res) => {
    const body = req.body

    if (body.content === undefined) {
        return res.status(400).json({ error: 'content missing' })
    }

    const todo = new Todo({
        content: body.content,
        completed: body.completed || false
    })

    todo.save().then(savedTodo => {
        res.json(savedTodo)
    })
})

app.put('/api/todos/:id', (req, res) => {
    console.log('app put', req.params.id)
    Todo.findOneAndUpdate(
        {_id: new mongo.ObjectId(req.params.id)},
        {
        $set: {
            content: req.body.content,
            completed: req.body.completed || false
            }
        },
        {
            upsert: true
        })
        .then(todo => console.log(todo))
})

app.delete('/api/todos/:id', (req, res) => {
    Todo.deleteOne({_id: new mongo.ObjectId(req.params.id)})
        .then(todo => { return todo })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
