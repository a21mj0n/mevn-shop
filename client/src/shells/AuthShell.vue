<template>
  <q-layout view="hHh lpR fFf">

    <auth-navbar-app :logo="logo" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-app />

  </q-layout>
</template>

<script>
import AuthNavbarApp from 'components/AuthNavbarApp';
import FooterApp from '../components/FooterApp';
import Logo from '../assets/logo.png';

export default {
  name: 'AuthShell',
  components: {
    AuthNavbarApp,
    FooterApp,
  },
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>

</style>
