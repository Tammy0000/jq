<template>
	<view class="body">
		<view class="container">
			<view class="content-serach">
				<view>
					<image src="/static/img/public/扫描二维码.svg" style="width: 50rpx; height: 50rpx;"></image>
				</view>
				<view >
					<uni-easyinput prefixIcon="search" placeholder="商品库存查询" @clear="clearData" v-model="serachName">
					</uni-easyinput>
				</view>
				<view @tap="test">
					<text>搜索</text>
				</view>
			</view>
			<view class="content-result">
				<view style="background-color: #e2eefc;" class="content-result-series">
					<text>序号</text>
					<text>商品名称</text>
					<text>规格</text>
					<text>零售价</text>
					<text>生产厂家</text>
				</view>
				<scroll-view scroll-y="true" style="height: 75vh; width: 100%;">
					<view :class="key % 2 === 0 ? 'dataShow-s' : 'dataShow-m' " @click="cli_scatter(value)" v-for="(value, key) in dataList" :key="key">
						<text>{{key + 1}}</text>
						<text style="color: #4c91ed; " @click="showInfo(value)">{{value.currencyname}}</text>
						<text>{{value.goodstype}}</text>
						<text>{{value.maxlsj}}</text>
						<text>{{value.factoryname}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import requestFast from '../utils/requestFast';
	
	const dataList = ref([])
	const serachName = ref('')
	
	const clearData = () => {
		dataList.value = []
	}
	
	const showInfo = (value) => {
		//阻止触发上层事件
		event.stopPropagation();
		uni.showModal({
			content:`商品名: ${value.currencyname}\n 生产厂商: ${value.factoryname}\n 规格: ${value.goodstype}\n 最高会员价: ${value.maxhyj}\n 最低会员价: ${value.minhyj}\n 最高零售价: ${value.maxlsj}\n 最低零售价: ${value.minlsj}`,
			showCancel:false,
		})
	}
	
	const cli_scatter = (value) => {
		uni.navigateTo({
			url:"/pages/stockScatter?goodsid=" + value.goodsid
		})
	}
	
	
	const test = async () => {
		if (serachName.value === '' || serachName.value === null) {
			uni.showToast({
				icon:'error',
				title:'请输入正确的商品名称!'
			})
			return
		}
		dataList.value = []
		const res = await requestFast.post('/app/goods/getGoodsByCurrencycame/v1', {
			currencyname: serachName.value
		})
		dataList.value = res.data.根据商品名称获取商品信息
	} 
	
</script>

<style scoped>
	.dataShow-s {
		background-color: white;
		height: 150rpx;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		gap: 5rpx;
		font-size: 25rpx;
	}
	
	.dataShow-m {
		background-color: #f5f5f5;
		height: 150rpx;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		gap: 5rpx;
		font-size: 25rpx;
	}
	
	.content-result > view > text {
		font-size: 25rpx;
	}
	.content-result-series {
		height: 150rpx;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		gap: 5rpx;
	}
	.content-result {
		margin: 35rpx 0;
		display: grid;
		grid-template-rows: auto;
	}
	.content-serach > view {
		display: grid;
		place-items: center;
	}
	.container > view:first-child {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		gap: 10rpx;
		align-items: center;
		background-color: #fff;
		height: 100rpx;
		border-radius: 25rpx;
	}
	.container {
		width: 90%;
		height: 93vh;
		margin-top: 35rpx;
	}
	.body {
		width: 100vw;
		height: auto;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;
	}       
</style>
