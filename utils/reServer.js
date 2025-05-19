import requestFast  from "./requestFast";

export default {
	//获取token是否有效
	checkToken: async (token) => await requestFast.get('/user/checkToken/' + token),
	//用户登录
	login: async (phoneNumber, password) =>  await requestFast.post('/user/login', {phoneNumber: phoneNumber, password: password}),
	//用户退出登录
	logout: async () => await requestFast.get('/user/logout/'),
	//获取门店信息 
	getStoreInfo: async (pid) => await requestFast.post('/public/store/view/getStoreInfo'),
	//获取门店库存金额
	getStockAmount: async (pid) => await requestFast.post('/public/store/view/getStockAmount', {pid: pid}),
	//获取门店时间内的周转天数
	getTurnoverDays: async (pid, startTime, endTime) => await requestFast.post('/public/store/view/getTurnoverDays', {pid: pid, startTime: startTime, endTime: endTime}),
	//获取门店时间内的实收金额
	getReceivableAmount: async (pid, startTime, endTime) => await requestFast.post('/public/store/view/getActualAmount', {pid: pid, startTime: startTime, endTime: endTime}),
	//获取门店30天内断货数量
	getOutOfStockDays: async (pid, days) => await requestFast.post('/public/store/view/getOutOfStockDays', {pid: pid, days: days}),
	//获取门店30天内断货率
	getOutOfStockRate: async (pid, days) => await requestFast.post('/public/store/view/getOutOfStockRate', {pid: pid, days: days}),
	//获取门店时间内的重点商品断货数量以及断货率接口
	 getCoreGoodsOutOfStockTopGoodsRate: async (pid, days) => await requestFast.post('/public/store/view/getCoreGoodsOutOfStockTopGoodsRate', {pid:pid, days:days}),
	 //获取门店品规数
	 getStockCount: async (pid) => await requestFast.post('/public/store/view/getStockCount', {pid: pid}),
	 // 获取时间内的动销率
	 getinStoreSalesRate: async (pid, days) => await requestFast.post('/public/store/view/getinStoreSalesRate', {pid: pid, days: days}),
	 //  获取时间内的有效期金额
	 getSumInvaBatchmoney:async (pid, startDays, endDays) => await requestFast.post('/public/store/view/getSumInvaBatchmoney', {pid: pid, startDays: startDays, endDays: endDays}),
	// 获取门店时间内的有效期品规数库存金额占库存金额百分比
	getSumInvaBatchmoneyRate: async (pid, startDays, endDays) => await requestFast.post('/public/store/view/getSumInvaBatchmoneyRate', {pid: pid, startDays: startDays, endDays: endDays}),
	//获取门店时间内日均来客数
	getDailyCustomerCount: async (pid, startTime, endTime) => await requestFast.post('/public/store/view/getDailyCustomerCount', {pid: pid, startTime: startTime, endTime: endTime}),
	//获取门店天数内的断货率
	getOutOfStockRate: async (pid,days) => await requestFast.post('/public/store/view/getOutOfStockRate', {pid, days}),
	//模糊搜索门店信息
	getStoreInfoByKeyword: async (keyword) => await requestFast.post('/public/store/view/getStoreInfoByKeyword', {keyword: keyword}),
	// 获取门店时间内畅销品断货数量，畅销品断货率
	getTopGoodsOutOfStockRate: async (pid, days) => await requestFast.post('/public/store/view/getTopGoodsOutOfStockRate', {pid: pid, days: days}),
	//获取门店时间内核心品断货数量，畅销品断货率
	getCodeGoodsOutOfStockRate: async (pid, days) => await requestFast.post('/public/store/view/getCodeGoodsOutOfStockRate', {pid: pid, days: days}),
	//获取门店时间内的动销率
	getinStoreSalesRate: async (pid, days) => await requestFast.post('/public/store/view/getinStoreSalesRate', {pid: pid, days: days}),
	//获取门店时间内的不动销数量，eg: 0-30天的不动销数量，则days1 为0 days2则为30以此类推
	getNoSaleCountBySku: async (pid, days1, days2) => await requestFast.post('/public/store/view/getNoSaleCountBySku', {pid: pid, days1: days1, days2: days2}),
	//获取门店时间内新品品规数, 动销新品品规数, 不动销新品品规量
	getNewGoodsDataInfo: async (pid) => await requestFast.post('/public/store/view/getNewGoodsDataInfo', {pid:pid}),
	//获取门店时间内的有限期相关信息
	getSumInvaGoodsidInfo: async (pid, startdays, enddays) => await requestFast.post('/public/store/view/getSumInvaGoodsidInfo', {pid: pid, startdays: startdays, enddays: enddays}),
	//获取门店指定时间的目标情况
	getSalesTarget: async (pid, today) => await requestFast.post('/public/store/view/getSalesTarget', {pid: pid, today: today}),
	//根据商品名称模糊查询或者根据商品ID查询
	getProductQuerySummary: async(pid, keyword) => await requestFast.post('/public/store/view/getProductQuerySummary', {pid: pid, keyword: keyword}),
	//根据商品id查询所有门店库存情况
	getProductStoreStockList: async(goodsid) => await  requestFast.post('/public/store/view/getProductStoreStockList', {goodsid: goodsid})
}