  import { datefn } from  './../../commonJS/dateList.js'
  
  const datelist = {
    state: {
       DateListAll : datefn(4),
       messagesShow: false,
       messagesValue: {
         value: '',
         type: 3
       }
    },
    mutations: {  
      SET_SHOW_TRUE(state,obj) {
        state.messagesShow = true
        state.messagesValue = {
          value : obj.value,
          type : obj.type
        }
      },
      SET_SHOW_FALSE(state) {
        state.messagesShow = false
      }
    },
    actions: { 
    }
  }
  
  export default datelist
  