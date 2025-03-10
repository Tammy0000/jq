<template>
	<view class="body">
		<view class="container">
			<view class="itop">
				<view>
					<Icon src="../static/img/public/门店.svg" @click="showData" fontSize="30rpx"></Icon>
					<MyDra ref="showDra"></MyDra>
				</view>
				<view class="itop-time">
					<text>2025-01-01</text>
					<text> 至 </text>
					<text>2025-01-31</text>
				</view>
			</view>
			<view class="series-data">
				<view class="series-data-choose">
					<view style="padding-left: 10rpx;">
						<text>分类筛选: </text>
					</view>
					<view style="display: grid; justify-content: space-between; grid-template-columns: auto auto;" @click="cli_seriesChoose">
						<text style="color: #2ea4fe;">{{seriesName}}</text>
						<text style="margin-right: 15rpx;"> > </text>
					</view>
				</view>
				<view class="series-data-title">
					<text>序号</text>
					<text>商品名称</text>
					<text>零售价</text>
					<text>库存数量</text>
					<text>库存金额</text>
					<text>月平均量</text>
					<text>周转天数</text>
				</view>
				<scroll-view scroll-y="true" style="width: 100%; height: 80vh;">
					<view class="series-data-list" v-for="(key, value) in 35" :key="key" :style="key % 2 == 0 ? 'background-color: white;' : 'background-color: #f5f5f5;'">
						<text>{{key}}</text>
						<text style="color: #2ea4fe;">高丽参</text>
						<text>-</text>
						<text>-</text>
						<text>-</text>
						<text>-</text>
						<text>-</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import MyDra from '../components/MyDra.vue';
	import Icon from '../components/icon.vue'
	import { useCounterStore } from '../store/counter';
	import {onShow} from '@dcloudio/uni-app'
	
	const showDra = ref(null)
	const counter = useCounterStore()
	const seriesName = ref('请选择分类')
	
	const showData = () => {
		showDra.value.openDra()
	}
	
	const cli_seriesChoose = (Id) => {
		uni.navigateTo({
			url:'/pages/seriesChoose'
		})
	}
</script>

<style scoped>
	.dataShow-s {
		background-color: white;
	}
	.dataShow-m {
		background-color: #f5f5f5;
	}
	.series-data-list {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		place-items: center;
		height: 100rpx;
	}
	.series-data-title > text {
		font-size: 30rpx;
	}
	.series-data-title {
		background-color: #e3edfd;
		height: 100rpx;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		place-items: center;
	}
	.series-data-choose {
		background-color: white;
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		height: 100rpx;
	}
	.itop-time > text {
		font-size: 25rpx;
	}
	.itop {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	.container > view {
		margin-top: 25rpx;
	}
	.container {
		width: 94%;
	}
	.body {
		background-color: #f5f5f5;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
	}       
</style>
