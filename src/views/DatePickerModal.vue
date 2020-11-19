<template>
  <Page @loaded="setDate">
    <ActionBar title="Выбор даты" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
    </ActionBar>
    <GridLayout columns="auto,auto" rows="auto,auto" class="p-20">
      <DatePicker
          col="0"
          row="0"
          colSpan="2"
          @dateChange="showArgs"
          :minDate="minDate"
          :maxDate="maxDate"
          :date="today"
          v-model="date"

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
    today: '',
    date: '',
    minDate: '',
    maxDate: '',
  }),
  methods: {
    setDate() {


      this.today = new Date();
      this.date = new Date();
      // this.minDate = new Date(2000, 1, 1)
      this.minDate = new Date()
      this.maxDate = new Date(2040, 1, 1)
      // this.maxDate = new Date(
      //     this.today.getFullYear(),
      //     this.today.getMonth(),
      //     this.today.getDate() + 60
      // )
    },
    submit() {
      this.$modal.close(this.date)
    },
    showArgs() {
      // console.log(this.date)
    },
  },
}
</script>

<style scoped>

</style>