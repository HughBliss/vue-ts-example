<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { TodoActions, TodoMapper, TodoState } from '@/store/modules/TodoModule'
import { Dispatch } from 'vuex-smart-module'

const MappedComponent = Vue.extend({
  computed: TodoMapper.mapState({
    todos: (state: TodoState) => state.todos
  }),
  methods: TodoMapper.mapActions({
    fetchTodos: async (dispatch: Dispatch<TodoActions>): Promise<void> => {
      await dispatch('fetchTodos')
    }
  })
})

@Component({})
export default class Todo extends MappedComponent {
  async created () : Promise<void> {
    await this.fetchTodos()
  }
}

</script>

<template>
  <div class="about">
    <pre>{{ todos }}</pre>
  </div>
</template>
