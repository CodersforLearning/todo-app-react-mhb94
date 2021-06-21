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

const exports = {getAll, create}

export default exports
