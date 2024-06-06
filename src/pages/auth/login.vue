<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm'
import rules from '@/helpers/rules'

const username = ref('')
const password = ref('')

const form = ref<VForm | null>(null)
async function submit() {
  if (!form.value)
    return
  await form.value?.validate()
}
</script>

<template>
  <v-card-item class="mb-4 text-center">
    <v-card-title>Welcome Back!</v-card-title>
    <v-card-subtitle>Please log in to continue.</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <VForm ref="form">
      <v-text-field v-model="username" label="Username" :rules="[rules.required]" />
      <v-text-field v-model="password" label="Password" type="password" :rules="[rules.required]" />
    </VForm>
  </v-card-text>
  <v-card-actions>
    <v-col>
      <v-row>
        <v-col>
          <v-btn block color="primary" variant="outlined" @click="submit">
            Login
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/auth/register" class="text-primary">
            Register
          </router-link>
        </v-col>
        <v-col class="text-right">
          <router-link to="/auth/forgot" class="text-primary">
            Forgot your password?
          </router-link>
        </v-col>
      </v-row>
    </v-col>
  </v-card-actions>
</template>

<route lang="yaml">
  meta:
    layout: auth
</route>
