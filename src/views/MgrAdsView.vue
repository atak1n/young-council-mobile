<template>
  <Page>
    <ActionBar title="Мои события">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <AbsoluteLayout width="100%" height="100%">

      <StackLayout class="p-12" width="100%" height="100%">
        <Label text="Список моих событий"/>


        <RadListView
            for="item in ads"
            @itemTap="goToAdDetail"
        >
          <v-template>

            <GridLayout columns="auto,*" rows="*,*,*,*">
              <Image
                  col="0"
                  row="0"
                  rowSpan="3"
                  class="mdi -thumb img-circle bg-primary p-4"
                  src.decode="font://&#xf1056;"
              />
              <Label
                  col="1"
                  row="0"
                  :text="item.title"
                  class="body2"
              />
              <Label
                  col="1"
                  row="1"
                  :text="'Всего билетов: ' + item.ticketsCount"
                  class="body"
              />
              <Label
                  col="1"
                  row="2"
                  text="28.10.2020"
                  class="body"
              />
              <StackLayout col="0" row="3" colSpan="2" class="hr"/>
            </GridLayout>

          </v-template>
        </RadListView>

      </StackLayout>

      <MDButton
          top="500"
          left="300"
          text="+"
          class="falseFAb c-secondary"
          @tap="createAd"
      />
    </AbsoluteLayout>

  </Page>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "MgrAdsView.vue",
  components: {
    AdListItem: () => import('../components/AdListItem')
  },
  data: () => ({
    list: [1,2,3,4,5,6,7,8,9]
    // ad: {
    //   title: 'название',
    //   annotation: 'описание',
    //   date: '27.10.20'
    //
    // }
  }),
  computed: {
    ...mapState({
      ads: state => state.ads.ads
    })
  },
  methods: {
    goBack() {
      this.$navigateBack()
    },
    goToAdDetail({item}){
      console.log(`Tapped on ${item.id}\n, ${item.title}\n, ${item.annotation}`);
      this.$navigator.navigate('/mgr-my-ads/ad-detail', {
        frame: 'mgr-panel',
        props: { ad: item }
      })
    },
    createAd() {
      this.$navigator.modal('/mgr-my-ads/ad-create', {fullscreen: true, id: 'myModal'})
    }
  },
}
</script>

<style scoped>
.abs {

}
</style>