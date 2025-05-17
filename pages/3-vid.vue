<template>
	<view class="body">
		<view class="container">
			<view>
				<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #666666;">健寿堂直营店</text>
			</view>
			<view class="vid">
				<view>
					<text style="color: #b3b3b3;">有效期</text>
				</view>
				<view style="justify-self: end;">
					<text style="color: #b3b3b3;"> - </text>
					<text>至</text>
					<text style="color: #b3b3b3;"> 2025-05-27</text>
				</view>
			</view>
			<view class="dataShow">
				<view>
					<view style="width: 100%; height: 100%; display: grid; place-items: center; background-color: transparent;">
						<text>明细汇总</text>
					</view>
					<view style="width: 100%; height: 100%; display: grid; place-items: center; background-color: #eeeeee;">
						<text>门店汇总</text>
					</view>
				</view>
				<view>
					<view style="margin-left: 20rpx;">
						<text>分类筛选: </text>
						<text style="color: #2f9ffe;">全部</text>
					</view>
					<view style="display: grid; width: 90%; justify-items: end; margin-right: 20rpx;">
						<text>
							>
						</text>
					</view>
				</view>
				<view class="dataShow-title" style="background-color: #e2eefd;">
					<text>商品名称</text>
					<text>零售价</text>
					<text>有效期至</text>
					<text>库存数量</text>
					<text>库存金额</text>
					<text>月销量</text>
				</view>
				<view class="dataShow-title" style="background-color: #f8f8fa;" v-for="i in 6">
					<text>大刀肉</text>
					<text>1</text>
					<text>2025-01-24</text>
					<text>7</text>
					<text>4</text>
					<text>6</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {onShow} from '@dcloudio/uni-app'
	import reServer from '../utils/reServer';
	
	onShow(async () => {
		console.log('rrrr')
		const res = await reServer.getStockAmount(150925)
		console.log(res.data)
	})
	
	const changeTitleCss = ref('#eeeeee')
</script>

<style scoped>
	.dataShow-title > text {
		font-size: 20rpx;
	}
	.dataShow-title {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.dataShow > view:nth-child(2) {
		display: grid;
		width: 100%;
		height: 100rpx;
		grid-template-columns: 2fr 1fr;
		align-items: center;
	}
	.dataShow > view:nth-child(1) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		height: 100rpx;
	}
	.dataShow {
		display: grid;
		grid-template-rows: repeat(4, auto);
		width: 100%;
		background-color: white;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.vid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		height: 100rpx;
	}
	.container > view:first-child {
		display: grid;
		gap: 20rpx;
		grid-template-columns: auto auto 1fr;
		align-items: center;
		margin: 35rpx 0;
	}
	.container {
		width: 94%;
	}
	.body {
		 width: 100vw;
		 height: 100vh;
		 display: flex;
		 flex-direction: column;
		 place-items: center;
		 background-color: #f5f5f5;
	 }       
</style>
