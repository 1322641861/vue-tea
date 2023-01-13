var { successObject } = require('../public/base.js')

const getHome = (req, res) => {
	res.redirect('/index')
}

const getIndex = (req, res) => {
	res.send(successObject([
			{id: 0, title: '推荐'},
			{id: 1, title: '大红袍'},
			{id: 2, title: '绿茶'},
			{id: 3, title: '铁观音'},
			{id: 4, title: '普洱'},
			{id: 5, title: '茶具'},
			{id: 6, title: '花茶'},
		])
	)
}

const getRecommend = (req, res) => {
	res.send(successObject([
			{
				id: 1, 
				imgSrc: '/public/image/home/recommend1.webp',
				content: '大红袍150g*5',
				desc: '曦瓜壹号特级茶叶老树肉桂茶叶三坑两涧正岩核心产区曦瓜一号20g',
				money: "1200.00"
			},
			{
				id: 2, 
				imgSrc: '/public/image/home/recommend2.webp',
				content: '沱茶150g*5',
				desc: '下关沱茶冰岛南迫古树饼茶生茶',
				money: "1000.00"
			},
			{
				id: 3, 
				imgSrc: '/public/image/home/recommend3.webp',
				content: '大红袍150g*5',
				desc: '小罐茶银罐多泡装特级年货大红袍2',
				money: "2400.00"
			},
		])
	)
}
const getHomeSwiper = (req, res) => {
	res.send(successObject([
			{id: 1, imgUrl: "http://www.biboniu.top/public/images/swiper/1.jpg"},
			{id: 2, imgUrl: "http://www.biboniu.top/public/images/swiper/2.jpg"},
			{id: 3, imgUrl: "http://www.biboniu.top/public/images/swiper/3.jpg"},
			{id: 4, imgUrl: "http://www.biboniu.top/public/images/swiper/4.jpg"},
			{id: 5, imgUrl: "http://www.biboniu.top/public/images/swiper/5.jpg"},
		])
	)
}

const getDataList0 = () => {
	return {
		swiperList: [
			{id: 1, imgUrl: "http://www.biboniu.top/public/images/swiper/1.jpg"},
			{id: 2, imgUrl: "http://www.biboniu.top/public/images/swiper/2.jpg"},
			{id: 3, imgUrl: "http://www.biboniu.top/public/images/swiper/3.jpg"},
			{id: 4, imgUrl: "http://www.biboniu.top/public/images/swiper/4.jpg"},
			{id: 5, imgUrl: "http://www.biboniu.top/public/images/swiper/5.jpg"},
		],
		recommendList: [
			{
				id: 1, 
				imgSrc: '/public/image/home/recommend1.webp',
				content: '大红袍150g*5',
				desc: '曦瓜壹号特级茶叶老树肉桂茶叶三坑两涧正岩核心产区曦瓜一号20g',
				money: "1200.00"
			},
			{
				id: 2, 
				imgSrc: '/public/image/home/recommend2.webp',
				content: '沱茶150g*5',
				desc: '下关沱茶冰岛南迫古树饼茶生茶',
				money: "1000.00"
			},
			{
				id: 3, 
				imgSrc: '/public/image/home/recommend3.webp',
				content: '大红袍150g*5',
				desc: '小罐茶银罐多泡装特级年货大红袍2',
				money: "2400.00"
			},
		]
	}
}

const getDataList = (req, res) => {
	console.log(req.query, getDataList0)
	const type = req.query.type;
	if (type == 0) {
		res.send(successObject(getDataList0()))
	}
}

module.exports = {
	getHome,
	getIndex,
	getRecommend,
	getHomeSwiper,
	getDataList,
}