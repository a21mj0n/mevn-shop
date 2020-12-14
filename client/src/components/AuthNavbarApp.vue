<template>
  <q-header elevated class="bg-dark">
    <q-toolbar>
      <router-link :to="{ name: 'home' }" tag="div" class="cursor-pointer">
        <q-toolbar-title>
          <q-img :src="logo" width="30px" />
          ue Admin
        </q-toolbar-title>
      </router-link>
      <q-space />
      <language-picker-app class="q-mr-md" />
    </q-toolbar>
  </q-header>
</template>

<script>
import VueTypes from 'vue-types';
import LanguagePickerApp from './LanguagePickerApp';

export default {
  name: 'AuthNavbarApp',
  props: {
    logo: VueTypes.string.isRequired,
  },
  components: {
    LanguagePickerApp,
  },
};
</script>
