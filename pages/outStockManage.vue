<template>
	<view class="body">
		<view class="container">
			<view>
				<view>
					<jq-top-show-vue :showRight="false"></jq-top-show-vue>
				</view>
				<view>
					<jq-select-date-vue></jq-select-date-vue>
				</view>
			</view>
			<view>
				<view class="dataShow-title">
					<text :class="selectIndex === 1 ? 'selectGoods' : ''" @click="selectTab(1)">重点商品</text>
					<text :class="selectIndex === 2 ? 'selectGoods' : ''" @click="selectTab(2)">其他商品</text>
				</view>
				<view class="dataShow" style="background-color: #e2eefc;">
					<text>序号</text>
					<text>商品名称</text>
					<text>断货天数</text>
					<text>月均销量</text>
					<text>断货损失</text>
					<text>片区门店库</text>
					<text>总部库存</text>
					<text>重点属性</text>
				</view>
				<view class="dataShow" style="background-color: white;" @click="cli_ssk">
					<text>1</text>
					<text style="color: #30b6ff;" @click="stockInfo">丁桂儿脐贴</text>
					<text>27</text>
					<text>20</text>
					<text>536</text>
					<text>0</text>
					<text>0</text>
					<text>来客</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	
	const selectIndex =  ref(1)
	
	const selectTab = (index) => {
		if (selectIndex.value === index) return
		selectIndex.value = index
	}
	
	const stockInfo = () => {
		event.stopPropagation();
		uni.showModal({
			title:'丁桂儿脐贴',
			showCancel:false,
			content:'明细....'
		})
	}
	
	const cli_ssk = (e) => {
		uni.navigateTo({
			url:'/pages/stockScatter'
		})
	}
</script>

<style scoped>
	.selectGoods {
		color: #30b6ff; 
		text-decoration: underline; 
		text-decoration-thickness: 8rpx; 
		text-underline-offset: 10rpx;
	}
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		display: grid;
		height: 100rpx;
		width: 100%;
		grid-template-columns: repeat(8, 1fr);
		
		place-items: center;
	}
	.dataShow-title {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		height: 100rpx;
		width: 100%;
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
