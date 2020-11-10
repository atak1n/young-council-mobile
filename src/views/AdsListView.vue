<template>
  <Page class="page">
    <ActionBar title="Список событий" class="action-bar"/>
    <StackLayout>
      <Label class="message center" text="Здесь будет список событий" />
    </StackLayout>
    <ScrollView>
      <StackLayout orientation="vertical">

        <AdCard/>


<!--        <MDCardView class="" margin="12" height="500" rippleColor="grey" borderRadius="4">-->
<!--          <StackLayout class="">-->
<!--            <Image-->
<!--                src.decode="font://&#xF2b9;"-->
<!--                height="200"-->
<!--                class="fas t-36 p-y-24 c-bg-blue"-->
<!--            />-->
<!--            <Label text="название события" height="70" class="message"></Label>-->
<!--            <Label text="Описание события" height="70" class="title"></Label>-->
<!--            <GridLayout columns="*,*" rows="50,50" class="bg-danger">-->
<!--              <Label-->
<!--                  col="0"-->
<!--                  row="0"-->
<!--                  text="Дата: 27.10.2020:10.30"-->

<!--                  class="title"-->
<!--              />-->
<!--              <Label-->
<!--                  col="1"-->
<!--                  row="0"-->
<!--                  text="категория"-->

<!--                  class="title"-->
<!--              />-->
<!--              <Label-->
<!--                  col="0"-->
<!--                  row="1"-->
<!--                  text="Р 1000"-->
<!--                  class="title"-->
<!--              />-->
<!--              <Label-->
<!--                  col="1"-->
<!--                  row="1"-->
<!--                  text="+10"-->
<!--                  class="title"-->
<!--              />-->
<!--            </GridLayout>-->
<!--            &lt;!&ndash;            <GridLayout columns="*,*" rows="1">&ndash;&gt;-->
<!--            &lt;!&ndash;              &ndash;&gt;-->
<!--            &lt;!&ndash;            </GridLayout>&ndash;&gt;-->
<!--          </StackLayout>-->
<!--        </MDCardView>-->

<!--        <MDCardView margin="10" width="200" height="100" rippleColor="red" borderRadius="30">-->
          <StackLayout>
            <Label text="Hello world2" class="title"></Label>
          </StackLayout>
        </MDCardView>


      </StackLayout>
    </ScrollView>

  </Page>
</template>

<script>

export default {
  name: "AdListView",
  components: {
    AdCard: () => import("../components/AdCard"),
  },
}
</script>

<style scoped>
  /*.mdccardview {*/
  /*  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)*/
  /*}*/
</style>