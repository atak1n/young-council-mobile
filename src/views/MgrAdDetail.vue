<template>
  <Page @loaded="setAdForm">
    <ActionBar title="Событие детали" class="action-bar">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <!--    <RadDataForm :source="adForm"/>-->
    <AbsoluteLayout class="m-t-10" width="100%" height="100%">
      <MDButton
          top="-10"
          :left="btnLeftPosition"
          text.decode="&#xF03EB;"
          class="falseFAb mdi t-30"
          :class="[editOn ? '-primary' : 'c-secondary']"
          @tap="enableEdit"
      />

      <StackLayout  width="100%" height="100%">
        <GridLayout columns="*,*" rows="auto, auto, auto" class="nt-form">
          <StackLayout
              col="0"
              row="0"
              colSpan="2"
              class="nt-input body"
          >
            <Label text="Название" class=" font-weight-bold m-b-5" />
            <TextField
                hint="Название"
                v-model="adForm.title"
                :editable="editOn"
                class="body2"
            />
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
                :editable="editOn"
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
                :editable="editOn"
                class="body2"
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
                :editable="editOn"
                class="body2"
            />
          </StackLayout>
        </GridLayout>
        <Button
            v-if="editOn"
            class="-primary rounded text-uppercase"
            text="подтвердить изменения"
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
      this.$store.dispatch('modifyAd', ad).then(
          () => {
            alert({
              message: 'Событие отредактировано',
              okButtonText: 'OK',
              cancelable: false
            })
            this.editOn = false

          }
      )

    }
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

</style>