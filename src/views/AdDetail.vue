<template>

  <Page class="page" >
    <ActionBar title="Событие" class="action-bar">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>

    <StackLayout class="nt-form">
      <!--      <GridLayout columns="*,*" rows="auto, auto, auto" class="nt-form">-->

      <!--      Название события-->
      <StackLayout
          class="nt-input body"
      >
        <Label text="Название" class=" font-weight-bold m-b-5" />
        <TextField
            hint="Название"
            v-model="ad.title"
            editable="false"
            class="body2"
        />
      </StackLayout>

      <!--      описание события-->
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

      <!--цена события-->
      <GridLayout columns="*, *">
        <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">
          <Label
              text.decode="&#xF03EB;"
              class="form-icon mdi c-grey"
              textWrap="true"
              verticalAlignment="bottom"
              col="0"
              row="1"
          />
          <Label
              text="Дата"
              class="font-weight-bold m-b-5"
              col="1"
              row="0"/>
          <TextField
              v-model="ad.date"
              editable="false"
              class="body2"
              col="1"
              row="1"
          />
        </GridLayout>

        <GridLayout col="1" row="0" class="nt-input" rows="auto, auto" columns="auto,*">
          <Label
              text.decode="&#xF03EB;"
              class="form-icon mdi c-grey"
              textWrap="true"
              verticalAlignment="bottom"
              col="0"
              row="1"
          />
          <Label
              text="Время"
              class="font-weight-bold m-b-5"
              col="1"
              row="0"/>
          <TextField
              v-model="ad.time"
              editable="false"
              class="body2"
              col="1"
              row="1"
          />
        </GridLayout>
      </GridLayout>


      <GridLayout columns="*, *">
        <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">
          <Label
              text.decode="&#xF03EB;"
              class="form-icon mdi c-grey"
              textWrap="true"
              verticalAlignment="bottom"
              col="0"
              row="1"
          />
          <Label
              text="Цена"
              class="font-weight-bold m-b-5"
              col="1"
              row="0"/>
          <TextField
              v-model="ad.price"
              editable="false"
              class="body2"
              col="1"
              row="1"
          />
        </GridLayout>

        <GridLayout col="1" class="nt-input" rows="auto, auto" columns="auto,*">
          <Label
              text.decode="&#xF03EB;"
              class="form-icon mdi c-grey"
              textWrap="true"
              verticalAlignment="bottom"
              col="0"
              row="1"
          />
          <Label
              text="Кол-во билетов"
              class="font-weight-bold m-b-5"
              col="1"
              row="0"/>
          <TextField
              v-model="ad.ticketsCount"
              editable="false"
              class="body2"
              col="1"
              row="1"
          />
        </GridLayout>
      </GridLayout>

    </StackLayout>


    <!--      <StackLayout-->
    <!--          class="nt-input"-->
    <!--      >-->
    <!--        <Label text="Кол-во билетов" class="font-weight-bold m-b-5" col="1" row="0"/>-->
    <!--        <TextField-->
    <!--            editable="false"-->
    <!--            class="body2"-->
    <!--        >-->
    <!--          <FormattedString>-->
    <!--            <Span text.decode="&#xF03EB;" class="mdi"/>-->
    <!--            <Span :text="ad.ticketsCount"></Span>-->
    <!--          </FormattedString>-->
    <!--        </TextField>-->
    <!--      </StackLayout>-->


  </Page>

</template>

<script>

export default {
  name: "AdDetail",
  props: {
    ad: {
      type: Object
    }
  },
  // data: () => ({
  //   title: '',
  // }),
  methods: {
    goBack() {
      this.$navigateBack()
    },
    showAttrs(args) {
      const object = args.object
      const page = object.page
      console.log(page.frame, page)
    },
    // setTitle() {
    //   this.title = this.ad.title
    // }
  }
}
</script>
<style scoped>
.form-icon.mdi {
  font-size: 24px;
  margin-right: 10px;
}
</style>