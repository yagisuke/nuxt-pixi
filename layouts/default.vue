<template>
  <div class="container">
    <nuxt/>
    <back-link v-if="$route.path !== '/'" />
  </div>
</template>

<script>
import BackLink from "~/components/molecules/link/back-link"

export default {
  components: {
    BackLink
  }
}
</script>

<style>
.container {
  padding-bottom: 100px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
