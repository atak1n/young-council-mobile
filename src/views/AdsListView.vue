<template>
  <Page class="page" id="ad-list-view">
    <ActionBar title="Список событий" class="action-bar">
      <ActionItem
          icon.decode="font://&#xF0232;"
          class="t-10 mdi"
          ios.position="right"
      />

      <ActionItem
        icon.decode="font://&#xF0349;"
        class="t-10 mdi"
        ios.position="right"
    />
    </ActionBar>

<!--    <StackLayout>-->
<!--      <Label class="message" text="Cписок событий" />-->
<!--    </StackLayout>-->
    <ScrollView>
      <StackLayout orientation="vertical" >

        <AdCard
            v-for="ad in ads" :key="ad.id"
            :title="ad.title"
            :annotation="ad.annotation"
            :date="ad.date"
            :price="ad.price"
            :eventType="ad.eventType.name"
            :tickets-count="ad.ticketsCount"
            @tap="openAdDetail(ad)"
            v-shadow="4"
        />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "AdListView",
  components: {
    AdCard: () => import("../components/AdCard"),
  },
  data: () => ({}),
  methods: {
    openAdDetail(ad) {
      this.$navigator.navigate(
          '/ad-detail',
          {frame: 'ads-list', props: { ad: ad }})
    }
  },
  computed: {
    ...mapState({
      ads: state => state.ads.ads
    })
  }
}
</script>

<style scoped>
/*.mdccardview {*/
/*  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)*/
/*}*/
</style>