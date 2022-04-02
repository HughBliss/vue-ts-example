<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { TodoActions, TodoMapper, TodoState } from '@/store/modules/TodoModule'
import { Dispatch } from 'vuex-smart-module'

const MappedComponent = Vue.extend({
  computed: TodoMapper.mapState({
    todos: (state: TodoState) => state.todos,
    count: state => state.todos.filter(t => t.isComplete).length
  }),
  methods: TodoMapper.mapActions({
    fetchTodos: async (dispatch: Dispatch<TodoActions>): Promise<void> => {
      await dispatch('fetchTodos')
    },
    getTodos: async dispatch => await dispatch('fetchTodos')
  })
})

@Component({})
export default class Todo extends MappedComponent {
  async created (): Promise<void> {
    console.log(this.count)
    await this.fetchTodos()
  }
}
</script>

<template>
  <div class="about">
    <pre>{{ todos }}</pre>
  </div>
</template>
