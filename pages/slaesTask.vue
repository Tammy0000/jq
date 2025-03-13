<template>
	<view class="body">
		<view class="context">
			<view>
				<view class="top-select">
					<view style="width: 100%;">
					    <JqTopShowVue :showRight="false"></JqTopShowVue>
					</view>
					<view style="display: grid; align-items: center;">
						<text style="text-decoration: underline; font-size: 30rpx; color: #1d8fff;" @click="showDrawer">数据条件</text>
					</view>
				</view>
				<view>
					<MyDraVue ref="showMyDra"></MyDraVue>
					<uni-drawer ref="showRight" mode="right" :mask-click="false">
						<scroll-view style="height: 100%;" scroll-y="true">
							<view>
								<text class="drawer-font">条件筛选</text>
								<view class="line"></view>
								<view style="display: grid; grid-template-rows: 1fr 1fr;">
									<text class="drawer-font">
										本期日期
									</text>
									<view>
										<text class="drawer-font">2025-02-15</text>
										<text class="drawer-font"> 至 </text>
										<text class="drawer-font">2025-02-15</text>
									</view>
								</view>
								<view>
									<button size="mini" style="background-color: azure;" @click="closeDrawer">关闭</button>
								</view>
							</view>
						</scroll-view>
					</uni-drawer>
				</view>
				<view>
					<view>
						<view style="margin: 15rpx 0;">
							<uni-datetime-picker type="date" v-model="selectDate" >{{selectDate == '' ? '请选择时间' : selectDate}}</uni-datetime-picker>
						</view>
						<view class="selectTimeKeyWord">
							<view @click="selectDate_ref(1)" :class="selecrIndex === 1 ? 'selectColor-Active' : 'selectColor'">
								<text>日</text>
							</view>
							<view @click="selectDate_ref(2)" :class="selecrIndex === 2 ? 'selectColor-Active' : 'selectColor'">
								<text>月</text>
							</view>
							<view @click="selectDate_ref(3)" :class="selecrIndex === 3 ? 'selectColor-Active' : 'selectColor'">
								<text>年</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="top-message">
				<view>
					<view>
						<text style="color: #f4553d; font-size: 70rpx;">273</text>
						<text>元</text>
					</view>
					<view>
						<text>收款类型 > </text>
					</view>
					<view>
						<text>
							日目标
						</text>
					</view>
					<view>
						<text style="color: green;">1200 </text>
						<text>元</text>
					</view>
				</view>
				<view>
					<view>
						<text>日累计完成率</text>
						<text style="color: green;"> 23 %</text>
					</view>
					<view>
						<text>片区排名第</text>
						<text>15</text>
						<image src="/static/img/public/下降箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
						<text style="color: #f4553d;">8 ></text>
					</view>
				</view>
			</view>
			<view class="big-title">
				<image src="/static/img/menu/时段跟踪.svg" style="height: 50rpx; width: 50rpx; margin-left: 20rpx;"></image>
				<text>时段追踪</text>
			</view>
			<view class="time-context">
				<view class="time-context-title">
					<view>
						<text>销售额</text>
						<image src="/static/img/menu/满意.svg"></image>
					</view>
					<view>
						<text>毛利额</text>
						<image src="/static/img/menu/非常满意.svg"></image>
					</view>
					<view>
						<text>来客数</text>
						<image src="/static/img/menu/非常不满意.svg"></image>
					</view>
					<view>
						<text>客单价</text>
						<image src="/static/img/menu/不满意.svg"></image>
					</view>
					<view>
						<text>毛利率</text>
						<image src="/static/img/menu/满意.svg"></image>
					</view>
				</view>
				<view style="border: 1rpx solid #5da4e3; height: 250rpx;">
					此处展示的是曲线图
				</view>
			</view>
			<view class="big-title">
				<image src="/static/img/menu/运营分析.svg" style="height: 50rpx; width: 50rpx; margin-left: 20rpx;"></image>
				<text>运营分析</text>
			</view>
			<view style="background-color: white; border-radius: 25rpx; height: 150rpx; display: grid; align-items: center;">
				<view style="display: grid; grid-template-rows: auto auto; gap: 10rpx;">
					<view class="opera-analyis">
						<image src="/static/img/menu/统计分析-红色.svg"></image>
						<image src="/static/img/menu/统计分析-红色.svg"></image>
						<image src="/static/img/menu/统计分析-绿色.svg"></image>
						<image src="/static/img/menu/统计分析-红色.svg"></image>
						<image src="/static/img/menu/统计分析-红色.svg"></image>
					</view>
					<view class="opera-analyis">
						<text>销售额</text>
						<text>毛利额</text>
						<text>来客数</text>
						<text>客单价</text>
						<text>毛利率</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { useCounterStore } from '../store/counter';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	
	const showRight = ref(null)
	const counter = useCounterStore()
	const showMyDra = ref(null)
	const selectDate = ref('')
	const selecrIndex = ref(1)
	
	const showMyDraRef = () => {
		showMyDra.value.openDra()
	}
	
	const selectDate_ref = (index) => {
		if (selecrIndex.value === index) return
		selecrIndex.value = index
	}
	
	const showDrawer = () => {
		showRight.value.open()
	}
	
	const closeDrawer = () => {
		showRight.value.close()
	}
</script>

<style scoped>
	.selectTimeKeyWord > view {
		width: 100%;
		display: grid;
		place-items: center;
	}
	.selectColor-Active {
		background-color: #f5f5f5;
		color: #1b8ffc;
		width: 100%;
	}
	.selectColor {
		background-color: #a3a3a3;
		width: 100%;
	}
	.selectTimeKeyWord {
		display: grid; 
		width: 30%;
		 place-items: center;
		grid-template-columns: repeat(3, 1fr);
		background-color: #a3a3a3;
	}
	.opera-analyis {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		place-items: center;
	}
	.opera-analyis > image {
		width: 35rpx;
		height: 35rpx;
	}
	.context > view {
		margin-bottom: 25rpx;
	}
	.big-title {
		align-items: center; 
		display: grid; 
		gap: 10rpx; 
		grid-template-columns: auto 1fr; 
		margin-bottom: 25rpx;
	}
	.time-context-title {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		height: 70rpx;
	}
	.time-context-title > view > text {
		font-size: 25rpx;
	}
	.time-context-title > view > image {
		width: 30rpx;
		height: 30rpx;
	}
	.time-context {
		background-color: white;
		width: 100%;
		height: 400rpx;
		border-radius: 25rpx;
		
	}
	.top-message > view :not(:first-child) {
		margin-bottom: 20rpx;
	}
	.top-message {
		margin: 25rpx 0;
		width: 100%;
		height: 300rpx;
		background-color: #f6eaea;
		border-radius: 35rpx;
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	.body {
		background-color: #f5f5f5;
		width: 100vw;
		height: 100vh;
		margin: auto;
		margin-top: 0;
	}
	.context {
		width: 94%;
		margin: auto;
		padding-top: 15rpx;
		/* border: 1rpx solid greenyellow; */
	}
	.drawer-font {
		   font-size: 25rpx;
		   color: #a3a3a3;
	}
	.line {
		   width: 90%; /* 线的宽度 */
		     height: 1px; /* 线的高度 */
		     background-color: #000; /* 实线颜色 */
		     margin: 10px 0;
			 text-align: center;
	}
	.top-select {
		display: grid;
		grid-template-columns: 1fr auto;
	}
</style>
