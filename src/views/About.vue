<template>
  <div>
    <markdown-it-vue class="md-body" :content="content" :options="options" />
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
import about_md from "../assets/about.js";
export default {
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      content: about_md,
      options: {
        markdownIt: {
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}
.md-text {
  width: 90%;
}
.md-body {
  text-align: left;
  width: 90%;
  margin-left: 15px;
}
</style>
