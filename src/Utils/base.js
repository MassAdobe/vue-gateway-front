import BvToast from "bootstrap-vue";
import Vue from 'vue';

Vue.use(BvToast);

export default {
    component:{
        BvToast
    },
    install(Vue, options) {
        Vue.prototype.changeData = function () {
            alert('执行成功');
        };
        Vue.prototype.makeToast = function (variant = null, title, content) {
            this.$bvToast.toast(content, {
                title: title,
                variant: variant,
                autoHideDelay: 3000,
                solid: true
            })
        }
    }
};
