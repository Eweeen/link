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

  <select
    name=""
    id=""
    class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
  >
    <option value="">Profession*</option>
  </select>

  <ComboBox v-model="user.genre_id" :data="genres" />

  <div class="w-full">
    <input
      type="text"
      placeholder="Inspirations artistes* (1 à 3)"
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
    };
  },
  async mounted() {
    const { data, error } = await getGenres();
    if (error || !data) return;
    this.genres = data;
  },
  methods: {
    create() {
      console.log(this.user);
      // this.$emit("create", this.user);
    },
  },
});
</script>

<style></style>
