<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm'
import rules from '@/helpers/rules'

const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)

const form = ref<VForm | null>(null)
async function submit() {
  if (!form.value)
    return
  await form.value?.validate()
}
</script>

<template>
  <v-card-item class="mb-4 text-center">
    <v-card-title>Reset Password</v-card-title>
    <v-card-subtitle>Choose a new password for your account.</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <v-form>
      <v-text-field
        v-model="password"
        label="Password"
        :rules="[rules.required, rules.min(8)]"
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        required
        @click:append-inner="showPassword = !showPassword"
      />

      <v-text-field
        v-model="confirmPassword"
        label="Confirm Password"
        :rules="[rules.required, rules.match(password)]"
        type="password"
        required
      />
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
