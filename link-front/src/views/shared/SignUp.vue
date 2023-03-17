<template>
  <NotConnectedSlot title="Se créer un compte">
    <form @submit.prevent class="flex flex-col gap-5 min-w-[300px]">
      <div class="relative w-full flex justify-around mb-6">
        <div
          class="w-[40px] h-[40px] font-semibold bg-white text-black flex justify-center items-center rounded-full z-10 cursor-pointer"
          @click="nextStep = false"
        >
          1
        </div>
        <div
          class="absolute top-1/2 translate-y-[-50%] w-1/2 h-[3px] z-0"
          :class="nextStep ? 'bg-white' : 'bg-stone-400'"
        ></div>
        <div
          class="w-[40px] h-[40px] font-semibold text-black flex justify-center items-center rounded-full z-10"
          :class="nextStep ? 'bg-white' : 'bg-stone-400'"
        >
          2
        </div>
      </div>

      <FirstStep v-if="!nextStep" @next="nextStep = true" />
      <SecondStep v-else />
    </form>
  </NotConnectedSlot>

  <footer class="px-44 pt-40 pb-16 bg-black">
    <hr />
    <div class="mt-11 flex justify-between items-center px-4">
      <img src="@/assets/logo-white.png" />
      <div class="flex items-center gap-4">
        <a href="">
          <img src="@/assets/icons/twitter.svg" class="w-8" />
        </a>
        <a href="">
          <img src="@/assets/icons/facebook.svg" class="w-8" />
        </a>
        <a href="">
          <img src="@/assets/icons/instagram.svg" class="w-8" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotConnectedSlot from "@/components/pages/shared/NotConnectedSlot.vue";
import FirstStep from "@/components/pages/shared/SignUp/FirstStep.vue";
import SecondStep from "@/components/pages/shared/SignUp/SecondStep.vue";

export default defineComponent({
  name: "link-Login",
  components: { NotConnectedSlot, FirstStep, SecondStep },
  data() {
    return {
      nextStep: false,
    };
  },
});
</script>

<style></style>
