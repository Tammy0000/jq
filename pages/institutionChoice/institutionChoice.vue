<template>
	<view class="body">
		<view class="content">
			<view class="serach">
				<view style="width: 100%;">
					<uni-easyinput suffixIcon="search"  placeholder="请输入关键词进行搜索"  @input="serachStore"></uni-easyinput>
				</view>
			</view>
			<view class="serach-data">
				<view class="serach-data-series">
					<view>
						<view @click="switchSeries(1)">
							<text :class="switchNum === 1 ? 'switch-text' : ''">门店</text>
						</view>
					</view>
					<view>
						<view @click="switchSeries(2)">
							<text :class="switchNum === 2 ? 'switch-text' : ''">片区</text>
						</view>
					</view>
					<view>
						<view @click="switchSeries(3)">
							<text :class="switchNum === 3 ? 'switch-text' : ''">大区</text>
						</view>
					</view>
					<view>
						<view @click="switchSeries(4)">
							<text :class="switchNum === 4 ? 'switch-text' : ''">连锁</text>
						</view>
					</view>
					<view>
						<view @click="switchSeries(5)">
							<text :class="switchNum === 5 ? 'switch-text' : ''">最近访问</text>
						</view>
					</view>
				</view>
				<view :class="switchNum === 5 ? 'serach-data-title-2' : 'serach-data-title-3'">
					<view>
						<text>序号</text>
					</view>
					<view>
						<text>名称</text>
					</view>
					<view v-if="switchNum < 5">
						<text v-if="switchNum === 1">类型</text>
						<text v-if="switchNum > 1 && switchNum < 5">数量</text>
					</view>
				</view>
				<view class="serach-data-list">
					<view v-for="(value, key) in storeInfoList" :key="key" :class="key % 2 !== 0 ? 'bgb' : ''" @click="choose(key)">
						<view class="store-data">
							<text>{{key + 1}}</text>
						</view>
						<view class="store-data">
							<text style="font-size: 15rpx;">{{value.store}}</text>
						</view>
						<view class="store-data">
							<text style="font-size: 15rpx;" v-if="switchNum === 2">{{value.num}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import reServer from '../../utils/reServer';
	import {onShow} from '@dcloudio/uni-app'
	import { useCounterStore } from '../../store/counter';
	
	onShow(async () => {
		await getStoreInfo()
	})
	
	const switchNum = ref(1)
	const storeInfoList = ref([])
	const counter = useCounterStore()
	const isShow = ref(true)
	
	const getStoreInfo = async() => {
		const res = await reServer.getStoreInfo()
		storeInfoList.value = []
		storeInfoList.value = res.data
		console.log(res.data)
	}
	
	const switchSeries = async (index) => {
		switchNum.value = index
		storeInfoList.value = []
		if (index === 1) {
			await getStoreInfo()
		}
		if (index === 2) {
			storeInfoList.value = [{store: 'A区', num: 20, pid: -1, sid: -10}, {store: 'B区', num: 7, pid: -2, sid: 20}]
		}
	}
	
	const choose = async (index) => {
		counter.storageName = storeInfoList.value[index].store
		counter.placepointid = storeInfoList.value[index].pid
		counter.storageId = storeInfoList.value[index].sid
		uni.navigateBack({
			delta: 1
		})
	}
	
	const serachStore = async (e) => {
		if (e !== '') {
			const res = await reServer.getStoreInfoByKeyword(e)
			if (res.code === 200) {
				storeInfoList.value = []
				storeInfoList.value = res.data
			}
			if (res.code === 500) {
				storeInfoList.value = []
				await uni.showToast({
					icon:'error',
					title:res.msg
				})
			}
			return
		}
		await getStoreInfo()
	}
</script>

<style scoped>
	.store-data {
		width: 100%; 
		display: grid; 
		place-items: center;
	}
	.bgb {
		background-color: #f8f8fa;
	}
	.serach-data-list > view {
		display: grid; 
		grid-template-columns: 1fr 2fr 1fr; 
		height: 150rpx;
	}
	.serach-data-title-2 {
		width: 100%;
		height: 100rpx;
		background-color: #e5f1ff;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(2, 1fr);
	}
	.serach-data-title-3 {
		width: 100%;
		height: 100rpx;
		background-color: #e5f1ff;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(3, 1fr);
	}
	.switch-text {
		border-bottom: 5rpx solid blue; 
		padding-bottom: 5rpx; 
		color: blue;
	}
	.serach-data-series > view {
		width: 100%;
		display: grid;
	}
	.serach-data-list {
		width: 100%;
	}
	.serach-data {
		width: 100%;
	}
	.serach-data-series {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
	.serach {
		height: 100rpx;
		width: 100%;
		display: grid;
		place-items: center;
	}
	.content {
		width: 95%;
		padding-top: 20rpx;
		display: grid;
		place-items: center;
	}
	.body {
		width: 100vw;
		display: grid;
		justify-items: center;
	}
	.pub {
		border: 1rpx solid red;
	}
</style>
