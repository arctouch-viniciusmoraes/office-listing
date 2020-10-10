<template>
    <div class="Card" :class="officeData.color">
        <div class="Card__frontFace">
            <div class="Card__mainInfo">
                <h2 class="mainInfo__title">{{ officeData.title }}</h2>
                <div class="mainInfo__address">{{ officeData.address }}</div>
            </div>
            <Chevron />
        </div>
    </div>
</template>

<script>
import Chevron from "@/assets/chevron-icon.vue";

export default {
    name: "Card",
    props: {
        officeData: {
            type: Object,
            required: true,
        },
    },
    components: {
        Chevron,
    },
};
</script>

<style lang="scss" scoped>
.Card {
    @apply cursor-pointer
	h-40
	relative
	rounded-lg
	shadow
	w-84;

    &__frontFace {
        @apply flex
		h-full
		items-center
		justify-between
		py-2 px-5
		text-white;

        svg {
            @apply fill-current
			h-6
			w-6;
        }
    }

    .mainInfo {
        &__title {
            @apply font-semibold
			text-2xl;
        }
    }
}
</style>
