import axios from 'axios'

function getBakingMachines () {
  return axios.get('/DataAPI/Commom.ashx?ActType=GetBakingMachines').then(res => res.data)
}

export {
  getBakingMachines
}
