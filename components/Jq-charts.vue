<template>
	<view class="charts-box">
		<qiun-data-charts
		type="line"
		:opts="opts"
		:chartData="chartDatas"
		>
		</qiun-data-charts>
	</view>
</template>

<script setup>
		const props = defineProps({
			opts: {
				type: Object,
				default: {
							color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
							padding: [15,10,0,15],
							enableScroll: false,
							legend: {},
							xAxis: {
								disableGrid: true
							},
							yAxis: {
								gridType: "dash",
								dashLength: 2
							},
							extra: {
								line: {
									type: "curve",
									width: 2,
									activeType: "hollow"
								}
							}
						}
			},
				chartDatas: {
					type: Object,
					default: {
						categories: ["2018","2019","2020","2021","2022","2023"],
						series: [
						  {
						    name: "样式A",
						    lineType: "dash",
						    data: [1,2,3,4,4,5]
						  },
						  {
						    name: "样式B",
						    data: [3,5,7,9,9,6]
						  }
						]
					}
				}
		})
</script>

<style scoped>
	.charts-box {
	  width: 100%;
	  height: 200px;
	}
</style>