<template>
	<view class="body">
		<view>
			<view >
				<text style="font-weight: 300;">欢迎登录济群管理系统</text>
			</view>
			<view style="width: 70%; display: grid; grid-template-rows: auto; gap: 30rpx;">
				<view>
					<uni-easyinput placeholder="账号" v-model="user"></uni-easyinput>
				</view>
				<view>
					<uni-easyinput placeholder="密码" type="password" v-model="password"></uni-easyinput>
				</view>
				<view style="width: 100%; display: grid; justify-items: end; align-items: center;">
					<view>
						<button size="mini" style="background-color: white; color: #2facfc;" @click="login">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {onShow, onLoad} from '@dcloudio/uni-app';
	import { useCounterStore } from '../store/counter';
	import reServer from '../utils/reServer';
	
	onLoad((opt) => {
		console.log(opt.id)
	})
	
	onShow(async () => {
		var  token = uni.getStorageSync('token');
		if (token) {
			console.log(token)
			var res = await reServer.checkToken(token)
			if (res.code === 200) {
				uni.switchTab({
					url:'/pages/tabbar/index'
				})
				return
			}
		}
	})
	
	const counter = useCounterStore()
	const user = ref('')
	const password = ref('')
	
	
	const login = async () => {
		const res = await reServer.login(user.value, password.value);
		if (res) {
			if (res.code === 200) {
				uni.setStorageSync('token', res.token)
				uni.showToast({
					icon:'success',
					title:res.msg,
					complete: () => {
						uni.switchTab({
							url:'/pages/tabbar/index',
						})
					}
				})
			}
			if (res.code === 500) {
				uni.showToast({
					icon:'error',
					title:res.msg
				})
			}
		}
	}
	
</script>

<style>
	.body > view {
		width: 100%;
		height: 500rpx;
		display: grid;
		grid-template-rows: auto auto auto;
		place-items: center;
	}
	.body {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}       
</style>
