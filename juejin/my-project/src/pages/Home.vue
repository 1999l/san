<template>
  <div>
    <Divider />
    <Login />
    <Registar />
    <Card />
  </div>
</template>

<script>
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Login from "./Login.vue";
import Registar from "./Registar.vue";
export default {
  methods: {},
  components: {
    Divider,
    Card,
    Login,
    Registar
  }
};
</script>