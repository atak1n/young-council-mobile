<template>
  <Page class="page" id="ad-list-view">
    <ActionBar title="Список событий" class="action-bar"/>
    <StackLayout>
      <Label class="message center" text="Здесь будет список событий" />
    </StackLayout>
    <ScrollView>
      <StackLayout orientation="vertical">
        <Button @tap="openAdDetail" text="open AddDetail"/>

        <AdCard @tap="openAdDetail"/>
        <StackLayout>
          <Label text="Hello world2" class="title"></Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
// import AdDetail from "./AdDetail";


export default {
  name: "AdListView",
  components: {
    AdCard: () => import("../components/AdCard"),
    AdDetail: () => import("./AdDetail")
  },
  data: () => ({
    // AdDetail: () => import("./AdDetail")
  }),
  methods: {
    openAdDetail() {
      // const button = args.object
      // const page = button.page
      // // page.frame.navigate('AdDetail')
      // console.log('frame name ->',page.frame, ' page-id ->', page.id)
      // this.$navigateTo(this.AdDetail).catch(err => console.log('There was an error!', err))
      this.$navigator.navigate('/ad-detail')
      // Frame.topmost().navigate(() => { return this.AdDetail});
    }
  }
}
</script>

<style scoped>
/*.mdccardview {*/
/*  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)*/
/*}*/
</style>