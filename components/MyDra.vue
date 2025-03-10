<template>
	<view>
		<uni-drawer :mask="true" mode="left" ref="showDrawer">
			<scroll-view style="height: 100%; width: 100%;" scroll-y="true">
				<view style="display: grid; grid-template-rows: auto;">
					<view :class="key % 2 == 0 ? 'dataShow-s' : 'dataShow-m' " v-for="(value, key) in dataStoredetail" :key="key" @click="closeDra(key)">
						<text>{{value.storagename}}</text>
					</view>
				</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onShow} from '@dcloudio/uni-app'
import requestFast from '@/utils/requestFast.js'; 
import { useCounterStore } from '@/store/counter';
	onShow(async () => {
		const res = await requestFast.get('/app/placepoint/getAllPlacepoint/v1')
		dataStoredetail.value = []
		dataStoredetail.value = res.data.获取所有门店信息
	})
	
	const dataStoredetail = ref([])
	const showDrawer = ref(null)
	const counter = useCounterStore()
	
	const closeDra = (index) => {
		counter.storageName = dataStoredetail.value[index].storagename
		counter.storageId = dataStoredetail.value[index].storageid
		counter.placepointid = dataStoredetail.value[index].placepointid
		showDrawer.value.close()
	}
	
	const openDra = () => {
		showDrawer.value.open()
	}
	defineExpose({
		openDra
	})
</script>

<style scoped>
	.dataShow-s {
		background-color: white;
		/* margin-top: 20rpx; */
		height: 150rpx;
		width: 100%;
		display: grid;
		place-items: center;
	}
	
	.dataShow-m {
		background-color: #f5f5f5;
		/* margin-top: 20rpx; */
		height: 150rpx;
		width: 100%;
		display: grid;
		place-items: center;
	}
</style>