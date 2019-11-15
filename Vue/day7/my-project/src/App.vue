<template>
  <div id="app">
    <Search />
    <Grid />
    <Divider />
    <Card/>
    <Tabbar />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Grid from "./components/Grid.vue";
import Divider from "./components/Divider.vue";
import Card from "./components/Card.vue";
import Tabbar from "./components/Tabbar.vue";

export default {
  name: "app",
  components: {
    Search,
    Grid,
    Divider,
    Card,
    Tabbar
  }
};
</script>

<style>
</style>
