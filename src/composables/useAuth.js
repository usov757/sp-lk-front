// import { api } from "../aisApi.js";
import { useRouter } from 'vue-router'
import * as AuthService from '../services/auth.service'
import { useStore } from '../composables/useStore'

// const SESSION_STORAGE_KEY = "pioner_vending";
let { getSessionUser } = useStore()

export function useAuth() {
  const router = useRouter()
  const user = getSessionUser()

  function inAnyGroup(groups) {
    return AuthService.inAnyGroup(user ? user : null, groups)
  }

  function inEveryGroup(groups) {
    return AuthService.inEveryGroup(user ? user : null, groups)
  }

  async function onSubmit(form) {
    await AuthService.login(form)
    // sessionStorage.setItem(SESSION_STORAGE_KEY, data);
    router.push('/')
  }

  async function onLogout() {
    sessionStorage.clear()
    await AuthService.logout()
    router.push('/login')
  }

  async function currentUser() {
    return await AuthService.getCurrentUser()
  }

  return {
    onSubmit,
    onLogout,
    inAnyGroup,
    inEveryGroup,
    currentUser,
  }
}
