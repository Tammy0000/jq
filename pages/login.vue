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
	import {onShow} from '@dcloudio/uni-app'
	import { useCounterStore } from '../store/counter';
	
	onShow(async () => {
		if (counter.isToken) {
			uni.switchTab({
				url:'/pages/tabbar/index'
			})
		}
	})
	
	const counter = useCounterStore()
	const user = ref('')
	const password = ref('')
	
	
	const login = () => {
		if (user.value === '') {
			showTop(-1, '请输入账号!')
			return
		}
		if (password.value === '') {
			showTop(-1, '请输入密码!')
			return
		}
		if (user.value !== 'admin') {
			showTop(-1, '账号错误!');
			return;
		}
		if (password.value !== '888888') {
			showTop(-1, '密码错误!');
			return;
		}
		showTop(0, '登录成功!')
		
	}
	
	const showTop = (code, value) => {
		if (code === -1) {
			uni.showToast({
				icon:'error',
				title:value,
				success: () => {
					user.value = ''
					password.value = ''
				}
			})
			return;
		}
		uni.showToast({
			icon:'success',
			title:value,
			success: () => {
				counter.isToken = true
				uni.switchTab({
					url:'/pages/tabbar/index'
				})
			}
		})
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
