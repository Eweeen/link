<template>
  <div class="w-full min-h-[calc(100vh-80px)] bg-white">
    <LinkHeader></LinkHeader>
    <router-view />
    <LinkFooter></LinkFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkHeader from "@/components/layouts/Header/Header.vue";
import LinkFooter from "@/components/layouts/Footer.vue";

export default defineComponent({
  name: "link-Main",
  components: { LinkHeader, LinkFooter },
});
</script>

<style></style>
