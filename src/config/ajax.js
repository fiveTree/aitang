import wepy from 'wepy'
// import interfaces from '../interfaces'
import {
  baseUrl
} from './env';
export default async function ajax(options) {
  options.url = baseUrl + options.url
  
  if (options.header) {
    options.header['x-wechat-session'] = wepy.getStorageSync('_session')
  } else {
    options.header = {
      'x-wechat-session': wepy.getStorageSync('_session')
    }
  }


  if (options.method == 'post') {
    options.header = {
      'Content-Type': 'appliction/x-www-form-urlencoded'
    }
  }
  options.method = options.method.toUpperCase()
  
  let response = await wepy.request(options)

  //   if (response.statusCode === 401) {
  //     // await interfaces.login()
  //     // return await request(options)
  //   } else if (response.statusCode === 500) {
  //     wepy.showModal({
  //       title: '提示',
  //       content: `服务器错误，请截图本提示，并联系深大汪峰。${response.data.errmsg}`
  //     })
  //   } else
  if (response.statusCode === 200) {
    return response
  } else {
    wepy.showModal({
      title: '提示',
      content: `服务器错误。`
    })
  }
}
