<template>
	<view class="body">
		<view class="top-detail">
			<view>
				<view>
					<text style="color: white;">葡萄糖酸钙锌口服液 (澳诺) 支装ZG</text>
				</view>
				<view style="display: grid; gap: 25rpx; grid-template-columns: repeat(3, auto);">
					<button class="btn" size="mini" @click="cli_stock">库存查询</button>
					<button class="btn" size="mini" @click="cli_memberAnalysis">会员复购分析</button>
					<button class="btn" size="mini" @click="cli_allocation">任务分配</button>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="top-series">
				<text>销售分部</text>
				<text>卖手TOP</text>
				<text>关联TOP10</text>
			</view>
			<view class="depart">
				<view>
					<text style="color: #afafaf;">广东健寿堂下郭分店保管账</text>
				</view>
				<view>
					<text style="color: #2fb1fd;">2025-01-01</text>
					<text>至</text>
					<text style="color: #2fb1fd;">2025-01-31</text>
				</view>
			</view>
			<view class="top-shop-data">
				<view style="background-color: #e5f1ff;">
					<text>排名</text>
					<text>姓名</text>
					<text>来客数</text>
					<text>数量</text>
					<text>任务数量</text>
					<text>累计完成率</text>
				</view>
				<view style="background-color: white;">
					<image src="../static/img/public/金牌.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>黄婉婷</text>
					<text>6</text>
					<text>23</text>
					<text>0</text>
					<text>0%</text>
				</view>
				<view style="background-color: #f8f8fa;">
					<image src="../static/img/public/银牌.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>下郭店店长</text>
					<text>7</text>
					<text>15</text>
					<text>0</text>
					<text>0%</text>
				</view>
				<view style="background-color: white;">
					<image src="../static/img/public/铜牌.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>凌国榕</text>
					<text>1</text>
					<text>2</text>
					<text>0</text>
					<text>0%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const cli_allocation = () => {
		uni.navigateTo({
			url:'/pages/taskAllocation'
		})
	}
	
	const cli_stock = () => {
		uni.navigateTo({
			url:"/pages/stockSerach"
		})
	}
	const cli_memberAnalysis = () => {
		uni.navigateTo({
			url:"/pages/memberAnalysis"
		})
	}
</script>

<style scoped>
	.top-shop-data > view {
		height: 100rpx;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.top-shop-data {
		width: 100%;
		display: grid;
		grid-template-rows: auto;
	}
	.depart {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8%;
	}
	.top-series {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: white;
		height: 80rpx;
		place-items: center;
	}
	.content {
		width: 94%;
		margin-top: 20rpx;
		margin-bottom: 90%;
	}
	.btn {
		background-color: white; 
		color: #2fb1fd; 
		border-radius: 25rpx;
	}
	.top-detail > view {
		display: grid;
		height: 100%;
		place-items: center;
	}
	.top-detail {
		width: 100%;
		background-color: #2fb1fd;
		height: 300rpx;
		display: grid;
		/* grid-template-rows: auto auto; */
		place-items: center;
	}
	.body {
		width: 100vw;
		background-color: #f5f5f5;
		place-items: center;
		display: grid;
	}       
</style>
