<template>
    <div class="CardDetails">
        <div class="CardDetails__item CardDetails__name">
            {{ officeDetails.fullName }}
        </div>
        <div class="CardDetails__item CardDetails__jobPosition">
            {{ officeDetails.jobPosition }}
        </div>
        <div class="CardDetails__item CardDetails__email">
            {{ officeDetails.email }}
        </div>
        <div class="CardDetails__item CardDetails__phone">
            {{ officeDetails.phone }}
        </div>
        <hr />
        <section class="CardDetails__action">
			<div class="CardDetails__action--delete">
				<ActionButton
					label="Edit"
					bkgColor="bg-transparent"
					fontColor="text-gray-500"
					><EditIcon />
				</ActionButton>
			</div>
			<div class="CardDetails__action--delete">
				<ActionButton
					label="Delete"
					bkgColor="bg-transparent"
					fontColor="text-red-400"
					><DeleteIcon/>
				</ActionButton>
			</div>
        </section>
    </div>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import EditIcon from "@/assets/edit-icon.vue";
import DeleteIcon from "@/assets/delete-icon.vue";

export default {
    name: "CardDetails",
    components: {
        ActionButton,
		EditIcon,
		DeleteIcon,
    },
    props: {
        officeDetails: Object,
    },
};
</script>

<style lang="scss" scoped>
.CardDetails {
    @apply bg-white
	-my-3
	h-auto
	pb-4 pt-8 px-8
	rounded-b-lg
	shadow
	w-84;

    &__action {
		@apply flex
		justify-between;
    }

    &__item {
        @apply mb-3;
    }

    &__name {
        @apply font-bold
		text-lg;
    }

    &__jobPosition {
        @apply font-light;
    }

    &__email {
        @apply font-light
		text-green-500;
    }

    &__phone {
        @apply font-thin;
    }
}
</style>
