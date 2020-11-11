<template>
  <MDCardView
      v-on="$listeners"
      margin="12"
      height="500"
      rippleColor="grey"
      borderRadius="4"
  >
    <StackLayout class="">
      <Image
          src.decode="font://&#xF2b9;"
          height="200"
          class="fas t-36 p-y-24 bg-primary c-white"
      />
      <Label :text="title" height="70" class="h2"></Label>
      <Label :text="annotation" height="70" class="h3"></Label>
      <GridLayout columns="*,*" rows="50,50" class="bg-danger h4 p-8">
        <Label
            col="0"
            row="0"
            :text="date"

            class="title"
        />
        <Label
            col="1"
            row="0"
            :text="eventType"

            class="title"
        />
        <Label
            col="0"
            row="1"
            :text="price"
            class="title"
        />
        <Label
            col="1"
            row="1"
            :text="ticketsCount"
            class="title"
        />
      </GridLayout>
      <!--            <GridLayout columns="*,*" rows="1">-->
      <!--              -->
      <!--            </GridLayout>-->
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