<template>
  <GridLayout
      rows="auto,auto"
  >
    <Label
        row="0"
        class="h4"
        :text="title"
        :color="titleColor"
    />
    <Label
        row="1"
        class="body2"
        textWrap
        :color="textColor"
        :text="text"
    />
  </GridLayout>
</template>

<script>
export default {
  name: "MyCardTextFiled",
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    text: {
      type: String,
    },
    titleColor: {
      type: String,
      default: 'accent'
    },
    textColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>