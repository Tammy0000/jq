<template>
	<view class="body">
		<view class="topInfo">
			<text style="color: white;">葡萄糖酸钙加锌口服液 (澳诺) 支装 ZG</text>
		</view>
		<view class="container">
			<view>
				<text style="color: #9f9f9f; font-size: 15rpx;">
					编辑步骤:1.选择分配方案;2.勾选参与分配任务员工;3.点击'计算'( 向上取整);4.可手动微调;5.点击'保存'完成设置
				</text>
			</view>
			<view class="alloac">
				<view>
					<text style="font-size: 30rpx; ">
						分配原则: 
					</text>
				</view>
				<view >
					<radio-group @change="">
						<radio checked="true" value="0" >销售占比</radio>
						<radio value="1">平均分配</radio>
					</radio-group>
				</view>
			</view>
			<view class="alloac">
				<view >
					<text>门店目标: </text>
					<text>40</text>
				</view>
				<view >
					<text>分配数量: </text>
					<text>0</text>
				</view>
			</view>
			<view class="dataShow">
				<view style="background-color: #e2eefc;">
					<text></text>
					<text>销售员</text>
					<text>末次销售时间</text>
					<text>数量</text>
				</view>
				<view style="background-color: white;">
					<checkbox-group>
						<checkbox value="1"></checkbox>
					</checkbox-group>
					<text>下郭店O2O</text>
					<text>2025-01-01</text>
					<text>0</text>
				</view>
				<view style="background-color: #f5f5f5;">
					<checkbox-group>
						<checkbox value="2"></checkbox>
					</checkbox-group>
					<text>下郭店店长</text>
					<text>2025-01-01</text>
					<text>0</text>
				</view>
				<view style="background-color: #fff;">
					<checkbox-group>
						<checkbox value="3"></checkbox>
					</checkbox-group>
					<text>凌国容</text>
					<text>2025-01-01</text>
					<text>0</text>
				</view>
			</view>
		</view>
		<view class="bot">
			<button style="background-color: #03a9f5;">计算</button>
			<button style="background-color: #1c90ff;">保存</button>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	.bot > button {
		color: white;
		width: 94%;
		border-radius: 35rpx;
	}
	.bot {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 94%;
		margin-top: auto;
		margin-bottom: 35rpx;
	}
	.dataShow > view > text {
		font-size: 25rpx;
	}
	.dataShow > view {
		height: 100rpx;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		place-items: center;
	}
	.alloac {
		display: grid;
		height: 80rpx;
		align-items: center;
		grid-template-columns: 1fr 2fr;
	}
	.container > view:first-child {
		margin: 35rpx 0;
	}
	.container {
		width: 94%;
	}
	.topInfo {
		width: 100%;
		height: 200rpx;
		background-color: #31abff;
		display: grid;
		place-items: center;
	}
	.body {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		place-items: center;
		background-color: #f5f5f5;
	}       
</style>
