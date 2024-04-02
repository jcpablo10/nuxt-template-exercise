<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCounterStore } from '~/src/ui/stores/counter';
import { Auth } from '~/src/ui/stores/auth';

const counter = useCounterStore()
const authStore = Auth

console.log(authStore)

counter.count++

counter.increment()

// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead


const route = useRoute()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <div>Current Count: {{ counter.count }}</div>
    <button @click="counter.increment">Increment</button>
  </div>
</template>