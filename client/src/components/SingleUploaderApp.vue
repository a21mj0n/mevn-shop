<template>
  <form enctype="multipart/form-data" @submit.prevent="sendFile">
    <label for="file" class="q-pa-md text-black" style="border: 1px dashed #ccc">
      <q-icon name="attach_file" size="sm" color="q-mr-sm" />
      <span>Choose file</span>
    </label>

    <input
      ref="file"
      type="file"
      id="file"
      hidden
      @change="selectFile"
    >

    <span v-if="this.$refs.file">
      {{ this.$ref.file }}
    </span>

    <q-btn
      class="bg-blue-grey-1"
      color="black"
      dense
      flat
      icon="cloud_upload"
      size="md"
      style="
        border: 1px solid #ccc;
        padding: .5rem 0;"
    />
  </form>
</template>

<script>
export default {
  name: 'SingleUploaderApp',
  methods: {
    sendFile() {
      console.log('file sent');
    },
    selectFile() {
      console.log(this.$refs.file.files[0]);
    },
  },
};
</script>

<style scoped>

</style>
