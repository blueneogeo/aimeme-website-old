<template lang="pug">
  layout
    g-image.image(alt='Gridsome' src='~/assets/favicon.png' width=135)

    h1.title {{ title }}

    section#users
      p
        | Here are all the currently registered users:
      div(v-for="user in $page.aimeme.users" :key="user.id")
        h3 
          a(href='#' @click='onClickDeleteUser(user.id)')
            | {{user.email}} : {{user.role}} - pw: {{user.password}}

    p.home-links
      a(href="https://gridsome.org/docs" target="_blank" rel="noopener") Gridsome Docs
      a(href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener") GitHub

</template>

<page-query>
  query {
    aimeme {
      users {
        email,
        password
        role
      }
    }
  }
</page-query>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class UsersPage extends Vue {
    title = 'All AImeme users'

    onClickDeleteUser(id: number) {
      console.log((this as any).$apollo)
    }

  }
</script>
