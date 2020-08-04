import {reactive, toRefs, InjectionKey } from "@vue/composition-api";

interface State {
  count: number
}

export default function useCounter() {

  const state = reactive<State>({
    count: 0
  });

  const increment = (): void => {
    state.count++
  };

  const decrement = (): void => {
    state.count--
  };

  return {
    increment,
    decrement,
    ...toRefs(state)
  } as const;
}

export type CounterStore = ReturnType<typeof useCounter>;
export const CounterKey: InjectionKey<CounterStore> = Symbol("CounterStore");
