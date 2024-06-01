<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const { isLoggedIn } = useAuthStore()
const router = useRouter()
if (isLoggedIn)
  router.push({ name: '/tabs/next' })
else
  router.push('/auth/login')
</script>

<template>
  <div />
</template>
