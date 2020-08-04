<template>
  <div class="container">
    <div>
      <CountBtn />
      <CountDisplay />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "@vue/composition-api";
import CountBtn from "@/components/CountBtn.vue";
import CountDisplay from "@/components/CountDisplay.vue";

export default defineComponent({
  name: "index",
  components: {
    CountBtn,
    CountDisplay
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
