<template>
    <div class="card">
		<div class="title">
			<span>{{name}}</span>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
    components: {
	},
    name: 'card',
	props: {
		name: "",
	},
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
<style scoped lang="scss">
	.card {
		font-size: 0.373rem;
	}
	.title {
		text-align: center;
		font-weight: bold;
		padding: 0.213rem 0;
		
		span {
			position: relative;
			font-size: 0.48rem;
		}
		span::after,
		span::before {
			content: '';
			width: 0.16rem;
			height: 0.16rem;
			background-color: #a7aa83;
			display: inline-block;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		span::after {
			right: -0.4rem;
		}
		span::before {
			left: -0.4rem;
		}
	}
</style>