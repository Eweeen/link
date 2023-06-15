<template>
  <div class="min-h-[calc(100vh-80px)] mt-20 pb-10 bg-gray-100">
    <div v-if="!user" class="flex flex-col items-center">
      <h1 class="text-2xl font-semibold my-10">Cet utilisateur n'existe pas</h1>
      <router-link to="/" class="underline">Retour à l'accueil</router-link>
    </div>

    <div v-else>
      <div class="w-full bg-black" :class="bgColor">
        <div class="flex justify-between">
          <div class="w-[60%] bg-white p-[150px] rounded-br-[100px]">
            <h1 class="text-4xl">
              {{ user.firstname + " " + user.lastname }}
            </h1>
            <h2 class="text-2xl my-4">{{ user.profession.name }}</h2>
            <div class="flex gap-1 items-center mb-8">
              <img src="@/assets/icons/linear/location.svg" />
              <span class="text-lg">{{ user.city }}</span>
            </div>

            <div class="flex gap-4">
              <div
                v-for="inspi of user.inspirations"
                :key="inspi.id"
                class="flex gap-2 items-center"
              >
                <img src="@/assets/icons/linear/label.svg" />
                <p>{{ inspi.name }}</p>
              </div>
            </div>
          </div>

          <div class="w-[40%] flex justify-center items-center">
            <img
              src="@/assets/img/default.webp"
              class="w-[300px] h-[300px] rounded-full mb-2"
            />
          </div>
        </div>

        <div class="flex justify-around items-center text-white p-5">
          <div class="flex gap-10">
            <a
              href="#"
              class="border-b pb-1 border-transparent hover:border-white"
            >
              Profil
            </a>
            <a
              href="#"
              class="border-b pb-1 border-transparent hover:border-white"
            >
              Compétences
            </a>
            <a
              href="#"
              class="border-b pb-1 border-transparent hover:border-white"
            >
              Portfolio
            </a>
          </div>

          <div class="flex gap-16">
            <div class="flex gap-2 items-center cursor-pointer">
              <img src="@/assets/icons/linear/send-2-white.svg" />
              <span>Envoyer une demande d'ami</span>
            </div>

            <div class="flex gap-2 items-center cursor-pointer">
              <img src="@/assets/icons/linear/message-text-1-white.svg" />
              <span>Contacter {{ user.firstname }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-[200px] mt-16">
        <div class="bg-white p-10 rounded-[30px] shadow mb-16">
          <h2 class="text-2xl mb-5">Profile</h2>
          <p>{{ user.description ?? "Aucune description" }}</p>
        </div>

        <div class="bg-white p-10 rounded-[30px] shadow mb-16">
          <h2 class="text-2xl mb-5">Compétences</h2>
          <div class="grid grid-cols-3 gap-x-28">
            <template v-for="(s, i) in user.skills" :key="s.id">
              <SkillCard :skill="s" :index="i" />
            </template>
            <p v-if="user.skills.length === 0">Aucune compétence</p>
          </div>
        </div>

        <div class="bg-white p-10 rounded-[30px] shadow">
          <h2 class="text-2xl mb-5">Portfolio</h2>
          <div>
            <!-- Image -->
            <div v-if="images.length" class="mb-4">
              <h3 class="text-xl mb-2">Images</h3>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="i in images"
                  :key="i.id"
                  class="w-[220px] h-[175px] bg-gray-300 rounded flex justify-center items-center overflow-hidden cursor-pointer"
                  @click="openModal(i)"
                >
                  <img v-if="i.path" :src="i.path" />
                  <img
                    v-else
                    :src="require('@/assets/icons/linear/gallery.svg')"
                  />
                </div>
              </div>
            </div>
            <!-- Vidéos -->
            <div v-if="videos.length">
              <h3 class="text-xl mb-2">Vidéos</h3>
              <div class="flex justify-between flex-wrap gap-3">
                <div v-for="i in videos" :key="i.id">
                  <div
                    class="w-[220px] h-[175px] bg-gray-300 rounded flex justify-center items-center"
                  >
                    <img
                      :src="require('@/assets/icons/linear/video-square.svg')"
                    />
                  </div>
                  <p class="ml-2">{{ i.title }}</p>
                </div>
              </div>
            </div>
            <!-- Audios -->
            <div v-if="musiques.length">
              <h3 class="text-xl mb-2">Audios</h3>
              <div class="flex justify-between flex-wrap gap-3">
                <div
                  v-for="i in musiques"
                  :key="i.id"
                  class="w-[130px] h-[100px] bg-gray-300 rounded-3xl flex flex-col gap-2 justify-center items-center"
                >
                  <span>Track {{ i.title }}</span>
                  <img :src="require('@/assets/icons/linear/music.svg')" />
                </div>
              </div>
            </div>
            <!-- No data -->
            <p
              v-if="
                images.length === 0 &&
                videos.length === 0 &&
                musiques.length === 0
              "
            >
              Aucun projet
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ViewPortfolio
    v-if="selectPortfolio"
    :isOpen="showPortfolio"
    :portfolio="selectPortfolio"
    @close="showPortfolio = false"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getUserByUsername } from "@/services/users";
import { User } from "@/interfaces/User";
import SkillCard from "@/components/pages/users/Profile/SkillCard.vue";
import { Portfolio } from "@/interfaces/Portfolio";
import { getPortfolioImage } from "@/services/portfolios";
import ViewPortfolio from "@/components/pages/shared/Visitor/ViewPortfolio.vue";

export default defineComponent({
  components: {
    SkillCard,
    ViewPortfolio,
  },
  data() {
    return {
      user: null as User | null,
      // Portfolio
      images: [] as Portfolio[],
      videos: [] as Portfolio[],
      musiques: [] as Portfolio[],
      showPortfolio: false,
      selectPortfolio: null as Portfolio | null,
    };
  },
  beforeMount() {
    this.getUser();
  },
  methods: {
    async getUser() {
      if (!this.$route.params.username) return;
      if (typeof this.$route.params.username !== "string") return;

      const { data, error } = await getUserByUsername(
        this.$route.params.username
      );

      if (error || !data) {
        return;
      }

      this.user = data;
      this.images = data.portfolios.filter((p) => p.type === "image");
      this.videos = data.portfolios.filter((p) => p.type === "video");
      this.musiques = data.portfolios.filter((p) => p.type === "musique");

      if (this.images.length) {
        for (const i of this.images) {
          const path = getPortfolioImage(i.id);
          i.path = path;
        }
      }
    },
    openModal(portfolio: Portfolio) {
      this.selectPortfolio = portfolio;
      this.showPortfolio = true;
    },
  },
  computed: {
    bgColor() {
      if (!this.user) return "bg-black";
      return `bg-[${this.user.color}]`;
    },
  },
});
</script>

<style scoped></style>
