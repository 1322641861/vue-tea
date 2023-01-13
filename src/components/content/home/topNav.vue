<template>
    <div class="top-nav">
		<div class="logo">
			<img src="@/assets/images/logo.png" alt="">
		</div>
		<div class="search" @click="fatherFn()">
			<span>搜索</span>
		</div>
		<div class="right-btn">
			<i class="iconfont icon-kefu"></i>
		</div>
	</div>
</template>

<script>

export default {
    components: {},
    name: 'topNav',
	props: {
	},
    data() {
        return {
		
        };
    },
    computed: {},
    watch: {},
    methods: {
		fatherFn() {
			this.$emit('fatherFn')
		}
	},
    created() {},
    mounted() {
	},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>

<style lang="scss" scoped>
	.top-nav {
		background-color: var(--color-theme);
		height: 1.173rem;
		display: flex;
		justify-content: space-between;
		padding: 0.16rem 0.266667rem;
		box-sizing: border-box;
		// position: fixed;
		// width: 100%;
		
		.logo {
			img {
				height: 100%;
			}
		}
		
		.right-btn {
			color: #fff;
			padding: 0 0.08rem;
			display: flex;
			align-items: center;
			i {
				font-size: 0.533333rem;
			}
		}
		
		.search {
			width: 100%;
			background-color: #fff;
			border-radius: 1.173333rem;
			margin: 0.08rem 0.24rem 0.08rem 0.347rem;
			display: flex;
			align-items: center;
			
			span {
				font-size: 0.32rem;
				padding-left: 0.32rem;
				color: #ccc;
			}
		}
	}
</style>