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

      <GridLayout columns="*,*" rows="auto,auto,auto,auto," class="p-20">
        <Label col="0"
               row="0"
               colSpan="2"
               :text="title"
               height="40"
               class="h2"
        />
        <Label col="0"
               row="1"
               colSpan="2"
               :text="annotation"
               textWrap
               height="70"
               class="h2"
        />
        <Label
            col="0"
            row="2"
            :text="'Дата: ' + date"

            class="body2"
        />
        <Label
            col="1"
            row="2"
            :text="eventType"

            class="body2"
        />
        <Label
            col="0"
            row="3"
            :text="'Цена: ' + price"
            class="body2"
        />
        <Label
            col="1"
            row="3"
            :text="'Кол-во ' + ticketsCount"
            class="body2"
        />
      </GridLayout>

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

</style>