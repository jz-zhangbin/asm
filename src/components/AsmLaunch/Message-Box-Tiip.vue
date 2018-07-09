<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
.message_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 .2s ease-out;
    section {
        padding: 20px 10px;
        border-radius: 6px;
        background: #fff;
        text-align: center;
        height: 20px;
        position: absolute;
        margin: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 140px;
        color: @color;
        &.red {
            color: red;
        }
        &.ccc {
            color: @font_color;
        }
    }
    @keyframes animation1 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-webkit-keyframes animation1 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}
</style>
<template>
    <div class="message_index">
        <section :class="{red: messagesValue.type == '2' , ccc: messagesValue.type == '3' }">
            {{messagesValue.value}}
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {};
    },

    props: {
        messageData: {}
    },

    components: {},

    computed: {
        ...mapState({
            messagesValue: state => state.Date.messagesValue
        })
    },

    created() {},

    updated() {},

    mounted() {
        this.stop()
        let _this = this;
        setTimeout(() => {
            _this.$store.commit('SET_SHOW_FALSE')
            _this.move() 
        }, 2000);
    },

    destroyed() {},

    methods: {
        stop() {
            var mo = function(e) {
                e.preventDefault();
            };
            document.body.style.overflow = "hidden";
            document.addEventListener("touchmove", mo, false); //禁止页面滑动
        },
        /***取消滑动限制***/
        move() {
            var mo = function(e) {
                e.preventDefault();
            };
            document.body.style.overflow = ""; //出现滚动条
            document.removeEventListener("touchmove", mo, false);
        }
    }
};
</script>