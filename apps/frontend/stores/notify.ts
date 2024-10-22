import { defineStore } from "pinia";
import type { AllNotificationsStreamSubscription } from "~/gql/operations";
import { QueryTags } from "~/helpers/query-tags";
import { refetchQueriesByTags } from "~/helpers/utils";

/**
 * Useage: add <Notifications /> to the Layout used
 */

const DEFAULT_TIMEOUT = 5000; // Default timeout in milliseconds

export enum NotificationTypes {
  Info = "info",
  Error = "error",
  Warning = "warning",
  Success = "success",
}

export enum NotificationLocation {
  Top = "top",
  Right = "right",
  Left = "left",
  Center = "center",
  Bottom = "bottom",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
}

export interface Notification {
  id: number;
  type: NotificationTypes | string;
  message: string;
  location: NotificationLocation | string;
  title: string;
  progress: boolean;
  timeout: number;
  timeRemaining: number;
  timerId: number | null;
  intervalId: number | null;
}

export const defaultNotification: Notification = {
  id: -1,
  type: NotificationTypes.Info,
  message: "",
  location: NotificationLocation.Bottom,
  title: "",
  progress: false,
  timeout: DEFAULT_TIMEOUT,
  timeRemaining: DEFAULT_TIMEOUT,
  timerId: null,
  intervalId: null,
};
/**
 * REQUIRED: Must add the Notifications.vue component to the root layout
 */
export const useNotifyStore = defineStore("notify", () => {
  const messages = ref<Notification[]>([]);

  function removeMessage(id: number) {
    const notification = messages.value.find((item) => item.id === id);
    messages.value = messages.value.filter((message) => message.id !== id);
  }

  function show(partialNotification: Partial<Notification>) {
    const notification: Notification = {
      ...defaultNotification,
      id: Date.now(),
      ...partialNotification,
    };

    messages.value.push(notification);
    return notification;
  }

  /**
   * This is fired everytime a new notification comes in
   * @param data
   */
  async function onNewNotification(data: AllNotificationsStreamSubscription) {
    show({
      message: data.notification_stream.map((s) => s.payload)[0],
      location: NotificationLocation.Top,
      type: data.notification_stream.map((s) =>
        String(s.event?.event_type).toLowerCase(),
      )[0],
    });
    // Refetch any queries tagged with notifications
    refetchQueriesByTags([
      QueryTags.NOTIFICATIONS_DATA,
      QueryTags.NOTIFICATION_DATA,
    ]);
  }

  // public
  return {
    // properties
    messages,
    // actions
    show,
    removeMessage,
    onNewNotification,
  };
});
