<template>
  <Page>
    <ActionBar title="Новое событие" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
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
            KeyboardType="number"
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
            KeyboardType="number"
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
      // date: this.ad.date,
      // time: this.ad.time,
      price: '',
      ticketsCount: '',
    }
  }),
}
</script>

<style scoped>
/*ActionBar {*/
/*  background-color: #53ba82;*/
/*  color: #ffffff;*/
/*}*/
</style>