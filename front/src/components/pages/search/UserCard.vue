<template>
  <div
    class="rounded-3xl shadow-md w-[360px] overflow-hidden hover:scale-[1.01] transition cursor-pointer"
    @click="goTo"
  >
    <header
      class="relative bg-black p-6 flex flex-col items-center gap-2 text-white"
    >
      <div class="text-center">
        <img
          src="@/assets/img/default.webp"
          class="w-[100px] h-[100px] rounded-full mb-2 mx-auto"
        />
        <h3 class="text-lg font-semibold">
          {{ user.firstname + " " + user.lastname }}
        </h3>
        <p class="text-gray-200">
          {{ user.profession.name }}
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex gap-1 items-center justify-center">
          <img src="@/assets/icons/linear/location-white.svg" />
          <span class="text-lg">{{ user.city }}</span>
        </div>
      </div>
    </header>

    <div class="px-6 py-8 flex flex-col gap-8">
      <div class="flex gap-4">
        <div
          v-for="i of user.inspirations"
          :key="i.name"
          class="flex items-center gap-2"
        >
          <img src="@/assets/icons/linear/label.svg" />
          <span class="text-sm">{{ i.name }}</span>
        </div>
      </div>

      <div class="w-full h-0.5 bg-gray-400 rounded-full"></div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Description</h3>
        <p>{{ user.short_description ?? "Aucune description" }}</p>
      </div>
      <div class="w-full h-0.5 bg-gray-400 rounded-full"></div>
      <div class="font-semibold flex flex-col gap-6">
        <div class="flex justify-between items-center">
          <span class="flex gap-1 items-center">
            <img src="@/assets/logo.png" class="w-7 h-7" />
            Link
          </span>
          <span>56</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/interfaces/User";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "link-UserCard",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  methods: {
    goTo() {
      this.$router.push(`/user/${this.user.username}`);
    },
  },
});
</script>
