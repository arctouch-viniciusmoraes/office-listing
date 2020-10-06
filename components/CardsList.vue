<template>
  <div class="CardsList">
    <div class="CardsList__addNew btn btn--blue">
      <div>Add new location</div>
      <PlusIcon />
    </div>
    <div
      class="CardsList__OfficeCard"
      :key="key"
      v-for="(office, key) in offices"
    >
      <Card :officeData="office" />
    </div>
  </div>
</template>

<script>
const offices = require("@/data/offices.json");
import PlusIcon from "@/assets/plus-icon.vue";
import Card from "@/components/Card";

export default {
  name: "CardsList",
  components: {
    Card,
    PlusIcon,
  },
  data() {
    return {
      offices,
    };
  },
};
</script>

<style lang="scss" scoped>
.CardsList {
	@apply
		flex
		flex-col
		items-center;

	&__addNew {
		@apply
			flex
			font-thin
			items-center
			justify-between
			shadow my-3
			text-sm
			w-84;

		svg {
			@apply
				fill-current
				h-8
				w-8;
		}
	}

}

.btn {
	@apply
		cursor-pointer
		py-2 px-4
		rounded-lg
		h-16;
}

.btn--blue {
	@apply
		bg-red-400
		text-white;
}

.btn--blue:hover {
	@apply bg-red-500;
}

</style>
