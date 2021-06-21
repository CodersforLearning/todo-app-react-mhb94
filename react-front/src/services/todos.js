import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/todos'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(response => response.data)
}

const create = newObject => {
  const req = axios.post(baseUrl, newObject)
  return req.then(response => response.data)
}

const change = (todo) => {
  return axios.put(`${baseUrl}/${todo.id}`, todo)
              .then(response => response.data)
}

const remove = (todo) => {
  console.log('axios remove', todo)
  return axios.delete(`${baseUrl}/${todo.id}`, todo)
              .then(res => {
                console.log(res)
              }
              )
}
const exports = {getAll, create, change, remove}

export default exports
