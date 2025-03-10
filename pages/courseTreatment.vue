<template>
	<view class="container">
		<view class="title">
			<view class="title-show">
				<view class="title-show-info">
					<image src="../static/img/public/疗程用药学习.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text style="color: #e3f4fc;">药店常用疗程用药分析</text>
				</view>
				<view>
					<text style="color: #e3f4fc;">
						系统学习各分类高来客商品组疗程用药
					</text>
				</view>
			</view>
		</view>
		<view class="title">
			<view class="title-show">
				<view class="title-show-info">
					<image src="../static/img/public/搜索.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text style="color: #e3f4fc;"> 搜索</text>
				</view>
				<view>
					<text style="color: #e3f4fc;">
						输入关键字快速查询对应商品组开始学习
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.title-show-info {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10rpx;
		align-items: center;
	}
	.title-show {
		display: grid;
		grid-template-rows: auto auto;
		gap: 30rpx;
		width: 100%;
		justify-items: center;
	}
	.container > view:first-child {
		background: linear-gradient(to right, #33beff, #b6d9f9);
	}
	.container > view:last-child {
		background: linear-gradient(to right, #7d7d7d, #c1c1c1);
	}
	.title {
		display: grid;
		place-items: center;
		width: 100%;
	}
	 .container {
		 display: grid;
		 grid-template-rows: 2fr 1fr;
		 width: 100vw;
		 height: 100vh;
	 }
	
</style>
