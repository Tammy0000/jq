<template>
	<view class="body">
		<view class="topTitle">
			<view style="margin-left: 30rpx;">
				<view>
					<text style="color: #fff;">商品名：{{goodsname}}</text>
				</view>
				<view>
					<text style="color: #fff;">商品编号：{{goodsid}}</text>
				</view>
				<view>
					<text style="color: #fff;">规格：{{goodstype}}</text>
				</view>
				<view>
					<text style="color: #fff;">厂家：{{factoryname}}</text>
				</view>
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
				<text>库存成本</text>
			</view>
			<view
			  v-for="(value, key, index) in dataList" :key="key"
			  :style="{
			    backgroundColor: index % 2 === 0 ? '#fff' : '#f8f8fa',
			    fontSize: '20rpx'
			  }"
			>
			  <text>{{value.storername}}</text>
			  <text>{{value.goodsqty}}</text>
			  <text>{{NumberUtils.toFixedNumber(value.notaxmoney, 2)}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import reServer from '../utils/reServer'
	import { ref } from 'vue'
	import NumberUtils from '../utils/NumberUtils'
	
	const goodsname = ref('')
	const goodsid = ref('')
	const goodstype = ref('')
	const factoryname = ref('')
	const dataList = ref([])
	
	onLoad(async (opt) => {
		goodsname.value = opt.goodsname
		goodsid.value = opt.goodsid
		goodstype.value = opt.goodstype
		factoryname.value = opt.factoryname
		await getProductStoreStockList(goodsid.value)
	})
	
	const getProductStoreStockList = async(goodsid) => {
		const res = await reServer.getProductStoreStockList(goodsid)
		dataList.value = res.data
	}
	
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
		grid-template-columns: 1fr 1fr 1fr;
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
