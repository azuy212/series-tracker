<script setup lang="ts">
const tab = ref<number>()
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center" bg-color="primary">
      <v-tab to="/tabs/following" exact>
        Following
      </v-tab>
      <v-tab to="/tabs/next" exact>
        Next to Watch
      </v-tab>
      <v-tab to="/tabs/calendar" exact>
        Calendar
      </v-tab>
    </v-tabs>
  </v-card>
  <router-view />
</template>
