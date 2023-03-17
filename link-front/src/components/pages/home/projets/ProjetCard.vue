<template>
  <div
    class="w-[367px] h-[367px] flex flex-col justify-between shadow-lg rounded-2xl grid grid-cols-1 grid-rows-[auto_1fr_auto]"
  >
    <header class="py-4 px-5 bg-[#141414] text-white rounded-t-2xl">
      <h2 class="text-xl">Doorway</h2>
    </header>

    <div
      class="w-full bg-[url('@/assets/img/projet.png')] bg-cover bg-center"
    ></div>

    <footer class="bg-white p-5 rounded-b-2xl">
      <h2 class="text-xl">Projet vidéo</h2>
      <p>14/01/2023</p>
      <p class="transition-all" :class="showDesc ? 'text-clip' : 'truncate'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        consequuntur eaque aperiam nemo.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home-ProjetCard",
  data() {
    return {
      showDesc: false,
    };
  },
});
</script>

<style></style>
