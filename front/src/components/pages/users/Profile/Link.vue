<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="l in 10" :key="l" class="w-[128px] h-[128px] m-auto">
      <span class="flex justify-end">
        <img
          :src="require('@/assets/icons/linear/more.svg')"
          class="cursor-pointer"
        />
      </span>
      <div class="flex flex-col items-center gap-2">
        <img
          :src="require('@/assets/img/default.webp')"
          class="h-[75px] rounded-full"
        />
        <span>Christian Paul</span>
      </div>
    </div>

    <div
      class="w-full min-w-[300px] h-[128px] bg-black rounded-2xl p-5 flex justify-center items-center col-span-2"
    >
      <a href="" class="w-full bg-white p-3 text-center rounded-full">
        Tous mes link
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-Profile-Stats-Link",
});
</script>

<style scoped></style>
