<template>
  <div class="justify-between items-center">
    <div class="flex gap-20 items-center">
      <router-link to="/">
        <img src="@/assets/logo.png" al="Logo" class="h-16" />
      </router-link>
      <ul class="flex gap-10">
        <MenuDropDown
          label="Talents"
          icon="arrow-down"
          type="text"
          position="left"
          :items="dropDownItems"
          class="font-semibold"
        />
        <template v-for="item of headerItems" :key="item">
          <HeaderItem :item="item" class="font-semibold" />
        </template>
      </ul>
    </div>

    <div class="flex items-center gap-10">
      <div
        v-if="pageScroll || $route.path !== '/'"
        class="flex flex-col gap-1 items-center justify-center cursor-pointer"
        @click="showSearchBar = !showSearchBar"
      >
        <img src="@/assets/icons/linear/search-normal-1.svg" />
        <span>Rechercher</span>
      </div>

      <MenuDropDown
        v-if="getId"
        label="Mon compte"
        icon="arrow-down-white"
        :items="menuItems"
        :footerItems="footerItems"
        @logout="logout"
      />

      <router-link
        v-else
        to="/login"
        class="bg-black text-white py-3.5 px-7 rounded-full"
      >
        S'inscrire / Se connecter
      </router-link>
    </div>

    <transition name="dropDown">
      <div
        v-if="showSearchBar && (pageScroll || $route.path !== '/')"
        class="fixed top-[84px] z-50 left-[50%] translate-x-[-50%] py-5 px-6 bg-black rounded-full"
      >
        <SearchBar1 :darkTheme="true" class="flex-nowrap" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderItem, { HeaderI } from "./HeaderItem.vue";
import SearchBar1 from "@/components/pages/home/SearchBar.vue";
import { mapGetters } from "vuex";
import { logout } from "@/services/auth";
import { store } from "@/store";
import MenuDropDown, {
  DopDownItems,
} from "@/components/headlessui/MenuDropDown.vue";

export default defineComponent({
  name: "link-HeaderDesktop",
  components: {
    HeaderItem,
    SearchBar1,
    MenuDropDown,
  },
  data() {
    return {
      headerItems: [
        {
          name: "Communauté",
          link: "",
        },
        {
          name: "Artiste du mois",
          link: "",
        },
      ] as HeaderI[],
      pageScroll: false,
      showSearchBar: false,
      showProfileMenu: false,

      menuItems: [
        {
          label: "Mon profil",
          icon: "user",
          action: "redirect",
          link: "/profile",
        },
        // {
        //   label: "Mes favoris",
        //   icon: "heart",
        //   action: "redirect",
        //   link: "",
        // },
        // {
        //   label: "Paramètres de mon compte",
        //   icon: "setting-2",
        //   action: "redirect",
        //   link: "",
        // },
      ] as DopDownItems[],
      footerItems: [
        {
          label: "Déconnexion",
          icon: "logout",
          action: "event",
          link: "logout",
        },
      ] as DopDownItems[],

      dropDownItems: [
        {
          label: "Chanteur",
          action: "redirect",
          link: "/",
        },
        {
          label: "Musicien",
          action: "redirect",
          link: "/",
        },
        {
          label: "Beatmaker",
          action: "redirect",
          link: "/",
        },
        {
          label: "Clipper - Monteur",
          action: "redirect",
          link: "/",
        },
        {
          label: "Graphiste",
          action: "redirect",
          link: "/",
        },
      ] as DopDownItems[],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    async logout() {
      await logout();
      store.dispatch("LOGOUT");
      this.$router.push("/login");
    },
    onScroll() {
      if (!window?.top) return;

      if (window?.top?.scrollY > window.innerHeight / 2 && !this.pageScroll) {
        this.pageScroll = true;
      } else if (window?.top?.scrollY < window.innerHeight / 2) {
        this.pageScroll = false;
      }
    },
  },
  computed: {
    ...mapGetters(["getUser", "getId"]),
  },
});
</script>

<style>
.dropDown-enter-active {
  animation: dropDown 0.3s;
}
.dropDown-leave-active {
  animation: dropDown 0.3s reverse;
}
@keyframes dropDown {
  0% {
    transform: translate(-50%, -200%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}
</style>
