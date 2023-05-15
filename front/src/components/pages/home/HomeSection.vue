<template>
  <div class="mb-28 lg:mb-32 mx-10 lg:mx-52">
    <header class="flex items-end justify-between mb-3 lg:mb-6">
      <h2 class="text-2xl lg:text-3xl font-semibold">{{ title }}</h2>
      <router-link :to="url" class="hidden md:block">
        <div class="flex gap-1">
          <span class="whitespace-nowrap">Afficher tout</span>
          <img src="@/assets/icons/linear/arrow-right-1.svg" class="w-4" />
        </div>
      </router-link>
    </header>

    <slot></slot>

    <router-link :to="url" class="md:hidden">
      <div
        class="flex gap-1 bg-black text-white rounded-full p-2 justify-center mt-8"
      >
        <span class="">Afficher tout</span>
        <img src="@/assets/icons/linear/arrow-right-1-white.svg" class="w-4" />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-HomeSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
