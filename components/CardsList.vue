<template>
    <div class="CardsList">
        <div
            class="CardsList__addNew"
            :class="{ hiddenButton: isFormOpened }"
            @click="openForm"
        >
            <Button label="Add new location" />
        </div>
        <div class="CardsList__Form" :class="{ opened: isFormOpened }">
            <Form @close="closeForm" :officeData="selectedOfficeObj" @add="addOffice" @update="updateOffice" />
        </div>
        <div
            class="CardsList__officeCard"
            :key="key"
            v-for="(office, key) in officesList"
        >
            <div class="CardsList__officeCard--item">
                <Card @click.native="toggleCardDetails(office)" :officeData="office" />
            </div>
            <div
                class="CardsList__officeCard--detail"
                :class="{
                    opened: isDetailOpened && selectedOfficeId === office._id,
                }"
            >
                <CardDetails :officeDetails="office" @edit="openEditForm" @delete="deleteOffice" />
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/utils/event-bus.js";
const offices = require("@/data/offices.json");

import Button from "@/components/IconButton";
import Card from "@/components/Card";
import CardDetails from "@/components/CardDetails";
import Form from "@/components/Form";

export default {
    name: "CardsList",
    components: {
        Button,
        Card,
        Form,
        CardDetails,
    },
    data() {
        return {
            officesList: offices,
            isFormOpened: false,
            isDetailOpened: false,
			selectedOfficeId: null,
			selectedOfficeObj: null,
        };
    },
    methods: {
		goToTop() {
			window.scrollTo(0, 0);
		},
        openForm() {
			this.selectedOfficeId = null;
			this.selectedOfficeObj = null;
			this.isDetailOpened = false;
			this.isFormOpened = true;
		},
		closeForm() {
			this.selectedOfficeId = null;
			this.selectedOfficeObj = null;
			this.isFormOpened = false;
		},
		toggleCardDetails(office) {
			this.isFormOpened = false;

			if (this.selectedOfficeId === office._id) {
				this.selectedOfficeId = null;
				this.selectedOfficeObj = null;
				this.isDetailOpened = false;
			} else if (!this.selectedOfficeId) {
				this.selectedOfficeId = office._id;
				this.selectedOfficeObj = office;
				this.isDetailOpened = true;
			} else if (!!this.selectedOfficeId && this.selectedOfficeId !== office._id) {
				this.isDetailOpened = false;
				this.selectedOfficeId = office._id;
				this.selectedOfficeObj = office;
				this.isDetailOpened = true;
			}
		},
		openEditForm() {
			this.isDetailOpened = false;
			this.isFormOpened = true;
			this.goToTop();
		},
		addOffice(officeData) {
			let id = Math.random().toString(36).substring(2);
			let newOffice = {
				_id: id,
				color: officeData.color,
			};

			Object.keys(officeData.inputs).forEach(input => {
				newOffice[input] = officeData.inputs[input].value;
			});

			this.officesList.push(newOffice);
			this.closeForm();
			EventBus.$emit('notify', 'A new location was added.');
		},
		updateOffice(officeData) {
			const targetOffice = this.officesList.find(office => office._id === this.selectedOfficeId);
			targetOffice.color = officeData.color;

			Object.keys(officeData.inputs).forEach(input => {
				targetOffice[input] = officeData.inputs[input].value;
			});
			this.closeForm();
			EventBus.$emit('notify', 'The location has been updated.');
		},
		deleteOffice() {
			this.officesList = this.officesList.filter(office => office._id !== this.selectedOfficeId);
			EventBus.$emit('notify', `The ${this.selectedOfficeObj.title} location has been deleted.`);
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
			duration-500
			ease-out
			overflow-hidden
			transition-all;

			&.opened {
				height: 250px;
				@apply
				duration-500
				ease-out
				transition-all;
			}
		}
	}


}
</style>
