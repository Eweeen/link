import { createStore } from "vuex";
import user from "./modules/user";
import { toast } from "./modules/notification";

export const store = createStore({
  modules: {
    user: user,
    toast: toast,
  },
});
