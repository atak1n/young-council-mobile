<template>
  <Page @loaded="">
    <ActionBar title="Выбор категории" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close('')"/>
    </ActionBar>
    <GridLayout columns="*,*" rows="auto,auto" class="p-20">
      <ListPicker
          col="0"
          row="0"
          colSpan="2"
          :items="eventTypes"
          textField="name"
          v-model="selectedItem"
          @selectedIndexChange="showSelected"
      />
      <StackLayout
          col="0"
          row="1"
          colSpan="2"
          orientation="horizontal"
          class="m-t-16"
      >
        <Button
            horizontalAlignment="stretch"
            text="ОТМЕНА"
            class="-outline"
            @tap="$modal.close('')"
        />
        <Button
            horizontalAlignment="stretch"
            text="OK"
            class="-primary"
            @tap="submit"
        />
      </StackLayout>

    </GridLayout>

  </Page>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "CategoryPickerModal.vue",
  data: () => ({
    selectedItem: 0,

  }),
  computed: {
    ...mapState({
      eventTypes: state => state.ads.eventTypes
    }),
  },

  methods: {
    submit() {
      this.$modal.close(this.eventTypes[this.selectedItem])
    },
    showSelected() {
      console.log(this.eventTypes[this.selectedItem].name )
    }
  },
}
</script>

<style scoped>

</style>