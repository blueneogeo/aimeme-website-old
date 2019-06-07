<template lang="pug">
  layout
    g-image.image(alt='Gridsome' src='~/assets/favicon.png' width=135)

    h1.title {{ title }}

    p
      | This is a starter template for Gridsome using Typescript.
      | It uses 
      strong wotan 
      | for command line code analysis and 
      strong tslint 
      | for integration with vscode.
      | In order to work with Visual Studio Code, you'll need to install 
      strong TSLint 
      | and 
      strong TSLint Vue 
      | extensions for the editor.

    p.home-links
      a(href="https://gridsome.org/docs" target="_blank" rel="noopener") Gridsome Docs
      a(href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener") GitHub

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class HomePage extends Vue {
    title = 'Typescript Starter for Gridsome'
  }
</script>

<style lang="sass" scoped>
  .home-links a
    margin-right: 1rem

  .image
    display: block
    margin: 0 auto

  .title
    text-align: center
    margin: 36px auto 24px
</style>
