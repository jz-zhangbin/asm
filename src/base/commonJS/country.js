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
        }
      })
      return arr
  }