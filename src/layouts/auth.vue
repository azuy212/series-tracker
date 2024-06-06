<script lang="ts" setup>
//
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-card width="460" class="pa-4">
            <router-view />
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
