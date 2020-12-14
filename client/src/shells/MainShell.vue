<template>
  <q-layout view="hHh lpR fFf">

    <navbar-app :logo="logo" />

    <drawer-app />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-app />

  </q-layout>
</template>

<script>
import NavbarApp from '../components/NavbarApp';
import DrawerApp from '../components/DrawerApp';
import FooterApp from '../components/FooterApp';
import Logo from '../assets/logo.png';

export default {
  name: 'MainShell',
  components: {
    NavbarApp,
    DrawerApp,
    FooterApp,
  },
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>
