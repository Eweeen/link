/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const user = {
  state: () => ({
    id: undefined,
    lastname: undefined,
    firstname: undefined,
    username: undefined,
    description: undefined,
    email: undefined,
    image: undefined,
    birth_date: undefined,
    city: undefined,
    zip: undefined,
    role: undefined,
  }),

  mutations: {
    setUser(state: any, user: any): void {
      state.id = user?.id;
      state.lastname = user?.lastname;
      state.firstname = user?.firstname;
      state.username = user?.username;
      state.description = user?.description;
      state.email = user?.email;
      state.image = user?.image;
      state.birth_date = user?.birth_date;
      state.city = user?.city;
      state.zip = user?.zip;
      state.role = user?.role;
    },
  },

  getters: {
    getUser(state: any) {
      return state;
    },
    getId(state: any) {
      return state.id;
    },
    getFullname(state: any): string {
      if (state.lastname !== undefined && state.firstname !== undefined) {
        return state.lastname.concat(" ", state.firstname);
      }
      return "";
    },
    getLastname(state: any): string {
      return state.lastname;
    },
    getFirstname(state: any): string {
      return state.firstname;
    },
    getUsername(state: any): string {
      return state.username;
    },
    getDescription(state: any): string {
      return state.description;
    },
    getEmail(state: any): string {
      return state.email;
    },
    getRole(state: any): string {
      return state.role;
    },
    getBirthDate(state: any): Date {
      return state.birth_date;
    },
    getCity(state: any): string {
      return state.city;
    },
    getZip(state: any): string {
      return state.zip;
    },
    getAdress(state: any): string {
      if (state.city !== undefined && state.zip !== undefined) {
        return state.city.concat(", ", state.zip);
      }
      return "";
    },
  },

  actions: {
    LOGIN({ commit }: any, user: any) {
      commit("setUser", user);
    },
    REFRESH({ commit }: any, user: any) {
      commit("setUser", user);
    },
    LOGOUT({ commit }: any) {
      commit("setUser", {
        id: undefined,
        lastname: undefined,
        firstname: undefined,
        username: undefined,
        description: undefined,
        email: undefined,
        image: undefined,
        birth_date: undefined,
        city: undefined,
        zip: undefined,
        role: undefined,
      });
    },
  },
};

export default user;
