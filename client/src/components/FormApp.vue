<template>
  <div>
    <div class="bg-blue-grey">
      <slot name="header" />
    </div>
    <div>
      <slot name="body" />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormApp',
};
</script>

<style scoped>

</style>
