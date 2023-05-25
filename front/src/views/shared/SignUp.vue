<template>
  <NotConnectedSlot title="Se créer un compte">
    <form @submit.prevent class="flex flex-col gap-5 min-w-[300px]">
      <div class="relative w-full flex justify-around mb-6">
        <div
          class="w-[40px] h-[40px] font-semibold bg-white text-black flex justify-center items-center rounded-full z-10 cursor-pointer"
          @click="nextStep = false"
        >
          1
        </div>
        <div
          class="absolute top-1/2 translate-y-[-50%] w-1/2 h-[3px] z-0"
          :class="nextStep ? 'bg-white' : 'bg-stone-400'"
        ></div>
        <div
          class="w-[40px] h-[40px] font-semibold text-black flex justify-center items-center rounded-full z-10"
          :class="nextStep ? 'bg-white' : 'bg-stone-400'"
        >
          2
        </div>
      </div>

      <FirstStep v-if="!nextStep" @next="next" />
      <SecondStep v-else @create="createUser" />
    </form>
  </NotConnectedSlot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotConnectedSlot from "@/components/pages/shared/NotConnectedSlot.vue";
import FirstStep from "@/components/pages/shared/SignUp/FirstStep.vue";
import SecondStep from "@/components/pages/shared/SignUp/SecondStep.vue";
import { SignUpDto } from "@/validations/SignUp.dto";
import { SignUpFirstStepDto } from "@/validations/SignUpFirstStepDto.dto";
import { SignUpSecondStepDto } from "@/validations/SignUpSecondStepDto.dto";
import { signUp } from "@/services/users";

export default defineComponent({
  name: "link-Login",
  components: { NotConnectedSlot, FirstStep, SecondStep },
  data() {
    return {
      nextStep: false,
      userForm: new SignUpDto(),
    };
  },
  methods: {
    next(user: SignUpFirstStepDto) {
      this.userForm.lastname = user.lastname;
      this.userForm.firstname = user.firstname;
      this.userForm.email = user.email;
      this.userForm.password = user.password;
      this.userForm.confirmPassword = user.confirmPassword;
      this.userForm.birth_date = user.birth_date;

      this.nextStep = true;
    },
    async createUser(user: SignUpSecondStepDto) {
      this.userForm.username = user.username;
      this.userForm.city = user.city;
      this.userForm.genre_id = user.genre_id;
      this.userForm.inspirations = user.inspirations;
      this.userForm.profession_id = user.profession_id;

      const { error } = await signUp(this.userForm);

      if (error) {
        console.log(error);
        return;
      }

      this.$router.push({ name: "login" });
    },
  },
});
</script>
