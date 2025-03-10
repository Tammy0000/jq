// request.js

import {API_BASE_URL} from './config.js'

const BASE_URL = API_BASE_URL; // 基础URL，可以根据需要修改

const request = (url, method, data, header = {}) => {
	var me = method === 'POST' ? 'application/json' : 'application/json';
	// var me = method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json';
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${BASE_URL}${url}`, // 拼接基础URL和具体接口路径
            method: method,
            header: {
                'Content-Type': me,
				'satoken': uni.getStorageSync('satoken'),
                ...header // 合并默认头和传入的头部信息
            },
            data: data,
            success: (res) => {
				if (res.data.code === 500 && !url === '/api/bfAdmin/user/login') {
					uni.reLaunch({
						url:'/pages/login',
						success: (res) => {
							uni.showModal({
								title:'登录失败',
								content:'请重新输入账号密码登录!',
								showCancel:false
							})
						}
					})
				}
				//登录成功，存入token
				if (res.data.code === 200 && url === '/api/bfAdmin/user/login') {
					console.log('存入token')
					uni.setStorageSync('satoken', res.data.data)
					uni.reLaunch({
						url:'/pages/index'
					})
				}
                resolve(res.data)
            },
            fail: (err) => {
				reject(err)
				uni.showModal({
					title:'连接失败!',
					content:'服务器暂时无法连接，稍后再试！',
					showCancel:false,
					success: (res) => {
						if (res.confirm) {
							if (url !== "/api/bfAdmin/public/user/checkToken") {
								uni.reLaunch({
									url:'/pages/login/index'
								})
							}
						}
					}
				})
            }
        });
    });
};

export default request;
