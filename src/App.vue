<template>
  <v-app>
    <v-main style="padding:0px;">
      <router-view />
    </v-main>
    <v-footer color="#2a2a2a" app height="60px" padless position="fixed">
      <v-card-text class="white--text text-center foot-line" position="fixed">
        <a href="/" style="text-decoration: none;color: #fff;">
          <strong>終末なにしてますか？忙しいですか？ 救ってもらっていいですか？</strong>
        </a>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiInformation, mdiCloudUpload } from "@mdi/js";
export default {
  name: "App",

  data: () => ({
    //
    drawer: false,
    svgInformationh: mdiInformation,
    svgCloudUpload: mdiCloudUpload,
  }),
  head() {
    return {
      title: this.$t("site.about") + " - " + this.$t("site.title"),
    };
  },
};
</script>

<style scoped>
.foot-line {
  padding-top: 6px;
  font-size: 14px;
}
</style>
