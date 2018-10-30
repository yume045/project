<template>
  <div id="app">
    <section>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Pictures"></b-tab-item>
            <b-tab-item label="Music"></b-tab-item>
            <b-tab-item label="Videos"></b-tab-item>
        </b-tabs>

        <b-tabs position="is-right" class="block">
            <b-tab-item label="Pictures"></b-tab-item>
            <b-tab-item label="Music"></b-tab-item>
            <b-tab-item label="Videos"></b-tab-item>
        </b-tabs>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
