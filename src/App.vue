<template>
  <div id="app">
    <BakingReport/>
  </div>
</template>

<script>
import BakingReport from '@/components/BakingReport'

export default {
  name: 'App',
  components: {
    BakingReport
  }
}
</script>

<style>
html,
body,
#app {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
