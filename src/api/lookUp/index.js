import axios from 'axios'
let baseUrl = '/pc'
let api = {
  getLegalInfoForRefer: baseUrl + '/legalInfo/getLegalInfoForRefer',
  getLegalInfoListByIds: baseUrl + '/legalInfo/getLegalInfoListByIds',
  getLegalInfoNotFilledOrg: baseUrl + '/legalInfo/getLegalInfoNotFilledOrg',
  getLegalInfoForHasRefer: baseUrl + '/legalInfo/getLegalInfoForHasRefer'
}

const getLegalInfoForRefer = (parm) => {
  return axios.post(api.getLegalInfoForRefer + `?pageNo=${parm.pageNo}&pageSize=${parm.pageSize}`)
}

const getLegalInfoListByIds = (ids) => {
  return axios.post(api.getLegalInfoListByIds + `?ids=${ids}`)
}

const getLegalInfoNotFilledOrg = (parm) => {
  return axios.post(api.getLegalInfoNotFilledOrg + `?pageNo=${parm.pageNo}&pageSize=${parm.pageSize}`)
}

const getLegalInfoForHasRefer = (parm) => {
  return axios.post(api.getLegalInfoForHasRefer + `?pageNo=${parm.pageNo}&pageSize=${parm.pageSize}&fillYear=${parm.fillYear}&organization=${parm.organization}&referResult=${parm.referResult}`
  )
}

export {
  getLegalInfoForRefer,
  getLegalInfoListByIds,
  getLegalInfoNotFilledOrg,
  getLegalInfoForHasRefer
}
