<template>
	<view class="body">
		<view class="topTitle">
			<view>
				<text style="color: #fff;">{{storgeName}}</text>
			</view>
			<view>
				<button @click="cli_prod" size="mini" style="background-color: #fff; color: #30a3fe; border-radius: 25rpx;">商品销售</button>
			</view>
		</view>
		<view class="checkbox">
			<uni-data-checkbox :multiple="true" :localdata="list"></uni-data-checkbox>
		</view>
		<view class="scatterData">
			<view style="background-color: #e5f1ff;">
				<text>机构</text>
				<text>数量</text>
			</view>
			<view style="background-color: #fff; font-size: 20rpx;">
				<text>广东健寿堂长岐二分店保管账</text>
				<text>7</text>
			</view>
			<view style="background-color: #f8f8fa; font-size: 20rpx;">
				<text>广东健寿堂长岐分店保管账</text>
				<text>2</text>
			</view>
			<view style="background-color: #fff; font-size: 20rpx;">
				<text>广东健寿堂方兴分店保管账</text>
				<text>5</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import requestFast from '../utils/requestFast'
	import { ref } from 'vue'
	
	const storgeName = ref('')
	
	onLoad(async (opt) => {
		const res = await requestFast.get(`/app/goods/getGoodsByGoodsid/v1/${opt.goodsid}`)
		var _res = res.data.根据商品ID获取商品信息
		storgeName.value = _res.currencyname
	})
	
	const list = [{text: '显示批次', value: 0}, {text: '显示门店', value: 1}, {text: '不按区域汇总', value: 2}]
	const cli_prod = () => {
		uni.navigateTo({
			url:"/pages/prodSalse"
		})
	}
</script>

<style scoped>
	.scatterData > view {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		height: 100rpx;
	}
	.scatterData {
		width: 92%;
		display: grid;
		grid-template-rows: auto;
	}
	.checkbox {
		width: 92%;
		height: 8%;
		display: flex;
		place-items: center;
	}
	.topTitle {
		width: 100%;
		height: 20%;
		background-color: #30a3fe;
		display: grid;
		gap: 15rpx;
		grid-template-columns: 2fr 1fr;
		align-items: center;
	}
	.body > view:first-child {
		margin: 35rpx 0;
	}
	.body > view {
		margin-bottom: 35rpx;
	}
	.body {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		place-items: center;
	}       
</style>
