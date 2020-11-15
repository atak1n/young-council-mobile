<template>
  <Page @loaded="setAdForm">
    <ActionBar title="Моё событие" class="action-bar">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <!--    <RadDataForm :source="adForm"/>-->
    <GridLayout columns="*,*" rows="auto, auto, auto" class="nt-form p-12 ">
      <StackLayout
          col="0"
          row="0"
          colSpan="2"
          class="nt-input body"
      >
        <Label text="Название" class=" font-weight-bold m-b-5" />
        <TextField hint="Название" v-model="ad.title" editable="false" class="body2"/>
      </StackLayout>

      <StackLayout
          col="0"
          row="1"
          colSpan="2"
          class="nt-input"
      >
        <Label text="Описание" class=" font-weight-bold m-b-5" />
        <TextView
          v-model="ad.annotation"
          class="-border body2"
          editable="false"
      />
      </StackLayout>


      <StackLayout
          col="0"
          row="2"
          class="nt-input"
      >
        <Label text="Цена" class="font-weight-bold m-b-5" />
        <TextField v-model="ad.price" editable="false" class="body2"/>
      </StackLayout>

      <StackLayout
          col="1"
          row="2"
          class="nt-input"
      >
        <Label text="Кол-во билетов" class="font-weight-bold m-b-5" />
        <TextField v-model="ad.ticketsCount" editable="false" class="body2"/>
      </StackLayout>



    </GridLayout>
  </Page>
</template>

<script>
export default {
  name: "MgrAdDetail",
  props: {
    ad: {
      type: Object,
    },
  },
  data: () => ({
    adForm: {
      title: '',
      annotation: '',
      // date: this.ad.date,
      // time: this.ad.time,
      price: 0,
      ticketsCount: '',
    }
  }),
  methods: {
    goBack() {
      this.$navigateBack()
    },
    setAdForm() {
      this.adForm.title = this.ad.title
      this.adForm.annotation = this.ad.annotation
      this.adForm.price = this.ad.price
      this.adForm.ticketsCount = this.ad.ticketsCount
    },
  }
}
</script>

<style scoped>

</style>