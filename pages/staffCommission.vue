<template>
	<view class="body">
		<view class="context">
			<view style="width: 100%; display: grid; grid-template-columns: 3fr 1fr; align-items: center;">
				<view>
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<view>
					<JqSelectDateVue :showSingel="true"></JqSelectDateVue>
				</view>
			</view>
			<view>
				<text>此功能数据仅供参考用于促进提成商品销售</text>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/常规商品提成.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>常规商品提成</text>
				</view>
				<view>
					<text style="color: #3991de; font-size: 15rpx;">生效方案</text>
					<text style="color: #3991de; font-size: 15rpx;"> 1</text>
				</view>
			</view>
			<view class="staff-context">
				<view>
					<text>0</text>
					<text>当日提成 (元)</text>
				</view>
				<view>
					<button class="staff-context-btn" size="mini">店员排行</button>
					<button class="staff-context-btn" size="mini">提成商品</button>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/加提商品提成.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>加提商品提成</text>
				</view>
				<view>
					<text style="color: #a4a4a4; font-size: 15rpx;">生效方案</text>
					<text style="color: #a4a4a4; font-size: 15rpx;">0</text>
				</view>
			</view>
			<view class="staff-context">
				<view>
					<text>0</text>
					<text>当日提成 (元)</text>
				</view>
				<view>
					<button class="staff-context-btn" size="mini">店员排行</button>
					<button class="staff-context-btn" size="mini">提成商品</button>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/常规商品提成.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>常规商品提成</text>
				</view>
				<view>
					<text style="color: #3991de; font-size: 15rpx;">生效方案</text>
					<text style="color: #3991de; font-size: 15rpx;"> 0</text>
				</view>
			</view>
			<view class="staff-context">
				<view>
					<text>0</text>
					<text>当日提成 (元)</text>
				</view>
				<view>
					<button class="staff-context-btn" size="mini">店员排行</button>
					<button class="staff-context-btn" size="mini">提成商品</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
		import { ref } from 'vue';
		import {onShow} from '@dcloudio/uni-app'
		import { getCurrentDate } from '../utils/dateUtils';
		import { useCounterStore } from '../store/counter';
		import JqTopShowVue from '../components/Jq-TopShow.vue';
		import JqSelectDateVue from '../components/Jq-Select-Date.vue';
		
		onShow(async () => {
			selectDate.value = getCurrentDate()
		})
		
		const counter = useCounterStore()
		const showDra = ref(null)
		const selectDate = ref('')
		
		const showDraRef = () => {
			showDra.value.openDra()
		}
	
</script>

<style scoped>
	.staff-context-btn {
		border-radius: 25rpx;
		color: white;
		background-color: #1f8ffd;
	}
	.staff-context > view:last-child {
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
	}
	.staff-context > view:first-child {
		width: 80%;
		height: 80%;
		grid-template-rows: 1fr 1fr;
		display: grid;
		place-items: center;
		border-bottom: 1rpx solid #f5f5f5;
	}
	.staff-context {
		background-color: white;
		height: 250rpx;
		width: 100%;
		border-radius: 35rpx;
		grid-template-rows: 1fr 1fr;
		display: grid;
		place-items: center;
	}
	.context > view:not(:first-child) {
		margin: 20rpx 0;
	}
	.context > view:first-child {
		margin: 0 0 20rpx 0;
	}
	.context {
		width: 94%;
		margin: auto;
		padding: 25rpx;
	}
	.body {
		background-color: #f5f5f5;
		width: 100vw;
		margin: auto;
		height: 100vh;
	}       
</style>
