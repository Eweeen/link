<template>
  <div class="justify-between items-center">
    <router-link to="/">
      <img src="@/assets/logo.png" al="Logo" class="h-16" />
    </router-link>

    <div class="flex gap-4">
      <div class="flex flex-col gap-1 items-center">
        <div
          class="w-[40px] h-[40px] shadow-md border rounded-full flex justify-center items-center"
        >
          <img
            :src="require('@/assets/icons/linear/search-normal-1.svg')"
            class="w-5 h-5"
          />
        </div>
        <span class="text-xs">Rechercher</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <div
          class="w-[40px] h-[40px] shadow-md border rounded-full flex justify-center items-center"
          @click="showMenu = !showMenu"
        >
          <img
            :src="
              require(`@/assets/icons/linear/${
                showMenu ? 'add.svg' : 'menu.svg'
              }`)
            "
            class="w-6 h-6"
            :class="{ 'rotate-45': showMenu }"
          />
        </div>
        <span class="text-xs">{{ showMenu ? "Fermer" : "Menu" }}</span>
      </div>
    </div>

    <transition name="showMenu">
      <div
        v-if="showMenu"
        class="top-[88px] left-0 absolute w-full h-[calc(100vh-88px)] p-8 bg-white grid grid-rows-[1fr_auto]"
      >
        <ul class="flex flex-col gap-8 text-xl font-semibold">
          <li>Musicien</li>
          <li>Vidéaste</li>
          <li>Beatmaker</li>
          <li>Chanteur</li>
          <li>Communauté</li>
          <li>Artistes du mois</li>
        </ul>

        <div
          v-if="getId"
          class="bg-black text-center text-white py-3.5 px-7 rounded-full flex gap-2 items-center cursor-pointer"
        >
          Mon compte
          <img :src="require(`@/assets/icons/linear/user.svg`)" />
        </div>
        <router-link
          v-else
          to="/login"
          class="bg-black text-center text-white py-3.5 px-7 rounded-full"
        >
          S'inscrire / Se connecter
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "link-HeaderDesktop",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(["getUser", "getId"]),
  },
});
</script>

<style>
.showMenu-enter-active {
  animation: showMenu 0.3s;
}
.showMenu-leave-active {
  animation: showMenu 0.3s reverse;
}
@keyframes showMenu {
  0% {
    transform: translate(0%, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}
</style>
