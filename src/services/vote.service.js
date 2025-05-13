import { publicApi } from '../api/api.js'

export async function get() {
  return publicApi.get('/vote')
}

export async function create() {
  return publicApi.post('/vote')
}

export function increment(id) {
  return publicApi.put(`/${id}/increment`)
}

export function deleteVote(id) {
  return publicApi.delete(`/vote/${id}`)
}

