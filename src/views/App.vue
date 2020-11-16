<template>


  <GridLayout columns="*" rows="*">
    <BottomNavigation col="0" row="0">
      <TabStrip>
        <TabStripItem class="nt-tab-strip__item">
          <Label text="Главная"></Label>
          <Image src.decode="font://&#xf1056;" class="mdi t-36"/>
        </TabStripItem>
        <TabStripItem class="nt-tab-strip__item">
          <Label text="Управление"></Label>
          <Image src.decode="font://&#xf0c3e;" class="mdi t-36"/>
        </TabStripItem>
        <TabStripItem class="nt-tab-strip__item">
          <Label text="Профиль"></Label>
          <Image src.decode="font://&#xf0009;" class="mdi t-36"/>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Navigator id="ads-list" defaultRoute="/ads-list" />

      </TabContentItem>

      <TabContentItem>
        <Navigator id="mgr-panel" defaultRoute="/mgr-page" />

      </TabContentItem>

      <TabContentItem>
        <Navigator id="profile" defaultRoute="/profile" />

      </TabContentItem>

    </BottomNavigation>
<!--    <Navigator col="0" row="0" id="myModal" defaultRoute="/mgr-my-ads/ad-create"/>-->

  </GridLayout>



</template>

<script >
// import AdsListView from './AdsListView'
// import AdListView from "./AdsListView";
// import AdsMgrList from './AdsMgrList'
// import UserProfile from './UserProfile'

export default {

  // components: {
  //   AdsListView,
  //   AdsMgrList,
  //   UserProfile
  // },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    viewArgs () {

    },
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

TabStrip {
  selected-item-color: #4aae52;
  un-selected-item-color: #666666;
  /*highlight-color: primary;*/
}
</style>
