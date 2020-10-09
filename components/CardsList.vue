<template>
  <div class="CardsList">
	<div class="CardsList__addNew" @click="openForm">
	<Button label="Add new location">
		<PlusIcon />
	</Button>
	</div>
	<div class="CardsList__Form" :class="{opened: isFormOpened}"><Form @close="isFormOpened = false" /></div>
    <div
      class="CardsList__OfficeCard"
      :key="key"
      v-for="(office, key) in offices">
      <Card :officeData="office" />
    </div>
  </div>
</template>

<script>
const offices = require("@/data/offices.json");
import Button from '@/components/IconButton.vue';
import Card from "@/components/Card";
import Form from "@/components/Form";

import PlusIcon from "@/assets/plus-icon.vue";

export default {
  name: "CardsList",
  components: {
	Button,
    Card,
	PlusIcon,
	Form,
  },
  data() {
    return {
	  offices,
	  isFormOpened: false,
    };
  },
  methods: {
	openForm() {
		this.isFormOpened = true;
	},
  }

};
</script>

<style lang="scss" scoped>
.CardsList {
	@apply
	flex
	flex-col
	items-center;

	&__Form {
		@apply
		duration-500
		h-auto
		max-h-0
		overflow-hidden
		relative
		top-0
		transition-all;


		&.opened {
			@apply
			-mb-20
			duration-500
			max-h-form
			relative
			top-n80
			transition-all;
		}
	}
}
</style>
