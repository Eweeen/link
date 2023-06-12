<template>
  <div
    class="fixed bottom-8 w-full sm:w-auto sm:right-8 flex items-end flex-col gap-2 z-[90]"
  >
    <transition-group name="toast" appear>
      <div
        v-for="toast in toasts"
        :key="toast.uuid"
        class="toast rounded-lg p-4 select-none bg-white max-w-sm shadow-md mx-1 sm:mx-0"
      >
        <div>
          <div class="flex justify-between items-center">
            <span>Notification</span>
            <img
              @click="deleteToast(toast.uuid)"
              src="@/assets/icons/linear/close.svg"
              class="h-4 w-4 cursor-pointer"
              aria-hidden="true"
            />
          </div>
          <div class="flex gap-3 items-center">
            <img
              src="@/assets/icons/linear/tick-purple.svg"
              class="h-10 w-10"
            />
            <div
              class="mt-1 text-sm leading-5 font-normal text-lc-gray-dimGray"
            >
              {{ toast.title }}
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

interface Toast {
  uuid: number;
  title: string;
  message: string;
  type: string;
}

export default defineComponent({
  name: "Link-Notifications",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    deleteToast(uuid: number) {
      this.store.commit("remove", uuid);
    },
  },
  computed: {
    toasts(): Toast[] {
      return this.store.state.toast.messages;
    },
  },
});
</script>

<style lang="scss" scoped>
.toast {
  &-enter-from {
    opacity: 0;
    transform: translateX(200px);
  }

  &-enter-active {
    transition: all 0.4s ease-out;
  }
  &-enter-to {
    opacity: 100;
    transform: translateX(0px);
  }

  &-leave-from {
    opacity: 100;
    transform: translateX(0px);
  }
  &-leave-active {
    transition: all 0.4s ease-in;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
}
</style>
