<template>
  <div>
    <div
      class="w-[300px] lg:w-[400px] flex gap-5 p-4 bg-black rounded-t-2xl text-white"
    >
      <img src="https://picsum.photos/100" class="rounded-full" />
      <div class="flex flex-col gap-1">
        <div>
          <p>Nom Prénom</p>
          <p class="text-sm text-stone-300">Profession</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center mr-2 gap-1">
            <template v-for="item of 5" :key="item">
              <div
                class="w-[12px] h-[12px] bg-black border border-white border-1 rounded-full flex justify-center items-center"
              >
                <div class="w-[6px] h-[6px] bg-white rounded-full"></div>
              </div>
            </template>
          </div>
          <span>(96)</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="@/assets/icons/linear/location-white.svg" />
          <span>Paris</span>
        </div>
      </div>
    </div>
    <div class="p-4 bg-white shadow rounded-b-2xl">
      <p class="font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        purus metus, venenatis sit amet maximus.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-ArtistCard",
});
</script>

<style></style>
