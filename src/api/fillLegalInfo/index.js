import axios from 'axios'

let baseUrl = '/pc'
let api = {
  saveDraft: baseUrl + '/legalInfo/saveDraft',
  save: baseUrl + '/legalInfo/save',
  getLegalInfoByOrg: baseUrl + '/legalInfo/getLegalInfoByOrg',
  submit: baseUrl + '/legalInfo/submit',
  list: baseUrl + '/legalInfo/list'
}
const saveDraft = (data) => {
  return axios.post(api.saveDraft, data)
}

const save = (data) => {
  return axios.post(api.save, data)
}

const getLegalInfoByOrg = () => {
  return axios.get(api.getLegalInfoByOrg)
}

const submit = (id) => {
  return axios.get(api.submit + `?id=${id}`)
}

// const list = (id) => {
//   return axios.post(api.submit, id)
// }

export {
  saveDraft,
  save,
  getLegalInfoByOrg,
  submit
}
