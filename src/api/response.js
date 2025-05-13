import { showError } from '../services/notification.service'
import { Router } from '../router'

export function responseInterceptor() {
  async function onRejected(error) {
    if (!error.response) {
      showError('Нет соединения с сервером')
      return Promise.reject(error)
    }

    const { status, data } = error.response

    let data_error = data?.errors || data?.message || data?.errors.message || 'Произошла ошибка'

    if (error.config?.showError !== false) {
      showError(data_error)
    }

    if (status === 401) {
      Router.push({ name: 'login' })
    } else if (status === 403) {
      Router.push({ name: 'forbidden' })
    }

    return Promise.reject(error)
  }

  return {
    onRejected,
  }
}
