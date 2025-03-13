<template>
	<view class="body">
		<view class="container">
			<view class="itop">
				<view>
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<JqSelectDateVue @handle_start="getStartDate" @handle_end="getEndDate" :showSingel="false"></JqSelectDateVue>
			</view>
			<view class="dataShow">
				<view style="height: auto; width: 100%;">
					<view class="dataShow-content">
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>处方药</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>非处方药</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>中药材</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>保健食品</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>个人护理</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>家庭健康用品</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>农副及食品饮料</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							<view>
								<view style="display: grid; grid-template-rows: 1fr 1fr; place-items: center;">
									<view>
										<text>洗护及居家用品</text>
									</view>
									<view>
										<text>218 天</text>
										<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
										<text> - 199 天</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	import Icon from '../components/icon.vue'
	import { useCounterStore } from '../store/counter';
	import { getCurrentDate, isEndDateAfterStartDate } from '../utils/dateUtils';
	
	const counter = useCounterStore()
	const startDate = ref('')
	const endDate = ref('')
	
	startDate.value = getCurrentDate()
	endDate.value = getCurrentDate()
	
	
	const changeDate = (e, id) => {
		//0 起始时间 1 结束时间
		if (id === 0) {
			startDate.value = e
			//举例 假如结束日期2025-01-05 再调整开始日期到 2025-01-10 则结束时间自动调整到 2025-01-10
			if (!isEndDateAfterStartDate(startDate.value, endDate.value)) {
				endDate.value = e
			}
			return
		}
		endDate.value = e
	}
	
	const getStartDate = (e) => {
		console.log(e)
	}
	
	const getEndDate = (e) => {
		console.log(e)
	}
	
</script>

<style scoped>
	.dataShow-content > view {
		background-color: #d7eae8;
		height: 150rpx;
		border-radius: 25rpx;
		display: grid;
		place-items: center;
	}
	.dataShow-content {
		width: 90%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20rpx;
		margin: auto;
		padding-top: 20rpx;
	}
	.dataShow {
		width: 100%;
		height: 86vh;
		background-color: white;
		border-radius: 25rpx;
		display: grid;
		justify-items: center;
	}
	.itop-time {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 10rpx;
	}
	.itop {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	.container > view {
		margin-top: 25rpx;
	}
	.container {
		width: 94%;
	}
	.body {
		background-color: #f5f5f5;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
	}
</style>align-items: center;
		gap: 10rpx;
	}
	.itop {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	.container > view {
		margin-top: 25rpx;
	}
	.container {
		width: 94%;
	}
	.body {
		background-color: #f5f5f5;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
	}
</style>