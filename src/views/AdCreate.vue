<template>
  <Page>
    <ActionBar title="Новое событие" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
    </ActionBar>
    <!--    <RadDataForm :source="adForm"/>-->
    <GridLayout columns="*,*" rows="auto, auto, auto, auto" class="nt-form p-12 ">
      <StackLayout
          col="0"
          row="0"
          colSpan="2"
          class="nt-input body"
      >
        <Label text="Название" class=" font-weight-bold m-b-5" />
        <TextField hint="Название события" v-model="adForm.title" class="body2"/>
      </StackLayout>

      <StackLayout
          col="0"
          row="1"
          colSpan="2"
          class="nt-input"
      >
        <Label text="Описание" class=" font-weight-bold m-b-5" />
        <TextView
            v-model="adForm.annotation"
            class="-border body2"
            hint="Описание события"
        />
      </StackLayout>


      <StackLayout
          col="0"
          row="2"
          class="nt-input"
      >
        <Label text="Цена" class="font-weight-bold m-b-5" />
        <TextField
            v-model="adForm.price"
            class="body2"
            hint="100"
            keyboardType="number"
        />
      </StackLayout>

      <StackLayout
          col="1"
          row="2"
          class="nt-input"
      >
        <Label text="Кол-во билетов" class="font-weight-bold m-b-5" />
        <TextField
            v-model="adForm.ticketsCount"
            class="body2"
            hint="2"
            keyboardType="number"
        />
      </StackLayout>


      <StackLayout
          col="0"
          row="3"
          class="nt-input"
      >
        <Label text="Дата" class="font-weight-bold m-b-5" />
        <TextField
            v-model="showDate"
            class="body2"
            @tap="openDateDialog"
            editable="false"
        />
      </StackLayout>

    </GridLayout>
  </Page>
</template>

<script>
export default {
  name: "AdCreate",
  data: () => ({
    adForm: {
      title: '',
      annotation: '',
      date: '',

      // time: this.ad.time,
      price: '',
      ticketsCount: '',
    },
    //настроить даты
    // minDate: (new Date()).getDate() -1,
    // maxDate: (new Date()).setFullYear() + 1,
  }),
  methods: {
    openDateDialog() {
      this.$navigator.modal('/mgr-my-ads/picker-modal', {fullscreen: true, id: 'pickerModal'})
          .then(data => this.adForm.date = data)
    }
  },
  computed: {
    showDate() {
      return this.adForm.date.toLocaleString().slice(0,9)
    }
  }
}
</script>

<style scoped>
/*ActionBar {*/
/*  background-color: #53ba82;*/
/*  color: #ffffff;*/
/*}*/
</style>