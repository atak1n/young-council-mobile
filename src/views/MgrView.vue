<template>
  <Page class="page">
    <ActionBar title="управление" class="action-bar"/>
    <StackLayout class="p-12">
<!--      <Label class="h3 text-uppercase" text="Здесь будет управление" />-->
      <Button class="-primary body2" @tap="openAdList('/mgr-my-ads')">мои события</Button>
      <Button class="-primary body2" @tap="openAdList('/mgr-my-ads')">мои пользователи</Button>
      <Button class="-primary body2" @tap="openAdList('/mgr-my-ads')">статистика</Button>
      <Button class="-primary body2" @tap="openAdList('/mgr-my-ads')">хз что</Button>
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
    openAdList(page) {
      this.$navigator.navigate(page, {frame: 'mgr-panel'}).catch(err => console.log('There was an error!', err))
    }
  }
}
</script>

<style scoped>

</style>