<template>
    <div class="CardsList">
        <div
            class="CardsList__addNew"
            :class="{ hiddenButton: isFormOpened }"
            @click="openForm"
        >
            <Button label="Add new location">
                <PlusIcon />
            </Button>
        </div>
        <div class="CardsList__Form" :class="{ opened: isFormOpened }">
            <Form @close="isFormOpened = false" />
        </div>
        <div
			@click="toggleCardDetails(office._id)"
            class="CardsList__officeCard"
            :key="key"
            v-for="(office, key) in offices"
        >
            <div class="CardsList__officeCard--item">
                <Card :officeData="office" />
            </div>
            <div
                class="CardsList__officeCard--detail"
                :class="{
                    opened: isDetailOpened && selectedOffice === office._id,
                }"
            >
                <CardDetails :officeDetails="office" />
            </div>
        </div>
    </div>
</template>

<script>
const offices = require("@/data/offices.json");
import Button from "@/components/IconButton.vue";
import Card from "@/components/Card";
import CardDetails from "@/components/CardDetails";
import Form from "@/components/Form";

import PlusIcon from "@/assets/plus-icon.vue";

export default {
    name: "CardsList",
    components: {
        Button,
        Card,
        PlusIcon,
        Form,
        CardDetails,
    },
    data() {
        return {
            offices,
            isFormOpened: false,
            isDetailOpened: false,
            selectedOffice: null,
        };
    },
    methods: {
        openForm() {
			this.isFormOpened = true;
			this.isDetailOpened = false;
			this.selectedOffice = null;
		},
		toggleCardDetails(officeId) {
			this.isFormOpened = false;

			if (this.selectedOffice === officeId) {
				this.selectedOffice = null;
				this.isDetailOpened = false;
			} else if (!this.selectedOffice) {
				this.selectedOffice = officeId;
				this.isDetailOpened = true;
			} else if (!!this.selectedOffice && this.selectedOffice !== officeId) {
				this.isDetailOpened = false;
				this.selectedOffice = officeId;
				this.isDetailOpened = true;
			}
		}
    },
};
</script>

<style lang="scss" scoped>
.CardsList {
    @apply flex
	flex-col
	items-center;

    &__addNew {
        @apply duration-500
		opacity-100
		transition-all;

        &.hiddenButton {
            @apply duration-500
			opacity-0
			transition-all;
        }
    }

    &__Form {
        @apply duration-500
		max-h-0
		overflow-hidden
		relative
		top-0
		transition-all;

        &.opened {
            @apply -mb-20
			duration-500
			max-h-form
			relative
			top-n80
			transition-all;
        }
    }

    &__officeCard {
		@apply my-3;

		&--detail {
			height: 0;
			@apply
			duration-700
			ease-out
			overflow-hidden
			transition-all;

			&.opened {
				height: 250px;
				@apply
				duration-700
				ease-out
				transition-all;
			}
		}
	}


}
</style>
