<template>
	<view style="width: 100vw; background-color: #f5f5f5; ">
		<view style="width: 94%; justify-self: start;">
			<view>
				<view class="top-select">
					<view style="display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 10rpx;">
					    <image src="/static/img/public/门店.svg" style="width: 50rpx; height: 50rpx;"></image>
					    <text style="color: #636363; text-decoration: underline;">化州市健寿堂下郭...</text>
					</view>
					<text style="color: #636363; text-decoration: underline;" @click="showDrawer">数据条件</text>
				</view>
				<view>
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
						<uni-datetime-picker type="date" border="falxe" placeholder="选择当前时间"></uni-datetime-picker>
						<view style="display: grid; width: 30%; grid-template-columns: repeat(3, 1fr);">
							<text>日</text>
							<text>周</text>
							<text>年</text>
						</view>
					</view>
				</view>
			</view>
			<view class="sales-task">
				<view style="display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 10rpx;">
					<image src="/static/img/release.png" style="height: 50rpx; width: 50rpx;"></image>
					<text>销售任务</text>
				</view>
				<view >
					<image src="/static/img/public/向右箭头.svg" style="width: 40rpx; height: 40rpx;"></image>
				</view>
			</view>
			<view class="sales-status" @click="cli_slaesTask">
				<view>
					<text>销售额</text>
					<view>
						<text style="color: red;">377</text>
						<text>元</text>
					</view>
				</view>
				<view style="outline: 1rpx solid skyblue; height: 50%;"></view>
				<view>
					<text style="font-size: 20rpx;">{{target_date}}目标</text>
					<view>
						<text>1550 </text>
						<text>元</text>
					</view>
				</view>
			</view>
			<view style="margin-top: 15rpx; display: grid; grid-auto-flow: column; overflow-x: auto;">
				<view class="horiz-context">
					<view style="margin-top: 15rpx;" @click="cli_slaesTask">
						<text>累计完成率</text>
						<text style="color: red; margin-left: 0.5em;">31</text>
						<text style="color: red;">%</text>
					</view>
					<view style="margin-top: 15rpx;">
						<text>片区排名</text>
						<text style="color: green; margin-left: 0.5em;">17</text>
						<image src="/static/img/public/提升箭头.svg" style="width: 20rpx; height: 25rpx;"></image>
						<text style="color: green;">%</text>
					</view>
				</view>
				<view class="horiz-context" @click="cli_slaesTask">
					<view style="margin-top: 15rpx;">
						<text>
							月预计完成率
						</text>
						<text style="color: red; margin-left: 0.4em;">34</text>
						<text style="color: red;">%</text>
					</view>
					<view style="margin-top: 15rpx;">
						<text>片区排名</text>
						<text style="color: red; margin-left: 0.4em;">18</text>
						<image src="/static/img/public/下降箭头.svg" style="width: 20rpx; height: 25rpx;"></image>
						<text style="color: red;">%</text>
					</view>
				</view>
				<view class="horiz-context">
					<view @click="cli_slaesTask">
						<text>月预计完成</text>
						<text style="color: red;">18428</text>
						<text>元</text>
					</view>
					<view @click="cli_slaesTask">
						<text>距目标差</text>
						<text style="color: red;">36572</text>
						<text>元</text>
					</view>
				</view>
				<view class="horiz-context" @click="cli_slaesTask">
					<view>
						<text>来客数</text>
						<text style="color: red;">7</text>
						<text>人</text>
					</view>
					<view>
						<text>目标</text>
						<text>15</text>
						<text>人</text>
					</view>
				</view>
				<view class="horiz-context" @click="cli_slaesTask">
					<view>
						<text>客单价</text>
						<text style="color: red;">15.8</text>
						<text>元</text>
					</view>
					<view>
						<text>目标</text>
						<text>80.0</text>
						<text>元</text>
					</view>
				</view>
				<view class="horiz-context" @click="cli_slaesTask">
					<view>
						<text>毛利率</text>
						<text style=":color: green;">45.3</text>
						<text>%</text>
					</view>
					<view>
						<text>
							目标
						</text>
						<text>40</text>
						<text>%</text>
					</view>
				</view>
			</view>
			<view class="task-context">
				<view class="ranking-top">
					<text>销售榜</text>
					<text>大单榜</text>
					<text>商品榜</text>
				</view>
				<view class="task-title">
					<text>排名</text>
					<text>姓名</text>
					<text>销售额</text>
					<text>来客数</text>
					<text>客单价</text>
				</view>
				<!-- 排名展示区 -->
				<view style="background-color: white;">
					<view style="display: grid; grid-template-columns: repeat(5, 1fr); place-items: center; height: 100rpx;">
						<text>1</text>
						<text>黄婉婷</text>
						<text>16</text>
						<text>1</text>
						<text style="color: green;">15.8</text>
					</view>
					<view style="display: grid; justify-content: end; margin: 35rpx 25rpx 0 0;">
						<text style="color: seagreen;">更多 > </text>
					</view>
				</view>
			</view>
			<view class="other-task">
				<view class="task-image">
					<image src="/static/img/menu/商品任务.svg"></image>
					<text>商品任务</text>
				</view>
				<view @click="cli_goodsTask">
					<text>更多 > </text>
				</view>
			</view>
			<view class="task-context task-context-up" @click="cli_goodsTask">
				<view>
					<text>数量任务</text>
					<text>共</text>
					<text style="color:red;"> 0 </text>
					<text>项</text>
				</view>
				<view>
					<text>预计完成</text>
					<text style="color: green;"> 0 </text>
					<text>项</text>
				</view>
				<view>
					<text>系列任务</text>
					<text style="color: red;"> 0 </text>
					<text>项</text>
				</view>
				<view>
					<text>预计完成</text>
					<text style="color: green;"> 0 </text>
					<text>项</text>
				</view>
			</view>
			<view class="other-task">
				<view class="task-image">
					<image src="/static/img/menu/商品管理.svg"></image>
					<text>商品管理</text>
				</view>
				<view @click="cli_protManage">
					<text>更多 > </text>
				</view>
			</view>
			<view class="task-context task-context-up" @click="cli_protManage">
				<view>
					<text>当前断货率</text>
					<text style="color:green;"> 37 %</text>
				</view>
				<view>
					<text>断货品规</text>
					<text style="color: red;"> 71 </text>
					<text>个</text>
				</view>
				<view>
					<text>畅销商品断货</text>
					<text style="color: red;"> 25 </text>
					<text>个</text>
				</view>
				<view>
					<text>核心商品断货</text>
					<text style="color: red;"> 17 </text>
					<text>个</text>
				</view>
			</view>
			<view class="other-task">
				<view class="task-image">
					<image src="/static/img/menu/会员管理.svg"></image>
					<text>会员管理</text>
				</view>
				<view @click="cli_memberManage">
					<text>更多 > </text>
				</view>
			</view>
			<view class="task-context task-context-up" @click="cli_memberManage">
				<view>
					<text>新会员目标</text>
					<text style="color:green;"> 0 个</text>
				</view>
				<view>
					<text>发展完成</text>
					<text style="color: green;"> 100 %</text>
				</view>
				<view>
					<text>新发展会员</text>
					<text style="color: green;"> 0 </text>
					<text>个</text>
				</view>
				<view>
					<text>新流失会员</text>
					<text style="color: red;"> 3 </text>
					<text>个</text>
				</view>
				<view>
					<text>会员转化率</text>
					<text style="color: green;"> 0 %</text>
				</view>
				<view>
					<text>片区转化率</text>
					<text style="color: green;"> 0 %</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const showRight = ref(null)
	
	const cli_slaesTask = () => {
		uni.navigateTo({
			url:'/pages/slaesTask'
		})
	}
	
	const cli_goodsTask = () => {
		uni.navigateTo({
			url:'/pages/goodsTask'
		})
	}
	
	const cli_protManage = () => {
		uni.navigateTo({
			url:'/pages/protManagement'
		})
	}
	
	const cli_memberManage = () => {
		uni.navigateTo({
			url:'/pages/memberManage'
		})
	}
	
	const showDrawer = () => {
		showRight.value.open()
	}
	
	const closeDrawer = () => {
		showRight.value.close()
	}
</script>

<style scoped>
	.other-task {
		display: grid; 
		grid-template-columns: 5fr 1fr; 
		height: 100%; 
		margin: 35rpx 0rpx;
		justify-content: space-between;
	}
	.other-task-context {
		
	}
	.task-image {
		display: grid; 
		grid-template-columns: auto 1fr; 
		align-items: center; 
		gap: 10rpx;
	}
	.task-image > image {
		width: 50rpx;
		height: 50rpx;
	}
	.task-title {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		margin-top: 25rpx;
		height: 100rpx;
		background-color: #e5f1ff;
	}
	.ranking-top {
		display: grid; 
		grid-template-columns: repeat(3, 1fr); 
		width: 100%;
		height: 80rpx;
		place-items: center;
	}
	.ranking-top > text {
		color: #1b8ffc;
		position: relative; /* 相对定位，用于伪元素定位 */
		font-size: 32rpx;
		color: #333;
		text-decoration: none; /* 移除默认下划线 */
	}
	.ranking-top > text::after {
		content: ''; /* 伪元素内容 */
		  position: absolute;
		  left: 0;
		  border-radius: 5rpx;
		  bottom: -15rpx; /* 下划线与文字之间的距离 */
		  width: 45rpx;
		  height: 10rpx; /* 下划线粗细 */
		  background-color: #1e90fa; /* 下划线颜色 */
	}
	.task-context {
		width: 100%;
		background-color: #ffffff;
		/* height: 200rpx; */
		border-radius: 35rpx;
		margin-top: 25rpx;
		overflow: hidden;		
	}
	.task-context-up {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	.task-context-up > view {
		margin-top: 30rpx;
	}
	.task-context-up > view:nth-last-child(-n + 2) {
		margin-bottom: 30rpx;
	}
	.arrow {
	  width: 0;
	    height: 0;
	    border-top: 10px solid transparent;
	    border-bottom: 10px solid transparent;
	    border-right: 20px solid #000; /* 右边实线 */
	}
	.top-select {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;
		margin-top: 15rpx;
	}
   .drawer-font {
	   font-size: 25rpx;
	   color: #a3a3a3;
   }
   .sales-status {
	   display: grid;
	   grid-template-columns: 1fr auto 1fr;
	   place-items: center;
	   /* border: 1rpx solid black; */
	   background-color: #f6eaea;
	   border-radius: 30rpx;
	   overflow: hidden;
	   height: 150rpx;
   }
   .line {
	   width: 90%; /* 线的宽度 */
	     height: 1px; /* 线的高度 */
	     background-color: #000; /* 实线颜色 */
	     margin: 10px 0;
		 text-align: center;
   }
   .sales-task {
	   display: grid; 
	   grid-template-columns: 1fr auto; 
	   justify-content: space-between; 
	   margin: 20rpx 0;
   }
   .horiz-context {
	   display: grid;
	   place-content: center;
	   background-color: #f6eaea;
	   border-radius: 20rpx;
	   width: 300rpx;
	   height: 200rpx;
	   margin-right: 20rpx;
   }
</style>
