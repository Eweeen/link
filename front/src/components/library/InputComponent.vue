<template>
  <div class="relative w-full">
    <label>
      <span v-if="label">{{ label }}</span>
      <input
        :value="modelValue"
        :type="type === 'password' ? (visible ? 'text' : 'password') : type"
        :placeholder="placeholder"
        class="w-full bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 placeholder-white"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value),
            error ? $emit('deleteError') : ''
        "
      />
    </label>

    <img
      v-if="type === 'password'"
      :src="
        require(`@/assets/icons/linear/${
          visible ? 'eye-slash-white' : 'eye-white'
        }.svg`)
      "
      class="absolute top-0 right-0 cursor-pointer"
      @click="visible = !visible"
    />

    <p v-if="error" class="text-red-600 text-sm">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue", "deleteError"],
  props: {
    modelValue: {
      type: String || Number,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
});
</script>

<style scoped></style>
