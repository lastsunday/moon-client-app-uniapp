<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
			<!-- uni-ui -->
			<uni-badge text="1"></uni-badge>
			<!-- project components -->
			<m-input ref="account" :tabindex="1" type="text" clearable v-model="account" />
			<!-- uview-ui -->
			<u-action-sheet :list="list" v-model="show" :cancel-text="cancelText"></u-action-sheet>
			<!-- i18n -->
			<view>
				<text>{{ $t('view.index.i18nTest') }}</text>
			</view>
			<view>
				<text>{{ i18nInScript }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import mInput from '../../components/m-input.vue';
export default {
	components: { mInput },
	data() {
		return {
			title: 'Hello',
			account: 'Test Account',
			list: [
				{
					text: 'Like',
					color: 'blue',
					fontSize: 28
				},
				{
					text: 'Share'
				},
				{
					text: 'Comment'
				}
			],
			cancelText: 'Cancel',
			show: true,
			i18nInScript: null
		};
	},
	onLoad() {
		this.i18nInScript = this.$t('view.index.i18nTestInScript');
	},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
