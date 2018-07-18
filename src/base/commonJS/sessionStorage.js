/**
 * @FileName sessionStorage
 * @Date: 2018/4/18
 * @Author: Junior
 */
export default {
    set(key, value) {
      if (!window.sessionStorage) {
        console.error("sessionStorage 不可用！")
        return
      }
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
      let value = sessionStorage.getItem(key)
      if (!value) {
        console.error(key + "不存在！")
        return
      }
      return JSON.parse(value)
    },
    clear(key) {
      sessionStorage.clear(key)
    }
  } 
  