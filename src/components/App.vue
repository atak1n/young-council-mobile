
<template lang="html">
  <BottomNavigation>
    <TabStrip>
      <TabStripItem class="navigation__item">
        <Label text="Главная"></Label>
        <Image src.decode="font://&#xf015;" class="fas t-36"/>
      </TabStripItem>
      <TabStripItem class="navigation__item">
        <Label text="Управление"></Label>
        <Image src.decode="font://&#xf007;" class="fas t-36"/>
      </TabStripItem>
      <TabStripItem class="navigation__item">
        <Label text="Профиль"></Label>
        <Image src.decode="font://&#xf00e;" class="fas t-36"/>
      </TabStripItem>
    </TabStrip>

    <TabContentItem>
      <Frame id="adverts">
        <AdsListView/>
      </Frame>

    </TabContentItem>
    <TabContentItem>
      <Frame id="mgr-panel">
        <AdsMgrList/>
      </Frame>
    </TabContentItem>
    <TabContentItem>
      <Frame id="profile">
        <UserProfile/>
      </Frame>
    </TabContentItem>
  </BottomNavigation>
</template>

<script >
import AdsListView from '../views/AdsListView'
import AdsMgrList from '../views/AdsMgrList'
import UserProfile from '../views/UserProfile'

export default {
  components: {
    AdsListView,
    AdsMgrList,
    UserProfile
  },
  data() {
    return {
      msg: 'Hello World!'
    }
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
</style>
