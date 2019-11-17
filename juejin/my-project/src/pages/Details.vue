<template>
  <div>
    <Divider/>
    <Details />
  </div>
</template>
<script>
import Divider from "../components/Divider.vue";
import Details from "../components/Details-card.vue";
export default {
  components: {
    Details,
    Divider
  }
};
</script>