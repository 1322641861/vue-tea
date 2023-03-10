const path = require("path")

module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				// '@': path.resolve(__dirname, './src'),
				'assets': '@/assets',
				'views': '@/views',
				'components': '@/components'
			}
		}
	},
	// 代理
	devServer: {
		proxy: {
			'/api': {
				target: "http://localhost:3000",
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	}
}