import axios from 'axios'

function fetchTemperature (sfc) {
  const query = {
    queryString: ' WHERE SFC_NO = @SFC_NO',
    queryParams: {
      SFC_NO: sfc
    }
  }
  return axios.post('/DataAPI/ReportData.ashx?reportCode=V_BakingTemperature', query).then(res => {
    return res.data.map(item => {
      return {
        createDate: new Date(item.CREATE_DATE),
        sfc: item.SFC_NO,
        st1: parseFloat(item.SHISHI_TEMPERATURE01),
        st2: parseFloat(item.SHISHI_TEMPERATURE02),
        st3: parseFloat(item.SHISHI_TEMPERATURE03),
        st4: parseFloat(item.SHISHI_TEMPERATURE04),
        st5: parseFloat(item.SHISHI_TEMPERATURE05),
        st6: parseFloat(item.SHISHI_TEMPERATURE06),
        st7: parseFloat(item.SHISHI_TEMPERATURE07),
        st8: parseFloat(item.SHISHI_TEMPERATURE08),
        st9: parseFloat(item.SHISHI_TEMPERATURE09),
        st10: parseFloat(item.SHISHI_TEMPERATURE10),
        st11: parseFloat(item.SHISHI_TEMPERATURE11),
        st12: parseFloat(item.SHISHI_TEMPERATURE12),
        st13: parseFloat(item.SHISHI_TEMPERATURE13),
        st14: parseFloat(item.SHISHI_TEMPERATURE14),
        st15: parseFloat(item.SHISHI_TEMPERATURE15),
        st16: parseFloat(item.SHISHI_TEMPERATURE16),
        xt1: parseFloat(item.XUNJIAN_TEMPERATURE01),
        xt2: parseFloat(item.XUNJIAN_TEMPERATURE02),
        xt3: parseFloat(item.XUNJIAN_TEMPERATURE03),
        xt4: parseFloat(item.XUNJIAN_TEMPERATURE04),
        xt5: parseFloat(item.XUNJIAN_TEMPERATURE05),
        xt6: parseFloat(item.XUNJIAN_TEMPERATURE06),
        xt7: parseFloat(item.XUNJIAN_TEMPERATURE07),
        xt8: parseFloat(item.XUNJIAN_TEMPERATURE08),
        xt9: parseFloat(item.XUNJIAN_TEMPERATURE09),
        xt10: parseFloat(item.XUNJIAN_TEMPERATURE10),
        xt11: parseFloat(item.XUNJIAN_TEMPERATURE11),
        xt12: parseFloat(item.XUNJIAN_TEMPERATURE12),
        xt13: parseFloat(item.XUNJIAN_TEMPERATURE13),
        xt14: parseFloat(item.XUNJIAN_TEMPERATURE14),
        xt15: parseFloat(item.XUNJIAN_TEMPERATURE15),
        xt16: parseFloat(item.XUNJIAN_TEMPERATURE16)
      }
    })
  })
}

export {
  fetchTemperature
}
