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
  console.log('change before baseurl')
  return axios.put(`${baseUrl}/${todo.id}`,todo)
              .then(res => {
                console.log('change promise returned'
                )
                return res.data})
}

const remove = (todo) => {
  return axios.delete(`${baseUrl}/${todo.id}`, todo)
              .then(res => {
                console.log(res)
              }
              )
}
const exports = {getAll, create, change, remove}

export default exports
