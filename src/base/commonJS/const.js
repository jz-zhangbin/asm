/**
 * @FileName 接口
 * @Date: 2018/4/18
 * @Author: zb
 */

let dev = { 
},
pro = { 
}

export default process.env.NODE_ENV === 'production' ? pro : dev
