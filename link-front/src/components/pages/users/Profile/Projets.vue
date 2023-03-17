<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="p in projets"
      :key="p.title"
      class="w-full min-w-[220px] h-[220px] rounded-2xl overflow-hidden grid grid-rows-[auto_1fr]"
    >
      <header class="bg-black text-white py-4 px-3">
        {{ p.title }}
      </header>
      <div
        class="w-full bg-[url('@/assets/img/projet.png')] bg-cover bg-center relative"
      >
        <div
          class="absolute w-full h-full bg-[rgba(0,0,0,0.3)] flex flex-col gap-6 justify-center items-center"
        >
          <span class="text-white flex gap-2 items-center">
            <img :src="require('@/assets/icons/linear/eye-white.svg')" />
            {{ p.vues }} vues
          </span>
          <span class="text-white flex gap-2">
            <img :src="require('@/assets/icons/linear/heart-white.svg')" />
            {{ p.likes }} likes
          </span>
        </div>
      </div>
    </div>

    <div
      class="w-full min-w-[220px] h-[220px] bg-black rounded-2xl flex justify-center items-center"
    >
      <a href="" class="bg-white py-3 px-8 rounded-full">Tous mes projets</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-Profile-Stats-Projets",
  data() {
    return {
      projets: [
        {
          title: "The Gift",
          vues: 50,
          likes: 32,
        },
        {
          title: "Newport Jazz",
          vues: 50,
          likes: 32,
        },
        {
          title: "Doorway",
          vues: 50,
          likes: 32,
        },
        {
          title: "Doorway",
          vues: 50,
          likes: 32,
        },
        {
          title: "Newport Jazz",
          vues: 50,
          likes: 32,
        },
      ],
    };
  },
});
</script>

<style scoped></style>
