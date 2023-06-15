<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <HUIDialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-[700px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="flex justify-between text-lg font-medium leading-6 text-gray-900 mb-8"
              >
                <span>Ajouter un projet</span>

                <img
                  src="@/assets/icons/linear/close.svg"
                  class="cursor-pointer"
                  @click="closeModal"
                />
              </DialogTitle>

              <div class="mt-2">
                <div class="mb-6">
                  <select
                    v-model="portfolio.type"
                    class="w-full outline-none py-2 px-3 bg-transparent border-2 border-black rounded"
                    @change="changeType"
                  >
                    <option value="image">Image</option>
                    <option value="video">Vidéo</option>
                    <option value="musique">Musique</option>
                  </select>
                  <p class="text-red-600">{{ errors.type }}</p>
                </div>

                <div v-if="portfolio.type === 'image'" class="mb-6">
                  <div
                    class="border-2 border-black border-dashed rounded-lg"
                    @dragover.prevent
                    @drop.prevent
                  >
                    <input
                      id="input-file"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="uploadFile"
                    />
                    <label
                      for="input-file"
                      class="relative block p-10 cursor-pointer"
                      @drop="dragFile"
                    >
                      <p class="text-center">
                        {{
                          File.length
                            ? File[0].name
                            : "Cliquez pour ajouter ou glissez directement l'image ici"
                        }}
                      </p>

                      <img
                        v-if="File.length"
                        src="@/assets/icons/linear/close.svg"
                        class="absolute top-4 right-4"
                        @click.prevent="removeFile"
                      />
                    </label>
                  </div>
                  <p class="text-red-600">{{ errors.path }}</p>
                </div>

                <div v-if="portfolio.type === 'video'" class="mb-6">
                  <label class="flex flex-col gap-1">
                    Lien de la vidéo*
                    <input
                      v-model="portfolio.path"
                      type="text"
                      class="border-2 border-black rounded-full py-1 px-3"
                    />
                  </label>
                  <p class="text-red-600">{{ errors.path }}</p>
                </div>

                <div v-if="portfolio.type === 'musique'" class="mb-6">
                  <label class="flex flex-col gap-1">
                    Lien de la musique*
                    <input
                      v-model="portfolio.path"
                      type="text"
                      class="border-2 border-black rounded-full py-1 px-3"
                    />
                  </label>
                  <p class="text-red-600">{{ errors.path }}</p>
                </div>

                <div class="mb-3">
                  <label class="flex flex-col gap-1">
                    Titre*
                    <input
                      v-model="portfolio.title"
                      type="text"
                      class="border-2 border-black rounded-full py-1 px-3"
                    />
                  </label>
                  <p class="text-red-600">{{ errors.title }}</p>
                </div>

                <div class="mb-6">
                  <label class="flex flex-col gap-1">
                    Description*
                    <textarea
                      v-model="portfolio.description"
                      type="text"
                      class="border-2 border-black rounded-[15px] py-1 px-3"
                    ></textarea>
                  </label>
                  <p class="text-red-600">{{ errors.description }}</p>
                </div>

                <button
                  class="bg-[#141414] text-white flex gap-2 rounded-full py-2 px-3 m-auto"
                  @click="create"
                >
                  <img src="@/assets/icons/linear/add-white.svg" />
                  Ajouter
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HUIDialog>
  </TransitionRoot>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { defineComponent } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog as HUIDialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { createPortfolio } from "@/services/portfolios";
import { PortfolioDto } from "@/validations/Portfolio.dto";
import { mapGetters } from "vuex";
import { newToast } from "@/store/modules/notification";

export default defineComponent({
  components: {
    TransitionRoot,
    TransitionChild,
    HUIDialog,
    DialogPanel,
    DialogTitle,
  },
  emits: ["close", "create"],
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      File: [] as any[],
      portfolio: new PortfolioDto(),
      errors: {} as Record<string, unknown>,
    };
  },
  mounted() {
    this.portfolio.type = "image";
    this.portfolio.user_id = this.getId;
  },
  methods: {
    closeModal() {
      this.portfolio = new PortfolioDto();
      this.File = [];
      this.$emit("close");
    },
    async create() {
      this.errors = await this.portfolio.validateModel();

      if (Object.keys(this.errors).length) {
        return;
      }

      if (this.File.length) {
        const file: File = this.File[0];
        const { data, error } = await createPortfolio(this.portfolio, file);

        if (error || !data) {
          return;
        }

        this.$emit("create", data);
        newToast("success", "Projet ajouté avec succès", "", 4000);
        this.closeModal();
        return;
      }

      const { data, error } = await createPortfolio(this.portfolio);

      if (error || !data) {
        return;
      }

      this.$emit("create", data);
      newToast("success", "Projet ajouté avec succès", "", 4000);
      this.closeModal();
    },
    // Files
    dragFile(event: any) {
      this.File = event.dataTransfer.files;

      if (
        this.File[0].type !== "image/png" ||
        this.File[0].type !== "image/jpeg" ||
        this.File[0].type !== "image/jpg"
      ) {
        this.File = [];
        this.errors.path = "Le fichier doit être une image";
        return;
      }

      this.portfolio.path = this.File[0].name;
    },
    uploadFile(event: any) {
      this.File = [];
      this.File = event.target.files;
      this.portfolio.path = this.File[0].name;
    },
    removeFile() {
      this.File = [];
    },
    changeType() {
      this.errors = {};
      this.File = [];
    },
  },
  computed: {
    ...mapGetters(["getId"]),
  },
});
</script>
