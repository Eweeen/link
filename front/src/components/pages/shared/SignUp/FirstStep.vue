<template>
  <InputComponent
    v-model="user.lastname"
    type="text"
    placeholder="Nom*"
    :error="errors.lastname"
    @deleteError="errors.lastname = ''"
  />

  <InputComponent
    v-model="user.firstname"
    type="text"
    placeholder="Prénom*"
    :error="errors.firstname"
    @deleteError="errors.firstname = ''"
  />

  <InputComponent
    v-model="user.birth_date"
    type="date"
    placeholder="Date de naissance*"
    :error="errors.birth_date"
    @deleteError="errors.birth_date = ''"
  />

  <InputComponent
    v-model="user.email"
    type="email"
    placeholder="Adresse mail*"
    :error="errors.email"
    @deleteError="errors.email = ''"
  />

  <InputComponent
    v-model="user.password"
    type="password"
    placeholder="Mot de passe*"
    :error="errors.password"
    @deleteError="errors.password = ''"
  />

  <InputComponent
    v-model="user.confirmPassword"
    type="password"
    placeholder="Confirmation mot de passe*"
    :error="errors.confirmPassword"
    @deleteError="errors.confirmPassword = ''"
  />

  <button class="w-full p-3 bg-white text-black rounded-full" @click="next">
    Suivant
  </button>

  <div class="w-full flex flex-col gap-4 mt-10">
    <h3 class="text-lg lg:text-2xl">Déjà un compte ?</h3>
    <router-link
      to="login"
      class="w-full p-3 bg-white text-black rounded-full text-center"
    >
      Connexion
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SignUpFirstStepDto } from "@/validations/SignUpFirstStepDto.dto";
import InputComponent from "@/components/library/InputComponent.vue";

export default defineComponent({
  components: {
    InputComponent,
  },
  emits: ["next"],
  data() {
    return {
      errors: {} as Record<string, string>,
      user: new SignUpFirstStepDto(),
    };
  },
  methods: {
    async next() {
      this.errors = await this.user.validateModel();

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      this.$emit("next", this.user);
    },
  },
});
</script>

<style></style>
