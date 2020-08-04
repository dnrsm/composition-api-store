<template>
  <div class="count">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "@vue/composition-api";
import { CounterStore, CounterKey } from "@/composables/useCounter.ts";

export default defineComponent({
  name: "CountBtn",
  setup() {
    const { increment, decrement } = inject(CounterKey) as CounterStore;

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
