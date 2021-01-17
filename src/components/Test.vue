<template>
  <v-img
    :src="require('../assets/images/okaeri.png')"
    class="my-0"
    lazy-src
    alt
    width="100vw"
    height="100vh"
  >
    <v-layout class fill-height style="background-color: rgba(0, 0, 0, 0.6);">
      <v-container>
        <v-row align="center" justify="center" class="mt-3">
          <v-app-bar class="home-nav" color="transparent" flat max-width="940px">
            <a href="/" class="home-a">
              CHTHOLLY
              <strong>BAO</strong>
            </a>
            <v-spacer></v-spacer>
            <v-row class="mt-6 ml-16" style="padding-left:200px" no-gutters>
              <a href class="home-a-list">{{ $t("site.home") }}</a>

              <a href class="home-a-list">{{ $t("site.pictures") }}</a>

              <a href="/about" class="home-a-list">{{ $t("site.about") }}</a>

              <a href="/uploadvoice" class="home-a-list">{{ $t("site.uploadvoice") }}</a>

              <a href="/test" class="home-a-list">{{ $t("site.test") }}</a>
            </v-row>
          </v-app-bar>
        </v-row>
        <v-row>
          <div class="home-h">
            <h1 class="home-h1">おかえり，マイ デイア，クトリ。</h1>
            <h1 class="home-h2">Welcome back,Chtholly.</h1>
          </div>
        </v-row>
      </v-container>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      alignment: "start",
      justify: "center",
    };
  },
};
</script>

<style lang="css" scoped>
.home-nav {
  /* position: absolute; */
  left: 0px;
  top: 0px;
  right: 0px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}
.home-a {
  margin-top: 12px;
  margin-left: -15px;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  font-weight: 300;
  position: relative;
  float: left;
  text-decoration: none;
}
.home-a-list {
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 0px 25px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 350ms ease;
  opacity: 1;
}
.home-h {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
}
.home-h1 {
  text-align: center;
  margin-top: 160px;
  font-size: 65px;
  line-height: 60px;
  letter-spacing: 0px;
  text-transform: none;
  font-weight: 100;
}
.home-h2 {
  text-align: center;
  margin-top: 40px;
  font-size: 40px;
  line-height: 55px;
  letter-spacing: 0px;
  text-transform: none;
  font-weight: 300;
}
</style>