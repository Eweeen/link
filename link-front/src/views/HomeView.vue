<template>
  <!-- Home search -->
  <HomeSearch class="mb-10 lg:mb-20" />

  <!-- Porjets inspirants -->
  <HomeSection title="Les projets inspirants de la communauté" url="/">
    <div class="flex flex-wrap gap-4 justify-center">
      <template v-for="item of 3" :key="item">
        <ProjetCard />
      </template>
    </div>
  </HomeSection>

  <!-- Artistes du mois -->
  <HomeSection title="Les artistes du mois" url="/">
    <div class="overflow-x-auto flex gap-4 pb-[5px]">
      <template v-for="item of 5" :key="item">
        <ArtistCard />
      </template>
    </div>
  </HomeSection>

  <!-- ================ -->
  <div
    class="relative bg-black text-white p-8 pt-12 lg:p-20 mb-32 mx-10 lg:mx-52 rounded-3xl"
  >
    <h2 class="text-2xl lg:text-4xl font-semibold lg:w-1/2 mb-12 lg:mb-24">
      Un monde de <br />
      connexions s’offre à vous.
    </h2>

    <div class="flex flex-wrap gap-12 lg:gap-16 justify-between">
      <template v-for="item of 4" :key="item">
        <div class="max-w-[500px]">
          <header class="flex gap-4 mb-2 lg:mb-6">
            <img src="@/assets/icons/bold/tick-circle-white.svg" class="w-7" />
            <h3 class="text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sapien est, gravida.
          </p>
        </div>
      </template>
    </div>

    <img
      src="@/assets/img/lightning.png"
      class="absolute right-[10%] top-[-50px] h-32 lg:h-56"
    />
  </div>

  <!-- Services recherchés -->
  <HomeSection title="Les services les plus recherchés" url="/">
    <div class="overflow-x-auto flex gap-4 pb-[5px]">
      <template v-for="item of 7" :key="item">
        <div class="bg-stone-200 rounded-2xl">
          <div class="w-[300px] lg:w-[400px] h-[225px] lg:h-[225px]"></div>
        </div>
      </template>
    </div>
  </HomeSection>

  <!-- Communauté -->
  <div
    class="relative bg-black mb-32 lg:mr-52 p-10 lg:p-20 lg:rounded-r-full text-white"
  >
    <div class="lg:ml-52 flex flex-col items-center">
      <h1 class="text-2xl lg:text-4xl mb-10 lg:mb-14">
        Rejoignez la communauté
      </h1>
      <div class="flex gap-6 flex-wrap mb-8 lg:mb-0">
        <router-link
          to="/"
          class="w-full lg:w-fit border border-2 border-black bg-white text-center text-black py-4 px-8 rounded-full"
        >
          Je cherche des talents
        </router-link>
        <router-link
          to="/"
          class="w-full lg:w-fit border border-2 border-white bg-black text-center py-4 px-8 rounded-full"
        >
          Je cherche des missions
        </router-link>
      </div>
    </div>
    <img
      src="@/assets/img/man.png"
      class="lg:absolute bottom-0 right-0 h-[300px] lg:h-[360px] m-auto"
    />
  </div>

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
import HomeSection from "@/components/pages/home/HomeSection.vue";
import HomeSearch from "@/components/pages/home/HomeSearch.vue";
import ArtistCard from "@/components/pages/home/artistes/ArtistCard.vue";
import ProjetCard from "@/components/pages/home/projets/ProjetCard.vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeSection, HomeSearch, ArtistCard, ProjetCard },
  data() {
    return {};
  },
});
</script>

<style></style>
