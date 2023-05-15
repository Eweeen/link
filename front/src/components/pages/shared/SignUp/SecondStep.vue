<template>
  <input
    type="text"
    placeholder="Nom*"
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  />
  <input
    type="text"
    placeholder="Prénom*"
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  />
  <input
    type="date"
    placeholder="Date de naissance*"
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  />
  <input
    type="text"
    placeholder="Lieu*"
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  />

  <button class="w-full p-3 bg-white text-black rounded-full">
    Je créé mon compte
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-SignUp-SecondStep",
});
</script>

<style></style>
