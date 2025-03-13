<template>
	<view class="body">
		<view class="context">
			<view>
				<JqTopShowVue :showRight="true" @handle_Date="getDate"></JqTopShowVue>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/库存管理.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>库存管理</text>
				</view>
				<view style="display: grid;">
					<button style="background-color: #1d8fff; color: white; border-radius: 35rpx; margin-right: 0rpx;" size="mini" @tap="cli_serach">商品库存查询</button>
				</view>
			</view>
			<view class="stock-context">
				<view class="stock-context-series" @click="cli_turnover">
					<view>
						<view v-if="loadData">
							<text style="color: green;">{{stockmoney}}</text>
							<text> 元</text>
						</view>
						<view v-if="!loadData">
							<text>加载中...</text>
						</view>
						<view class="stock-context-show">
							<text>库存金额 (成本) </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series">
					<view>
						<view v-if="loadData">
							<text style="color: green;">{{turnoverdays}}</text>
						</view>
						<view v-if="!loadData">
							<text >加载中...</text>
						</view>
						<view class="stock-context-show">
							<text>当前周期天数 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_stockInfo">
					<view>
						<view>
							<text style="color: green;">{{outrate}} %</text>
						</view>
						<view class="stock-context-show">
							<text>当前断货率 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_osm">
					<view>
						<view>
							<text style="color: red;">{{goodscount}}</text>
						</view>
						<view class="stock-context-show">
							<text>当前断货品规 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_stockInfo">
					<view>
						<view>
							<text style="color: red;">{{imp_outrate}} % </text>
						</view>
						<view class="stock-context-show">
							<text>畅销品种断货率 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_osm">
					<view>
						<view>
							<text style="color: red;">{{imp_goodscount}}</text>
						</view>
						<view class="stock-context-show">
							<text>畅销品种断货品规</text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_stockInfo">
					<view>
						<view>
							<text v-if="!loadData_mle" >加载中...</text>
							<text v-if="loadData_mle" style="color: green;">{{core_outrate}} % </text>
							<!-- 此处注释留下次使用 -->
							<!-- <text style="color: green; font-size: 5rpx;">环比</text>
							<text style="color: green; font-size: 5rpx;"> -1.8%</text> -->
						</view>
						<view class="stock-context-show">
							<text>核心品种断货率 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series">
					<view>
						<view>
							<text v-if="!loadData_mle" >加载中...</text>
							<text v-if="loadData_mle" >{{core_goodscount}}</text>
						</view>
						<view class="stock-context-show">
							<text>核心品种断货品规 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series" @click="cli_stockInfo">
					<view>
						<view>
							<text style="color: #a1a1a1;">点击查看</text>
						</view>
						<view class="stock-context-show">
							<text>30天累计断货查询 </text>
							<image src="../static/img/public/查看详情-右箭头.svg"></image>
						</view>
					</view>
				</view>
				<view class="stock-context-series"></view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/动销管理.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>动销管理</text>
				</view>
				<view style="display: grid; justify-items: end; margin-right: 15rpx;" @click="cli_dsi">
					<image src="../static/img/public/向右箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
				</view>
			</view>
			<view class="actveSales" @click="cli_dsi">
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>总品规数</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx;">
						<text style="color: green;">{{sum_goodscount}}个</text>
					</view>
				</view>
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>30天动销率</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx; align-items: center;">
						<text style="color: green;">31.5%</text>
					</view>
				</view>
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>90天动销率</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx; align-items: center;">
						<text style="color: green;">55%</text>
					</view>
				</view>
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>30-90天不动销率</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx; align-items: center;">
						<text style="color: red;">{{Bdxgoodscount_30_90}} 个</text>
					</view>
				</view>
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>90-180天不动销率</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx; align-items: center;">
						<text style="color: red;">{{Bdxgoodscount_90_180}} 个</text>
					</view>
				</view>
				<view class="actveSales-title">
					<view style="margin-left: 50rpx;">
						<text>180天不动销率</text>
					</view>
					<view style="display: grid; justify-items: end; margin-right: 50rpx; align-items: center;">
						<text style="color: red;">{{Bdxgoodscount_180}} 个</text>
					</view>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/新品管理.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>新品管理</text>
				</view>
				<view style="display: grid; justify-items: end; margin-right: 15rpx;" @click="cli_newTop">
					<image src="../static/img/public/向右箭头.svg" style="width: 30rpx; height: 30rpx;"></image>
				</view>
			</view>
			<view class="newPro" @click="cli_newTop">
				<view style="border-right: 1rpx solid #a2a2a2;">
					<text style="color: green;">218</text>
					<text style="color: #a2a2a2;">新品品规 (个)</text>
				</view>
				<view>
					<text style="color: #e4513f;">121</text>
					<text style="color: #a2a2a2;">不动销新品 (个)</text>
				</view>
			</view>
			<view style="display: grid; grid-template-columns: 1fr 1fr;">
				<view style="display: grid; grid-template-columns: auto 1fr; gap: 10rpx; align-items: center;">
					<image src="../static/img/public/有效期管理.svg" style="width: 50rpx; height: 50rpx;"></image>
					<text>效期管理</text>
				</view>
			</view>
			<view class="vid" @click="cli_3vid">
				<view class="vid-top">
					<text class="vid-top-text">3个月内</text>
					<image src="../static/img/public/查看详情-右箭头.svg" class="vid-top-img"></image>
				</view>
				<view class="vid-bottom">
					<view>
						<text>42</text>
						<text>近有效期批次</text>
					</view>
					<view>
						<text style="color: red;">1230</text>
						<text>库存成本金额</text>
					</view>
					<view>
						<text>1.1%</text>
						<text>库存占比</text>
					</view>
				</view>
			</view>
			<view class="vid" @click="cli_6vid">
				<view class="vid-top">
					<text class="vid-top-text">3-6个月</text>
					<image src="../static/img/public/查看详情-右箭头.svg" class="vid-top-img"></image>
				</view>
				<view class="vid-bottom">
					<view>
						<text>113</text>
						<text>近有效期批次</text>
					</view>
					<view>
						<text style="color: red;">3467</text>
						<text>库存成本金额</text>
					</view>
					<view>
						<text>3%</text>
						<text>库存占比</text>
					</view>
				</view>
			</view>
			<view class="vid" @click="cli_12vid">
				<view class="vid-top">
					<text class="vid-top-text">6-12个月内</text>
					<image src="../static/img/public/查看详情-右箭头.svg" class="vid-top-img"></image>
				</view>
				<view class="vid-bottom">
					<view>
						<text>347</text>
						<text>近有效期批次</text>
					</view>
					<view>
						<text style="color: red;">13357</text>
						<text>库存成本金额</text>
					</view>
					<view>
						<text>11.7%</text>
						<text>库存占比</text>
					</view>
				</view>
			</view>
			<view class="selectTime">
				<view class="settingTime">
					<text style="margin-left: 25rpx;">未设置自定义时间</text>
					<button style="background-color: white; color: #67a7d5; border: 1px solid #67a7d5" size="mini">查找</button>
				</view>
				<view class="vid-bottom">
					<view>
						<text> - </text>
						<text>近有效期批次</text>
					</view>
					<view>
						<text style="color: red;"> - </text>
						<text>库存成本金额</text>
					</view>
					<view>
						<text> - </text>
						<text>库存占比</text>
					</view>
				</view>
			</view>
			<view class="lastTime">
				<button style="background-color: white; color: #1d8fff; border: 1px solid #1d8fff;">更多查询</button>
			</view>
		</view>
	</view>
</template>
	
<script setup>
	import { ref, watch } from 'vue'
	import {onShow} from '@dcloudio/uni-app'
	import requestFast from '../utils/requestFast'
	import MyDra from '../components/MyDra.vue'
	import { useCounterStore } from '../store/counter'
	import { getCurrentDate } from '../utils/dateUtils'
	import JqTopShowVue from '../components/Jq-TopShow.vue'
	
	onShow( async () => {
		selectDate.value = getCurrentDate()
		//避免出现空加载页面去请求后台数据
		if (counter.storageName === '请选择查询门店') {
			return;
		}
		
		changeData_goods(counter.placepointid)
		changeData_goodsLKS(counter.placepointid)
		changeData_SumGoodscount(counter.placepointid)
		changeData_goodsMLE(counter.placepointid)
		changeData(counter.placepointid)
		changeData_BDxGoodsCount(counter.placepointid)
	})
	
	const counter = useCounterStore()
	const selectDate = ref('')
	const showDra = ref(null)
	//库存金额
	const stockmoney = ref(0)
	//当前周转天数
	const turnoverdays = ref(0)
	//断货率
	const outrate = ref(0)
	//品规数
	const goodscount = ref(0)
	//最近30天日均销售成本额
	const avg30money = ref(0)
	const loadData = ref(false)
	//畅销品种品规以及断货率
	const imp_outrate = ref(0)
	const imp_goodscount = ref(0)
	//核心品种品规以及断货率
	const core_outrate = ref(0)
	//总品规数
	const sum_goodscount = ref(0)
	//30天动销品规数
	const dxgoodscount_per_30 = ref(0)
	//90天动销品规数
	const dxgoodscount_per_90 = ref(0)
	//30-90天不动销率
	const Bdxgoodscount_30_90 = ref(0)
	//90-180天不动销率
	const Bdxgoodscount_90_180 = ref(0)
	//180天不动销率
	const Bdxgoodscount_180 = ref(0)
	
	const core_goodscount = ref(0)
	const loadData_mle = ref(false)
	

    //监听状态管理的ID是否发生变化
	watch(() => counter.storageId, (newValue, oldValue) => {
		changeData(newValue)
	})
	
	watch(() => counter.placepointid,  (newValue, oldValue) => {
		changeData_goods(newValue)
		changeData_goodsLKS(newValue)
		changeData_goodsMLE(newValue)
		changeData_SumGoodscount(newValue)
		changeData_DxGoodsCount(newValue)
		changeData_BDxGoodsCount(newValue)
	})
	
	const getDate = (date) => {
		console.log(date)
	}
	
	const changeData_BDxGoodsCount = async (Id) => {
		Bdxgoodscount_30_90.value = await BDxGoodsCount(30, 90, Id)
		Bdxgoodscount_90_180.value = await BDxGoodsCount(90, 180, Id)
		Bdxgoodscount_180.value = await BDxGoodsCount(180, 0, Id)
	}
	
	const BDxGoodsCount = async (start, end, Id) => {
		var res = await requestFast.post('/app/goods/getBDXGoodscountByPlacepointid/v1', {
			placepointid: Id,
			storageid: counter.storageId,
			startdays: start,
			enddays: end
		})
		return res.data.根据门店ID和保管账ID和天数获取对应门店不动销品规数.goodscount
	}
	
	const changeData_DxGoodsCount = async (Id) => {
		var day30 = await DxGoodsCount(30, Id)
		var day90 = await DxGoodsCount(90, Id)
	}
	
	const DxGoodsCount = async (days, Id) => {
		var res = await requestFast.post('/app/goods/getDXGoodscountByPlacepointid/v1', {
			days: days,
			placepointid: Id,
			storageid: counter.storageId
		})
		return res.data.根据门店ID和保管账ID和天数获取对应门店动销品规数.goodscount
	}
	
	const changeData = async (Id) => {
		stockmoney.value = 0
		turnoverdays.value = 0
		loadData.value = false
		const res_turnoverdays = await requestFast.post('/app/goods/getMoneyAndTurnoverdays/v1', {
			placepointid: Id,
			storageid: counter.storageId
		})
		var _res = res_turnoverdays.data.根据门店ID和保管账ID获取库存金额跟当前周转天数
		stockmoney.value = _res.stockmoney
		turnoverdays.value = _res.turnoverdays
		loadData.value = true
	}
	
	const changeData_SumGoodscount = async(pid) => {
		sum_goodscount.value = 0
		const res = await requestFast.post('/app/goods/getGoodscountByStorageid/v1', {
			placepointid: pid,
			storageid: counter.storageId
		})
		var _res = res.data.根据门店ID和保管账ID获取门店品规数
		sum_goodscount.value = _res.goodscount
	}
	
	const changeData_goods = async (pid) => {
		goodscount.value = 0
		outrate.value = 0
		const res = await requestFast.post('/app/goods/getOutGoodscountByPlacepointidAndStorageid/v1', {
			placepointid: pid,
			storageid: counter.storageId
		})
		var _res = res.data.根据门店ID和保管账ID获取当前断货情况
		goodscount.value = _res.goodscount
		outrate.value = _res.outrate
	}
	
	const changeData_goodsLKS = async (pid) => {
		const res = await requestFast.post('/app/goods/getLKSGoodsByPlacepointid/v1', {
			placepointid: pid,
			storageid: counter.storageId
		})
		var _res = res.data.根据门店ID和保管账ID获取畅销品断货情况
		imp_goodscount.value = _res.goodscount
		imp_outrate.value = _res.outrate
	}
	
	const changeData_goodsMLE = async (pid) => {
		core_outrate.value = 0
		core_goodscount.value = 0
		loadData_mle.value = false
		const res = await requestFast.post('/app/goods/getMLEGoodsByStorageid/v1', {
			placepointid: pid,
			storageid: counter.storageId
		})
		var _res = res.data.根据门店ID和保管账ID获取核心品断货情况
		core_goodscount.value = _res.goodscount
		core_outrate.value = _res.outrate
		loadData_mle.value = true
	}
	
	const showDataDra = () => {
		showDra.value.openDra()
	}
	
	const cli_serach = () => {
		uni.navigateTo({
			url:'/pages/stockSerach'
		})
	}
	
	const cli_12vid = () => {
		uni.navigateTo({
			url:'/pages/12-vid'
		})
	}
	
	const cli_6vid = () => {
		uni.navigateTo({
			url:'/pages/6-vid'
		})
	}
	
	const cli_3vid = () => {
		uni.navigateTo({
			url:'/pages/3-vid'
		})
	}
	
	const cli_dsi = () => {
		uni.navigateTo({
			url:'/pages/dynamicSalesInfo'
		})
	}
	
	const cli_newTop = () => {
		uni.navigateTo({
			url:'/pages/newTopPrimary'
		})
	}
	
	const cli_osm = () => {
		uni.navigateTo({
			url:'/pages/outStockManage'
		})
	}
	
	const cli_stockInfo = () => {
		uni.navigateTo({
			url:'/pages/stockInfo'
		})
	}
	
	const cli_turnover = () => {
		uni.navigateTo({
			url:'/pages/turnoverDays'
		})
	}
</script>

<style scoped>
	.lastTime {
		width: 100%;
	}
	.settingTime {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		width: 100%;
		border-bottom: 1rpx solid #f5f5f5;
	}
	.selectTime {
		display: grid;
		grid-template-rows: 1fr 1fr;
		height: 300rpx;
		border-radius: 35rpx;
		background-color: white;
	}
	.vid-bottom > view {
		display: grid;
		grid-template-rows: auto;
		height: 80%;
		place-items: center;
		border-right: 1px solid #f1f1f1;
	}
	.vid-bottom {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
	}
	.vid-top-text {
		margin-left: 50rpx;
	}
	.vid-top-img {
		margin-right: 80rpx;
		width: 30rpx; 
		height: 30rpx; 
		justify-self: end;
	}
	.vid-top {
		height: 100%; 
		display: grid; 
		grid-template-columns: 1fr 1fr; 
		align-items: center; 
		border-bottom: 1rpx solid #f5f5f5;
	}
	.vid {
		display: grid;
		grid-template-rows: 1fr 2fr;
		height: 300rpx;
		background-color: white;
		border-radius: 35rpx;
	}
	.newPro > view {
		display: grid;
		grid-template-rows: auto; 
		justify-items: center; 
		width: 100%; 
	}
	.newPro {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		background-color: white;
		border-radius: 35rpx;
		height: 200rpx;
	}
	.actveSales-title > view {
		
	}
	
	.actveSales-title {
		height: 100rpx;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		/* border-bottom: 1rpx solid deeppink; */
	}
	.actveSales {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		background-color: white;
		border-radius: 35rpx;
	}
	.stock-context-show {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 8rpx;
		align-items: center;
		margin-bottom: 15rpx;
	}
	.stock-context-show > image {
		width: 30rpx;
		height: 30rpx;
		
	}
	.stock-context {
		display: grid;
		background-color: white;
		border-radius: 35rpx;
		grid-template-columns: repeat(2, 1fr);
	}
	.stock-context-series {
		display: grid;
		grid-template-rows: auto;
		place-items: center;
		height: 200rpx;
		/* border: 1px solid red; */
	}
	.stock-context-series > view {
		display: grid; 
		place-items: center; 
		gap: 10rpx;
		border-bottom: 1rpx solid #f1f1f1;
	}
	.body {
		width: 100vw;
		background-color: #f5f5f5;
		display: grid;
		justify-items: center;
	}
	.context {
		width: 94%;
	}
	.context > view {
		margin: 20rpx 0;
	}
</style>
