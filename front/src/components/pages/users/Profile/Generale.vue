<template>
  <div
    class="flex flex-col gap-4 w-full rounded-3xl p-6 shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
  >
    <div class="relative w-full bg-gray-400 p-1 rounded-full mb-6">
      <div class="bg-[#4F388E] h-[14px] w-[45%] rounded-full"></div>
      <div
        class="h-2 w-2 bg-white absolute top-[50%] translate-y-[-50%] left-[16.66%] translate-x-[-50%] rounded-full"
      ></div>
      <div
        class="h-2 w-2 bg-white absolute top-[50%] translate-y-[-50%] left-[33.33%] translate-x-[-50%] rounded-full"
      ></div>
      <div
        class="h-2 w-2 bg-white absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full"
      ></div>
      <div
        class="h-2 w-2 bg-white absolute top-[50%] translate-y-[-50%] left-[66.66%] translate-x-[-50%] rounded-full"
      ></div>
      <div
        class="h-2 w-2 bg-white absolute top-[50%] translate-y-[-50%] left-[83.33%] translate-x-[-50%] rounded-full"
      ></div>

      <div
        class="absolute bottom-[calc(-100%-8px)] left-[16.66%] translate-x-[-50%] font-semibold"
      >
        100 pts
      </div>
      <div
        class="absolute bottom-[calc(-100%-8px)] left-[33.33%] translate-x-[-50%] font-semibold"
      >
        200 pts
      </div>
      <div
        class="absolute bottom-[calc(-100%-8px)] left-[50%] translate-x-[-50%] font-semibold"
      >
        300 pts
      </div>
      <div
        class="absolute bottom-[calc(-100%-8px)] left-[66.66%] translate-x-[-50%] font-semibold"
      >
        400 pts
      </div>
      <div
        class="absolute bottom-[calc(-100%-8px)] left-[83.33%] translate-x-[-50%] font-semibold"
      >
        500 pts
      </div>
    </div>
    <p>Vous avez 250 points</p>
  </div>
  <!-- Stats details -->
  <div class="flex gap-8">
    <div class="w-full flex flex-col gap-4">
      <div
        class="flex items-center rounded-3xl shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
      >
        <div class="w-full bg-black text-white py-4 px-6">Profil complété</div>
        <div class="w-[150px] text-center py-4 whitespace-nowrap">50pts</div>
      </div>
      <div
        class="flex items-center rounded-3xl shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
      >
        <div class="w-full bg-black text-white py-4 px-6">Projets</div>
        <div class="w-[150px] text-center py-4 whitespace-nowrap">18</div>
      </div>
      <div
        class="flex items-center rounded-3xl shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden mb-4"
      >
        <div class="w-full bg-black text-white py-4 px-6">Avis</div>
        <div class="w-[150px] text-center py-4 whitespace-nowrap">96</div>
      </div>

      <div
        class="flex items-center rounded-3xl shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
      >
        <div class="w-full py-4 px-6">Total des points</div>
        <div class="w-[150px] text-center py-4 whitespace-nowrap">
          250 points
        </div>
      </div>
    </div>

    <div
      class="grid grid-rows-[auto_1fr] w-full rounded-3xl shadow-md border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
    >
      <header class="bg-black px-6 py-4 text-white">
        <h2 class="text-xl font-semibold">Votre niveau</h2>
      </header>
      <div class="p-5 flex flex-col items-center justify-between">
        <h2>Vous êtes rang</h2>
        <img
          :src="require('@/assets/icons/linear/gallery.svg')"
          class="w-16 h-16"
        />
        <p class="text-center">50 points restants avant le prochain palier</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-Profile-Stats-Generale",
});
</script>

<style scoped></style>
