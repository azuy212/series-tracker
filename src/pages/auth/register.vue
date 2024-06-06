<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm'
import rules from '@/helpers/rules'

const user = reactive({
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dob: new Date('1999-01-01'),
  gender: 'Male' as 'Male' | 'Female',
  agree: '',
})
const showPassword = ref(false)

const dateText = computed(() => user.dob.toLocaleDateString())

const form = ref<VForm | null>(null)
async function submit() {
  if (!form.value)
    return
  await form.value?.validate()
}
</script>

<template>
  <v-card-item class="mb-4 text-center">
    <v-card-title>Create an Account</v-card-title>
    <v-card-subtitle>Join us and start tracking your favorite show. </v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <v-form ref="form">
      <v-text-field
        v-model="user.name"
        label="Full Name"
        :rules="[rules.required]"
        required
      />

      <v-text-field
        v-model="user.username"
        label="Username"
        :rules="[rules.required]"
        required
      />

      <v-text-field
        v-model="user.email"
        label="Email Address"
        :rules="[rules.required, rules.email]"
        required
      />

      <v-text-field
        v-model="user.password"
        label="Password"
        :rules="[rules.required, rules.min(8)]"
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        required
        @click:append-inner="showPassword = !showPassword"
      />

      <v-text-field
        v-model="user.confirmPassword"
        label="Confirm Password"
        :rules="[rules.required, rules.match(user.password)]"
        type="password"
        required
      />

      <v-text-field
        v-model="dateText"
        label="Date of Birth"
        readonly
      >
        <v-menu activator="parent" transition="scale-transition">
          <v-date-picker v-model="user.dob" />
        </v-menu>
      </v-text-field>

      <v-select
        v-model="user.gender"
        :items="['Male', 'Female']"
        label="Gender"
      />

      <v-checkbox
        v-model="user.agree"
        :rules="[rules.required]"
        label="I agree to the Terms and Conditions"
      />
    </v-form>
  </v-card-text>
  <v-card-actions>
    <v-col>
      <v-row>
        <v-col>
          <v-btn block color="primary" variant="outlined" @click="submit">
            Register
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-right">
        <v-col>
          <router-link to="/auth/login" class="text-primary">
            Already have an account?
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
