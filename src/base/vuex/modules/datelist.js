  import {
    datefn
  } from './../../commonJS/dateList.js'

  const datelist = {
    state: { 
      DateRange: {
        disabledDate(time) {
          let curDate = (new Date()).getTime();
          let three = 2 * 365 * 24 * 3600 * 1000;
          let threeMonths = curDate - three;
          return time.getTime() > Date.now() || time.getTime() < threeMonths;
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 0);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            end.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
            picker.$emit('pick', [end, end]);
          }
        }, {
          text: '近七天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '近十五天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 15);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '近三十天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '近一年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 367);
            picker.$emit('pick', [start, end]);
          }
        }, ]
      },
      messagesShow: false,
      messagesValue: {
        value: '',
        type: 3
      }
    },
    mutations: {
      SET_SHOW_TRUE(state, obj) {
        state.messagesShow = true
        state.messagesValue = {
          value: obj.value,
          type: obj.type
        }
      },
      SET_SHOW_FALSE(state) {
        state.messagesShow = false
      }
    },
    actions: {}
  }

  export default datelist
