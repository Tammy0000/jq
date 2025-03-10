<template>
	<view class="body">
		<view class="context" >
			<view class="top-time">
				<view style="display: grid; grid-template-columns: 1fr auto; gap: 5rpx; align-items: center;">
					<image src="../static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text style="text-decoration: underline; color: #2b8ada;">化州下郭健寿堂</text>
				</view>
				<view>
					<text style="color: #2b8ada;">2025-02-18</text>
				</view>
				<view>
					<text style="color: #2b8ada;">日 </text>
					<text> 周 </text>
					<text> 年 </text>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 3fr 1fr; margin: 25rpx 0;">
				<view class="title-img">
					<image src="/static/img/menu/会员概况.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>会员概况</text>
				</view>
				<view>
					<button size="mini" style="background-color: #2097f3; border-radius: 35rpx; color: white;">会员查询</button>
				</view>
			</view>
			<view class="member-data">
				<view class="member-data-title">
					<view>
						<text>会员销售占比</text>
						<text style="color: #3ad25e;"> 100 </text>
						<text>%</text>
					</view>
					<view>
						<text>会员来客占比</text>
						<text style="color: #3ad25e;"> 100 </text>
						<text>%</text>
					</view>
				</view>
				<view class="member-data-serach">
					<text>会员消费查询 > </text>
				</view>
			</view>
			<view class="member-active">
				<view>
					<text>月活跃会员数量</text>
				</view>
				<view>
					图表展示区
				</view>
				<view style="display: grid; place-items: center; color: #b4b4b4; font-size: 20rpx;">
					<text>会员统计时间</text>
				</view>
			</view>
			<view class="newMemberDev-top">
				<view style="display: grid; grid-template-columns: 4fr 2fr; margin: 25rpx 0;">
					<view class="title-img">
						<image src="/static/img/menu/新会员发展.svg" style="width: 50rpx; height: 50rpx;"></image>
						<text>新会员发展</text>
					</view>
					<view>
						<button size="mini" style="background-color: #2097f3; border-radius: 35rpx; color: white;">会员开卡管理</button>
					</view>
				</view>
			</view>
			<view class="newMemberDev-data">
				<view class="newMemberDev-data-title">
					<view>
						<text>目标</text>
						<text style="color: green;"> - </text>
						<text>个</text>
					</view>
					<view>
						<text>新发展</text>
						<text style="color: green;"> 2 </text>
						<text>个</text>
					</view>
					<view>
						<text>完成率</text>
						<text style="color: green;"> - </text>
					</view>
				</view>
				<view class="newMemberDev-data-show">
					<text>图表展示区</text>
				</view>
				<view style="display: grid; place-items: center; color: #b4b4b4; font-size: 20rpx; height: 100rpx;">
					<text>非会员转化率 > </text>
				</view>
			</view>
			<view style="margin: 25rpx 0;">
				<view class="title-img">
					<image src="/static/img/menu/新会员复购.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>新会员复购</text>
				</view>
			</view>
			<view class="oldMember-top">
				<view class="oldMember-title-context">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
						<image src="../static/img/menu/高风险会员.svg" style="height: 50rpx; width: 50rpx;"></image>
						<view>
							<text>高风险会员</text>
							<text style="color: red;"> 57 </text>
							<text>人</text>
						</view>
					</view>
					<view style="display: grid; justify-items: end;">
						<text style="margin-right: 35rpx;">详情 > </text>
					</view>
				</view>
				<view class="oldMember-title-context">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
						<image src="../static/img/menu/沉睡客户.svg" style="height: 50rpx; width: 50rpx;"></image>
						<view>
							<text>新增沉睡会员</text>
							<text style="color: red;"> 2 </text>
							<text>人</text>
						</view>
					</view>
					<view style="display: grid; justify-items: end;">
						<text style="margin-right: 35rpx;">详情 > </text>
					</view>
				</view>
				<view class="oldMember-title-Nocontext">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
						<image src="../static/img/menu/沉睡客户.svg" style="height: 50rpx; width: 50rpx;"></image>
						<view>
							<text>累计沉睡会员</text>
							<text style="color: red;"> 248 </text>
							<text>人</text>
						</view>
					</view>
				</view>
				<view class="oldMember-title-context">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
						<image src="../static/img/menu/会员流失.svg" style="height: 50rpx; width: 50rpx;"></image>
						<view>
							<text>新增流失会员</text>
							<text style="color: red;"> 5 </text>
							<text>人</text>
						</view>
					</view>
					<view style="display: grid; justify-items: end;">
						<text style="margin-right: 35rpx;">详情 > </text>
					</view>
				</view>
				<view class="oldMember-title-Nocontext">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
						<image src="../static/img/menu/会员流失.svg" style="height: 50rpx; width: 50rpx;"></image>
						<view>
							<text>累计流失会员</text>
							<text style="color: red;"> 185 </text>
							<text>人</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style scoped>
	.oldMember-top {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
		border-radius: 25rpx;
		background-color: white;
		height: 500rpx;
		margin-bottom: 50rpx;
	}
	.oldMember-title-context {
		display: grid; 
		grid-template-columns: 1fr 1fr; 
		align-items: center; width: 100%;
		border-bottom: 1px solid #f0f0f0;
	}
	.oldMember-title-Nocontext {
		display: grid; 
		align-items: center; width: 100%;
		border-bottom: 1px solid #f0f0f0;
	}
	.newMemberDev-data-show {
		width: 100%;
		height: 200rpx;
		border: 1px solid lightblue;
	}
	.newMemberDev-data-title {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		height: 100rpx;
	}
	.newMemberDev-data {
		width: 100%;
		height: 400rpx;
		border-radius: 35rpx;
		background-color: white;
	}
	.member-active {
		display: grid;
		grid-template-rows: 1fr 3fr 1fr;
		width: 100%;
		height: 300rpx;
		border-radius: 35rpx;
		background-color: white;
		margin-top: 35rpx;
	}
	.member-data-serach {
		display: grid;
		place-items: center;
	}
	.member-data-title {
		display: grid;
		grid-template-columns: 1fr 1fr ;
		place-items: center;
	}
	.member-data {
		display: grid;
		grid-template-rows: 2fr 1fr;
		width: 100%;
		height: 300rpx;
		border-radius: 35rpx;
		background-color: white;
	}
	.title-img {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 15rpx;
		align-items: center;
	}
	.body {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}
    .context {
		width: 94%;
		margin: auto;
	}
	.top-time {
		display: grid;
		grid-template-columns: auto 1fr 1fr;
		align-items: center;
		place-items: center;
	}
	.top-time > view {
		margin-right: 15rpx;
	}
</style>
