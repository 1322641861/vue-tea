<template>
    <div class="like">
		<ul class="wrap">
			<li v-for="item in dataList" :key="item.id">
				<div class="image">
					<img :src="imgUrl(item.imgSrc)" alt="" @load="imgUpdate">
				</div>
				<div class="msg">
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
    name: 'like',
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
    computed: {},
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
	.wrap {
		display: flex;
		flex-wrap: wrap;
		
		li {
			box-sizing: border-box;
			padding: 0.133rem 0.267rem 0.267rem;
			width: 50vw;
			
			&:nth-of-type(odd) {
				padding-right: 0.133rem;
			}
			&:nth-of-type(even) {
				padding-left: 0.133rem;
			}
			
			.image {
				width: 100%;
				
				img {
					width: 100%;
					height: 100%;
					border-radius: 0.133rem;
				}
			}
			
			.msg {
				.desc {
					font-size: 0.347rem;
					font-weight: bold;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-top: 0.107rem;
				}
				
				.money {
					float: right;
					margin-top: 0.107rem;
					color: var(--color-red);
					font-weight: bold;
					
					span:first-child {
						font-size: 0.32rem;
					}
					span:nth-child(2) {
						font-size: 0.373rem;
					}
				}
			}
		}
	}
</style>