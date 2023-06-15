<template>
  <div
    class="w-[400px] h-[350px] flex flex-col justify-between shadow-lg rounded-2xl grid grid-cols-1 grid-rows-[auto_1fr_auto]"
  >
    <header class="py-4 px-5 bg-[#141414] text-white rounded-t-2xl">
      <h2 class="text-xl">{{ projet.title }}</h2>
    </header>

    <div
      v-if="projet.id === 1"
      class="w-full bg-[url('@/assets/img/projets/projet-1.jpeg')] bg-cover bg-center"
    ></div>
    <div
      v-else-if="projet.id === 2"
      class="w-full bg-[url('@/assets/img/projets/projet-2.jpg')] bg-cover bg-center"
    ></div>
    <div
      v-else-if="projet.id === 3"
      class="w-full bg-[url('@/assets/img/projets/projet-3.jpeg')] bg-cover bg-center"
    ></div>

    <footer class="bg-white py-3 px-5 rounded-b-2xl">
      <h2 class="text-xl">Projet photo</h2>
      <p>{{ projet.date }}</p>
      <p class="transition-all" :class="showDesc ? 'text-clip' : 'truncate'">
        {{ projet.description }}
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface IProjet {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default defineComponent({
  name: "Home-ProjetCard",
  props: {
    projet: {
      type: Object as () => IProjet,
      required: true,
    },
  },
  data() {
    return {
      showDesc: false,
    };
  },
});
</script>

<style></style>
