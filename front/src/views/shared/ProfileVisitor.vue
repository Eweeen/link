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
          <div>
            <p v-for="skill of user.skills" :key="skill.id">
              {{ skill.name }}
            </p>
            <p v-if="user.skills.length === 0">Aucune compétence</p>
          </div>
        </div>

        <div class="bg-white p-10 rounded-[30px] shadow">
          <h2 class="text-2xl mb-5">Portfolio</h2>
          <div>
            <p v-for="portfolio of user.portfolios" :key="portfolio">
              {{ portfolio }}
            </p>
            <p v-if="user.portfolios.length === 0">Aucun projet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getUserByUsername } from "@/services/users";
import { User } from "@/interfaces/User";

export default defineComponent({
  data() {
    return {
      user: null as User | null,
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
        console.log(error);
        return;
      }

      this.user = data;
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
