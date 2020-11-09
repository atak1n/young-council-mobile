<template>
  <Page class="page">
    <ActionBar title="Список событий" class="action-bar"/>
    <StackLayout>
      <Label class="message center" text="Здесь будет список событий" />
    </StackLayout>
    <ScrollView>
      <StackLayout orientation="vertical">


        <MDCardView margin="12" height="500" rippleColor="grey" borderRadius="20">
          <StackLayout class="bg-primary">
            <Image
                src.decode="font://&#xF2b9;"
                height="200"
                class="fas t-36 p-y-24 c-bg-blue"
            />
            <Label text="название события" height="70" class="message"></Label>
            <Label text="Описание события" height="70" class="title"></Label>
            <GridLayout columns="*,*" rows="50,50" class="bg-danger">
              <Label
                  col="0"
                  row="0"
                  text="Дата: 27.10.2020:10.30"

                  class="title"
              />
              <Label
                  col="1"
                  row="0"
                  text="категория"

                  class="title"
              />
              <Label
                  col="0"
                  row="1"
                  text="Р 1000"
                  class="title"
              />
              <Label
                  col="1"
                  row="1"
                  text="+10"
                  class="title"
              />
            </GridLayout>
            <!--            <GridLayout columns="*,*" rows="1">-->
            <!--              -->
            <!--            </GridLayout>-->
          </StackLayout>
        </MDCardView>

        <MDCardView margin="10" width="200" height="100" rippleColor="red" borderRadius="30">
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
  name: "AdListView"
}
</script>

<style scoped>

</style>