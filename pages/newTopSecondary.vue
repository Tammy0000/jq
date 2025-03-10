<template>
	<view class="body">
		<view class="container">
			<view style="width: 100%;">
				<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #666666;">健寿堂直营店</text>
				<view style="justify-self: end;">
					<text style="color: #1c90ff;">2025-01-01</text>
				</view>
			</view>
			<view>
				<view class="dataShow" style="background-color: #e4eefa;">
					<text>序号</text>
					<text>门店</text>
					<text>类型</text>
					<text>新品SKU</text>
					<text>30天未动销</text>
				</view>
				<view class="dataShow" style="background-color: white;">
					<text>1</text>
					<text>健寿堂直营店</text>
					<text>-</text>
					<text>224</text>
					<text>140</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
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
