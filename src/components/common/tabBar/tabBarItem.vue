<template>
    <div class="tab-bar-item" @click="changePath">
		<div class="default" v-show="!showActived">
			<slot name="defaultIcon"></slot>
		</div>
		<div class="actived" v-show="showActived">
			<slot name="activedIcon"></slot>
		</div>
		<div :class="{active: actived}" :style="activedStyle">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>

export default {
    components: {},
    name: 'TabBarItem',
    data() {
        return {
			actived: false
        };
    },
	props: {
		path: String,
		activedColor: {
			type: String,
			default: '#d81e06'
		}
	},
    computed: {
		showActived() {
			this.actived = this.path === this.$route.path
			return this.actived
		},
		activedStyle() {
			return this.actived ? {'color': this.activedColor} : {}
		}
	},
    watch: {},
    methods: {
		changePath() {
			if (this.path !== this.$route.path) {
				this.$router.replace(this.path);
			}
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
<style scoped>
	 .tab-bar-item {
		text-align: center;
		flex: 1;
		height: 49px;
		display: flex;
		font-size: 12px;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.tab-bar-item img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
		vertical-align: -webkit-baseline-middle;
		padding-bottom: 3px;
	}
	.active {
		color: #41b883;
	}
	.active div {
		color: #41b883;
	}
</style>