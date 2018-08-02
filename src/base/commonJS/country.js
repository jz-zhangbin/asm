export function countryOne(str) {
  switch(str){
    case '澳大利亚' :
    return 'AU'
    break;
    case '美国' :
    return 'US'
    break;
    case '新西兰' :
    return 'NZ'
    break;
    case '墨西哥' :
    return 'MX'
    break;
    case '加拿大' :
    return 'CA'
    break;
    case '英国' :
    return 'GB'
    break;
    case '瑞士' :
    return 'CH'
    break; 
    case '日本' :
    return 'JP'
    break; 
    case '韩国' :
    return 'KR'
    break; 
    case '德国' :
    return 'DE'
    break; 
    case '法国' :
    return 'FR'
    break;
    case '意大利' :
    return 'IT'
    break; 
    case '西班牙' :
    return 'ES'
    break;  
  } 
}
export function countryThree(str) {
  switch(str){
    case '澳大利亚' :
    return '116'
    break;
    case '美国' :
    return '2'
    break;
    case '新西兰' :
    return '122'
    break;
    case '墨西哥' :
    return '56'
    break;
    case '加拿大' :
    return '41'
    break;
    case '英国' :
    return '114'
    break;
    case '瑞士' :
    return '106'
    break; 
    case '日本' :
    return '3'
    break;
    case '韩国' :
    return '4'
    break; 
    case '德国' :
    return '89'
    break; 
    case '法国' :
    return '91'
    break;
    case '意大利' :
    return '111'
    break; 
    case '西班牙' :
    return '113'
    break; 
  } 
}
export function countryTwo(str) {
  switch(str){
    case 'AU' :
    return '澳大利亚'
    break;
    case 'US' :
    return '美国'
    break;
    case 'NZ' :
    return '新西兰'
    break;
    case 'MX' :
    return '墨西哥'
    break;
    case 'CA' :
    return '加拿大'
    break;
    case 'GB' :
    return '英国'
    break;
    case 'CH' :
    return '瑞士'
    break; 
    case 'JP' :
    return '日本'
    break; 
    case 'KR' :
    return '韩国'
    break; 
    case '韩国' :
    return 'KR'
    break; 
    case 'DE' :
    return '德国'
    break; 
    case 'FR' :
    return '法国'
    break;
    case 'IT' :
    return '意大利'
    break; 
    case 'ES' :
    return '西班牙'
    break; 
  }
} 
export function countryListParset(arr) {
    arr.map((ele,index)=>{
        switch(ele){
          case 'AU' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '澳大利亚'
          }
          break;
          case 'NZ' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '新西兰'
          } 
          break;
          case 'US' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '美国'
          } 
          break;
          case 'MX' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '墨西哥'
          } 
          break;
          case 'CA' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '加拿大'
          } 
          break;
          case 'GB' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '英国'
          } 
          break;
          case 'CH' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '瑞士'
          } 
          break;
          case 'JP' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '日本'
          } 
          break;
          case 'KR' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '韩国'
          } 
          break;
          case 'DE' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '德国'
          } 
          break;
          case 'FR' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '法国'
          } 
          break;
          case 'IT' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '意大利'
          } 
          break;
          case 'ES' :
          arr[index] = {
            jc: ele,
            checked : false,
            name : '西班牙'
          }
          break;  
        }
      })
      return arr
  }