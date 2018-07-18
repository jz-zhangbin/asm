export function datefn(datenum) {
  let timerNum1 = new Date().getTime()
  let timerNum2 = 60 * 60 * 24 * 7 * 1000
  let timerNum3 = new Date(timerNum1 - timerNum2)
  let timerNum4 = new Date(timerNum1 - 60 * 60 * 24 * 1 * 1000)
  let timerNum5 = new Date(timerNum1 - 60 * 60 * 24 * 15 * 1000)
  let timerNum6 = new Date(timerNum1 - 60 * 60 * 24 * 30 * 1000)
  let timerNum7 = new Date(timerNum1 - 60 * 60 * 24 * 365 * 1000)
  function fn(date1) {
    let date = new Date(date1)
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  }
  let arr = [ 
    {
      data: {
        beginTime: fn(timerNum4),
        endTime: fn(timerNum1)
      },
      value: 0,
      label: '昨天'
    },
    {
      data: {
        beginTime: fn(timerNum3),
        endTime: fn(timerNum1)
      },
      value: 1,
      label: '近七天'
    },
    {
      data: {
        beginTime: fn(timerNum5),
        endTime: fn(timerNum1)
      },
      value: 2,
      label: '近十五天'
    },
    {
      data: {
        beginTime: fn(timerNum6),
        endTime: fn(timerNum1)
      },
      value: 3,
      label: '近三十天' 
    }
  ]
  switch (datenum) {
    case 0:
      return {
        beginTime: fn(timerNum3),
        endTime: fn(timerNum1)
      }
      break;
    case 1:
      return arr
      break
    case 2:
      let newarr = [{
          data: {
            beginTime: fn(timerNum1),
            endTime: fn(timerNum1)
          },
          value: 0,
          label: '今天'
        }, 
        {
          data: {
            beginTime: fn(timerNum4),
            endTime: fn(timerNum1)
          },
          value: 1,
          label: '昨天'
        },
        {
          data: {
            beginTime: fn(timerNum3),
            endTime: fn(timerNum1)
          },
          value: 2,
          label: '近七天'
        },
        {
          data: {
            beginTime: fn(timerNum5),
            endTime: fn(timerNum1)
          },
          value: 3,
          label: '近十五天'
        },
        {
          data: {
            beginTime: fn(timerNum6),
            endTime: fn(timerNum1)
          },
          value: 4,
          label: '近三十天'
        }
      ] 
      return newarr
      break;
      case 3 :
      return {
        beginTime: fn(timerNum1),
        endTime: fn(timerNum1)
      }
      break; 
      case 4 :
      let yeararr = [ 
      {
        data: {
          beginTime: fn(timerNum4),
          endTime: fn(timerNum1)
        },
        value: 0,
        label: '昨天'
      },
      {
        data: {
          beginTime: fn(timerNum3),
          endTime: fn(timerNum1)
        },
        value: 1,
        label: '近七天'
      },
      {
        data: {
          beginTime: fn(timerNum5),
          endTime: fn(timerNum1)
        },
        value: 2,
        label: '近十五天'
      },
      {
        data: {
          beginTime: fn(timerNum6),
          endTime: fn(timerNum1)
        },
        value: 3,
        label: '近三十天'
      }
    ]
    return yeararr
    break;
  }
};
