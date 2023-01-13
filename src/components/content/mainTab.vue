<template>
    <div class="main-tab">
		<tab-bar>
			<tab-bar-item path="/home">
				<template #activedIcon>
					<img src="@/assets/images/home-active.png">
				</template>
				<template #defaultIcon>
					<img src="@/assets/images/home.png">
				</template>
				<template #text>
					<span>首页</span>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/category">
				<template #activedIcon>
					<img src="@/assets/images/category-active.png">
				</template>
				<template #defaultIcon>
					<img src="@/assets/images/category.png">
				</template>
				<template #text>
					<span>分类</span>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/cart">
				<template #activedIcon>
					<img src="@/assets/images/cart-active.png">
				</template>
				<template #defaultIcon>
					<img src="@/assets/images/cart.png">
				</template>
				<template #text>
					<span>购物车</span>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<template #activedIcon>
					<img src="@/assets/images/user-active.png">
				</template>
				<template #defaultIcon>
					<img src="@/assets/images/user.png">
				</template>
				<template #text>
					<span>个人</span>
				</template>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import tabBar from "@/components/common/tabBar/tabBar";
import tabBarItem from "@/components/common/tabBar/tabBarItem";

export default {
    components: {
		tabBar,
		tabBarItem
	},
    name: 'MainTab',
    data() {
        return {

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
<style scoped>
</style>