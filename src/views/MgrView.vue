<template>
  <Page class="page">
    <ActionBar title="управление" class="action-bar"/>
    <StackLayout class="p-12">
<!--      <Label class="h3 text-uppercase" text="Здесь будет управление" />-->
      <Button
          class="-primary body2"
          @tap="openAdList('/mgr-my-ads')"
          text="мои события"
      />
      <Button
          class="-primary body2"
          @tap="openAdList('/mgr-my-ads')"
          isEnabled="false"
          text="мои пользователи"
      />
      <Button
          class="-primary body2"
          @tap="openAdList('/mgr-my-ads')"
          isEnabled="false"
          text="статистика"
      />
      <Button
          class="-primary body2"
          @tap="openAdList('/mgr-my-ads')"
          isEnabled="false"
          text="что-то еще"
      />
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