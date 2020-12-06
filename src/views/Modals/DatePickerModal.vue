<template>
  <Page @loaded="setDate">
    <ActionBar title="Выбор даты" class="">
      <MyActionBarBackBtn @tap="$modal.close"/>
    </ActionBar>
    <GridLayout columns="auto" rows="auto,auto" class="p-20">
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

      <FlexboxLayout
          col="0" row="1"
          justifyContent="center"
      >
        <MDButton
            text="отмена"
            variant="outline"
            fontSize="14"
            color="accent"
            @tap="$modal.close"
            class="m-8"
        />

        <MDButton
            text="ок"
            variant="flat"
            color="white"
            fontSize="14"
            @tap="submit"
            class="m-8"
        />
      </FlexboxLayout>
    </GridLayout>

  </Page>


</template>

<script>
import MyActionBarBackBtn from "../../components/Base/MyActionBarBackBtn";

export default {
  name: "PickerModal.vue",
  components: { MyActionBarBackBtn },
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
      this.minDate = new Date()
      this.maxDate = new Date(2040, 1, 1)
      // this.maxDate = new Date(
      //     this.today.getFullYear(),
      //     this.today.getMonth(),
      //     this.today.getDate() + 60
      // )
    },
    submit() {
      let date = this.date
      date = date
          .toISOString()
          .slice(0,10)
          .split('-')
          .reverse().join('.')
      this.$modal.close(date)
    },
    showArgs() {
      // console.log(this.date)
    },
  },
}
</script>

<style scoped>

</style>