import axios from 'axios'
const baseUrl = '/api/todos'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(response => response.data)
}

const create = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(response => response.data)
}

const exports = {getAll, create}

export default exports
