<template>
	<view style="display: grid; grid-template-columns: auto auto; gap: 10rpx;">
		<view style="display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 5rpx;" @click="showDraRef">
			<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
			<text style="font-size: 30rpx; color: #1d8fff;">{{counter.storageName}}</text>
			<MyDra ref="showDra"></MyDra>
		</view>
		<view v-if="showRight" style="display: grid; justify-items: end; align-items: center;">
			<view>
				<uni-datetime-picker v-model="selectDate" type="date" style="color: #1d8fff;">{{selectDate}}</uni-datetime-picker>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import {onShow} from '@dcloudio/uni-app'
	import { useCounterStore } from '../store/counter';
	import MyDra from './MyDra.vue';
	import { getCurrentDate } from '../utils/dateUtils';
	
	const counter = useCounterStore()
	const showDra = ref(null)
	const selectDate = ref('')
	
	onShow(() => {
		selectDate.value = getCurrentDate()
	})
	
	watch(selectDate, (newValue, oldValue) => {
		emit('handle_Date', newValue)
	})
	
	const emit = defineEmits(['handle_Date'])
	
	const props = defineProps({
		showRight: {
			type: Boolean,
			default: true
		}
	})
	
	const showDraRef = () => {
		showDra.value.openDra()
	}
		
</script>

<style scoped>

</style>