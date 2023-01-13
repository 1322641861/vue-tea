import {request} from "./request"

export function getIndexTab() {
	return request({
		url: '/api/index'
	})
}

export function getRecommend() {
	return request({
		url: '/api/index/recommend'
	})
}

export function getHomeSwiper() {
	return request({
		url: '/api/index/swiper'
	})
}

export function getIndexDataList(type) {
	return request({
		url: '/api/index/dataList?type=' + type
	})
}