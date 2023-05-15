import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationRaw,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Main from "@/views/Main.vue";
import Profile from "@/views/users/Profile.vue";
import Login from "@/views/shared/Login.vue";
import SignUp from "@/views/shared/SignUp.vue";
import { createToken, createUserByToken, getToken } from "@/utils/tokenUtils";
import { refreshToken } from "@/services/auth";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "not-logged",
    component: Main,
    redirect: "home",
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: SignUp,
      },
    ],
  },
  {
    path: "/",
    component: Main,
    meta: { requiresRole: "user" },
    redirect: { name: "profil" },
    children: [
      {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
    ],
  },
];

// Function to get every routes which don't need authentication
function routesNotLogged(): string[] {
  const [notLoggedRoute] = routes.filter(
    (route) => route.name === "not-logged"
  );
  const children = notLoggedRoute?.children?.map((child) => child.name);

  return children?.toString()?.split(",") || [];
}

async function checkUserIsConnected(
  to: RouteLocationNormalized
): Promise<boolean> {
  const token = getToken();
  let result = false;

  if (token === "") {
    // If the user hasn't accessToken
    // Then refresh accessToken
    if (!routesNotLogged().includes(to.name?.toString() || "")) {
      const { data, error } = await refreshToken();

      if (data) {
        createToken(data.token);
        result = true;
      } else if (error) {
        //TODO HANDLE ERROR
        result = false;
      }
    }
  } else {
    createUserByToken(token);
    result = true;
  }
  return result;
}

async function getDashboard(): Promise<RouteLocationRaw> {
  return { name: "profile" };
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  // If the user is not connected and the route requires authentication
  const isConnected = await checkUserIsConnected(to);
  if (!isConnected && !routesNotLogged().includes(to.name?.toString() || "")) {
    next({ name: "login" });
    return;
  }

  // If user is connected and the route not requires authentication
  if (
    (isConnected && routesNotLogged().includes(to.name?.toString() || "")) ||
    to.meta.requiresRole !== store.getters.getRole
  ) {
    if (to.name?.toString() === "login") {
      next(await getDashboard());
      return;
    }
  }

  next();
});

export default router;
