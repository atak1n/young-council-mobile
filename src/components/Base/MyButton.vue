<template>
  <MDButton
      v-bind="$attrs"
      v-on="$listeners"
      :variant="variant"
      :fontSize="fontSize"
      :color="color"
  />
</template>

<script>
export default {
  name: "MyButton",
  props: {
    // text: {
    //   type: String,
    //   default: 'ok'
    // },
    variant: {
      type: String
    },
    fontSize: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: 'white'
    },
    // size: {
    //   type: String,
    //   default: 'm'
    // }
  },
  computed: {
    // classes() {
    //   return `my-btn-${this.size}`
    // }
  }
}
</script>

<style scoped>
 .my-btn-m {
   height: 20px;
 }
 .my-btn-sm {
   height: 14px;
 }
 .my-btn-lg {
   height: 24px;
 }
 .sss {
 }
</style>