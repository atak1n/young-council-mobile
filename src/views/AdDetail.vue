<template>

  <Page class="page" @loaded="setTitle">
    <ActionBar title="Событие" class="action-bar">
        <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <StackLayout>
      <Label class="" text="Детальная информация" />

      <Button @tap="goBack" text="goBack"/>
    </StackLayout>
    <GridLayout columns="*,*" rows="auto,auto,auto,auto, auto" class="p-12">
      <Label
          textWrap="true"
          class="h1"
          col="0"
          row="0"
          colSpan="2"
      >{{ ad.title }}</Label>
      <Label
          textWrap="true"
          class="h2"
          col="0"
          row="1"
          colSpan="2"
      >{{ ad.annotation }}</Label>
      <Label
          class="h3"
          col="0"
          row="2"
      >Дата:{{ ad.date }}</Label>
      <Label
          class="h3"
          col="1"
          row="2"
      >категория</Label>
      <Label
          class="h3"
          col="0"
          row="3"
      >Цена: {{ ad.price }}</Label>
      <Label
          class="h3"
          col="1"
          row="3"
      >Кол-во:{{ ad.ticketsCount }}</Label>
      <Button
          col="1" row="4"
          class="-primary text-uppercase h3"
          text="участвовать"
      />
    </GridLayout>
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

</style>