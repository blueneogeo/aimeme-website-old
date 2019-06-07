<template lang="pug">
  layout
    h1 About us
    p {{ foo }}
    button(@click='bar()') click me
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class YourComponent extends Vue {

    foo: number = 123

    bar() {
      // Correctly update the expected property.
      this.foo = 456
    }

  }
</script>
