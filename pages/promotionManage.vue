<template>
	<view class="body">
		<view class="context">
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto auto auto; align-items: center;">
					<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text style="font-size: 15rpx;">广东健寿堂下郭分店</text>
					<image src="/static/img/public/向下实心箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
				</view>
				<view style="display: grid; justify-items: end;">
					<text> 2025-02-18 </text>
				</view>
			</view>
			<!-- 促销日历 -->
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/促销日历.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>促销日历</text>
				</view>
			</view>
			<view >
				<uni-calendar :insert="true"></uni-calendar>
			</view>
			<!-- 促销管理 -->
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/促销管理.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>促销管理</text>
				</view>
			</view>
			<view class="promotion-manage">
				<view>
					<text>活动名称</text>
					<text>活动目标</text>
					<text>达成业绩</text>
					<text>完成率</text>
					<text>活动增长率</text>
					<text>目标增长率</text>
				</view>
				<view>
					<text>开年健康活动</text>
					<text>2.8万元</text>
					<text style="color: red;">7432元</text>
					<text style="color: red;">26%</text>
					<text>39%</text>
					<text>147%</text>
				</view>
			</view>
			<!-- 促销计划 -->
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/促销计划.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>促销计划</text>
				</view>
			</view>
			<view class="promotion-project">
				<view>
					<text>活动名称</text>
					<text>活动目标</text>
					<text>达成业绩</text>
					<text>完成率</text>
					<text>活动增长率</text>
					<text>目标增长率</text>
				</view>
				<view style="background-color: #aad3ff;">
					<text>开年健康活动</text>
					<text>2.8万元</text>
					<text style="color: #c28089;">7432元</text>
					<text style="color: #c28089;">27%</text>
					<text>39%</text>
					<text>147%</text>
				</view>
				<view style="background-color: #d9eafe; width: 100%;">
					<text>合计</text>
					<text>2.8万元</text>
					<text style="color: #c28089;">7432元</text>
					<text style="color: #c28089;">27%</text>
					<text></text>
					<text>147%</text>
				</view>
			</view>
			<view style="display: grid;justify-content: center; width: 100%;">
				<text style="color: #d76855;">根据公司设定的上月平均值，计算增长率</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.promotion-project > view:first-child {
		background-color: #e2eefc;
	}
	.promotion-project > view {
		display: grid;
		height: 100%;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.promotion-project {
		display: grid;
		height: 450rpx;
		grid-template-rows: 1fr 1fr 1fr;
		place-items: center;
		background-color: white;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.promotion-manage > view:first-child {
		background-color: #e2eefc;
	}
	.promotion-manage > view {
		display: grid;
		height: 100%;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.promotion-manage {
		display: grid;
		height: 300rpx;
		grid-template-rows: 1fr 1fr;
		place-items: center;
		background-color: white;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.context > view:not(:first-child) {
		margin: 20rpx 0;
	}
	.context {
		width: 94%;
		margin: auto;
	}
	.body {
		width: 100vw;
		margin: auto;
		background-color: #f5f5f5;
	}       
</style>
