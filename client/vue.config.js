const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sass: {
      additionalData: `@import "@/assets/global.scss"`
    }
  }
});
