<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    map-options
    options-dense
    :label="this.$t('language.change')"
    label-color="white"
    color="white"
    dense
    dark
    borderless
    emit-value
    style="min-width: 150px"
  >
    <template #append>
      <q-icon
        name="language"
        size="sm"
        color="white"
      />
    </template>
  </q-select>
</template>

<script>
export default {
  name: 'LanguagePickerApp',
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'uz', label: 'Uzbek' },
      ],
    };
  },
  watch: {
    lang(lang) {
      localStorage.setItem('lang', lang);
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>

</style>
