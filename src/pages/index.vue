<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const { isLoggedIn } = useAuthStore()
const router = useRouter()
if (isLoggedIn)
  router.push({ name: '/tabs' })
else
  router.push('/auth')
</script>

<template>
  <div />
</template>
