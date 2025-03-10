<template>
	<view class="body">
		<view class="container">
			<view>
				<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #30b6ff; text-decoration: underline;">A区</text>
				<view style="justify-self: end;">
					<text style="color: #b4b4b4;">2025-01-01</text>
					<text>至</text>
					<text style="color: #b4b4b4;">2025-01-31</text>
				</view>
			</view>
			<view>
				<view class="dataShow" style="background-color: #e2eefc;">
					<text>门店</text>
					<text>周转天数</text>
					<text>断货率</text>
					<text>重点品种断货率</text>
				</view>
				<view class="dataShow" style="background-color: white;" @click="cli_osm" v-for="i in 6">
					<text>广东健寿堂新华分店</text>
					<text>67</text>
					<text>8.6%</text>
					<text>8.6%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const cli_osm = () => {
		uni.navigateTo({
			url:'/pages/outStockManage'
		})
	}
</script>

<style scoped>
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		place-items: center;
	}
	.container > view:last-child {
		display: grid;
		grid-template-rows: auto;
		height: auto;
		border-radius: 35rpx;
		overflow: hidden;
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
