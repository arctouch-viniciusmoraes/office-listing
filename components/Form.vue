<template>
	<form class="Form">
		<div class="Form__header">
			<h3>New Location</h3>
			<div class="Form__header--close" @click="close">
				<Close />
			</div>
		</div>
		<section class="Form__mainInfo">
			<ColorSelector />
			<div class="Form__input Form__input--title">
				<label class="inputLabel" for="title">Title <sup>*</sup></label>
				<input class="inputField" id="title" type="text">
			</div>
			<div class="Form__input Form__input--address">
				<label class="inputLabel" for="address">Enter the address <sup>*</sup></label>
				<input class="inputField" id="address" type="text">
			</div>
		</section>
		<section class="Form__contactInfo">
			<h4 class="Form__contactInfo--sectionHeader">
				Contact Information
			</h4>
			<hr>
			<div class="Form__input Form__input--name">
				<label class="inputLabel" for="name">Full name <sup>*</sup></label>
				<input class="inputField" id="name" type="text">
			</div>
			<div class="Form__input Form__input--jobPosition">
				<label class="inputLabel" for="jobPosition">Job Position <sup>*</sup></label>
				<input class="inputField" id="jobPosition" type="text">
			</div>
			<div class="Form__input Form__input--email">
				<label class="inputLabel" for="email">Email address <sup>*</sup></label>
				<input class="inputField" id="email" type="email">
			</div>
			<div class="Form__input Form__input--phone">
				<label class="inputLabel" for="phone">Phone <sup>*</sup></label>
				<input class="inputField" id="phone" type="email">
			</div>
			<Button label="Save" />

		</section>
	</form>
</template>

<script>
import Close from "@/assets/close-icon.vue";
import ColorSelector from '@/components/ColorSelector.vue';
import Button from '@/components/SimpleButton';

export default {
	name: 'Form',
	components: {
		Close,
		ColorSelector,
		Button,
	},
	data() {
		return {

		}
	},
	methods: {
		close() {
			this.$emit('close');
		}
	}
}
</script>
<style lang="scss" scoped>
.Form {
	@apply
	bg-white
	mb-3
	p-5
	rounded-lg
	shadow
	w-84 h-auto
	overflow-hidden;

	&__header {
		@apply
		flex
		font-semibold
		items-center
		justify-between
		mb-10
		text-sm
		w-full;

		&--close {
			@apply
			cursor-pointer;
		}

		svg {
			@apply
			fill-current
			w-5 h-5;
		}
	}

	&__contactInfo--sectionHeader {
		@apply
		text-green-500
		uppercase
		text-sm
		mb-4 mt-6;

	}

	&__input {
		@apply
		flex
		flex-col
		items-start
		my-6;

		.inputLabel {
			@apply
			font-thin
			text-sm
			mb-1;
		}

		.inputField {
			@apply
			border
			border-black
			font-thin
			outline-none
			px-3
			rounded
			shadow-sm
			text-sm
			w-full h-10;

			&:focus {
				@apply
				border-green-500;
			}
		}
	}
}
</style>
