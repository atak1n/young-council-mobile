<template>
  <Page class="page">
    <ActionBar title="управление" class="action-bar"/>
    <StackLayout class="p-12">
<!--      <Label class="h3 text-uppercase" text="Здесь будет управление" />-->
      <Button class="-primary body2" @tap="openAdList">мои события</Button>
      <Button class="-primary body2" @tap="openAdList">мои пользователи</Button>
      <Button class="-primary body2" @tap="openAdList">статистика</Button>
      <Button class="-primary body2" @tap="openAdList">хз что</Button>
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
      this.$navigator.navigate('/ads-list', {frame: 'ads-list'}).catch(err => console.log('There was an error!', err))
    }
  }
}
</script>

<style scoped>

</style>