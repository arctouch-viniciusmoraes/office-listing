<template>
	<button class="SimpleButton">
		<div class="SimpleButton__label">{{label}}</div>
	</button>
</template>

<script>
export default {
	name: 'SimpleButton',
	props: {
		label: String,
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
	p-2
	rounded
	text-sm
	text-white
	w-3/12 h-10;

	&.disabled {
		@apply
		bg-gray-500
		cursor-default;
	}
}
</style>
