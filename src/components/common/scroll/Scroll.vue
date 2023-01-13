<template>
  <div class="wrapper" ref="wrapper" :style="getHeight">
    <!-- wrapper里面只能有一个dom, bscroll才会生效 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
		/**
		 * 	// 1. probeType 为 0，在任何时候都不派发 scroll 事件，
			// 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
			// 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
			// 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
		 */
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
	  pullDownLoad: {
	    type: Boolean,
	    default: false
	  },
      redundantHeight: { // scroll高度(除去tab高度)
        type: Number,
        default: 94
      },
	  redundantStyle: ''
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    computed: {
      getHeight() {
        // return this.redundantHeightStr ? {height: this.redundantHeightStr} : {height: `calc(100vh - ${this.redundantHeight}px)`};
		return this.redundantStyle ? this.redundantStyle : {height: `calc(100vh - ${this.redundantHeight}px)`};
	  }
    },
    mounted() {
        this.scrollInit()
    },
    methods: {
      scrollInit() {
        // 1.创建BScroll对象
		// $refs: 获取dom
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
			pullDownLoad: this.pullDownLoad,
			pullDownRefresh: {
				threshold: 50,
				probeType: this.probeType
			},
            // wheel: true,
            // scrollbar: true
          })
        }

        // 2.监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
          this.refresh()
          this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
          })
        }

        // 3.监听scroll滚动到底部
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
		
		if (this.pullDownLoad) {
		   this.scroll.on('pullingDown', () => {
		     this.$emit('pullingDown', this.finishPullDown)
		   })
		 }
      },
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
	  finishPullDown() {
	    this.scroll && this.scroll.finishPullDown()
	  },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      },
    },
    updated() {
      this.refresh()
    },
    activated() {
      this.refresh()
    }
  }
</script>

<style scoped>
  .wrapper {
    /* height: 100vh; */
    /* position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 50px; */
    /* height: calc(100vh - 94px); */
    /* margin-top: 44px; */
  }
</style>