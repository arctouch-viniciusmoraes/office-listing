<template>
    <div class="ColorSelector">
        <div
            class="ColorSelector__colorBox"
            :key="key"
            v-for="(color, key) in colors"
			:class="color"
			@click="selectColor(color)"
        >
			<div v-if="color === selectedColor" class="ColorSelector-selected">
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
		selectedColor: String,
	},
	data() {
		return {
			colors: ['bg-orange-300', 'bg-red-300', 'bg-teal-500', 'bg-gray-500', 'bg-gray-800'],
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
