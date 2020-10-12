<template>
	<div class="NotificationBar">
		<div class="NotificationBar__closeIcon" @click="close"><Close /></div>
		<div class="NotificationBar__checkIcon"><Check /></div>
		<div class="NotificationBar__message">{{message}}</div>
	</div>
</template>

<script>
import Check from '@/assets/check-icon';
import Close from '@/assets/close-icon';

export default {
	name: 'NotificationBar',
	components: {
		Check,
		Close,
	},
	props: {
		message: String,
	},
	methods: {
		close() {
			this.$emit('close');
		}
	}
}
</script>

<style lang="scss" scoped>
.NotificationBar {
	@apply
	bg-white
	fixed
	flex
	font-thin
	h-20
	items-center
	justify-center
	text-gray-500
	text-xs
	top-0
	tracking-wide
	uppercase
	w-full
	z-20;

	&__checkIcon {
		svg{
			@apply
			fill-current
			h-4 w-4
			mr-6
			text-green-500;
		}
	}

	&__closeIcon {
		@apply
		absolute
		cursor-pointer
		right-10;

		svg{
			@apply
			text-gray-500
			fill-current
			mr-6
			h-6 w-6;
		}
	}

}
</style>
