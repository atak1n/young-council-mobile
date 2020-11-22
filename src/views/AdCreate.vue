<template>
  <Page>
    <ActionBar title="Новое событие" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
    </ActionBar>
    <!--    <RadDataForm :source="adForm"/>-->
    <GridLayout columns="*,*" rows="auto, auto, auto, auto, auto, auto" class="nt-form p-12 ">
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
          class="nt-input body"
      >
        <Label text="Категория" class=" font-weight-bold m-b-5" />
        <TextField
            :text="adForm.eventType.name"
            @tap="openEventTypesDialog"
            class="body2"
            editable="false"
        />
      </StackLayout>

      <StackLayout
          col="0"
          row="2"
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
          row="3"
          class="nt-input"
      >
        <Label text="Цена" class="font-weight-bold m-b-5" />
        <TextField
            v-model="adForm.price"
            class="body2"
            hint="0"
            keyboardType="number"
        />
      </StackLayout>

      <StackLayout
          col="1"
          row="3"
          class="nt-input"
      >
        <Label text="Кол-во билетов" class="font-weight-bold m-b-5" />
        <TextField
            v-model="adForm.ticketsCount"
            class="body2"
            hint=""
            keyboardType="number"
        />
      </StackLayout>


      <StackLayout
          col="0"
          row="4"
          class="nt-input"
      >
        <Label text="Дата" class="font-weight-bold m-b-5" />
        <TextField
            :text="showDate"
            class="body2"
            @tap="openDateDialog"
            editable="false"
        />
      </StackLayout>

      <StackLayout
          col="1"
          row="4"
          class="nt-input"
      >
        <Label text="Время" class="font-weight-bold m-b-5" />
        <TextField
            :text="adForm.time"
            class="body2"
            @tap="openTimeDialog"
            editable="false"
        />
      </StackLayout>

      <Button
          col="1"
          row="5"
          text="создать"
          class="-primary -rounded-sm m-y-24"
          @tap="createAd"
      />

    </GridLayout>
  </Page>
</template>

<script>
export default {
  name: "AdCreate",
  data: () => ({
    adForm: {
      title: '',
      eventType: '',
      annotation: '',
      date: new Date(),
      time: '',
      price: '',
      ticketsCount: '',
    },
    //настроить даты
    // minDate: (new Date()).getDate() -1,
    // maxDate: (new Date()).setFullYear() + 1,
  }),
  methods: {
    openDateDialog() {
      this.$navigator.modal('/mgr-my-ads/date-modal', {fullscreen: true, id: 'dateModal'})
          .then(data => {
            if (data.constructor === Date) this.adForm.date = data
          })
    },
    openTimeDialog() {
      this.$navigator.modal('/mgr-my-ads/time-modal', {fullscreen: true, id: 'timeModal'})
          .then(data => {
            if (data.constructor === String) this.adForm.time = data
          })
    },
    openEventTypesDialog() {
      this.$navigator.modal('/mgr-my-ads/event-types-modal', {fullscreen: true, id: 'categorySelectModal'})
          .then(data => {
            if (data) this.adForm.eventType = data
          })
    },
    createAd() {
      this.$store.dispatch('createAd', this.adForm)
          .then( () => this.$modal.close() )
          .catch( err => console.log(err) )

    }
  },
  computed: {
    showDate() {
      if (this.adForm.date.constructor === Date){
        let date = this.adForm.date
        date = date
            .toISOString()
            .slice(0,10)
            .split('-')
            .reverse().join('.')

        return date
      } else return ''
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