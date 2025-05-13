// import { api } from "../aisApi.js";
import * as VoteService from '../services/vote.service'

export function useVote() {

  async function getVote() {
    return await VoteService.get()
  }

  async function createVote() {
    return await VoteService.create()
  }

  async function incrementVote(id) {
    return await VoteService.increment(id)
  }

  async function deleteVote(id) {
    return await VoteService.deleteVote(id)
  }

  return {
    getVote,
    createVote,
    incrementVote,
    deleteVote
  }
}
