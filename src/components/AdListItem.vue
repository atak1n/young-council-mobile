<template>
  <GridLayout columns="auto,*" rows="*,*,*">
    <Image
        col="0"
        row="0"
        rowSpan="3"
        class="mdi img-circle t-10"
        src.decode="font://&#xf1056;"
    />
    <Label
        col="1"
        row="0"
        :text="ad.title"
        class="body2"
    />
    <Label
        col="1"
        row="1"
        :text="'Всего билетов: ' + ad.ticketsCount"
        class="body"
    />
    <Label
        col="1"
        row="2"
        text="haveTime(ad)"
        class="body"
    />
  </GridLayout>
</template>

<script>
export default {
  name: "AdListItem",
  props: {
    ad: {
      type: Object
    }
  },
  // data: () => ({
  //   ad: {
  //     title: 'название',
  //     annotation: 'описание',
  //     date: '27.10.20'
  //
  //   }
  // }),
  methods: {
    haveTime(ad) {
      return ad.time ? `${ad.date} - ${ad.time}` : ad.date
    },
  }
}
</script>

<style scoped>

</style>