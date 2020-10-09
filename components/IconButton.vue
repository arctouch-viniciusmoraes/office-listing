<template>
	<button class="IconButton">
		<div class="IconButton__label">{{label}}</div>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'IconButton',
	props: {
		label: String,
	}
}
</script>

<style lang="scss" scoped>
.IconButton {
	@apply
	bg-red-400
	cursor-pointer
	flex
	font-thin
	items-center
	justify-between
	my-3
	outline-none
	py-2 px-4
	rounded-lg
	shadow
	w-84 h-16;

	&__label {
		@apply
		text-sm
		text-white;
	}

	svg {
		@apply
		fill-current
		text-white
		w-8 h-8;
	}

	&:hover {
		@apply
		bg-red-500;
	}
}
</style>
