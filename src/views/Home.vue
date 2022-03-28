<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { mapActions, mapState } from 'vuex'
// import { IUsersState, UsersActions } from '@/store/modules/UsersModule'
// import { TMapState } from '@/CommonTypes'
// import { Dispatch } from 'vuex-smart-module'
// import UserModel from '@/models/UserModel'

import { usersMapper } from '@/store/modules/UsersModule'
import UserModel from '@/models/UserModel'

const UsersMapper = Vue.extend({
  computed: usersMapper.mapState({
    users: (state) => state.users
  }),
  methods: usersMapper.mapActions({
    fetchUsers: async (dispatch) => {
      await dispatch('fetchUsers')
    },
    fetchUserById: async (dispatch, id: number): Promise<UserModel> => {
      return dispatch('fetchUserById', id) as Promise<UserModel>
      // return dispatch('fetchUserById', id) as Promise<UserModel>
    }
  })
})

@Component({})
export default class Home extends UsersMapper {
  async created (): Promise<void> {
    console.log(this.users)
    // const user = await this.fetchUserById(1)

    return this.fetchUsers()
  }
}
</script>

<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" @click="handleClickLogo">-->
    <pre>{{ users }}</pre>
  </div>
</template>
