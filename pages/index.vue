<template>
	<div class="MainContainer">
		<h1 class="MainContainer__title">Offices</h1>
		<CardsList />
		<footer class="MainContainer__footer">
			<p>This project is for test purpose only.</p>
			<a href="http://www.dogandponystudios.com" target="_blank" class="link">www.dogandponystudios.com</a>
		</footer>
	</div>
</template>

<script>
import CardsList from '@/components/CardsList';
export default {
	components: {
		CardsList,
	},
}
</script>

<style lang="scss" scoped>
.MainContainer {
	@apply
	bg-gray-200
	flex
	flex-col
	h-full w-full
	items-center
	min-h-screen;

	&__title {
		@apply
		font-thin
		my-12
		text-6xl
		text-teal-500;
	}

	&__footer {
		@apply
		leading-7
		font-thin
		text-gray-500
		mt-4 mb-12
		text-center;

		.link {
			@apply
			text-xs
			uppercase
			text-teal-500
		}
	}
}
</style>
