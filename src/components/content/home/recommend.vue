<template>
    <div class="recommend">
		<ul class="content">
			<li v-for="item in dataList" :key="item.id">
				<div class="image">
					<img :src="imgUrl(item.imgSrc)" alt="" @load="imgUpdate">
				</div>
				<div class="msg">
					<div class="weight">{{item.content}}</div>
					<div class="desc">{{item.desc}}</div>
					<div class="money">
						<span>￥</span>
						<span>{{item.money}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// mixin
import {itemListenerMixin} from "@/assets/js/mixin"

export default {
    components: {},
    name: 'recommend',
	props: {
		dataList: {
			type: Array,
			default: []
		}
	},
	mixins: [itemListenerMixin],
    data() {
        return {

        };
    },
    computed: {
	},
    watch: {},
    methods: {
		imgUpdate() {
			this.$bus.$emit('imgUpdated')
		},
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
	.content {
		padding: 0 0.267rem;
		
		li {
			background-color: #f1f1f1;
			border-radius: 0.16rem;
			display: flex;
			justify-content: space-evenly;
			padding: 0.267rem 0;
			margin-bottom: 0.267rem;
			
			.image {
				width: 2.667rem;
				height: 2.667rem;
				img {
					width: 100%;
					height: 100%;
				}
			}
			
			.msg {
				width: 5.333rem;
				font-weight: bold;
				position: relative;
				
				.desc {
					margin: 0.133rem 0;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
				.weight {
					font-size: 0.32rem;
				}
				.money {
					color: var(--color-red);
					float: right;
					position: absolute;
					right: 0;
					bottom: 0;
					
					span:first-child {
						font-size: 0.32rem;
					}
					span:nth-child(2) {
						font-size: 0.48rem;
					}
				}
			}
			
		}
		
	}
</style>