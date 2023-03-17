<template>
  <form @submit.prevent class="flex gap-4 flex-wrap">
    <div class="relative w-full lg:w-fit">
      <input
        type="text"
        placeholder="Essayer ''Beatmaker''"
        class="border border-[3px] border-black text-black px-5 py-3 pl-14 rounded-full"
        :class="[inputSize, inputDarkTheme]"
      />
      <img
        src="@/assets/icons/linear/search-normal-1.svg"
        class="absolute top-[50%] translate-y-[-50%] left-[20px]"
      />
    </div>
    <div class="relative w-full lg:w-fit">
      <input
        type="text"
        placeholder="Lieu de recherche ''Paris''"
        class="border border-[3px] border-black px-5 py-3 pl-14 rounded-full"
        :class="[inputSize, inputDarkTheme]"
      />
      <img
        src="@/assets/icons/linear/search-normal-1.svg"
        class="absolute top-[50%] translate-y-[-50%] left-[20px]"
      />
    </div>
    <input
      type="submit"
      value="Rechercher"
      class="px-8 py-3 rounded-full cursor-pointer w-full lg:w-fit"
      @click="$emit('changeVersion')"
      :class="inputDarkTheme"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-SearchBar",
  emits: ["changeVersion"],
  props: {
    darkTheme: {
      type: Boolean,
      default: false,
    },
    inputSize: {
      type: String,
    },
  },
  computed: {
    inputDarkTheme(): string {
      return this.darkTheme ? "bg-white text-black" : "bg-black text-white";
    },
  },
});
</script>

<style></style>
