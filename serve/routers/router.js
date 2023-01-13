var express = require('express')
var router = express.Router()
const {
	getHome, getIndex,
	getRecommend, getHomeSwiper,
	getDataList,
} = require('./index')

router.get('/', getHome)
router
	.get('/api/index', getIndex)
	.get('/api/index/recommend', getRecommend)
	.get('/api/index/swiper', getHomeSwiper)
	.get('/api/index/dataList', getDataList)

module.exports = router