<template>
  <div
    class="relative flex justify-between items-center py-2"
    :class="{ 'border-t-[2px] border-black': index > 2 }"
  >
    <div class="w-full h-full my-8 flex items-center">
      <input
        v-if="isShowUpdate"
        v-model="newSkill"
        type="text"
        class="w-full h-full border border-black rounded-[5px] outline-none pl-2"
      />
      <span v-else class="pl-2">{{ newSkill }}</span>
    </div>

    <div
      v-if="isShowUpdate"
      class="flex items-center gap-1 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
    >
      <div
        class="w-7 h-7 shadow flex items-center justify-center rounded"
        @click="undo"
      >
        <img src="@/assets/icons/linear/undo-1.svg" />
      </div>
      <div
        class="w-7 h-7 shadow flex items-center justify-center rounded"
        @click="update"
      >
        <img src="@/assets/icons/linear/tick-purple.svg" />
      </div>
    </div>

    <div
      v-else
      class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
      @click="isShowUpdate = !isShowUpdate"
    >
      <img src="@/assets/icons/linear/more-3.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Skill } from "@/interfaces/Skill";
import { PropType, defineComponent } from "vue";
import { updateSkill, deleteSkill } from "@/services/skills";

export default defineComponent({
  emits: ["delete"],
  props: {
    skill: {
      type: Object as PropType<Skill>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newSkill: this.skill.name,
      isShowUpdate: false,
    };
  },
  methods: {
    undo() {
      this.isShowUpdate = false;
      this.newSkill = this.skill.name;
    },
    async update() {
      if (this.newSkill === this.skill.name) return this.undo();
      if (this.newSkill === "") return this.delete();

      const { data, error } = await updateSkill(this.skill.id, this.newSkill);

      if (error || !data) {
        this.undo();
        return;
      }

      this.isShowUpdate = false;
    },
    async delete() {
      const { error } = await deleteSkill(this.skill.id);

      if (error) {
        this.undo();
        return;
      }

      this.$emit("delete", this.index);
    },
  },
  computed: {},
});
</script>

<style scoped></style>
