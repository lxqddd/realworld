import axios from 'axios'

const fetch = axios.create({
  // baseURL: 'https://conduit.productionready.io',
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

fetch.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response.data
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error.response.data)
  }
)

export default fetch
