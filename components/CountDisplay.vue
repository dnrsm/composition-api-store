<template>
  <div class="count">
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "@vue/composition-api";
import { CounterStore, CounterKey } from "@/composables/useCounter.ts";

export default defineComponent({
  name: "CountDisplay",
  setup() {
    const { count } = inject(CounterKey) as CounterStore;

    return {
      count
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
