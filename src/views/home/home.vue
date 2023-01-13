<template>
	<div class="home">
		<div class="headers">
			<top-nav @fatherFn="gotoSearchPage"></top-nav>
			<ly-tabs v-model="nIndex" :activeColor="activedColor"
					@change='changeTabIndex'>
				<ly-tab-item v-for="(item, i) in tabList" 
					:title="item.title" 
					:name="i" 
					:key="item.title">
				</ly-tab-item>
			</ly-tabs>
		</div>
		<Scroll :probeType="3" 
            :pullDownLoad="true" 
			redundantStyle="height: calc(100vh - 49px - 2.24rem);padding-top: 2.24rem;"
            @scroll ="emitScroll" 
            @pullingDown="pullingDown"
            ref="scroll">
			<template v-if="nIndex === 0">
				<swiper-custom :swiperSlides="swiperSlides"></swiper-custom>
				<tab-icons></tab-icons>
				<div class="divide"></div>
				<card name="火爆推荐">
					<recommend :dataList="recommendList"></recommend>
				</card>
				<div class="divide"></div>
				<card name="猜你喜欢">
					<like :dataList="recommendList"></like>
				</card>
			</template>
			<template v-else-if="nIndex === 1">
				<swiper-custom :swiperSlides="swiperSlides"></swiper-custom>
				<card name="火爆推荐">
					<recommend :dataList="recommendList"></recommend>
				</card>
			</template>
			<div class="bottom-margin"></div>
		</Scroll>
	</div>
</template>

<script>
import topNav from "@/components/content/home/topNav"
import SwiperCustom from "@/components/content/home/swiper"
import tabIcons from "@/components/content/home/tabIcons"
import recommend from "@/components/content/home/recommend"
import Scroll from "@/components/common/scroll/Scroll"
import card from "@/components/content/home/card"
import like from "@/components/content/home/like"
// mixin
import {itemListenerMixin} from "@/assets/js/mixin"

import {
	getIndexTab, getRecommend, 
	getHomeSwiper, getIndexDataList,
} from "@/server/index"

export default {
	name: "home",
	components: {
		topNav,
		SwiperCustom,
		tabIcons,
		recommend,
		Scroll,
		card,
		like,
	},
	data() {
		return {
			nIndex: 0,
			tabList: [],
			activedColor: "#a62e29",
			recommendList: [],
			swiperSlides: [],
		}
	},
	mixins: [itemListenerMixin], // $bus 全局监听混和(抽取公共函数和变量)
	created() {
		this.getIndexTab().then(() => {
			this.changeTabIndex(this.nIndex);
		});
	},
	methods: {
		// scrollTop组件显示隐藏
		emitScroll(position) {
			// mixin中监听是否展示scrollTop按钮
			this.listenShowScrollTop(position.y)
		},
		// 下拉刷新
		async pullingDown(finishPullUp) {
			await this.getIndexTab()
			finishPullUp();
		},
		/// 切换顶部导航
		changeTabIndex(id) {
			this.getIndexDataList(id)
		},
		/// 接口请求
		async getIndexTab() {
			let res = await getIndexTab();
			if (res && res.data) {
				this.tabList = res.data
			}
		},
		getIndexDataList(type) {
			getIndexDataList(type).then(res => {
				console.log(res);
				if (res && res.data) {
					this.swiperSlides = res.data.swiperList;
					this.recommendList = res.data.recommendList;
				}
			})
		},
		// 跳转搜索页面
		gotoSearchPage() {
			this.$router.push('/search');
		},
	},
}
</script>

<style scoped>
	.ly-tabs {
		height: 1.067rem;
		border-bottom: none;
	}
	.ly-tabs .ly-tab-item {
		font-size: 0.373rem;
		padding: 0.267rem 0.32rem;
	}
	::v-deep .ly-tabs__tab-list {
		height: 100%;
	}
	.bottom-margin {
		height: 6px;
	}
	.headers {
		/* position: relative; */
		position: fixed;
		width: 100%;
		z-index: 1;
	}
</style>