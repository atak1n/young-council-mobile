<template>
  <Page>
    <ActionBar title="Выбор даты" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
    </ActionBar>
    <GridLayout columns="auto,auto" rows="auto,auto" class="p-20">
      <DatePicker
          col="0"
          row="0"
          colSpan="2"
          @dateChange="showArgs"
          @loaded="setDate"
          :date="today"
          v-model="date"
          :minDate="minDate"
          :maxDate="maxDate"
      />
      <!--      <MDButton-->
      <!--          col="0"-->
      <!--          row="1"-->
      <!--          text="отмена"-->
      <!--          variant="outline"-->
      <!--          @tap="$modal.close"-->
      <!--      />-->
      <!--      <MDButton-->
      <!--          col="1"-->
      <!--          row="1"-->
      <!--          text="ок"-->
      <!--          @tap="submit"-->
      <!--      />-->
      <Button
          col="0"
          row="1"
          text="отмена"
          class="-outline"
          @tap="$modal.close"
      />
      <Button
          col="1"
          row="1"
          text="ок"
          class="-primary"
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
      this.date = this.today
      this.minDate = this.today
      this.maxDate = new Date(
          this.today.getFullYear(),
          this.today.getMonth(),
          this.today.getDate() + 60
      )
    },
    submit() {
      this.$modal.close(this.date)
    },
    showArgs() {
      console.log(this.date)
    },
  },
}
</script>

<style scoped>

</style>