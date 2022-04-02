<template>
  <div class="js-example-view">
    <pre>
      {{ todos }}
    </pre>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'JsExampleView',
  computed: {
    ...mapState('JsModuleExample', {
      todos: (state) => state.todos,
      errMessage: (state) => state.errMessage
    })
  },
  methods: {
    ...mapActions('JsModuleExample', ['fetchTodos'])
  },
  mounted () {
    this.fetchTodos()
  }
}
</script>

<style scoped>
</style>
