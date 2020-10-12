<template>
    <div class="ColorSelector">
        <div
            class="ColorSelector__colorBox"
            :key="key"
            v-for="(option, key) in colorOptions"
			:class="[option.color]"
			@click="selectColor(option.color)"
        >
			<div v-if="option.color === selectedColor" class="ColorSelector-selected">
				<Check />
			</div>
		</div>
    </div>
</template>

<script>

import Check from "@/assets/check-icon";

export default {
	name: "ColorSelector",
	components: {
		Check,
	},
	props: {
		colorOptions:Array,
		selectedColor: String,
	},
	data() {
		return {
		};
	},
	methods: {
		selectColor(color) {
			this.$emit('selectColor', color);
		}
	}
};
</script>

<style lang="scss" scoped>
.ColorSelector {
	@apply
	w-full;

    &__colorBox {
		@apply
		cursor-pointer
		flex
		justify-center
		items-center
		text-sm
		rounded-lg
		font-bold
		text-white
		w-full
		my-3
		h-32;

		svg {
			@apply
			fill-current
			h-6
			w-6;
		}
    }
}
</style>
