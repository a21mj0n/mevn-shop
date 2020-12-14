<template>
  <q-header elevated class="bg-dark">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        :icon="isOpened ? 'close' : 'menu'"
        @click="onOpen"
      />
      <router-link to="/" tag="div" class="cursor-pointer">
        <q-toolbar-title>
          <q-img :src="logo" width="30px" />
          ue Admin
        </q-toolbar-title>
      </router-link>
      <q-space />
      <language-picker-app class="q-mr-md" />
      <q-btn
        v-if="isAuthenticated"
        dense
        flat
        label="Sign Out"
        icon-right="exit_to_app"
        @click="logOut"
      />
      <q-btn
        v-else
        dense
        flat
        label="Sign In"
        icon-right="login"
        :to="{ name: 'login' }"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import VueTypes from 'vue-types';
import { mapGetters } from 'vuex';
import LanguagePickerApp from './LanguagePickerApp';

export default {
  name: 'NavbarApp',
  props: {
    logo: VueTypes.string.isRequired,
  },
  components: {
    LanguagePickerApp,
  },
  computed: {
    ...mapGetters({
      isOpened: 'drawer/hasOpen',
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
  watch: {
    handler: 'logOut',
    immediate: true,
  },
  methods: {
    onOpen() {
      if (this.isOpened) {
        this.$store.dispatch('drawer/open', false);
      } else {
        this.$store.dispatch('drawer/open', true);
        // this.$store.dispatch('drawer/close', true);
      }
    },
    async logOut() {
      await this.$store.dispatch('auth/signOut');
      await this.$router.push({ name: 'login' });
    },
  },
};
</script>
