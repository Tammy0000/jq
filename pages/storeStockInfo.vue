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
				<view class="dataShow" style="background-color: #e2eefc;">
					<text>门店</text>
					<text>周转天数</text>
					<text>断货率</text>
					<text>重点品种断货率</text>
				</view>
				<view class="dataShow" style="background-color: white;" @click="cli_osm" v-for="i in 6">
					<text>广东健寿堂新华分店</text>
					<text>67</text>
					<text>8.6%</text>
					<text>8.6%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	
	const cli_osm = () => {
		uni.navigateTo({
			url:'/pages/outStockManage'
		})
	}
</script>

<style scoped>
	.dataShow > text {
		font-size: 25rpx;
	}
	.dataShow {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		place-items: center;
	}
	.container > view:last-child {
		display: grid;
		grid-template-rows: auto;
		height: auto;
		border-radius: 35rpx;
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
