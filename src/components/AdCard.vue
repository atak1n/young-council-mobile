<template>
  <MDCardView
      v-on="$listeners"
      margin="12"
      height=""
      rippleColor="grey"
      borderRadius="4"
  >
    <StackLayout class="">
      <Image
          src.decode="font://&#xF2b9;"
          height="200"
          class="fas t-36 p-y-24 bg-primary c-white"
      />

      <FlexboxLayout flexDirection="column" class="p-y-12 p-x-20">
        <StackLayout class="m-b-4">
          <Label
              :text="title"
              textWrap
              class="h2"
          />
          <Label
              :text="annotation"
              textWrap
              class="h3 c-grey-light"
          />
        </StackLayout>

        <StackLayout class="hr m-10"></StackLayout>

        <FlexboxLayout justifyContent="space-between" class="m-y-8">

          <GridLayout columns="auto" rows="auto">
            <FlexboxLayout
                class="my-chip"
                backgroundColor="#FF5722"
            >
              <Label
                  text.decode="&#xF00ED;"
                  fontSize="24"
                  class="mdi c-white m-r-10"
              />
              <Label
                  :text="date"
                  class="t-16 c-white"
              />
            </FlexboxLayout>
          </GridLayout>

          <GridLayout
              columns="auto" rows="auto"
              verticalAlignment="center"
          >
            <FlexboxLayout>
              <Label
                  text.decode="&#xF0150;"
                  class="form-icon mdi c-grey"
              />
              <Label
                  :text="eventType"
                  class="t-16"
              />
            </FlexboxLayout>
          </GridLayout>
        </FlexboxLayout>

        <FlexboxLayout justifyContent="space-between" class="m-y-8">

          <GridLayout rows="auto" columns="auto,auto">
            <Label
                col="0"
                text.decode="&#xF01B1;"
                class="form-icon mdi"

            />
            <Label
                col="1"
                :text="price"
                class="body2 c-grey-light"
            />
          </GridLayout>

          <GridLayout rows="auto" columns="auto, auto">
              <Label
                  col="0"
                  text.decode="&#xF0516;"
                  class="form-icon mdi"
              />
              <Label
                  col="1"
                  class="body2 "
              >
                <FormattedString>
                  <Span text="+"/>
                  <Span :text="ticketsCount"/>
                </FormattedString>
              </Label>

          </GridLayout>
        </FlexboxLayout>

        <FlexboxLayout justifyContent="space-between" class="m-t-8" >
          <MDButton

              text="принять участие"
              variant="outline"
              color="accent"
              fontSize="14"
              class="p-x-8"

          />
          <MDButton
              class="form-icon mdi btn-fab"
              variant="text"
              text.decode="&#xF04D2;"
          />
        </FlexboxLayout>

      </FlexboxLayout>
    </StackLayout>
  </MDCardView>
</template>

<script>
export default {
  name: "AdCard",
  props: {
    title: {
      type: String,
      default: 'Название события'
    },
    annotation: {
      type: String,
      default: 'Описание события'
    },
    date: {
      type: String,
      default: 'скоро узнаем'
    },
    time: {
      type: String,
    },
    price: {
      type: [Number, String],
      default: 0
    },
    img: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
    },
    icon: {
      type: String,
      default: 'mdi-party-popper'
    },
    iconColor: {
      type: String,
      default: 'blue'
    },
    eventType: {
      type: String,
      default: 'без категории'
    },
    ticketsCount: {
      type: [String, Number],
      default: 100
    }
  }
}
</script>

<style scoped>
.form-icon.mdi {
  font-size: 24px;
  margin-right: 10px;
  color: #777777;
}
.my-chip {
  border-radius: 20%;
  padding: 12px 24px;
  border-color: transparent;
}
.btn-rounded {
  border-radius: 50%;
  padding: 0;
  /*height: 36px;*/


}
</style>