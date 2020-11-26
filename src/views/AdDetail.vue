<template>

  <Page class="page" >
    <ActionBar title="Событие" class="action-bar">
      <NavigationButton class="" android.systemIcon="ic_menu_back" text="Назад" @tap="goBack"/>
    </ActionBar>

    <FlexboxLayout flexDirection="column">
    <MDCardView
        v-on="$listeners"
        margin="12"
        height=""
        borderRadius="4"
        v-shadow="4"
        orientation="vertical"
        flexShrink="1"
    >
      <GridLayout rows="auto,auto,auto,auto, auto, auto" class="nt-form">
        <!--      <GridLayout columns="*,*" rows="auto, auto, auto" class="nt-form">-->

<!--      <FlexboxLayout flexDirection="column">-->
        <!--      Название события-->
        <StackLayout
            row="0"
            class="nt-input body"
        >
          <Label text="Название" class="" />
          <TextView
              hint="Название"
              v-model="ad.title"
              editable="false"
              class="body2"
          />
        </StackLayout>

        <StackLayout
            row="1"
            class="nt-input body"
        >
          <Label text="Категоря события" class="" />
          <TextField
              hint="Название"
              v-model="ad.eventType.name"
              editable="false"
              class="body2"
          />
        </StackLayout>

        <!--      описание события-->
        <StackLayout row="2"
                     class="nt-input"
        >
          <Label text="Описание" class="" />
          <TextView
              v-model="ad.annotation"
              class="body2"
              editable="false"
          />
          <!--        <StackLayout class="hr"/>-->
        </StackLayout>

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
                v-model="ad.date"
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
                v-model="ad.time"
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
                v-model="ad.price"
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
                v-model="ad.ticketsCount"
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

export default {
  name: "AdDetail",
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