<script setup lang="ts">
import { definePage } from 'vue-router/auto'

definePage({
  redirect: '/auth/login',
  meta: {
    layout: false,
  },
})
</script>

<template>
  <RouterView />
</template>
