<template>
  <footer
    class="px-12 md:px-28 xl:px-44 pt-16 lg:pt-24 pb-16 bg-black text-white"
  >
    <div
      class="flex flex-col lg:flex-row gap-10 justify-between pb-16 px-2 text-lg"
    >
      <ul class="flex flex-col gap-3 lg:gap-6 uppercase">
        <li>Musicien</li>
        <li>Vidéaste</li>
        <li>Beatmaker</li>
        <li>Chanteur</li>
        <li>Communauté</li>
        <li>Artistes du mois</li>
      </ul>

      <ul class="flex flex-col gap-2 text-gray-500">
        <li class="text-white uppercase mb-2">Aide</li>
        <li>Nous contacter</li>
        <li>Fonctionnement des points</li>
        <li>Tarifications</li>
        <li>CGV</li>
        <li>Mentions légales</li>
      </ul>

      <ul class="flex flex-col gap-2 text-gray-500">
        <li class="text-white uppercase mb-2">À propos de Link</li>
        <li>Actualités</li>
        <li>Partenaires</li>
        <li>Qui sommes nous ?</li>
      </ul>

      <ul class="flex flex-col gap-2 text-gray-500">
        <li class="text-white uppercase mb-2">Nous rejoindre</li>
        <li>Je cherche des talents</li>
        <li>Je cherche des projets</li>
        <li>Rejoindre l'équipe Link</li>
      </ul>
    </div>

    <div class="flex gap-6 lg:gap-12 items-center lg:px-2">
      <div class="flex gap-1 lg:gap-2 items-center">
        <img
          :src="require('@/assets/icons/linear/location-white.svg')"
          class="w-4 h-4"
        />
        <span class="text-sm">France</span>
      </div>

      <span class="text-gray-500 text-sm"
        >2023, Link, Tous droits réservés</span
      >
    </div>

    <div class="w-full h-[2px] bg-[#383838] mt-6"></div>

    <div class="mt-11 flex justify-between items-center px-2">
      <img src="@/assets/logo-white.png" />

      <div class="flex items-center gap-4">
        <a
          href="https://m.youtube.com/channel/UCZ2G6T7-Px24IWrewZpiZSg"
          target="_blank"
        >
          <img src="@/assets/icons/twitter.svg" class="w-8" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100090818461175"
          target="_blank"
        >
          <img src="@/assets/icons/facebook.svg" class="w-8" />
        </a>
        <a href="https://www.instagram.com/linkprojet/" target="_blank">
          <img src="@/assets/icons/instagram.svg" class="w-8" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "link-Footer",
});
</script>

<style scoped></style>
