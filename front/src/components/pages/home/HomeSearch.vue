<template>
  <div
    class="relative bg-black h-fit py-20 xl:h-[calc(100vh-80px)] mt-20 text-white xl:bg-[url(@/assets/img/earth.png)] bg-contain bg-no-repeat bg-right"
  >
    <div
      class="relative h-full flex flex-col gap-10 justify-center px-9 lg:px-16 w-full xl:w-[65%] z-10"
    >
      <!-- Titre -->
      <h1 class="text-3xl lg:text-6xl lg:w-3/4 text-justify lg:text-left">
        Trouvez les meilleurs connexions pour vos projets.
      </h1>
      <!-- Section recherche -->
      <div class="w-full">
        <SearchBar :darkTheme="true" inputSize="w-full lg:w-[400px]" />
      </div>
      <!-- Populaires -->
      <div class="lg:flex gap-4 items-center ml-8 hidden">
        <span>Populaires :</span>
        <ul class="flex gap-4 items-center">
          <template v-for="item of popular" :key="item">
            <li
              class="py-1 px-3 border border-white rounded-full cursor-pointer hover:bg-white hover:text-black"
            >
              {{ item }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./SearchBar.vue";

export default defineComponent({
  name: "link-HomeSearch",
  data() {
    return {
      popular: ["Vidéaste", "Beatmaker", "Chanteur", "Saxophoniste"],
    };
  },
  components: { SearchBar },
});
</script>

<style></style>
