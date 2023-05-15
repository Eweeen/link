<template>
  <MenuHL as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        :class="
          type === 'button'
            ? 'flex items-center w-full rounded-full bg-black py-3.5 px-7 text-white'
            : 'flex items-center'
        "
      >
        {{ label }}
        <img
          v-if="icon"
          :src="getButtonIcon"
          class="ml-2 -mr-1 h-5 w-5"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute w-max mt-2 py-5 p-7 rounded-2xl bg-white border-[3px] border-b-[5px] border-r-[5px] border-black"
        :class="{
          'divide-y-2 divide-black': footerItems.length > 0,
          'right-0': position === 'right',
          'left-0': position === 'left',
        }"
      >
        <div
          class="flex flex-col gap-5"
          :class="{ 'pb-5': footerItems.length > 0 }"
        >
          <MenuItem v-slot="{ active }" v-for="i of items" :key="i.label">
            <button
              :class="[active ? '' : '', 'flex items-center gap-3']"
              @click="action(i.action, i.link)"
            >
              <img
                v-if="i.icon"
                :src="getItemIcon(i.icon)"
                :active="active"
                aria-hidden="true"
              />
              {{ i.label }}
            </button>
          </MenuItem>
        </div>
        <div v-if="footerItems.length > 0" class="pt-5">
          <MenuItem v-slot="{ active }" v-for="i of footerItems" :key="i.label">
            <button
              :class="[active ? '' : '', 'flex items-center gap-3']"
              @click="action(i.action, i.link)"
            >
              <img
                v-if="i.icon"
                :src="getItemIcon(i.icon)"
                :active="active"
                aria-hidden="true"
              />
              {{ i.label }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </MenuHL>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
  Menu as MenuHL,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

export interface DopDownItems {
  label: string;
  icon?: string;
  action: "redirect" | "event";
  link: string;
}

export default defineComponent({
  name: "MenuDropDown",
  components: {
    MenuHL,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    type: {
      type: String as PropType<"button" | "text">,
      default: "button",
    },
    position: {
      type: String as PropType<"left" | "right">,
      default: "right",
    },
    items: {
      type: Array as PropType<DopDownItems[]>,
      required: true,
    },
    footerItems: {
      type: Array as PropType<DopDownItems[]>,
      default: () => [],
    },
  },
  methods: {
    getItemIcon(icon: string) {
      return require(`@/assets/icons/linear/${icon}.svg`);
    },
    action(action: "redirect" | "event", link: string) {
      if (action === "redirect") this.$router.push(link);
      else if (action === "event") this.$emit(link);
    },
  },
  computed: {
    getButtonIcon() {
      return require(`@/assets/icons/linear/${this.icon}.svg`);
    },
  },
});
</script>

<style scoped></style>
