export interface AppSetting {
  foo: string;
  bar: string[];
}

export interface Settings {
  app: AppSetting;
}

export const defaultSettings: Settings = {
  app: {
    foo: "baz",
    bar: ["foo", "spam", "ni"],
  },
};

export default defaultSettings;
