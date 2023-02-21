const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  //publicPath: '/go-home/',
  publicPath: process.env.NODE_ENV === "production" ? "/go-home/" : "/",

  transpileDependencies: true,
})
