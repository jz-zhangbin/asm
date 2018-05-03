import {} from './homeserver'


const home = {
    state: {
        num: 1
    },
    mutations: {
        plus(state) {
            state.num++
            console.log(state)
        }
    },
    actions: {

    }
}

export default home