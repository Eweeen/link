<template>
  <div class="w-full">
    <Combobox
      v-model="selected"
      @click="$emit('update:modelValue', selected.id)"
    >
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden text-left shadow-md sm:text-sm"
        >
          <ComboboxInput
            class="w-full bg-transparent text-white border-x-none border-t-none border-b-2 border-white outline-none pb-1 text-sm leading-5 text-white"
            :displayValue="(person) => person.name"
            @change="
              query = $event.target.value;
              $emit('update:modelValue', $event.target.value);
            "
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pb-2"
          >
            <img src="@/assets/icons/linear/arrow-down-white.svg" />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm"
          >
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople"
              as="template"
              :key="person.id"
              :value="person"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-gray-800 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <img
                    v-if="active"
                    src="@/assets/icons/linear/tick-white.svg"
                  />
                  <img v-else src="@/assets/icons/linear/tick.svg" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";

export default defineComponent({
  components: {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  },
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    modelValue: {
      type: String || Number,
      required: true,
    },
  },
  data() {
    return {
      selected: ref(this.data[0]),
      query: "",
    };
  },
  computed: {
    filteredPeople(): any[] {
      return this.query === ""
        ? this.data
        : this.data.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(this.query.toLowerCase().replace(/\s+/g, ""))
          );
    },
  },
});
</script>

<style scoped></style>
