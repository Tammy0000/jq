<template>
	<view class="body">
		<view class="content">
			<view style="width: 100%;">
				<JqTopShowVue :showRight="true"></JqTopShowVue>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/未登录提醒.svg" style="width: 30rpx; height: 30rpx;"></image>
					<text>未登录提醒</text>
				</view>
				<view style="display: grid; justify-items: end;">
					<text> > </text>
				</view>
			</view>
			<view class="noLogin">
				<view>
					<text>17</text>
					<text>管理层</text>
				</view>
				<view>
					<text>1</text>
					<text>店长</text>
				</view>
				<view>
					<text> - </text>
					<text>店员</text>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/使用统计.svg" style="width: 30rpx; height: 30rpx;"></image>
					<text>近7日使用情况</text>
				</view>
				<view style="display: grid; justify-items: end;">
					<text> > </text>
				</view>
			</view>
			<view class="use-7">
				<view style="background-color: #e2eefc;">
					<view></view>
					<view>
						<text>用户总数</text>
					</view>
					<view>
						<text>使用人数</text>
					</view>
					<view>
						<text>平均使用天数</text>
					</view>
					<view>
						<text>
							日均查询次数
						</text>
					</view>
				</view>
				<view>
					<view>
						<text>店员</text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
				</view>
				<view>
					<view>店长</view>
					<view>
						<text>2</text>
					</view>
					<view>
						<text>2</text>
					</view>
					<view>
						<text>7</text>
					</view>
					<view>
						<text>5</text>
					</view>
				</view>
				<view>
					<view>管理层</view>
					<view>
						<text>18</text>
					</view>
					<view>
						<text>6</text>
					</view>
					<view>
						<text>4</text>
					</view>
					<view>
						<text>7</text>
					</view>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/使用统计.svg" style="width: 30rpx; height: 30rpx;"></image>
					<text>近30日使用情况</text>
				</view>
				<view style="display: grid; justify-items: end;">
					<text> > </text>
				</view>
			</view>
			<view class="use-7">
				<view style="background-color: #e2eefc;">
					<view></view>
					<view>
						<text>用户总数</text>
					</view>
					<view>
						<text>使用人数</text>
					</view>
					<view>
						<text>平均使用天数</text>
					</view>
					<view>
						<text>
							日均查询次数
						</text>
					</view>
				</view>
				<view>
					<view>
						<text>店员</text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
					<view>
						<text> - </text>
					</view>
				</view>
				<view>
					<view>店长</view>
					<view>
						<text>2</text>
					</view>
					<view>
						<text>2</text>
					</view>
					<view>
						<text>25</text>
					</view>
					<view>
						<text>3</text>
					</view>
				</view>
				<view>
					<view>管理层</view>
					<view>
						<text>18</text>
					</view>
					<view>
						<text>11</text>
					</view>
					<view>
						<text>8</text>
					</view>
					<view>
						<text>5</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	
</script>

<style scoped>
	.use-7 {
		background-color: white;
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		height: 350rpx;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.use-7 > view:not(:last-child) {
		border-bottom: 1rpx solid #f5f5f5;
	}
	.use-7 > view {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		font-size: 30rpx; 
		place-items: center;
	}
	.noLogin {
		width: 100%;
		height: 150rpx;
		background-color: white;
		border-radius: 35rpx;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
	}
	.noLogin > view {
		border-right: 1rpx solid #f5f5f5;
		width: 100%;
		height: 100rpx;
		display: grid;
		place-items: center;
		grid-template-rows: 1fr 1fr;
	}
	.body {
		width: 100vw;
		height: 100vh;
		margin: auto;
		background-color: #f5f5f5;
	}
	.content {
		width: 94%;
		margin: auto;
		/* border: 1rpx solid blue; */
	}
	.content > view:not(:first-child) {
		margin: 20rpx 0;
	}
</style>
