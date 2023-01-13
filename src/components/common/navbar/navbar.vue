<template>
    <div class="nav-bar" :style="navBarStyle">
        <div class="left" :style="leftWidth"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'navbar',
    props: {
        path: String,
        backgroundColor: {
            type: String
        },
        isShowShadow: {
            type: Boolean,
            default: true
        },
		leftWidth: {
			type: String,
			default: ''
		}
    },
    data() {
        return {

        };
    },
    computed: {
        navBarStyle() {
            return {
                backgroundColor: this.backgroundColor, 
                boxShadow: this.isShowShadow ? '0 1px 1px rgba(0, 0, 0, .1)' : 'none'
            }
        }
    },
    watch: {},
    methods: {
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
<style scoped>
    .nav-bar {
        display: flex;
        line-height: 44px;
        height: 44px;
        background-color: var(--color-theme);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        position: relative;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
		align-items: center;
    }
    .left, .right {
        width: 60px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center {
        flex: 1;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
</style>