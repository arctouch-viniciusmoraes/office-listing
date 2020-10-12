<template>
	<button class="ActionButton" :class="[bkgColor, fontColor]">
		<slot></slot>
		<div class="ActionButton__label">{{label}}</div>
	</button>
</template>

<script>
export default {
	name: 'ActionButton',
	props: {
		label: String,
		bkgColor: String,
		fontColor: String,
	}
}
</script>

<style lang="scss" scoped>
.ActionButton {
	@apply
	cursor-pointer
	items-center
	my-3
	outline-none
	h-8;

	&__label {
		@apply
		inline
		text-xs
		uppercase;
	}

	svg {
		@apply
		inline
		fill-current
		w-5 h-5;
	}

	&:hover {
		@apply
		pb-1;
	}
}
</style>
