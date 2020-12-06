<template>
  <NavigationButton
      v-bind="$attrs"
      v-on="$listeners"
      :text="text"
      icon.decode="font://&#xF004D;"
      class="t-12 mdi"
      ios.position="right"
  />
</template>

<script>
export default {
  name: "MyActionBarBackBtn",
  props: {
    text: {
      type: String,
      default: 'Назад'
    }
  }
}
</script>

<style scoped>

</style>