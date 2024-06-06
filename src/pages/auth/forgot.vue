<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm'
import rules from '@/helpers/rules'

const email = ref('')

const form = ref<VForm | null>(null)
async function submit() {
  if (!form.value)
    return
  await form.value?.validate()
}
</script>

<template>
  <v-card-item class="mb-4 text-center">
    <v-card-title>Forgot Password?</v-card-title>
    <v-card-subtitle>Enter your email to reset your password.</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <v-form ref="form">
      <v-text-field v-model="email" label="Email" :rules="[rules.required, rules.email]" />
    </v-form>
  </v-card-text>
  <v-card-actions>
    <v-col>
      <v-row>
        <v-col>
          <v-btn color="primary" block variant="outlined" @click="submit">
            Submit
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn color="primary" to="/auth/login" prepend-icon="mdi-arrow-left">
            Back to Login
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card-actions>
</template>

<route lang="yaml">
  meta:
    layout: auth
</route>
