
import { ToDo } from '@/models/ToDo'
import { IRootState } from '@/store'
import { Module } from 'vuex'

export interface IJsExampleState {
  isLoading: boolean
  errMessage: string
  todos: Array<ToDo>
}

export declare const state: () => IJsExampleState

export declare const JsModuleExample: Module<IJsExampleState, IRootState>
