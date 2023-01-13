// const moment = require("moment")
// moment.locale('zh-cn')

module.exports = {
	// 防抖
    debounce(fn, delay = 100) {
        let timer;
        const handleFn = function() {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                // 将fn的this绑定到handleFn
                fn.apply(this, arguments)
            }, delay)
        }
        // 取消执行
        handleFn.cancel = function() {
            clearTimeout(timer)
        }
        return handleFn
    },
    // fromNow(createdTime) { // n years ago
    //     return moment(createdTime).fromNow()
    // }
}