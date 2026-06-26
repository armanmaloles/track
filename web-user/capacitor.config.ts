import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.trackv2.app",
  appName: "Trackv2",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
