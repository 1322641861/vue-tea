module.exports = {
	successObject(data, status=200, msg="请求成功") {
		return {
			status,
			data,
			msg
		}
	}
}