<template>
  <NotConnectedSlot title="Se connecter">
    <form
      @submit.prevent="submit"
      class="flex flex-col gap-5 w-full lg:w-fit lg:min-w-[300px]"
    >
      <input
        v-model="login.username"
        type="text"
        placeholder="Pseudo ou adresse mail"
        class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
      />
      <div class="flex flex-col gap-1">
        <input
          v-model="login.password"
          type="password"
          placeholder="Mot de passe"
          class="bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
          @keypress.enter="submit"
        />
        <router-link to="" class="text-sm text-stone-300 underline">
          Mot de passe oublié
        </router-link>
      </div>

      <div class="flex flex-col gap-2">
        <button
          type="submit"
          class="w-full p-3 bg-white text-black rounded-full"
        >
          Se connecter
        </button>
      </div>

      <div class="w-full flex flex-col gap-4 mt-10">
        <h3 class="text-lg lg:text-2xl">Nouveau ?</h3>
        <router-link
          to="sign-up"
          class="w-full p-3 bg-white text-black rounded-full text-center"
        >
          Se créer un compte
        </router-link>
      </div>
    </form>
  </NotConnectedSlot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotConnectedSlot from "@/components/pages/shared/NotConnectedSlot.vue";
import { LoginDto } from "@/validations/Login.dto";
import { authentification } from "@/services/auth";
import { createToken } from "@/utils/tokenUtils";

export default defineComponent({
  name: "link-Login",
  components: { NotConnectedSlot },
  data() {
    return {
      login: new LoginDto(),
      errors: {} as Record<string, unknown>,
      loading: false,
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      this.errors = await this.login.validateModel();

      // Error when validating the form
      if (Object.keys(this.errors).length) {
        this.loading = false;
        return;
      }

      // Try to login
      const { data, error } = await authentification(
        this.login.username,
        this.login.password
      );

      // Error when login
      if (error) {
        if (error?.statusCode === 401) {
          console.log(error.message);
        } else {
          console.log(error.message);
        }
        this.loading = false;
        return;
      }

      // No data but no error
      if (!data) {
        this.loading = false;
        console.log("No data");
        return;
      }

      // All good ? Create token and redirect to dashboard
      createToken(data.token);
      await this.$router.push("/profile");
      this.loading = false;
    },
  },
});
</script>

<style></style>
