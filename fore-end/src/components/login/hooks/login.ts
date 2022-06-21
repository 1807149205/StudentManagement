/**
 * 进行服务器数据校验
 * @param username 用户名
 * @param password 密码
 * @returns 是否正确
 */
export default function(username: string , password: string): boolean {
  if(username === 'wzlwzl' && password === '123') {
    return true
  } else {
    return false
  }
  
}