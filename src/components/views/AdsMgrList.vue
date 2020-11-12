<template>
  <Page class="page">
    <ActionBar title="управление" class="action-bar"/>
    <StackLayout>
      <Label class="message" text="Здесь будет управление" />
      <Button class="-primary" @tap="openAdList">adverts</Button>
    </StackLayout>
  </Page>
</template>

<script>
import AdsListView from "./AdsListView";
export default {
  name: "AdsMgrList",
  data: () => ({
    Adlist: AdsListView
  }),
  methods: {
    openAdList() {
      this.$navigateTo(this.Adlist).catch(err => console.log('There was an error!', err))
    }
  }
}
</script>

<style scoped>

</style>