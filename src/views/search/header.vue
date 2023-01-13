<template>
    <div class="search-header">
		<back-navbar>
			<template #center>
				<label class="search-shop">
					<i class="iconfont icon-31sousuo"></i>
					<input class="search-input" 
						name="search-shop" 
						type="text" 
						placeholder="搜索商品"
						v-model="searchName">
						<!-- @input="searchFn" -->
				</label>
			</template>
			<template #right>
				<div class="search-btn" @click="searchFn">搜索</div>
			</template>
		</back-navbar>
	</div>
</template>

<script>
import backNavbar from "@/components/content/backNavbar"

export default {
    components: {
		backNavbar,
	},
    name: 'search-header',
    data() {
        return {
			searchName: ''
        };
    },
    computed: {},
    watch: {},
    methods: {
		searchFn() {
			this.$emit('searchComfirm', this.searchName)
		}
	},
    created() {},
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
	.search-btn {
		font-size: 0.427rem;
		color: #fff;
	}
	.search-shop {
		display: flex;
		align-items: center;
		height: 0.8rem;
		background: #fff;
		border-radius: 0.4rem;
		overflow: hidden;
		
		i {
			color: #999;
			font-size: 0.373rem;
			padding-left: 0.16rem;
		}
		
		.search-input {
			width: 100%;
			height: 100%;
			font-size: 0.32rem;
			border: none;
			box-sizing: border-box;
			padding: 0 0.16rem;
			outline: none;
		}
	}
	
</style>