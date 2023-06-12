import { store } from "..";

let uuid = 0;
class ToastMessage {
  type: "info" | "danger" | "warning" | "success";
  title: string;
  message: string;
  duration: number;
  uuid: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer: any;

  constructor(
    type: "info" | "danger" | "warning" | "success",
    title: string,
    message: string,
    duration?: number
  ) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.duration = duration || 3000;
    this.uuid = uuid++;

    this.timer = setTimeout(() => {
      this.remove();
    }, this.duration);
  }
  remove() {
    store.commit("remove", this.uuid);
  }
}

interface NotificationState {
  messages: ToastMessage[];
}

const toast = {
  state: () => ({
    messages: [],
  }),
  mutations: {
    push(state: NotificationState, toast: ToastMessage) {
      state.messages.push(toast);
    },
    remove(state: NotificationState, uuid: number) {
      state.messages.splice(
        state.messages.findIndex((t) => t.uuid === uuid),
        1
      );
    },
  },
};

const newToast = (
  type: "info" | "danger" | "warning" | "success",
  title: string,
  message: string,
  duration?: number
) => {
  store.commit("push", new ToastMessage(type, title, message, duration));
};
export { toast, newToast };
