<script setup>
import * as NotificationService from './services/notification.service'

import { watch } from 'vue'

import { useStore } from './composables/useStore'
import { getCurrentUser } from './services/auth.service'

import './utils/date.util'

const { store } = useStore()

getCurrentUser().then((user) => {
  store.value.sessionStorage.user = user
})

watch(() => store.error, NotificationService.showError)
</script>

<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
