<template>
  <div>
    <select
      id=""
      name=""
      :value="modelValue"
      class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
    >
      <option value="">{{ title }}</option>
      <option v-for="i of data" :key="i.id" :value="i.id" class="text-black">
        {{ i.name }}
      </option>
    </select>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String || Number,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
});
</script>

<style scoped></style>
