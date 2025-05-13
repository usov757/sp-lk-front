<script setup>
import { ref, onMounted } from 'vue'
import { useVote } from '../composables/useVote'

const data = ref(null)

let { getVote } = useVote()
// let { getVote, createVote, incrementVote, deleteVote } = useVote()

onMounted(async () => {
  data.value = await getVote()
  console.log(data.value)

  // await createVote()

  // await incrementVote()

  // await deleteVote()
})
</script>

<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 1200px"></div>
  </q-page>
</template>
