import axios from "axios"

export class Base {
	static baseUrl = ['http://localhost:3000']
	
	/// 过滤白名单, 不加入loading计数
	static reqWhiteList = [];

	static version = '1.0.1';
}

export function request(config) {
	const instance = axios.create({
		baseURL: Base.baseUrl[0]
	})
	
	instance.interceptors.request.use(value => {
		// console.log('请求拦截', value)
		// if (Base.reqWhiteList.indexOf(value.url) === -1) {
		// 	index.dispatch('incLoadCount')
		// }
		return value
	}, err => {
		console.log(err);
	})
	
	instance.interceptors.response.use(res => {
		// console.log('响应拦截', res)
		// if (Base.reqWhiteList.indexOf(res.config.url) === -1) {
		// 	index.dispatch('decLoadCount')
		// }
		return res.data
	}, err => {
		console.log(err);
	})
	
	// 直接返回, 本身就是一个promise
	return instance(config)
}