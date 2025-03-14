<template>
	<view class="body">
		<view class="container">
			<view class="top-title">
				<view>
					<jq-top-show-vue :showRight="false"></jq-top-show-vue>
				</view>
				<view>
					<jq-select-date-vue></jq-select-date-vue>
				</view>
			</view>
			<view class="serachData">
				<view style="margin-left: 30rpx; height: 100rpx; display: grid; align-items: center;">
					<view>
						<text>分类筛选: </text>
						<text style="color: #3188d4;">全部</text>
					</view>
				</view>
				<view style="display: grid; grid-template-columns: 5fr 1fr; align-items: center;">
					<view>
						<uni-search-bar cancelButton="none"></uni-search-bar>
					</view>
					<view>
						<text style="color: #3188d4;">搜索</text>
					</view>
				</view>
				<view class="serachShow" style="background-color: #e5f1ff;">
					<text>序号</text>
					<text>商品名称</text>
					<text>销售额</text>
					<text>毛利率</text>
					<text>数量</text>
					<text></text>
				</view>
				<view class="serachShow">
					<text>1</text>
					<text style="font-size: 20rpx; color: #3188d4;" @click="showInfo">葡萄糖酸钙加锌口服液</text>
					<text>1617</text>
					<text>362</text>
					<text>40</text>
					<view>
						<checkbox-group @change="handleCheckboxChange">
							<checkbox value="1"></checkbox>
						</checkbox-group>
					</view>
				</view>
			</view>
			<view class="bot">
				<view style="background-color: #e5f1ff;">
					<text>合计</text>
					<view style="display: grid; grid-template-rows: auto auto; gap: 5rpx; place-items: center;">
						<text style="font-size: 20rpx;">品规数</text>
						<text>1</text>
					</view>
					<text>1617</text>
					<text>362</text>
					<text>40</text>
					<text>全选</text>
				</view>
				<view @click="cli_serach">
					<view style="width: 50%; display: grid; grid-template-columns: auto auto;">
						<view style="width: 50%;">
							<image :src="picSrc" style="width: 50rpx; height: 50rpx;"></image>
						</view>
						<text :style="{color: prot_css}">{{prot}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	
	const prot = ref("请勾选需要查询的商品")
	const picSrc = ref("../static/img/public/搜索-未激活.svg")
	const prot_css = ref("#aaaaaa")
	const switchCli = ref(false)
		
	const showInfo = () => {
		uni.showModal({
			content:"葡萄糖酸钙加锌口服液 \n....",
			showCancel:false
		})
	}
	
	const handleCheckboxChange = (e) => {
		const len = e.detail.value.length
		if (len === 1) {
			prot.value = "会员名单查询"
			picSrc.value = "../static/img/public/搜索-激活.svg"
			prot_css.value = "#3188d4";
			switchCli.value = true;
			return;
		}
		prot_css.value = "#aaaaaa";
		prot.value = "请勾选需要查询的商品";
		picSrc.value = "../static/img/public/搜索-未激活.svg"
		switchCli.value = false
	}
	
	const cli_serach = () =>{
		if (switchCli.value) {
			uni.navigateTo({
				url:'/pages/aboutMembers'
			})
			return;
		}
		uni.showToast({
			icon:'error',
			title:'请先勾选要查询的商品!'
		})
	}
</script>

<style scoped>
	.bot > view:last-child {
		display: grid;
		place-items: center;
	}
	.bot > view:first-child {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.bot {
		margin-top: 100%;
		width: 100%;
		background-color: white;
		height: 200rpx;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	.serachShow {
		height: 100rpx;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}
	.serachData {
		background-color: #fff;
		width: 100%;
	}
	.top-title {
		display: grid;
		grid-template-columns: 3fr 2.5fr;
		align-items: center;
	}
	.container > view:first-child {
		margin: 35rpx 0;
	}
	.container > view {
		margin-bottom: 35rpx;
	} 
	.container {
		width: 94%;
	}
	.body {
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		place-items: center;
	}       
</style>
