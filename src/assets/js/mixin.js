import { debounce } from './utils'
import scrollTop from "@/components/content/scroll/scrollTop"
import {Base} from "@/server/request"

export const itemListenerMixin = {
    data() {
        return {
            itemImgLoad: null,
            isShowBtn: false, 
        }
    },
    mounted() {
        // 监听图片是否已加载完
		if (this.$refs.scroll && this.$refs.scroll.refresh) {
			this.itemImgLoad = debounce(this.$refs.scroll.refresh)
			this.$bus.$on('imgUpdated', this.itemImgLoad)
		}
    },
    components: {
        scrollTop,
    },
    methods: {
        // 调用scroll组件回到顶部
        toTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        listenShowScrollTop(sizeY) {
            this.isShowBtn = sizeY < -800 ? true : false;      
        },
		imgUrl(url) {
			return Base.baseUrl + url;
		}
    },
    destory() {
        // 关闭全局监听
        this.$bus.$off('imgUpdated', this.itemImgLoad)
    }
}