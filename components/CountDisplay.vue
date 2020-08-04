<template>
  <div class="count">
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "@vue/composition-api";
import useCounter from "@/composables/useCounter.ts";

export default defineComponent({
  name: "CountDisplay",
  setup() {
    const { count } = useCounter()

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
