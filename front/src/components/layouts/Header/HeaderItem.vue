<template>
  <router-link :to="item.link">
    <li>{{ item.name }}</li>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface HeaderI {
  name: string;
  link: string;
}

export default defineComponent({
  name: "link-HeaderItem",
  props: {
    item: {
      type: Object as PropType<HeaderI>,
      required: true,
    },
  },
});
</script>

<style></style>
