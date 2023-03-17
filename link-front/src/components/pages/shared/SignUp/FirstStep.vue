<template>
  <input
    type="text"
    placeholder="Adresse mail*"
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  />

  <div class="w-full">
    <input
      type="password"
      placeholder="Mot de passe*"
      class="w-full bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
    />
  </div>

  <div class="w-full">
    <input
      type="password"
      placeholder="Confirmation mot de passe*"
      class="w-full bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
    />
  </div>

  <button
    class="w-full p-3 bg-white text-black rounded-full"
    @click="$emit('next')"
  >
    Suivant
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-SignUp-FirstStep",
  emits: ["next"],
  methods: {
    // TODO
    // Check form and emit if data is valid
  },
});
</script>

<style></style>
