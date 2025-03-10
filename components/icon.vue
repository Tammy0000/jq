<template>
	<view class="icon">
		<image :src="src" style="width: 50rpx; height: 50rpx;"></image>
		<text :style="`font-size: ${fontSize}`">{{counter.storageName}}</text>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { useCounterStore } from '../store/counter';
	
	const counter = useCounterStore()
		
	const props = defineProps({
		src: {
			type: String,
			default: "../static/img/public/门店.svg"
		},
		fontSize: {
			type: String,
			default: '25rpx'
		}
	})
</script>

<style scoped>
	.icon {
		display: grid; 
		grid-template-columns: auto 1fr; 
		gap: 15rpx; 
		align-items: center;
	}
</style>