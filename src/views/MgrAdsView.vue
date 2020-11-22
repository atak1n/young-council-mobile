<template>
  <Page @loaded="getArgs">
    <ActionBar title="Мои события">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>
    <AbsoluteLayout width="100%" height="100%">

      <StackLayout class="p-12" width="100%" height="100%">
        <RadListView
            for="item in ads"
            @itemTap="goToAdDetail"
            class="m-y-12"
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
          :top="btnTopPosition"
          :left="btnLeftPosition"
          text="+"
          class="falseFAb c-secondary t-25"
          @tap="createAd"
      />
    </AbsoluteLayout>

  </Page>
</template>

<script>
import {mapState} from 'vuex'
const platform = require("@nativescript/core/platform")

export default {
  name: "MgrAdsView.vue",
  components: {
    // AdListItem: () => import('../components/AdListItem')
  },
  data: () => ({
    // list: [1,2,3,4,5,6,7,8,9]
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
    }),
    btnTopPosition() {
      let screenHeight = platform.Screen.mainScreen.heightDIPs
      // console.log(`\n\n\n\n\n topPoint ${screenHeight -100}` )
      return screenHeight - 280
    },
    btnLeftPosition() {
      let screenWidth = platform.Screen.mainScreen.widthDIPs
      // console.log(`\n\n\n\n\n leftPoint ${screenWidth -70}` )
      return screenWidth - 100
    }
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
    },
    getArgs() {
      // const screenInfo = platform.Screen.mainScreen
      console.log(`высота в пикселях ${platform.Screen.mainScreen.heightDIPs}`)

      let screenHeight = platform.Screen.mainScreen.heightDIPs
      console.log(`\n\n\n\n\n topPoint ${screenHeight -140}` )

      let screenWidth = platform.Screen.mainScreen.widthDIPs
      console.log(`\n\n\n\n\n leftPoint ${screenWidth -70}` )

    }
  },
}
</script>

<style scoped>
.abs {

}
</style>