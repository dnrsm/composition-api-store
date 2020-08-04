<template>
  <div class="count">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "@vue/composition-api";
import useCounter from "@/composables/useCounter.ts";

export default defineComponent({
  name: "CountBtn",
  setup() {
    const { increment, decrement } = useCounter()

    return {
      increment,
      decrement
    };
  }
});
</script>

<style scoped>
.count {
  font-weight: bold;
  font-size: 24px;
}
</style>
