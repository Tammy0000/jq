<template>
	<view class="body">
		<view class="container">
			<view>
				<view style="width: 100%;">
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<view style="width: 100%;">
					<JqSelectVue fontSize="25rpx"></JqSelectVue>
				</view>
			</view>
			<view>
				<view style="background-color: #e2eefc;" class="dataShow">
					<text>片区</text>
					<text>周转天数</text>
					<text>当前断货率</text>
					<text>重点品种断货率</text>
					<text>库存金额</text>
				</view>
				<view style="background-color: #e5e5e5;" class="dataShow" @click="cli_ssi">
					<text>A区</text>
					<text>92</text>
					<text>5.7%</text>
					<text>1.0%</text>
					<text>0</text>
				</view>
				<view style="background-color: #f8f8fa;" class="dataShow" @click="cli_ssi">
					<text>B区</text>
					<text>92</text>
					<text>5.7%</text>
					<text>1.0%</text>
					<text>0</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectVue from '../components/Jq-Select-Date.vue'
	
	const cli_ssi = () => {
		uni.navigateTo({
			url:'/pages/storeStockInfo'
		})
	}
</script>

<style scoped>
	.dataShow {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		font-size: 25rpx;
	}
	.container > view:last-child {
		display: grid;
		width: 100%;
		height: 300rpx;
		grid-template-rows: repeat(3, 1fr);
		border-radius: 25rpx;
		overflow: hidden;
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
