<template>
	<view class="body">
		<view class="container">
			<view>
				<JqTopShowVue :showRight="true"></JqTopShowVue>
			</view>
			<view class="vid">
				<view>
					<text style="color: #b3b3b3;">有效期</text>
				</view>
				<view style="justify-self: end;">
					<text style="color: #b3b3b3;"> - </text>
					<text>至</text>
					<text style="color: #b3b3b3;"> 2025-05-27</text>
				</view>
			</view>
			<view class="dataShow">
				<view>
					<view style="width: 100%; height: 100%; display: grid; place-items: center; background-color: transparent;">
						<text>明细汇总</text>
					</view>
					<view style="width: 100%; height: 100%; display: grid; place-items: center; background-color: #eeeeee;">
						<text>门店汇总</text>
					</view>
				</view>
				<view>
					<view style="margin-left: 20rpx;">
						<text>分类筛选: </text>
						<text style="color: #2f9ffe;">全部</text>
					</view>
					<view style="display: grid; width: 90%; justify-items: end; margin-right: 20rpx;">
						<text>
							>
						</text>
					</view>
				</view>
				<view class="dataShow-title" style="background-color: #e2eefd;">
					<text>商品名称</text>
					<text>零售价</text>
					<text>有效期至</text>
					<text>库存数量</text>
					<text>库存金额</text>
					<text>月销量</text>
				</view>
				<view class="dataShow-title" style="background-color: #f8f8fa;" v-for="(value, key) in dataList" :key="key">
					<text style="color: #2f9ffe; padding-left: 15rpx;" @click="GoodsInfo(value.goodsid)">{{value.goodsname}}</text>
					<text>{{value.price}}</text>
					<text>{{value.invaliddate}}</text>
					<text>{{value.goodsqty}}</text>
					<text>{{NumberUtils.toFixedNumber(value.notaxmoney, 2)}}</text>
					<text>{{value.saleQty}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import {onShow, onLoad} from '@dcloudio/uni-app'
	import reServer from '../utils/reServer';
	import JqTopShowVue from '../components/Jq-TopShow.vue'
	import { useCounterStore } from '../store/counter';
	import NumberUtils from '../utils/NumberUtils';
	
	const counter = useCounterStore()
	const dataList = ref([])
	
	onShow (() => {
		if (dataList.value.length === 0) {
			getSumInvaGoodIdInfoList()
		}
	})
	
	watch(() => counter.placepointid, (newValue, oldValue) => {
		if (counter.placepointid === newValue) return
		getSumInvaGoodIdInfoList()
	})
	
	const getSumInvaGoodIdInfoList = async () => {
		const res = await reServer.getSumInvaGoodIdInfoList(counter.placepointid, 180, 365)
		if (res) {
			if (res.code === 200) {
				dataList.value = []
				dataList.value = res.data
			}
		}
	}
	
	const GoodsInfo = async(goodsid) => {
		const res = await reServer.getGoodsInfoByPidAndGoodsId(counter.placepointid, goodsid)
		if (res) {
			if (res.code === 200) {
				//阻止触发上层事件
				event.stopPropagation();
				uni.showModal({
					content:`商品名: ${res.data.goodsname}\n 生产厂商: ${res.data.factoryname}\n 规格: ${res.data.goodstype}\n 会员价: 0\n 零售价: ${res.data.price}\n 成本价: ${res.data.cbj}\n 新毛利分类: ${res.data.xmlv}`,
					showCancel:false,
				})
			}
		}
	}
	
	const changeTitleCss = ref('#eeeeee')
</script>

<style scoped>
	.dataShow-title > text {
		font-size: 20rpx;
	}
	.dataShow-title {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.dataShow > view:nth-child(2) {
		display: grid;
		width: 100%;
		height: 100rpx;
		grid-template-columns: 2fr 1fr;
		align-items: center;
	}
	.dataShow > view:nth-child(1) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		height: 100rpx;
	}
	.dataShow {
		display: grid;
		grid-template-rows: repeat(4, auto);
		width: 100%;
		background-color: white;
		border-radius: 35rpx;
		overflow: hidden;
	}
	.vid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		height: 100rpx;
	}
	.container > view:first-child {
		display: grid;
		gap: 20rpx;
		grid-template-columns: auto auto 1fr;
		align-items: center;
		margin: 35rpx 0;
	}
	.container {
		width: 94%;
	}
	.body {
		 width: 100vw;
		 height: 100vh;
		 display: flex;
		 flex-direction: column;
		 place-items: center;
		 background-color: #f5f5f5;
	 }       
</style>
