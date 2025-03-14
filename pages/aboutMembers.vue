<template>
	<view class="body">
		<view class="container">
			<view>
				<JqTopShowVue :showRight="false"></JqTopShowVue>
			</view>
			<view>
				<view class="dateHistory dh" style="background-color: #e2eefc;">
					<text>序号</text>
					<text>姓名</text>
					<text>商品购买次数</text>
					<text>商品末次购买时间</text>
					<text>会员末次消费时间</text>
				</view>
				<view class="dateHistory dh" style="background-color: white;">
					<text>1</text>
					<text>庞女士</text>
					<text>1</text>
					<text>2025-01-01</text>
					<text>2025-01-31</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqTopShowVue from '../components/Jq-TopShow.vue';
</script>

<style scoped>
	.dh > text {
		font-size: 25rpx;
	}
	.dateHistory {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}
	.container > view:last-child {
		height: 250rpx;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	.container > view:first-child {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 10rpx;
		align-items: center;
		height: 100rpx;
	}
	.container {
		width: 94%;
	}
	.body {
		display: flex;
		flex-direction: column;
		place-items: center;
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}       
</style>
