<template>
  <div class="min-h-[calc(100vh-80px)] mt-20 mx-[200px] pt-8 pb-10">
    <header class="flex justify-between items-center">
      <h1 class="text-4xl font-semibold">Bienvenue {{ getFirstname }}</h1>
      <span
        class="flex gap-2 pb-0.5 items-center whitespace-nowrap cursor-pointer border-b border-transparent hover:border-black"
      >
        <img :src="require('@/assets/icons/linear/eye.svg')" class="w-6 h-6" />
        Aperçu profil
      </span>
    </header>

    <section class="mt-4 flex gap-9 mb-10">
      <aside class="flex flex-col gap-8">
        <!-- Profil et description -->
        <div class="rounded-3xl shadow-md w-[360px] overflow-hidden">
          <header
            class="relative bg-black p-6 flex flex-col items-center gap-2 text-white"
          >
            <span
              class="absolute top-4 right-6 cursor-pointer flex gap-1 items-start"
            >
              modifier
              <img src="@/assets/icons/bold/edit-2-white.svg" class="w-5 h-5" />
            </span>

            <div class="text-center">
              <img
                src="@/assets/img/default.webp"
                class="w-[100px] h-[100px] rounded-full mb-2"
              />
              <h3 class="text-lg font-semibold">{{ getFullname }}</h3>
              <p class="text-gray-200">Profession</p>
            </div>

            <div class="flex flex-col gap-2">
              <div class="flex gap-1 items-center">
                <div
                  class="border border-white border-2 p-0.5 w-4 h-4 rounded-full"
                >
                  <div class="w-full h-full bg-white rounded-full"></div>
                </div>
                <div
                  class="border border-white border-2 p-0.5 w-4 h-4 rounded-full"
                >
                  <div class="w-full h-full bg-white rounded-full"></div>
                </div>
                <div
                  class="border border-white border-2 p-0.5 w-4 h-4 rounded-full"
                >
                  <div class="w-full h-full bg-white rounded-full"></div>
                </div>
                <div
                  class="border border-white border-2 p-0.5 w-4 h-4 rounded-full"
                >
                  <div class="w-full h-full bg-white rounded-full"></div>
                </div>
                <div
                  class="border border-white border-2 p-0.5 w-4 h-4 rounded-full"
                >
                  <div class="w-full h-full bg-white rounded-full"></div>
                </div>
                <span class="ml-1">(96 avis)</span>
              </div>
              <div class="flex gap-1 items-center justify-center">
                <img src="@/assets/icons/linear/location-white.svg" />
                <span class="text-lg">{{ getCity }}</span>
              </div>
            </div>
          </header>

          <div class="px-6 py-8 flex flex-col gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-2">Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                sunt possimus facere molestias similique cupiditate!
              </p>
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
              <div class="flex justify-between items-center">
                <span class="flex gap-1 items-center">
                  <img
                    src="@/assets/icons/linear/lamp-on.svg"
                    class="w-5 h-5"
                  />
                  Projets
                </span>
                <span>18</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Profil et stats -->
        <div
          class="rounded-3xl shadow-md w-[360px] border border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
        >
          <header class="bg-black px-6 py-4 text-white">
            <h2 class="text-xl font-semibold">Profil</h2>
          </header>
          <div class="p-8 pt-4">
            <h3 class="text-lg text-center">Les données de mon profil</h3>
            <div class="mt-5 flex flex-col gap-4">
              <div class="flex justify-between">
                <span>Vu depuis la page d'accueil</span>
                <span>12</span>
              </div>
              <div class="flex justify-between">
                <span>Vu depuis la barre de recherche</span>
                <span>26</span>
              </div>
              <div class="flex justify-between">
                <span>En favoris</span>
                <span>47</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Posts -->
        <div
          class="rounded-3xl shadow-md w-[360px] border border-black border-[3px] border-r-[6px] border-b-[6px] overflow-hidden"
        >
          <header class="bg-black px-6 py-4 text-white">
            <h2 class="text-xl font-semibold">Post</h2>
          </header>
          <div class="p-8 pt-4">
            <h3 class="text-lg text-center">Les données de mes posts</h3>
            <div class="mt-5 flex flex-col gap-4">
              <div class="flex justify-between">
                <span>Vu du dernier post</span>
                <span>53</span>
              </div>
              <div class="flex justify-between">
                <span>Like du dernier post</span>
                <span>38</span>
              </div>
              <div class="flex justify-between">
                <span>Clics des liens partagés</span>
                <span>28</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Paramètres -->
        <div
          class="flex bg-black text-white p-4 rounded-full justify-center items-center gap-2 cursor-pointer"
        >
          <img src="@/assets/icons/linear/setting-2-white.svg" />
          Paramètres de mon compte
        </div>
      </aside>

      <article class="w-full">
        <!-- Stats -->
        <div class="flex flex-col gap-8 p-9 shadow-md rounded-3xl mb-11">
          <header class="flex justify-between items-center">
            <h2 class="text-3xl">Mes stats</h2>
            <div
              class="flex border-2 border-black rounded-full overflow-hidden"
            >
              <div
                class="py-2 px-6 cursor-pointer"
                :class="{ 'bg-black text-white': stats == 1 }"
                @click="setStats(1)"
              >
                Générale
              </div>
              <div
                class="py-2 px-6 cursor-pointer border-x-2 border-black"
                :class="{ 'bg-black text-white': stats == 2 }"
                @click="setStats(2)"
              >
                Projets (18)
              </div>
              <div
                class="py-2 px-6 cursor-pointer"
                :class="{ 'bg-black text-white': stats == 3 }"
                @click="setStats(3)"
              >
                Link (56)
              </div>
            </div>
          </header>

          <Genrerale v-if="stats == 1" />
          <Projets v-if="stats == 2" />
          <ViewLink v-if="stats == 3" />
        </div>
        <!-- Description -->
        <div class="p-9 shadow-md rounded-3xl">
          <header class="mb-8">
            <h2 class="text-3xl">Vous en quelques mots</h2>
          </header>
          <div>
            <form action="" class="flex flex-col items-end">
              <textarea
                :value="getDescription"
                name=""
                id=""
                placeholder="Décrivez votre expérience et ce qu'il vous plaît par exemple"
                class="rounded-lg w-full h-[330px] border border-black border-[3px] border-r-[5px] border-b-[5px] px-4 py-2 mb-12"
              ></textarea>

              <button type="submit" class="text-lg">Ajouter</button>
            </form>
          </div>
        </div>
      </article>
    </section>

    <!-- Compétences -->
    <section class="p-9 shadow-md rounded-3xl mb-10">
      <header class="flex justify-between items-center mb-12">
        <h2 class="text-3xl">Mes compétences ({{ competences.length }})</h2>
        <span class="cursor-pointer text-lg">Ajouter</span>
      </header>
      <div class="grid grid-cols-3 gap-x-28">
        <span
          v-for="(c, i) in competences"
          :key="c"
          class="py-10"
          :class="{ 'border-t-[2px] border-black': i > 2 }"
        >
          {{ c }}
        </span>
      </div>
    </section>

    <!-- Portfolio -->
    <section class="p-9 shadow-md rounded-3xl">
      <header class="flex justify-between items-center mb-12">
        <h2 class="text-3xl">Portfolio</h2>
        <span class="cursor-pointer text-lg">Ajouter</span>
      </header>

      <article class="flex flex-col gap-8 px-6">
        <!-- Image -->
        <div>
          <h3 class="text-xl mb-2">Images</h3>
          <div class="flex justify-between">
            <div
              v-for="i in 6"
              :key="i"
              class="w-[130px] h-[100px] bg-gray-300 rounded flex justify-center items-center"
            >
              <img :src="require('@/assets/icons/linear/gallery.svg')" />
            </div>
          </div>
        </div>
        <!-- Vidéos -->
        <div>
          <h3 class="text-xl mb-2">Vidéos</h3>
          <div class="flex justify-between">
            <div
              v-for="i in 6"
              :key="i"
              class="w-[150px] h-[100px] bg-gray-300 rounded flex justify-center items-center"
            >
              <img :src="require('@/assets/icons/linear/video-square.svg')" />
            </div>
          </div>
        </div>
        <!-- Audios -->
        <div>
          <h3 class="text-xl mb-2">Audios</h3>
          <div class="flex justify-between">
            <div
              v-for="i in 6"
              :key="i"
              class="w-[130px] h-[100px] bg-gray-300 rounded-full flex flex-col gap-2 justify-center items-center"
            >
              <span>Track {{ i }}</span>
              <img :src="require('@/assets/icons/linear/music.svg')" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { User } from "@/interfaces/User";
import Genrerale from "@/components/pages/users/Profile/Generale.vue";
import Projets from "@/components/pages/users/Profile/Projets.vue";
import ViewLink from "@/components/pages/users/Profile/Link.vue";

export default defineComponent({
  name: "link-Profile",
  components: { Genrerale, Projets, ViewLink },
  data() {
    return {
      user: {} as User,
      stats: 1 as 1 | 2 | 3,
      competences: [
        "FL STUDIO",
        "Compétences",
        "Compétences",
        "After effect",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
        "Compétences",
      ],
    };
  },
  methods: {
    async getUser(id: number) {
      // TODO get user
    },
    setStats(select: 1 | 2 | 3) {
      this.stats = select;
    },
  },
  computed: {
    ...mapGetters([
      "getId",
      "getFirstname",
      "getFullname",
      "getCity",
      "getDescription",
    ]),
  },
});
</script>

<style></style>
