<template>
  <router-link :to="`/user/${user.username}`">
    <div
      class="w-[300px] lg:w-[400px] flex gap-5 p-4 bg-black rounded-t-2xl text-white"
    >
      <img src="@/assets/img/default.webp" class="rounded-full w-24 h-24" />
      <div class="flex flex-col gap-1">
        <div>
          <p>{{ user.firstname }} {{ user.lastname }}</p>
          <p class="text-sm text-stone-300">{{ user.profession.name }}</p>
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
          <span>{{ user.city }}</span>
        </div>
      </div>
    </div>
    <div class="p-4 bg-white shadow rounded-b-2xl">
      <p class="font-semibold">{{ user.short_description }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { User } from "@/interfaces/User";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "link-ArtistCard",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<style></style>
