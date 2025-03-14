<template>
	<view class="body">
		<view class="container">
			<view style="width: 100%; display: grid; grid-template-columns: 3fr 1fr;align-items: center;">
				<view>
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<view>
					<jq-select-date-vue :showSingel="true"></jq-select-date-vue>
				</view>
			</view>
			<view class="quantity-title">
				<image src="../static/img/public/数量任务.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text>数量任务</text>
			</view>
			<view class="quantity-info">
				<view class="quantity-data-1">
					<view>
						<image src="../static/img/public/头像.svg" style="width: 50rpx; height: 50rpx;"></image>
					</view>
					<view>
						<text @click="click_details">
							澳诺钙水-百日战2024
						</text>
					</view>
					<view>置顶</view>
					<view>
						<checkbox></checkbox>
					</view>
				</view>
				<view class="quantity-data-2">
					<view @click="click_details" style="display: grid; grid-template-rows: repeat(2, auto); place-items: center; height: 50%;">
						<view>
							<text>1</text>
						</view>
						<view>
							<text>任务数 (品规)</text>
						</view>
					</view>
					<view @click="click_details" style="display: grid; grid-template-rows: repeat(2, auto); place-items: center; height: 50%;">
						<view>
							<text style="color: #43ca66;">1</text>
						</view>
						<view>
							<text>任务数 (品规)</text>
						</view>
					</view>
				</view>
			</view>
			<view class="quantity-info">
				<view class="quantity-data-1">
					<view>
						<image src="../static/img/public/头像.svg" style="width: 50rpx; height: 50rpx;"></image>
					</view>
					<view>
						<text>
							东阿系列-百日战2024
						</text>
					</view>
					<view>置顶</view>
					<view>
						<checkbox></checkbox>
					</view>
				</view>
				<view class="quantity-data-2">
					<view style="display: grid; grid-template-rows: repeat(2, auto); place-items: center; height: 50%;">
						<view>
							<text>2</text>
						</view>
						<view>
							<text>任务数 (品规)</text>
						</view>
					</view>
					<view style="display: grid; grid-template-rows: repeat(2, auto); place-items: center; height: 50%;">
						<view>
							<text style="color: #43ca66;">2</text>
						</view>
						<view>
							<text>任务数 (品规)</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {onShow} from '@dcloudio/uni-app'
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	import { useCounterStore } from '../store/counter';
	import { getCurrentDate } from '../utils/dateUtils';
	
	onShow(async () => {
		selectDate.value = getCurrentDate()
	})
	
	const counter = useCounterStore()
	const showDra = ref(null)
	const selectDate = ref('')
	
	const showDraRef = () => {
		showDra.value.openDra()
	}
	
	const click_details = () => {
		uni.navigateTo({
			url:"/pages/goosDetails"
		})
	}
	
</script>

<style scoped>
	.quantity-data-2 > view:first-child {
		border-right: 1rpx solid #f5f5f5; 
		width: 100%;
	}
	.quantity-data-2 {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	.quantity-data-1 {
		display: grid;
		place-items: center;
		width: 100%;
		grid-template-columns: repeat(4, auto);
		border-bottom: 1rpx solid #f5f5f5;
	}
	.quantity-data-1 {
		
	}
	.quantity-info > view {
		width: 94%;
	}
	.quantity-info {
		display: grid;
		grid-template-rows: 1fr 2fr;
		height: 300rpx;
		background-color: white;
		border-radius: 35rpx;
	}
	.quantity-title {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 20rpx;
		align-items: center;
	}
	.body {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: grid;
		justify-items: center;
	}
	.container {
		width: 94%;
		padding-top: 25rpx;
	}
	.container > view:first-child {
		margin: 20rpx 0;
	}
	.container > view:not(:first-child) {
		margin-bottom: 20rpx;
	}
</style>
