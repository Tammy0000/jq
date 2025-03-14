<template>
	<view class="body">
		<view class="container">
			<view class="top-title">
					<view>
						<jq-top-show-vue :showRight="false"></jq-top-show-vue>
					</view>
					<view>
						<JqSelectDateVue></JqSelectDateVue>
					</view>
			</view>
			<view>
				<text style="text-decoration: underline; color: #1d8ee9;">数据条件</text>
			</view>
			<view class="serach-data">
				<view class="series-title">
					<view>
						<text>分类 : </text>
						<text style="color: #1d8ee9; text-decoration: underline;">全部</text>
					</view>
					<view>
						<button style="background-color: #1d8ee9; color: white; border-radius: 25rpx;" size="mini">数据更新时间</button>
					</view>
				</view>
				<view class="series-title-1">
					<view>
						<uni-search-bar></uni-search-bar>
					</view>
					<view>
						<text style="color: #1d8ee9;">搜索</text>
					</view>
				</view>
				<view class="series-title-2">
					<view>
						<text>排序类型: </text>
						<text style="color: #1d8ee9; text-decoration: underline;">销售额</text>
					</view>
					<view>
						<text>排序方式: </text>
						<text style="color: #1d8ee9; text-decoration: underline;">降序</text>
					</view>
				</view>
			</view>
			<view class="dataShow">
				<view style="display: grid; grid-template-rows: 2fr 3fr; place-items: center;">
					<view style="background-color: #e2eefc;" class="dataShow-l">
						<text>序号</text>
						<text>商品名称</text>
					</view>
					<view style="background-color: #e5e5e5;" class="dataShow-l">
						<text>1</text>
						<text style="color: #1d8ee9;">葡萄糖酸钙加锌口服液</text>
					</view>
				</view>
				<view class="dataShow-r">
					<view>
						<view style="width: 100%; height: 100%;">
							<text >销售额</text>
						</view>
						<view>
							<text>1617</text>
						</view>
					</view>
					<view>
						<view>
							<text>毛利额</text>
						</view>
						<view>
							<text>362</text>
						</view>
					</view>
					<view>
						<view>
							<text>毛利率</text>
						</view>
						<view>
							<text>22.4%</text>
						</view>
					</view>
					<view>
						<view>
							<text>数量</text>
						</view>
						<view>
							<text>40</text>
						</view>
					</view>
					<view>
						<view>
							<text>来客数</text>
						</view>
						<view>
							<text>14</text>
						</view>
					</view>
					<view>
						<view>
							<text>库存数量</text>
						</view>
						<view>
							<text>3</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	
</script>

<style scoped>
	.dataShow-r > view > view:last-child {
		background-color: #e5e5e5;
	}
	.dataShow-r > view > view:first-child {
		background-color: #e2eefc;
	}
	.dataShow-r > view {
		height: 100%;
		width: 180rpx;
		display: grid;
		grid-template-rows: 2fr 3fr;
		place-items: center;
	}
	.dataShow-r {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		width: 100%;
		height: 100%;
		overflow-x: auto;
	}
	.dataShow-l {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		width: 100%;
		height: 100%;
	}
	.dataShow {
		display: grid;
		grid-template-columns: 2fr 3fr;
		width: 100%;
		height: 300rpx;
		background-color: #fff;
	}
	.series-title-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: center;
	}
	.series-title-1 {
		display: grid;
		grid-template-columns: 3fr 1fr;
		align-items: center;
	}
	.serach-data {
		background-color: #fff;
		height: 20%;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
	}
	.series-title {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		gap: 10%;
	}
	.top-title {
		grid-template-columns: repeat(2, auto);
		display: grid;
		align-items: center;
	}
	.container > view:first-child {
		margin: 25rpx 0;
	}
	.container > view {
		margin-bottom: 25rpx;
	}
	.container {
		width: 92%;
	}
	.body {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}       
</style>
