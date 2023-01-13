<template>
    <div class="back-navbar">
		<navbar leftWidth="width: 50px">
			<template #left>
				<div class="back" @click="goBack">
					<img src="@/assets/images/common/back_white.png" alt="" />
				</div>
			</template>
			<template #center>
				<slot name="center"></slot>
			</template>
			<template #right>
				<slot name="right"></slot>
			</template>
		</navbar>
	</div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar"

export default {
    components: {
		navbar
	},
    name: 'backNavbar',
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {
		goBack() {
			this.$router.go(-1);
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
	.back-navbar {
		position: fixed;
		width: 100%;
		height: 44px;
	}
	.back {
		// width: 1.333rem;
		// height: 1.333rem;
		height: 100%;
		display: flex;
		align-items: center;
		padding-right: 5px;
		
		img {
			width: 100%;
			// height: 55%;
			height: 24px;
		}
	}
</style>