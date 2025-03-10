<template>
	<view class="body">
		<view class="container">
			<view class="my-data">
				<view></view>
				<view class="my-data-user">
					<view class="my-data-info">
						<view>
							<image src="/static/img/public/头像.svg" style="height: 100rpx; width: 100rpx;"></image>
						</view>
						<view>
							<view>黄琬婷</view>
							<view>账号 yi</view>
							<view>机构 多片区</view>
						</view>
						<view>
							<button size="mini" style="background-color: #eff8ff; color: #5da8df;">管理</button>
						</view>
					</view>
					<view style="display: grid; grid-template-rows: 1fr 1fr 1fr; margin-left: 20rpx;">
						<text style="font-size: 15rpx; color: #a0a0a0;">版本号 1.0.0</text>
						<text style="font-size: 15rpx; color: #a0a0a0;">零售数据更新时间：2025年2月21日11:12:07</text>
						<text style="font-size: 15rpx; color: #a0a0a0;">库存数据更新时间：2025年2月21日11:12:39</text>
					</view>
				</view>
			</view>
			<view class="my-data-option">
				<view class="my-data-option-info">
					<view>
						<image src=""></image>
					</view>
					<view></view>
				</view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.my-data-option-info > view:not(:last-child) {
		border-bottom: 1rpx solid #f5f5f5;
	}
	.my-data-option {
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: center;
		width: 100%;
		height: 300rpx;
		background-color: white;
	}
	.container > view {
		margin-bottom: 50rpx;
	}
	.my-data-user {
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	.my-data-info {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
	}
	.my-data > view:first-child {
		width: 100%; 
		background-color: #31a1ff; 
		height: 200rpx; 
		border-bottom-left-radius: 150rpx; 
		border-bottom-right-radius: 150rpx;
		position: relative;
	}
	.my-data > view:last-child {
		width: 80%; 
		background-color: white; 
		height: 300rpx;
		position: absolute;
		top: 100rpx;
		border-radius: 35rpx;
	}
	.my-data {
		position: relative;
		display: grid;
		grid-template-rows: 1fr 1fr;
		justify-items: center;
	}
	.container {
		width: 94%;
		display: grid;
		/* border: 1rpx solid red; */
	}
	.body {
		width: 100vw;
		/* height: 100vh; */
		display: grid;
		justify-items: center;
		background-color: #f5f5f5;
	}
</style>
