<template>
	<view class="body">
		<view class="container">
			<view class="top-title">
				<view>
					<JqTopShowVue :showRight="false"></JqTopShowVue>
				</view>
				<view>
					<JqSelectDateVue></JqSelectDateVue>
				</view>
			</view>
			<view class="series-data">
				<view class="series-data-title">
					<view>
						<text>
							分类筛选
						</text>
					</view>
					<view>
						<text style="color: #1d93f9;">全部</text>
					</view>
					<view>
						<text>></text>
					</view>
				</view>
				<view class="series-data-name" style="background-color: #e2eefc;;">
					<text>序号</text>
					<text>商品名称</text>
					<text>目标</text>
					<text>累计销量</text>
					<text>累计完成率</text>
					<text>动态完成率</text>
				</view>
				<view class="series-data-name" style="background-color: white;"  @click="showTest">
					<text >1</text>
					<text style="color: #4a90d5;" @click="showInfo">葡萄糖酸钙口服液</text>
					<text>40</text>
					<text>40</text>
					<text style="color: #51b577;" >100%</text>
					<text>98%</text>
				</view>
			</view>
			<view class="bot">
				<view style="height: 80rpx; display: grid; align-items: center;">
					<view>
						<text>合计</text>
					</view>
					<view>
						<text>1</text>
					</view>
					<view>
						<text>40</text>
					</view>
					<view>
						<text>40</text>
					</view>
					<view>
						<text>-</text>
					</view>
					<view>
						<text>-</text>
					</view>
				</view>
				<view style="width: 100%; margin-top: 25rpx;">
					<button style="color: white; background-color: #1c90ff;">批量分配</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import JqTopShowVue from '../components/Jq-TopShow.vue';
	import JqSelectDateVue from '../components/Jq-Select-Date.vue';
	
	const showInfo = (e) => {
		e.stopPropagation();
		uni.showModal({
			title:"详情",
			content:"商品编号:49139\n 规格型号: 10ml*30支/盒\n厂家:华润三九(唐山)药业有限公司\n总部零售价:68.0",
			showCancel:false
		})
	}
	const showTest = () => {
		uni.navigateTo({
			url:"/pages/clerkShop"
		})
	}
</script>

<style scoped>
	.bot > view:first-child {
		background-color: #e2eefc;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}
	.bot {
		display: grid;
		grid-template-rows: auto auto;
		margin-top: 100%;
		width: 100%;
	}
	.series-data-name {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(6, 1fr);
	}
	.series-data-title {
		display: grid;
		grid-template-columns: repeat(3, auto);
		place-items: center;
	}
	.series-data {
		width: 100%;
		height: 300rpx;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		background-color: white;
	}
	.top-title {
		display: grid;
		grid-template-columns: auto auto;
		width: 100%;
		align-items: center;
	}
	.container > view:first-child {
		margin-top: 20rpx;
	}
	.container > view {
		margin-bottom: 20rpx;
	}
	.body {
		display: grid;
		justify-items: center;
		align-items: start;
		background-color: #f5f5f5;
		width: 100vw;
		height: 100vh;
	}
	.container {
		width: 94%;
		height: auto;
		display: grid;
		grid-template-rows: auto auto auto;
		justify-items: center;
	}
</style>
