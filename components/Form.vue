<template>
	<section class="Form">
		<div class="Form__header">
			<h3>New Location</h3>
			<div class="Form__header--close" @click="close">
				<Close />
			</div>
		</div>
		<section class="Form__mainInfo">
			<div class="Form__colorSelector">
				<button class="Form__colorSelector__button" :class="selectedColor" @click="toggleColorSelector">
					<div class="button__label">Select Color</div>
					<div class="button__icon"><Chevron /> </div>
				</button>
				<div class="Form__colorSelector__colorList" :class="{opened: isColorSelectorOpened}">
					<ColorSelector :colorOptions="colorOptions" :selectedColor="selectedColor" @selectColor="updateColorSelection" />
				</div>
			</div>
			<div class="Form__input Form__input--title">
				<label class="inputLabel" for="title">Title <sup>*</sup></label>
				<input
					v-model="field.title.value"
					class="inputField"
					:class="{invalid: !!error.title}"
					id="title"
					type="text" @change="validateInputData">
				<div v-if="!!error.title" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.title">{{error.title}}</span>
			</div>
			<div class="Form__input Form__input--address">
				<label class="inputLabel" for="address">Enter the address <sup>*</sup></label>
				<input
					v-model="field.address.value"
					class="inputField"
					:class="{invalid: !!error.address}"
					id="address"
					type="text" @change="validateInputData">
				<div v-if="!!error.address" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.address">{{error.address}}</span>
			</div>
		</section>
		<section class="Form__contactInfo">
			<h4 class="Form__contactInfo--sectionHeader">
				Contact Information
			</h4>
			<hr>
			<div class="Form__input Form__input--name">
				<label class="inputLabel" for="fullName">Full name <sup>*</sup></label>
				<input
					v-model="field.fullName.value"
					class="inputField"
					:class="{invalid: !!error.fullName}"
					id="fullName"
					type="text" @change="validateInputData">
				<div v-if="!!error.fullName" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.fullName">{{error.fullName}}</span>
			</div>
			<div class="Form__input Form__input--jobPosition">
				<label class="inputLabel" for="jobPosition">Job Position <sup>*</sup></label>
				<input
					v-model="field.jobPosition.value"
					class="inputField"
					:class="{invalid: !!error.jobPosition}"
					id="jobPosition"
					type="text" @change="validateInputData">
				<div v-if="!!error.jobPosition" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.jobPosition">{{error.jobPosition}}</span>
			</div>
			<div class="Form__input Form__input--email">
				<label class="inputLabel" for="email">Email address <sup>*</sup></label>
				<input
					v-model="field.email.value"
					class="inputField"
					:class="{invalid: !!error.email}"
					id="email"
					type="email" @change="validateInputData">
				<div v-if="!!error.email" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.email">{{error.email}}</span>
			</div>
			<div class="Form__input Form__input--phone">
				<label class="inputLabel" for="phone">Phone <sup>*</sup></label>
				<input
					v-model="field.phone.value"
					class="inputField"
					:class="{invalid: !!error.phone}"
					id="phone"
					v-mask="'(999) 999-9999'"
					type="email" @change="validateInputData">
				<div v-if="!!error.phone" class="Form__input__errorIcon"><Attention /></div>
				<span class="Form__input__error" v-if="!!error.phone">{{error.phone}}</span>
			</div>
			<Button label="Save" :enabled="isFormValidated" />

		</section>
	</section>
</template>

<script>
import validateForm from '@/utils/validation.js';
import { colorOptions } from "@/data/constants.js";
import AwesomeMask from 'awesome-mask';

import Close from "@/assets/close-icon.vue";
import Chevron from "@/assets/chevron-thick-icon";
import Attention from "@/assets/attention-icon";

import ColorSelector from '@/components/ColorSelector.vue';
import Button from '@/components/SimpleButton';

export default {
	name: 'Form',
	components: {
		Attention,
		Button,
		Chevron,
		Close,
		ColorSelector,
	},
	data() {
		return {
			colorOptions,
			isColorSelectorOpened: false,
			selectedColor: null || 'bg-orange-300',
			isFormValidated: false,
			error: {
				title: null,
				address: null,
				fullName: null,
				jobPosition: null,
				email: null,
				phone: null,
			},
			field: {
				title: {
					value: null,
					isValid: false,
				},
				address: {
					value: null,
					isValid: false,
				},
				fullName: {
					value: null,
					isValid: false,
				},
				jobPosition: {
					value: null,
					isValid: false,
				},
				email: {
					value: null,
					isValid: false,
				},
				phone: {
					value: null,
					isValid: false,
				},
			},
		};
	},
	directives: {
		'mask': AwesomeMask,
	},
	methods: {
		close() {
			this.$emit('close');
		},
		toggleColorSelector() {
			this.isColorSelectorOpened = !this.isColorSelectorOpened;
		},
		updateColorSelection(color) {
			this.selectedColor = color;
			this.isColorSelectorOpened = false;
		},
		validateInputData(event) {
			const validationResult = validateForm(event.target.id, event.target.value);
			if (validationResult === 'ok') {
				this.field[event.target.id].valid = true;
			} else {
				this.error[event.target.id] = validationResult;
			}
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
		mb-4 mt-6
		text-green-500
		text-sm
		uppercase;

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
			relative
			rounded
			shadow-sm
			text-sm
			w-full h-10;

			&:focus {
				@apply
				border-green-500;
			}

			&.invalid {
				@apply
				border-red-500;
			}
		}

		&__error {
			@apply
			font-thin
			mt-1
			text-red-500
			text-xs;
		}

		&__errorIcon {
			@apply
			absolute
			mt-8
			right-30
			text-red-500;

			svg {
				@apply
				fill-current
				h-6 w-6
			}
		}
	}

	&__colorSelector {
		&__button {
			@apply
			flex
			font-bold
			h-32
			items-center
			justify-center
			my-2
			outline-none
			rounded-lg
			shadow
			text-sm
			text-white
			w-full;

			.button__label {
				@apply
				mx-4;
			}

			svg {
				@apply
				fill-current
				h-3
				w-3
			}
		}

		&__colorList {
			@apply
			duration-500
			max-h-0
			overflow-hidden
			relative
			transition-all;

			&.opened {
				@apply
				duration-700
				max-h-form
				relative
				transition-all;
			}
		}
    }
}
</style>
