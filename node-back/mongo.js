const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.zyw2t.mongodb.net/todo-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const todoSchema = new mongoose.Schema({
  content: String,
  completed: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)

if (process.argv.length === 3) {
  Todo.find({}).then(result => {
    result.forEach(todo => {
      console.log(todo)
    })
    mongoose.connection.close()
  })
}

else if (process.argv.length === 5) {
  if (process.argv[3] === "delete") {
    Todo.deleteOne({content: process.argv[4]})
        .then(todo => {
          console.log(`successfully deleted entry? ${todo.deletedCount}`)
          mongoose.connection.close()
        })
  }
  else {
  const todo = new Todo({
    content: process.argv[3],
    completed: process.argv[4],
  })

  todo.save().then(todo => {
    console.log(`added todo: ${todo.content} completed? ${todo.completed}`)
    mongoose.connection.close()
  })
  }
}

else {
  console.log('invalid number of arguments')
}
