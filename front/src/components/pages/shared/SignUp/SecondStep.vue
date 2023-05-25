<template>
  <InputComponent
    v-model="user.username"
    type="text"
    placeholder="Pseudo*"
    :error="errors.username"
    @deleteError="errors.username = ''"
  />

  <InputComponent
    v-model="user.city"
    type="text"
    placeholder="Lieu d'activité*"
    :error="errors.city"
    @deleteError="errors.city = ''"
  />

  <ComboBox v-model="user.profession_id" :data="professions" />

  <ComboBox v-model="user.genre_id" :data="genres" />

  <div class="w-full">
    <input
      v-model="inspirations"
      type="text"
      placeholder="Inspirations artistes*"
      class="w-full bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
    />
  </div>

  <button class="w-full p-3 bg-white text-black rounded-full" @click="create">
    Je créé mon compte
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SignUpSecondStepDto } from "@/validations/SignUpSecondStepDto.dto";
import InputComponent from "@/components/library/InputComponent.vue";
import ComboBox from "@/components/headlessui/ComboBox.vue";
import { getGenres } from "@/services/genres";
import { Genre } from "@/interfaces/Genre";
import { Profession } from "@/interfaces/Profession";
import { getProfessions } from "@/services/professions";

export default defineComponent({
  components: {
    InputComponent,
    ComboBox,
  },
  emits: ["create"],
  data() {
    return {
      errors: {} as Record<string, string>,
      user: new SignUpSecondStepDto(),
      genres: [] as Genre[],
      professions: [] as Profession[],
      inspirations: "",
    };
  },
  async mounted() {
    const [professions, genres] = await Promise.all([
      getProfessions(),
      getGenres(),
    ]);

    if (
      professions.error ||
      !professions.data ||
      genres.error ||
      !genres.data
    ) {
      return;
    }

    this.genres = genres.data;
    this.professions = professions.data;
  },
  methods: {
    create() {
      this.user.inspirations = [this.inspirations];
      this.$emit("create", this.user);
    },
  },
});
</script>

<style></style>
