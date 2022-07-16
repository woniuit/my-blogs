import { defineClientConfig } from "@vuepress/client";
import CustomLayout from "./components/home.vue";

export default defineClientConfig({
    enhance({ app }) {
        app.component("CustomLayout", CustomLayout);
    },
});
