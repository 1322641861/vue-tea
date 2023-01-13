<template>
    <div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>

export default {
    components: {},
    name: 'TabBar',
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
	.tab-bar {
		display: flex;
		/* background: #f6f6f6; */
		background: #fff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
		justify-content: space-evenly;
	}
</style>