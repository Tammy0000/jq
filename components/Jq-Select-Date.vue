<template>
	<view>
		<view class="itop-time">
			<view>
				<uni-datetime-picker type="date" :style="`font-size: ${fontSize};color: ${color}`" @change="changeDate($event, 0)">{{startDate}}</uni-datetime-picker>
			</view>
			<view v-if="!showSingel">
				<text :style="`font-size: ${fontSize}; color: ${color}`">至</text>
			</view>
			<view v-if="!showSingel">
				<uni-datetime-picker :start="startDate" type="date" :style="`font-size: ${fontSize};color: ${color}`" @change="changeDate($event, 1)">{{endDate}}</uni-datetime-picker>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { getCurrentDate, isEndDateAfterStartDate } from '../utils/dateUtils';
	
	const startDate = ref('')
	const endDate = ref('')
	
	startDate.value = getCurrentDate()
	endDate.value = getCurrentDate()
	
	const emit = defineEmits(['handle_start', 'handle_end'])
	
	const props = defineProps({
		fontSize: {
			type: String,
			default: '25rpx'
		},
		color: {
			type: String,
			default: '#1d8fff'
		},
		//是否显示一个日期，即没有结束日期
		showSingel: {
			type: Boolean,
			default: false
		}
	})
	
	const changeDate = (e, id) => {
		//0 起始时间 1 结束时间
		if (id === 0) {
			startDate.value = e
			//举例 假如结束日期2025-01-05 再调整开始日期到 2025-01-10 则结束时间自动调整到 2025-01-10
			if (!isEndDateAfterStartDate(startDate.value, endDate.value)) {
				endDate.value = e
			}
			emit('handle_start', {
				//开始时间
				startDate: startDate.value,
			})
			return
		}
		endDate.value = e
		emit('handle_end', {
			//结束时间
			endDate: endDate.value
		})
	}
	
</script>

<style scoped>
	.itop-time {
		display: grid;
		grid-template-columns: auto auto auto;
		align-items: center;
	}
</style>