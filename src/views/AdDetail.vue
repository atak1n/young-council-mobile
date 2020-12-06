<template>

  <Page class="page" >
    <ActionBar title="Событие" class="action-bar">
<!--      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>-->
    <MyActionBarBackBtn @tap="goBack"/>
    </ActionBar>
    <ScrollView>
      <FlexboxLayout flexDirection="column">
        <MDCardView
            margin="12"
            borderRadius="4"
            v-shadow="4"
            orientation="vertical"
            flexShrink="1"
        >
          <GridLayout rows="auto,auto,auto,auto, auto, auto" class="p-20">
            <MyCardTextFiled
                row="0"
                title="Название"
                title-color="#388E3D"
                :text="ad.title"
                class="m-b-8"
            />

            <MyCardTextFiled
                row="1"
                title="Категория события"
                title-color="#388E3D"
                :text="ad.eventType.name"
                class="m-b-8"
            />
            <!--      описание события-->
            <MyCardTextFiled
                row="2"
                title="Описание"
                title-color="#388E3D"
                :text="ad.annotation"
                class="m-b-8"
            />


<!--цена события-->




            <GridLayout row="3" columns="*, *">
              <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">

                <Label
                    text.decode="&#xF00ED;"
                    class="form-icon mdi"
                    textWrap="true"
                    verticalAlignment="bottom"
                    col="0"
                    row="1"
                />
                <Label
                    text="Дата"
                    class=""
                    col="1"
                    row="0"/>
                <TextField
                    :text="ad.date"
                    editable="false"
                    class="body2"
                    col="1"
                    row="1"
                />
              </GridLayout>

              <GridLayout col="1" row="0" class="nt-input" rows="auto, auto" columns="auto,*">
                <Label
                    text.decode="&#xF0150;"
                    class="form-icon mdi c-grey"
                    textWrap="true"
                    verticalAlignment="bottom"
                    col="0"
                    row="1"
                />
                <Label
                    text="Время"
                    class=""
                    col="1"
                    row="0"/>
                <TextField
                    :text="ad.time"
                    editable="false"
                    class="body2"
                    col="1"
                    row="1"
                />
              </GridLayout>
            </GridLayout>

            <GridLayout row="4" columns="*, *">
              <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">
                <Label
                    text.decode="&#xF01B1;"
                    class="form-icon mdi"
                    textWrap="true"
                    verticalAlignment="bottom"
                    col="0"
                    row="1"
                />
                <Label
                    text="Цена"
                    class=""
                    col="1"
                    row="0"/>
                <TextField
                    :text="ad.price"
                    editable="false"
                    class="body2"
                    col="1"
                    row="1"
                />
              </GridLayout>

              <GridLayout col="1" class="nt-input" rows="auto, auto" columns="auto,*">
                <Label
                    text.decode="&#xF0516;"
                    class="form-icon mdi"
                    textWrap="true"
                    verticalAlignment="bottom"
                    col="0"
                    row="1"
                />
                <Label
                    text="Кол-во билетов"
                    class=""
                    col="1"
                    row="0"/>
                <TextField
                    :text="ad.ticketsCount"
                    editable="false"
                    class="body2 "
                    col="1"
                    row="1"
                />
              </GridLayout>
            </GridLayout>

            <GridLayout row="5" rows="auto">
              <MDButton
                  row="0"
                  :text="submit ? 'отменить участие' : 'Принять участие' "
                  color="white"
                  :class="submit ? 'bg-primary' : 'c-bg-orange'"
                  fontSize="16"
                  borderRadius="4"
                  @tap="singIn"
              />
            </GridLayout>

          </GridLayout>
          <!--      </FlexboxLayout>-->
        </MDCardView>
      </FlexboxLayout>
    </ScrollView>
    <!--      <StackLayout-->
    <!--          class="nt-input"-->
    <!--      >-->
    <!--        <Label text="Кол-во билетов" class="font-weight-bold m-b-5" col="1" row="0"/>-->
    <!--        <TextField-->
    <!--            editable="false"-->
    <!--            class="body2"-->
    <!--        >-->
    <!--          <FormattedString>-->
    <!--            <Span text.decode="&#xF03EB;" class="mdi"/>-->
    <!--            <Span :text="ad.ticketsCount"></Span>-->
    <!--          </FormattedString>-->
    <!--        </TextField>-->
    <!--      </StackLayout>-->


  </Page>

</template>

<script>
import MyActionBarBackBtn from "../components/Base/MyActionBarBackBtn";
import MyCardTextFiled from "../components/Base/MyCardTextFiled";

export default {
  name: "AdDetail",
  components: {
    MyActionBarBackBtn,
    MyCardTextFiled,
  },
  props: {
    ad: {
      type: Object
    }
  },
  data: () => ({
    submit: false,
  }),
  methods: {
    goBack() {
      this.$navigateBack()
    },
    showAttrs(args) {
      const object = args.object
      const page = object.page
      console.log(page.frame, page)
    },
    singIn() {
      this.submit = !this.submit
    }
    // setTitle() {
    //   this.title = this.ad.title
    // }
  }
}
</script>
<style scoped>
.form-icon.mdi {
  font-size: 24px;
  margin-right: 10px;
  color: #777777;
}

</style>