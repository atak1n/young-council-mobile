<template>
  <GridLayout class="App" rows="*, auto">
    <ContentView row="0">
      <Navigator defaultRoute="/adsList" />
    </ContentView>

    <BottomNavBar row="1" />
  </GridLayout>
</template>

<script >
export default {
  components: {
    BottomNavBar: () => import('./core/BilBottomNav')
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
