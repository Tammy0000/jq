<template>
	<view class="body">
		<view class="container">
			<view style="width: 100%;display: grid;grid-template-columns: 3fr 1fr;">
				<view>
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<view>
					<JqSelectDateVue :showSingel="true"></JqSelectDateVue>
				</view>
			</view>
			<view>
				<view class="dataShow" style="background-color: #e4eefa;">
					<text>片区</text>
					<text>总SKU</text>
					<text>不动销SKU(去重)</text>
					<text>30天动销SKU</text>
					<text>平均30天动销率</text>
				</view>
				<view class="dataShow" style="background-color: white;" @click="cli_storeSales">
					<text>A区</text>
					<text>4666</text>
					<text>3828</text>
					<text>3411</text>
					<text>46%</text>
				</view>
				<view class="dataShow" style="background-color: #f8f8fa;" @click="cli_storeSales">
					<text>C区</text>
					<text>4666</text>
					<text>3828</text>
					<text>3411</text>
					<text>46%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	
	const cli_storeSales = () => {
		uni.navigateTo({
			url:'/pages/dynamicSalesInfoStore'
		})
	}
</script>

<style scoped>
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
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
