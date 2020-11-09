<template>

  <StackLayout>
    <BottomNavigation height="400px">
      <TabStrip>
        <TabStripItem>
          <Label text="Home" class=""></Label>
          <Image src="font://&#xf015;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem>
          <Label text="Settings"></Label>
          <Image src="font://&#xf007;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem>
          <Label text="Search"></Label>
          <Image src="font://&#xf00e;" class="fas t-36"></Image>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
<!--        <GridLayout>-->
<!--          <Label text="Home Page" class="h2 text-center">-->
<!--          </Label>-->
<!--        </GridLayout>-->
        <Frame>
          <AdsListView/>
        </Frame>

      </TabContentItem>
      <TabContentItem>
<!--        <GridLayout>-->
<!--          <Label text="Settings Page" class="h2 text-center">-->
<!--          </Label>-->
<!--        </GridLayout>-->
        <Frame>
          <AdsMgrList/>
        </Frame>

      </TabContentItem>
      <TabContentItem>
<!--        <GridLayout>-->
<!--          <Label text="Search Page" class="h2 text-center">-->
<!--          </Label>-->
<!--        </GridLayout>-->
        <Frame>
          <UserProfile/>
        </Frame>

      </TabContentItem>
    </BottomNavigation>
  </StackLayout>
</template>

<script>
export default {
  name: "BilBottomNav",
  components: {
    AdsListView: () => import("@/views/AdsListView"),
    AdsMgrList: () => import('@/views/AdsMgrList'),
    UserProfile: () => import('@/views/UserProfile'),
  }
}
</script>

<style scoped>

</style>