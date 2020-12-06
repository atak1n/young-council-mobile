<template>
  <Page>
    <ActionBar title="Новое событие" class="">
<!--      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>-->
    <MyActionBarBackBtn @tap="$modal.close"/>
    </ActionBar>

    <ScrollView>
      <GridLayout rows="auto,auto,auto,auto,auto,auto" class="nt-form">

        <!--      Название события-->
        <StackLayout
            row="0"
            class="nt-input body"
        >
          <Label text="Название"/>
          <TextView
              hint="Название"
              v-model="adForm.title"
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
              editable="false"
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
                editable="false"
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
                editable="false"
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
                class="body2"
                keyboardType="number"
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
                keyboardType="number"
                class="body2 "
                col="1"
                row="1"
            />
          </GridLayout>
        </GridLayout>

        <FlexboxLayout row="5" justifyContent="flex-end">
          <MDButton
              text="создать"
              color="white"
              class="m-y-24"
              fontSize="14"
              borderRadius="4"
              @tap="createAd"
          />
        </FlexboxLayout>

      </GridLayout>
    </ScrollView>


  </Page>
</template>

<script>
import MyActionBarBackBtn from "../components/Base/MyActionBarBackBtn";

export default {
  name: "AdCreate",
  components: {MyActionBarBackBtn},
  data: () => ({
    adForm: {
      title: '',
      eventType: '',
      annotation: '',
      date: '',
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
            if (data.constructor === String) this.adForm.date = data
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
    // showDate() {
    //   if (this.adForm.date.constructor === Date){
    //     let date = this.adForm.date
    //     date = date
    //         .toISOString()
    //         .slice(0,10)
    //         .split('-')
    //         .reverse().join('.')
    //
    //     return date
    //   } else return ''
    // }
  }
}
</script>

<style scoped>
/*ActionBar {*/
/*  background-color: #53ba82;*/
/*  color: #ffffff;*/
/*}*/
.form-icon.mdi {
  font-size: 24px;
  margin-right: 10px;
  color: #777777;
}

.-border {
  border-radius: 8px;
}
</style>