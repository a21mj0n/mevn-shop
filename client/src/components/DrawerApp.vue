<template>
  <q-drawer
    :value="drawer"
    :width="200"
    :breakpoint="400"
  >
    <q-scroll-area
      class="scroll-area">
      <q-list padding>
        <q-item
          clickable
          v-ripple
          :to="{ name: 'crud-products' }"
        >
          <q-item-section avatar>
            <q-icon name="store_mall_directory" />
          </q-item-section>

          <q-item-section>
            {{ $t('product.plural') }}
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item clickable v-ripple :to="{ name: 'crud-categories' }">
          <q-item-section avatar>
            <q-icon name="category" />
          </q-item-section>

          <q-item-section>
            {{ $t('category.plural') }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img class="absolute-top" :src="headerBackground" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar v-if="user.image" size="56px" class="q-mb-sm">
          <img :src="user.image">
        </q-avatar>
        <q-avatar v-else color="primary" text-color="white" size="56px" class="q-mb-sm">
          {{ `${head(user.name)}${head(user.surname)}` }}
        </q-avatar>
        <div class="text-weight-bold">{{ `${ user.name } ${user.surname}` }}</div>
        <div>{{ user.email }}</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
import VueTypes from 'vue-types';
import { mapGetters } from 'vuex';
import { head } from 'lodash-es';

export default {
  name: 'ADrawer',
  props: {
    user: VueTypes.object.def({
      name: 'Azimjon',
      surname: 'Toirov',
      email: 'azmijontoirov@gmail.com',
      image: '',
    }),
    headerBackground: VueTypes.string.def('https://user-images.githubusercontent.com/513929/53929982-e5497700-404c-11e9-8393-dece0b196c98.png'),
  },
  computed: {
    ...mapGetters({
      drawer: 'drawer/hasOpen',
    }),
  },
  methods: {
    head,
  },
};
</script>

<style scoped>
  .scroll-area {
    height: calc(100% - 150px);
    margin-top: 150px;
    border-right: 1px solid #ddd
  }
</style>
