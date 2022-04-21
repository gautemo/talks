import { watchEffect } from "vue";
import { vote } from "./firebase";
import { useStorage } from '@vueuse/core'

export interface Votes {
  prefers?: string,
  language?: string,
  template?: string,
  if?: string,
  list?: string,
  state?: string,
  stateobject?: string,
  computed?: string,
  props?: string,
}
export type VoteKey = keyof Votes

export const votes = useStorage<Votes>('votes', {})

watchEffect(() => {
  vote(votes.value)
})