<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

let { onSubmit } = useAuth()

function onOk() {
  onSubmit(form.value)
  form.value.password = ''
}

const form = ref({
  login: '',
  password: '',
})
</script>

<template>
  <q-page padding class="flex flex-center">
    <q-card class="login-card q-mx-md">
      <q-card-section>
        <q-form @submit.prevent="onOk()" class="q-gutter-md">
          <div class="text-h6">Вход в систему</div>
          <q-input v-model="form.login" color="black" label="Логин" autofocus />
          <q-input v-model="form.password" color="black" label="Пароль" type="password" />
          <div>
            <q-btn
              label="Войти"
              type="submit"
              color="black"
              class="full-width"
              :disable="!(form.login != '' && form.password != '')"
              unelevated
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="scss">
.login-card {
  width: 100%;
  max-width: 370px;
  min-width: 290px;
  border-radius: 12px;
  box-shadow: $shadow-5;

  .q-field--outlined .q-field__control:before {
    border-color: rgba(0, 0, 0, 0.1);
  }

  .q-btn {
    border-radius: 8px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 360px) {
    margin: 8px;
    min-width: calc(100% - 16px);
  }
}
</style>
