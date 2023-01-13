<template>
    <ul class="tab-icons">
		<li class v-for="item in icons" :key="item.icon">
			<i class="iconfont" :class="item.icon"></i>
			<span>{{item.title}}</span>
		</li>
	</ul>
</template>

<script>

export default {
    components: {},
    name: 'tabIcons',
    data() {
        return {
			icons: [
				{title: '自饮茶', icon: "icon-cha"},
				{title: '茶具', icon: "icon-chahu"},
				{title: '茶礼盒', icon: "icon-lihe"},
				{title: '福利', icon: "icon-fuli"},
				{title: '官方验证', icon: "icon-youjianyanzheng"},
			]
        };
    },
    computed: {},
    watch: {},
    methods: {},
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
	.tab-icons {
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0.347rem;
		
		li {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0.133rem;
			
			.iconfont {
				font-size: 0.747rem;
				line-height: 1.12rem;
				height: 1.12rem;
			}
		}
		
	}
</style>