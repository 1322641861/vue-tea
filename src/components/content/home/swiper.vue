<template>
    <div class="swiper-container">
		<swiper v-if="swiperSlides.length" :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="(item,i) in swiperSlides" :key="item.id">
				<img :data-src="item.imgUrl" :key="item.imgUrl" class="swiper-lazy">
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
		swiper, 
		swiperSlide
	},
    name: 'SwiperCustom',
	props: {
		swiperSlides: {
			type: Array,
			default: []
		}
	},
    data() {
	  return {
		swiperOption: {
			loop: true,
			speed: 800,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
			　　delay: 2000,
			　　disableOnInteraction: false
			},
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 2,
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
		},
	  }
	},
	computed: {
	  swiper() {
		return this.$refs.mySwiper && this.$refs.mySwiper.swiper
	  }
	},
	created() {
	},
	mounted() {
	  // current swiper instance
	  // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	  console.log('this is current swiper instance object', this.swiper)
	  // this.swiper.slideTo(3, 1000, false)
	}
}
</script>
<style scoped>
	.swiper-container {
		--swiper-theme-color: #ff6600;/* 设置Swiper风格 */
		--swiper-preloader-color: #00ff33;/* 单独设置预加载圆圈的颜色 */
	}
	.swiper-slide {
		height: 5.333rem;
	}
	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
	::v-deep .swiper-pagination-bullet-active {
		background: var(--color-theme);
	}
</style>