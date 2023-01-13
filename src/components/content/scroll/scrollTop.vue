<template>
    <div class="scroll-top" :style="isShowBtn">
        <div class="to-top">
            <img :src="defaultImgUrl" :style="imgRatioFn">
        </div>
    </div>
</template>

<script>

    export default {
        components: {},
        name: 'scrollTop',
        props: {
            isShow: {
                type: Boolean,
                default: false,
            },
            imgRatio: {
                type: Number,
                default: .8
            },
            imgUrl: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
            };
        },
        computed: {
            isShowBtn() {
                return {
                    opacity: this.isShow ? 1 : 0,
                    display: this.isShow ? 'block' : 'none'
                    // 'z-index': this.isShow ? 3 : -1,
                };
            },
            imgRatioFn() {
                const ratio = this.imgRatio * 100 + '%'
                return { width: ratio, height: ratio }
            },
            defaultImgUrl() {
                return this.imgUrl || require('@/assets/images/common/totop.png')
            },
        },
        watch: {},
        methods: {
        },
        created() { },
        mounted() { },
        beforeCreate() { },
        beforeMount() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() { },
        activated() { },
    }
</script>
<style scoped>
    .scroll-top {
        position: absolute;
        z-index: 3;
        right: 25px;
        bottom: 95px;
        background: rgba(255,255,255,.8);
        border-radius: 50%;
        transition: .3s;
        opacity: 0;
        border: 1px solid #eee;
    }

    .to-top {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .to-top img {
        width: 100%;
        height: 100%;
    }
</style>