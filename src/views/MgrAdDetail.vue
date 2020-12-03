<template>
  <Page @loaded="setAdForm">
    <ActionBar title="Событие детали" class="action-bar">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <!--    <RadDataForm :source="adForm"/>-->
    <AbsoluteLayout class="m-t-10" width="100%" height="100%">
      <MDButton
          top="-15"
          :left="btnLeftPosition"
          text.decode="&#xF03EB;"
          class="falseFAb mdi t-30"
          :class="[editOn ? '-primary' : 'c-secondary']"
          @tap="enableEdit"
      />

      <StackLayout  width="100%" height="100%">
        <GridLayout rows="auto,auto,auto,auto,auto,auto" class="nt-form">

          <!--      Название события-->
          <StackLayout
              row="0"
              class="nt-input body"
              height="90"
          >
            <Label text="Название"/>
            <TextView
                hint="Название"
                v-model="adForm.title"
                :editable="editOn"
                class="-border body2"
            />
          </StackLayout>

          <!--          Категория события-->
          <StackLayout
              row="1"
              class="nt-input body"
          >
            <Label text="Категоря события" class="" />
            <TextField
                hint="Название"
                v-model="adForm.eventType.name"
                :editable="editOn"
                class="body2"
                @tap="openEventTypesDialog"
            />
          </StackLayout>

          <!--Описание события-->
          <StackLayout
              row="2"
              class="nt-input"
          >
            <Label text="Описание" />
            <TextView
                v-model="adForm.annotation"
                class="-border body2"
                :editable="editOn"
            />
          </StackLayout>

          <!--          Дата и время-->
          <GridLayout row="3" columns="*, *">
            <!--Дата-->
            <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">
              <Label
                  text.decode="&#xF00ED;"
                  class="form-icon mdi"
                  textWrap="true"
                  verticalAlignment="bottom"
                  col="0"
                  row="1"
              />
              <Label
                  text="Дата"
                  class=""
                  col="1"
                  row="0"/>
              <TextField
                  v-model="adForm.date"
                  :editable="editOn"
                  class="body2"
                  col="1"
                  row="1"
                  @tap="openDateDialog"

              />
            </GridLayout>

            <!--Время-->
            <GridLayout col="1" row="0" class="nt-input" rows="auto, auto" columns="auto,*">
              <Label
                  text.decode="&#xF0150;"
                  class="form-icon mdi c-grey"
                  textWrap="true"
                  verticalAlignment="bottom"
                  col="0"
                  row="1"
              />
              <Label
                  text="Время"
                  class=""
                  col="1"
                  row="0"/>
              <TextField
                  v-model="adForm.time"
                  :editable="editOn"
                  @tap="openTimeDialog"
                  class="body2"
                  col="1"
                  row="1"

              />
            </GridLayout>
          </GridLayout>

          <!--Цена и Количество билетов-->
          <GridLayout row="4" columns="*, *">
            <!--Цена-->
            <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">
              <Label
                  text.decode="&#xF01B1;"
                  class="form-icon mdi"
                  textWrap="true"
                  verticalAlignment="bottom"
                  col="0"
                  row="1"
              />
              <Label
                  text="Цена"
                  class=""
                  col="1"
                  row="0"/>
              <TextField
                  v-model="adForm.price"
                  :editable="editOn"
                  class="body2"
                  :keyboardType="editOn ? 'number' : ''"
                  col="1"
                  row="1"
              />
            </GridLayout>
            <!--Количество-->
            <GridLayout col="1" class="nt-input" rows="auto, auto" columns="auto,*">
              <Label
                  text.decode="&#xF0516;"
                  class="form-icon mdi"
                  textWrap="true"
                  verticalAlignment="bottom"
                  col="0"
                  row="1"
              />
              <Label
                  text="Кол-во билетов"
                  class=""
                  col="1"
                  row="0"/>
              <TextField
                  v-model="adForm.ticketsCount"
                  :editable="editOn"
                  :keyboardType="editOn ? 'number' : ''"
                  class="body2 "
                  col="1"
                  row="1"
              />
            </GridLayout>
          </GridLayout>
        </GridLayout>
        <MDButton
            v-if="editOn"
            text="подтвердить изменения"
            color="white"
            fontSize="14"
            @tap="submitEdit"
        />
      </StackLayout>

    </AbsoluteLayout>

  </Page>
</template>

<script>
const platform = require("@nativescript/core/platform")

export default {
  name: "MgrAdDetail",
  props: {
    ad: {
      type: Object,
    },
  },
  data: () => ({
    editOn: false,
    adForm: {
      title: '',
      eventType: '',
      annotation: '',
      date: '',
      time: '',
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
      this.adForm.eventType = this.ad.eventType
      this.adForm.date = this.ad.date
      this.adForm.time = this.ad.time
      this.adForm.price = this.ad.price
      this.adForm.ticketsCount = this.ad.ticketsCount
    },
    enableEdit() {
      if (this.editOn) {
        this.setAdForm()
        this.editOn = false
      } else {
        this.editOn = !this.editOn
      }

    },
    submitEdit() {
      let ad = this.ad
      for (let key in this.adForm) {
        ad[key] = this.adForm[key]
        console.log(key, ad[key])
      }
      this.$store.dispatch('modifyAd', ad)
          .then( () => {
            alert({
              message: 'Событие отредактировано',
              okButtonText: 'OK',
              cancelable: false
            })
            this.editOn = false
          })
    },
    openDateDialog() {
      if (!this.editOn) return 0
      this.$navigator.modal('/mgr-my-ads/date-modal', {fullscreen: true, id: 'dateModal'})
          .then(data => {
            if (data.constructor === String) this.adForm.date = data
          })
    },
    openTimeDialog() {
      if (!this.editOn) return 0
      this.$navigator.modal('/mgr-my-ads/time-modal', {fullscreen: true, id: 'timeModal'})
          .then(data => {
            if (data.constructor === String) this.adForm.time = data
          })
    },
    openEventTypesDialog() {
      if (!this.editOn) return 0
      this.$navigator.modal('/mgr-my-ads/event-types-modal', {fullscreen: true, id: 'categorySelectModal'})
          .then(data => {
            if (data) this.adForm.eventType = data
          })
    },
  },
  computed: {
    btnTopPosition() {
      let screenHeight = platform.Screen.mainScreen.heightDIPs
      // console.log(`\n\n\n\n\n topPoint ${screenHeight -100}` )
      return screenHeight - 280
    },
    btnLeftPosition() {
      let screenWidth = platform.Screen.mainScreen.widthDIPs
      // console.log(`\n\n\n\n\n leftPoint ${screenWidth -70}` )
      return screenWidth - 90
    }
  },
}
</script>

<style scoped>
.form-icon.mdi {
  font-size: 24px;
  margin-right: 10px;
  color: #777777;
}

.-border {
  border-radius: 8px;
}

</style>