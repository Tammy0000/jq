<template>
	<view class="body">
		<view class="container">
			<view>
				<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #30b6ff; text-decoration: underline;">健寿堂直营店</text>
				<view style="justify-self: end;">
					<text style="color: #b4b4b4;">2025-01-01</text>
					<text>至</text>
					<text style="color: #b4b4b4;">2025-01-31</text>
				</view>
			</view>
			<view>
				<view class="dataShow-title">
					<text style="color: #30b6ff; text-decoration: underline;">重点商品</text>
					<text>其他商品</text>
				</view>
				<view class="dataShow" style="background-color: #e2eefc;">
					<text>序号</text>
					<text>商品名称</text>
					<text>断货天数</text>
					<text>月均销量</text>
					<text>断货损失</text>
					<text>片区门店库</text>
					<text>总部库存</text>
					<text>重点属性</text>
				</view>
				<view class="dataShow" style="background-color: white;" @click="cli_ssk">
					<text>1</text>
					<text style="color: #30b6ff;" @click="stockInfo">丁桂儿脐贴</text>
					<text>27</text>
					<text>20</text>
					<text>536</text>
					<text>0</text>
					<text>0</text>
					<text>来客</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const stockInfo = () => {
		event.stopPropagation();
		uni.showModal({
			title:'丁桂儿脐贴',
			showCancel:false,
			content:'明细....'
		})
	}
	
	const cli_ssk = (e) => {
		uni.navigateTo({
			url:'/pages/stockScatter'
		})
	}
</script>

<style scoped>
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		display: grid;
		height: 100rpx;
		width: 100%;
		grid-template-columns: repeat(8, 1fr);
		
		place-items: center;
	}
	.dataShow-title {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		height: 100rpx;
		width: 100%;
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
