<template>
  <Page >
    <GridLayout columns="auto,auto" rows="auto,auto" class="p-20">
      <DatePicker
          col="0"
          row="0"
          colSpan="2"
          @dataChange="showArgs"
          @loaded="setDate"
          :date="today"
          :minDate="minDate"
          :maxDate="maxDate"
      />
      <MDButton
          col="0"
          row="1"
          text="отмена"
          variant="outline"
          @tap="$modal.close"
      />
      <MDButton
          col="1"
          row="1"
          text="ок"
          @tap="submit"
      />
    </GridLayout>

  </Page>


</template>

<script>
export default {
  name: "PickerModal.vue",
  data: () => ({
    today: new Date(),
    date: '',
    minDate: '',
    maxDate: '',
  }),
  methods: {
    setDate() {
      this.minDate = this.today
      this.maxDate = new Date(
          this.today.getFullYear(),
          this.today.getMonth(),
          this.today.getDate() + 60
      )
    },
    submit() {
      this.$modal.close(this.today)
    },
    showArgs() {
      console.log(this.today.getDate())
    },
  },
}
</script>

<style scoped>

</style>