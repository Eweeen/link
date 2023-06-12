<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <HUIDialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="flex justify-between text-lg font-medium leading-6 text-gray-900 mb-8"
              >
                <span>{{ portfolio.title }}</span>

                <img
                  src="@/assets/icons/linear/close.svg"
                  class="cursor-pointer"
                  @click="closeModal"
                />
              </DialogTitle>

              <div class="mt-2 flex gap-10 items-center">
                <div class="relative h-[500px] w-[500px] overflow-hidden">
                  <img
                    :src="path"
                    class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                  />
                </div>

                <div class="min-w-[250px] max-w-[500px]">
                  <p>{{ portfolio.description }}</p>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HUIDialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog as HUIDialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { Portfolio } from "@/interfaces/Portfolio";
import { getPortfolioImage } from "@/services/portfolios";

export default defineComponent({
  components: {
    TransitionRoot,
    TransitionChild,
    HUIDialog,
    DialogPanel,
    DialogTitle,
  },
  emits: ["close"],
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    portfolio: {
      type: Object as PropType<Portfolio>,
      required: true,
    },
  },
  data() {
    return {
      path: "",
    };
  },
  beforeMount() {
    if (this.portfolio.type !== "image") return;
    this.path = getPortfolioImage(this.portfolio.id);
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
});
</script>
