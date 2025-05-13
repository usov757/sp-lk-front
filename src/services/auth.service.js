import { publicApi } from '../api/api.js'
import _ from 'lodash'

export async function login(params) {
  return publicApi.post('/auth/login', params)
}

export async function logout() {
  return publicApi.post('/logout')
}

export function getCurrentUser() {
  return publicApi.get('/current-user')
}

export function groupNames(user) {
  if (!user) return []

  return user?.userGroups
    ? _.map(user?.userGroups || [], (item) => (typeof item === 'string' ? item : item?.name || ''))
    : _.map(user?.groups || [], (item) => (typeof item === 'string' ? item : item?.name || ''))
}

export function inAnyGroup(user, groups) {
  if (!user) return false

  const userGroups = groupNames(user).filter(Boolean)
  return _.some(groups, (group) => userGroups.some((el) => String(el).match(groupRegex(group))))
}

export function inEveryGroup(user, groups) {
  if (!user) return false

  const userGroups = groupNames(user).filter(Boolean)
  return _.every(groups, (group) => userGroups.some((el) => String(el).match(groupRegex(group))))
}

function groupRegex(group) {
  return new RegExp(`^${group}$`, 'i')
}
