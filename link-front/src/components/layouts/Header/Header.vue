<template>
  <nav
    class="w-full bg-white py-3 xl:py-2 px-6 xl:px-12 shadow fixed top-0 z-40"
  >
    <HeaderDesktop class="hidden xl:flex" />
    <HeaderMobile class="flex xl:hidden" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HeaderI } from "./HeaderItem.vue";
import HeaderDesktop from "./HeaderDesktop.vue";
import HeaderMobile from "./HeaderMobile.vue";
import { mapGetters } from "vuex";
import { logout } from "@/services/auth";
import store from "@/store";

export default defineComponent({
  name: "link-Header",
  components: { HeaderDesktop, HeaderMobile },
  data() {
    return {
      headerItems: [
        {
          name: "Musicien",
          link: "",
        },
        {
          name: "Vidéaste",
          link: "",
        },
        {
          name: "Beatmaker",
          link: "",
        },
        {
          name: "Chanteur",
          link: "",
        },
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
      const response = await logout();
      console.info(response);
      this.showProfileMenu = false;
      store.dispatch("LOGOUT");
      this.$router.push("/login");
    },
    onScroll() {
      if (!window?.top) {
        return;
      }
      if (window?.top?.scrollY > window.innerHeight / 2 && !this.pageScroll) {
        this.pageScroll = true;
      } else if (window?.top?.scrollY < window.innerHeight / 2) {
        this.pageScroll = false;
      }
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
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
.menuDropDown-enter-active {
  animation: menuDropDown 0.3s;
}
.menuDropDown-leave-active {
  animation: menuDropDown 0.3s reverse;
}
@keyframes menuDropDown {
  0% {
    transform: translate(0%, -40px);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}
</style>
