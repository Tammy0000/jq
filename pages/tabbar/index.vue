<template>
	<view style="height: 100vh; background-color: #f5f5f5;">
		<view style="width: 96%; margin: auto; ">
			<view class="top_info">
				<text style="color: #636363; text-decoration: underline; font-size: 33rpx;" @click="openDra">{{counter.storageName}}</text>
				<view @click="logout">
					<text style="font-size: 33rpx; color: #636363;">用户 : admin </text>
				</view>
			</view>
			<uni-drawer :mask="true" mode="left" ref="showDrawer">
				<scroll-view style="height: 100%; width: 100%;" scroll-y="true">
					<view style="display: grid; grid-template-rows: auto;">
						<view :class="key % 2 == 0 ? 'dataShow-s' : 'dataShow-m' " v-for="(value, key) in dataStoredetail" :key="key" @click="closeDra(key)">
							<text>{{value.storagename}}</text>
						</view>
					</view>
				</scroll-view>
			</uni-drawer>
			<MyDra ref="showTest"></MyDra>
			<view class="menu">
				<view>
					<view class="menu-context" @click="click_opsReport">
						<image src="/static/img/menu/运营快报.svg"></image>
						<text>运营快报</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_slaesTask">
						<image src="/static/img/menu/销售任务.svg"></image>
						<text>销售任务</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_goodsTask">
						<image src="/static/img/menu/商品任务.svg"></image>
						<text>商品任务</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_memberManagement">
						<image src="/static/img/menu/会员管理.svg"></image>
						<text>会员管理</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_productMenagement">
						<image src="/static/img/menu/商品管理.svg"></image>
						<text>商品管理</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_staffCommission">
						<image src="/static/img/menu/店员提成.svg"></image>
						<text>店员提成</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_promotionManagement">
						<image src="/static/img/menu/促销管理.svg"></image>
						<text>促销管理</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_usageStatis">
						<image src="/static/img/menu/使用统计.svg"></image>
						<text>使用统计</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_myStudy">
						<image src="/static/img/menu/我的学习.svg"></image>
						<text>我的学习</text>
					</view>
				</view>
				<view>
					<view class="menu-context" @click="click_honor">
						<image src="/static/img/menu/荣誉殿堂.svg"></image>
						<text>荣誉殿堂</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onShow} from '@dcloudio/uni-app'
import { useCounterStore } from '@/store/counter';
import requestFast from '../../utils/requestFast'; 
import MyDra from '@/components/MyDra.vue';

	const name = ref('admin')
	const showDayMessage = ref(false)
	const showDrawer = ref(null);
	const dataStoredetail = ref([])
	const counter = useCounterStore()
	const showTest = ref(null)
	
	onShow (async () => {
		if (counter.storageId === '' || counter.storageName === '') {
			const res = await requestFast.get('/app/placepoint/getAllPlacepoint/v1')
			counter.storageName = res.data.获取所有门店信息[21].storagename
			counter.storageId = res.data.获取所有门店信息[21].storageid
			counter.placepointid = res.data.获取所有门店信息[21].placepointid
		}
	})
	
	const openDra = async () => {
		// showDrawer.value.open()
		// const res = await requestFast.get('/app/placepoint/getAllPlacepoint/v1')
		// dataStoredetail.value = []
		// dataStoredetail.value = res.data.获取所有门店信息
		showTest.value.openDra()
	}
	
	const closeDra = (index) => {
		counter.storageName = dataStoredetail.value[index].storagename
		counter.storageId = dataStoredetail.value[index].storageid
		showDrawer.value.close()
	}
	
	const logout = () => {
		uni.showModal({
			content:'是否退出?',
			success: (res) => {
				if (res.confirm) {
					uni.redirectTo({
						url:'/pages/login'
					})
					return;
				}
			}
		})
	}
	
	const click_goodsTask = () => {
		uni.navigateTo({
			url:"/pages/goodsTask"
		})
	} 
	
	const click_opsReport = () => {
		uni.navigateTo({
			url:"/pages/opsReport"
		})
	}
	
	const click_slaesTask = () => {
		uni.navigateTo({
			url:"/pages/slaesTask"
		})
	}
	
	const click_promotionManagement = () => {
		uni.navigateTo({
			url:"/pages/promotionManage"
		})
	}
	
	const click_myStudy = () => {
		uni.navigateTo({
			url:"/pages/myStudy"
		})
	}
	
	const click_staffCommission = () => {
		uni.navigateTo({
			url:"/pages/staffCommission"
		})
	}
	
	const click_memberManagement = () => {
		uni.navigateTo({
			url: "/pages/memberManage"
		})
	}
	
	const switchContect = () => {
		showDayMessage.value = !showDayMessage.value
		showTitle.value = showDayMessage.value ? '收起' : '展开'
	}
	
	const click_productMenagement = () => {
		uni.navigateTo({
			url:"/pages/protManagement"
		})
	}
	
	const click_usageStatis = () => {
		uni.navigateTo({
			url:"/pages/usageStatis"
		})
	}
	
	const click_honor = () => {
		uni.navigateTo({
			url:"/pages/honor"
		})
	}
	
	</script>
<style>
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
	.test_try {
		border: 1rpx solid blueviolet;
	}
	.tips {
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: 1fr auto;
		justify-content: space-between;
	}
	.menu-context {
		display: grid; 
		place-items: center; 
		grid-template-rows: auto; 
		gap: 15rpx;
	}
	.menu {
		display: grid; 
		grid-template-columns: repeat(4, 1fr); 
		margin-top: 25rpx;
	}
	.menu-context > text {
		font-size: 30rpx;
	}
	.menu-context > image {
		width: 70rpx;
		height: 70rpx;
	}
	.menu > view {
		height: 250rpx;
		display: grid;
		place-items: center;
	}
	.menu > view > image {
		width: 60rpx;
		height: 80rpx;
		border: 1px solid blue;
	}
	.menu > view > text {
		font-size: 10rpx;
	}
	.top_info {
		display: grid; 
		grid-template-columns: 1fr auto; 
		justify-content: space-between;
		margin-top: 15rpx;
	}
</style>
