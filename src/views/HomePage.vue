<script setup>
import { ref, onMounted } from 'vue'
import { useVote } from '../composables/useVote'

const data = ref([])
let { getVote, incrementVote } = useVote()

onMounted(async () => {
  data.value = await getVote()
  console.log(data.value)
})

async function handleVote(id) {
  console.log(id)
  try {
    await incrementVote(id)
    data.value = await getVote()
  } catch (error) {
    console.error('Error voting:', error)
  }
}
</script>

<template>
  <q-page padding class="bg-grey-2">
    <div class="q-mx-auto" style="max-width: 800px">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Голосование</div>
        </q-card-section>

        <q-list bordered separator>
          <q-item
            v-for="item in data"
            :key="item.id"
            clickable
            v-ripple
            @click="handleVote(item)"
            class="q-my-sm"
          >
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>Номер: {{ item.id }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge color="secondary"> {{ item.count }} голосы </q-badge>
            </q-item-section>
          </q-item>
        </q-list>

        <q-card-actions align="right" v-if="data.length">
          <q-btn flat color="primary" label="Обновить" @click="onMounted" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
.q-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>
