<script setup lang="ts">
const tab = ref<'following' | 'next' | 'calendar'>('next')
</script>

<template>
  <v-card>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      bg-color="primary"
    >
      <v-tab to="/following">
        Following
      </v-tab>
      <v-tab to="/next">
        Next to Watch
      </v-tab>
      <v-tab to="/calendar">
        Calendar
      </v-tab>
    </v-tabs>
    <router-view />
  </v-card>
</template>
