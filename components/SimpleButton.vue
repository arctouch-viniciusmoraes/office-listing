<template>
	<button class="SimpleButton" :class="{disabled: !enabled}">
		<div class="SimpleButton__label">{{label}}</div>
	</button>
</template>

<script>
export default {
	name: 'SimpleButton',
	props: {
		label: String,
		enabled: Boolean,
	}
}
</script>

<style lang="scss" scoped>
.SimpleButton{
	@apply
	bg-green-400
	cursor-pointer
	font-thin
	my-3
	outline-none
	p-2
	rounded
	text-sm
	text-white
	w-3/12 h-10;

	&.disabled {
		@apply
		bg-gray-500
		cursor-default;

		&:hover {
			@apply
			bg-gray-500;
		}
	}

	&:hover {
		@apply
		bg-green-500;
	}
}
</style>
