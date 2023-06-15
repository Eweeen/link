<template>
  <div
    class="flex flex-col min-h-[calc(100vh-80px)] mt-20 pt-7 pb-10 bg-gray-100"
  >
    <div class="w-fit py-5 px-6 mx-auto bg-black rounded-full mb-10">
      <SearchBar :darkTheme="true" :query="$route.query" @search="search" />
    </div>

    <div class="w-fit grid grid-cols-2 gap-8 px-[50px] xl:px-[150px]">
      <div v-for="u of users" :key="u.id">
        <UserCard :user="u" />
      </div>

      <!-- Filter -->
      <div></div>
    </div>

    <div class="flex-1"></div>

    <!-- Pagination -->
    <div v-if="pagination.total > 0" class="mx-auto flex gap-3">
      <div
        v-for="i of pagination.total"
        :key="i"
        class="rounded-lg w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
        :class="[
          pagination.page === i ? 'bg-black text-white' : 'bg-white text-black',
        ]"
        @click="pagination.page !== i ? search(saveQuery) : null"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/pages/search/SearchBar.vue";
import UserCard from "@/components/pages/search/UserCard.vue";
import { User } from "@/interfaces/User";
import { mapGetters } from "vuex";
import { getUsers } from "@/services/users";

export default defineComponent({
  name: "Link-Search",
  components: {
    SearchBar,
    UserCard,
  },
  data() {
    return {
      users: [] as User[],
      saveQuery: {},
      pagination: {
        page: 1,
        total: 5,
      },
    };
  },
  async beforeMount() {
    const query = this.$route.query;

    this.search({
      profession: (query.profession as string) ?? undefined,
      city: (query.city as string) ?? undefined,
    });
  },
  methods: {
    async search(query: Record<string, string | undefined>) {
      const users = await getUsers(
        query.profession,
        query.city,
        this.pagination.page
      );

      if (!users.data) return;

      this.saveQuery = query;
      this.users = users.data.result;
      this.pagination.total = users.data.nbPages;
    },
  },
  computed: {
    ...mapGetters(["getId"]),
  },
});
</script>
