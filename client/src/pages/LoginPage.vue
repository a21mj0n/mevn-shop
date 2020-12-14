<template>
  <q-page class="bg-grey-1 row items-center justify-around">
    <div class="row q-mb-xl q-col-gutter-x-xl">
      <div class="col-md-6 col-xs-12 form-container flex justify-center">
        <h2 class="text-weight-medium text-center">Other Links</h2>
        <q-img
          src="images/logo.png"
          width="207px"
        />
        <p class="text-primary text-h6 text-center">
          If you don't have an account ? Plaese Sign Up here &downarrow;.
        </p>
        <router-link
          tag="span"
          class="q-mt-4 text-h6 cursor-pointer"
          :to="{ name: 'register' }"
        >
          Sign Up
        </router-link>
      </div>
      <div class="col-md-6 col-xs-12 form-container">
        <h2 class="text-weight-medium text-center">Sign In</h2>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="email"
            label="Your email *"
            hint="Name and surname"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Your password *"
            lazy-rules
            :rules="[
                val => val !== null && val !== '' || 'Please type your password',
                val => val > 8 || 'Password length must be min 8 characters'
              ]"
          />

          <div>
            <q-btn
              outline
              label="Reset"
              type="reset"
              color="primary"
              class="full-width q-py-xs"
            />
            <q-btn
              label="Sing In"
              type="submit"
              color="primary"
              class="full-width q-mt-md q-py-xs"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      password: null,
      email: null,
    };
  },
  computed: {
    redirectedRouteName() {
      return this.$route.query.redirect;
    },
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password,
      });
      if (this.redirectedRouteName) {
        await this.$router.push({ name: this.redirectedRouteName });
      } else {
        await this.$router.push({ name: 'home' });
      }
    },

    onReset() {
      this.password = null;
      this.email = null;
      this.accept = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  $width: 30rem;

  .form-container {
    width: $width;
    margin: 0 auto;
  }
</style>
