<template>
    <div class="search-index">
		<search-header @searchComfirm="setSearchHistory"></search-header>
		<div class="wrap">
			<div class="content" v-if="searchList.length">
				<div class="title">
					<div>
						<i class="iconfont icon-shijian_o"></i>
						<span>历史搜索</span>
					</div>
					<div class="delete" @click="clearSearchHistory">
						<i class="iconfont icon-shanchu"></i>
					</div>
				</div>
				<div class="history">
					<ul class="h-wrap">
						<li v-for="item in searchList">{{item}}</li>
					</ul>
				</div>
			</div>
			
			<div class="content">
				<div class="title">
					<div>
						<i class="iconfont icon-remen"></i>
						<span>热门搜索</span>
					</div>
				</div>
				<div class="history">
					<ul class="h-wrap">
						<li>茶叶</li>
						<li>绿茶</li>
						<li>茶叶</li>
					</ul>
				</div>
			</div>
			
			<div class="content recommend-wrap">
				<div class="title">
					<div>
						<i class="iconfont icon-tuijian"></i>
						<span>推荐商品</span>
					</div>
				</div>
				<div class="recommend">
					<like :dataList="likeList"></like>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import backNavbar from "@/components/content/backNavbar"
import like from "@/components/content/home/like"
import {getRecommend} from "@/server/index"
import searchHeader from "./header"

export default {
    components: {
		backNavbar,
		like,
		searchHeader,
	},
    name: 'search',
    data() {
        return {
			likeList: [],
			searchList: [],
			searchName: ''
        };
    },
    computed: {},
    watch: {},
    methods: {
		getRecommend() {
			getRecommend().then(res => {
				console.log(res);
				if (res && res.data) {
					this.likeList = res.data;
				}
			})
		},
		getSearchHistory() {
			let history = localStorage.getItem('search-history')
			if (history) {
				this.searchList = JSON.parse(history);
			}
			console.log('history:', history);
		},
		setSearchHistory(searchName) {
			if (searchName) {
				this.searchList.unshift(searchName);
				localStorage.setItem('search-history', JSON.stringify(this.searchList))
				this.$router.push({
					name: 'list'
				})
			}
		},
		clearSearchHistory() {
			localStorage.removeItem('search-history')
			this.searchList = [];
		},
	},
    created() {
		this.getSearchHistory();
		this.getRecommend();
	},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped lang="scss">
	.search-index {
		background-color: #f6f7fb;
		
		.wrap {
			padding-top: 44px;
		}
		.content {
			padding: 0.267rem 0.32rem;
			
			.title {
				padding: 0.133rem 0;
				display: flex;
				justify-content: space-between;
				.delete {
					padding: 0.053rem 0.133rem;
					i {
						font-size: 0.373rem;
					}
				}
				
				.icon-remen {
					font-size: 0.347rem;
				}
				i {
					color: var(--color-theme);
					font-size: 0.427rem;
					font-weight: bold;
				}
				span {
					padding-left: 0.133rem;
					font-size: 0.373rem;
					font-weight: bold;
				}
			}
			
			.history {
				.h-wrap {
					display: flex;
					flex-wrap: wrap;
					padding-bottom: 0.133rem;
				}
				li {
					border: 1px solid #999;
					padding: 0.053rem 0.16rem;
					border-radius: 0.027rem;
					color: #999;
					margin-top: 0.133rem;
					margin-right: 0.267rem;
				}
			
			}
		}
		
		.recommend-wrap {
			padding-left: 0;
			padding-right: 0;
			.title {
				padding: 0.267rem 0.32rem;
			}
			.recommend {
				background-color: #fff;
			}
		}
	}
</style>