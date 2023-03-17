<template>
  <div
    class="h-[calc(100vh-80px)] pt-20 lg:flex justify-center items-center hidden"
  >
    <div class="w-fit bg-black rounded-full flex justify-center">
      <div
        class="w-[530px] min-h-[530px] bg-white rounded-l-[30px] rounded-br-[100px] rounded-tr-none shadow-[0_0_95px_-20px_rgba(0,0,0,0.15)] flex justify-center items-center"
      >
        <img src="@/assets/logo.png" class="w-[160px]" />
      </div>
      <div
        class="w-[530px] min-h-[530px] bg-black rounded-[30px] text-white py-14 flex flex-col items-center"
      >
        <h2 class="text-2xl mb-8">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>

  <div class="h-[100vh] pt-20 lg:hidden flex items-center">
    <div
      class="h-fit w-full bg-black rounded-[30px] text-white py-10 px-8 mx-8 flex flex-col items-center text-sm"
    >
      <h2 class="text-2xl mb-8">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-NotConnectedSlot",
  props: {
    title: {
      type: String,
    },
  },
});
</script>

<style></style>
