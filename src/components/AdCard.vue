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

      <!--      <GridLayout columns="*,*" rows="auto,auto,auto,auto," class="p-20">-->
      <!--        <Label col="0"-->
      <!--               row="0"-->
      <!--               colSpan="2"-->
      <!--               :text="title"-->
      <!--               textWrap-->
      <!--               height="40"-->
      <!--               class="body2"-->
      <!--        />-->
      <!--        <Label col="0"-->
      <!--               row="1"-->
      <!--               colSpan="2"-->
      <!--               :text="annotation"-->
      <!--               textWrap-->
      <!--               height="70"-->
      <!--               class="body"-->
      <!--        />-->
      <!--        <Label-->
      <!--            col="0"-->
      <!--            row="2"-->
      <!--            :text="'Дата: ' + date"-->

      <!--            class="body2"-->
      <!--        />-->
      <!--        <Label-->
      <!--            col="1"-->
      <!--            row="2"-->
      <!--            :text="eventType"-->

      <!--            class="body2"-->
      <!--        />-->
      <!--        <Label-->
      <!--            col="0"-->
      <!--            row="3"-->
      <!--            :text="'Цена: ' + price"-->
      <!--            class="body2"-->
      <!--        />-->
      <!--        <Label-->
      <!--            col="1"-->
      <!--            row="3"-->
      <!--            :text="'Кол-во ' + ticketsCount"-->
      <!--            class="body2"-->
      <!--        />-->
      <!--      </GridLayout>-->

      <FlexboxLayout flexDirection="column" class="p-y-12">
        <StackLayout class="p-x-12">
          <Label
              :text="title"
              textWrap

              class="h2"
          />
          <Label
              :text="annotation"
              textWrap
              class="body c-grey-light"
          />
          <StackLayout class="hr m-10"></StackLayout>
        </StackLayout>

        <GridLayout columns="*, *">
<!--          <GridLayout col="0" class="nt-input" rows="auto, auto" columns="auto,*">-->
<!--            <Label-->
<!--                text.decode="&#xF00ED;"-->
<!--                class="form-icon mdi"-->
<!--                textWrap="true"-->
<!--                verticalAlignment="bottom"-->
<!--                col="0"-->
<!--                row="1"-->
<!--            />-->
<!--            <Label-->
<!--                text="Дата"-->
<!--                class=""-->
<!--                col="1"-->
<!--                row="0"/>-->
<!--            <TextField-->
<!--                :text="date"-->
<!--                editable="false"-->
<!--                class="body2 -rounded"-->
<!--                col="1"-->
<!--                row="1"-->
<!--                backgroundColor="#FF5722"-->
<!--            />-->
<!--          </GridLayout>-->

          <StackLayout
              col="0"
              class="nt-input"
          >
            <Label text="Дата"/>
            <TextField
                editable="false"
                class="body2 -rounded"

            >
              <FormattedString>
                <Span text.decode="&#xF00ED;" class="form-icon mdi c-grey"/>
                <Span :text="date"></Span>
              </FormattedString>
            </TextField>
          </StackLayout>

          <GridLayout col="1" class="nt-input" rows="auto, auto" columns="auto,*">
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
                :text="time"
                editable="false"
                class="body2"
                col="1"
                row="1"
            />
          </GridLayout>
        </GridLayout>

        <GridLayout columns="*, *">
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
                :text="price"
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
                :text="ticketsCount"
                editable="false"
                class="body2 "
                col="1"
                row="1"
            />
          </GridLayout>
        </GridLayout>
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
</style>