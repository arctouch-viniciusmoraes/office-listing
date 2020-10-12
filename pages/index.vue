<template>
    <div class="MainContainer">
		<transition name="slide">
			<NotificationBar
				v-if="showNotification"
				:message="notificationMessage"
				@close="showNotification = false" />
		</transition>

        <h1 class="MainContainer__title">Offices</h1>
        <CardsList />
        <footer class="MainContainer__footer">
            <p>This project is for test purpose only.</p>
            <a
                href="http://www.dogandponystudios.com"
                target="_blank"
                class="link"
                >www.dogandponystudios.com</a>
        </footer>
    </div>
</template>

<script>
import EventBus from "@/utils/event-bus.js";
import CardsList from "@/components/CardsList";
import NotificationBar from "@/components/NotificationBar";

export default {
    components: {
        CardsList,
        NotificationBar,
    },
    data() {
        return {
			showNotification: false,
			notificationMessage: null,
        };
	},
	methods: {
		goToTop() {
			window.scrollTo(0, 0);
		},
	},
    mounted() {
        EventBus.$on("notify", (message) => {
			this.goToTop();
			this.showNotification = true;
			this.notificationMessage = message;

        });
    },
};
</script>

<style lang="scss" scoped>
.MainContainer {
    @apply bg-gray-200
	flex
	flex-col
	h-full w-full
	items-center
	min-h-screen;

    &__title {
        @apply font-thin
		my-12
		text-6xl
		text-teal-500;
    }

    &__footer {
        @apply leading-7
		font-thin
		text-gray-500
		mt-4 mb-12
		text-center;

        .link {
            @apply text-xs
			uppercase
			text-teal-500;
        }
	}

	.slide-enter-active {
		animation: slide-in 0.5s;
	}

	.slide-leave-active {
		animation: slide-in 0.25s reverse;
	}

	@keyframes slide-in {
		0% {
			transform: translateY(-5rem);
		}

		100% {
			transform: translateX(0);
		}
	}
}
</style>
