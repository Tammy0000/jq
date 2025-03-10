<template>
	<view class="body">
		<view class="container">
			<view class="msg">
				<view class="msg-data">
					<view>
						<image src="/static/img/public/客服.svg" style="width: 50rpx; height: 50rpx; margin-left: 30rpx;"></image>
						<text style="margin-left: 30rpx;">联系客服</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 30rpx;">
						<text> > </text>
					</view>
				</view>
				<view class="msg-data">
					<view>
						<image src="/static/img/public/意见反馈.svg" style="width: 50rpx; height: 50rpx; margin-left: 30rpx;"></image>
						<text style="margin-left: 30rpx;">意见反馈</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 30rpx;">
						<text> > </text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.msg-data > view:first-child {
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
	}
	.msg > view:first-child {
		border: 1px solid #f5f5f5;
	}
	.msg-data {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	.msg {
		width: 100%;
		height: 200rpx;
		display: grid;
		grid-template-rows: 1fr 1fr;
		background-color: white;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.container {
		width: 94%;
		margin-top: 35rpx;
	}
	.body {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: grid;
		justify-items: center;
	}
</style>