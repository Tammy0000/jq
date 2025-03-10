<template>
	<view class="container">
		<view>
			<view class="study-title" @click="click_course">
				<image src="../static/img/public/疗程用药学习.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #e3f4fc;">疗程用药学习</text>
			</view>
		</view>
		<view>
			<view class="study-title">
				<image src="../static/img/public/关联用药学习.svg" style="width: 50rpx; height: 50rpx;"></image>
				<text style="color: #e3f4fc;">关联用药学习</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const click_course = () => {
		uni.navigateTo({
			url:"/pages/courseTreatment"
		})
	}
</script>

<style scoped>
	.study-title {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10rpx;
		align-items: center;
	}
	.container > view > text {
		color: #e3f4fc;
		font-size: 35rpx;
	}
	.container > view {
		display: grid;
		place-items: center;
	}
	.container > view:first-child {
		background: linear-gradient(to right, #35bffe, #b5d8f8)
	}
	.container > view:last-child {
		background: linear-gradient(to right, #23a135, #afd7b5);
	}
	.container {
		display: grid;
		width: 100vw;
		height: 100vh;
		grid-template-rows: 1fr 1fr;
	}       
</style>
