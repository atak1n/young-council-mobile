<template>
  <Page @loaded="">
    <ActionBar title="Выбор категории" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close('')"/>
    </ActionBar>
    <GridLayout columns="*" rows="auto,auto" class="p-20">
      <ListPicker
          col="0"
          row="0"
          colSpan="2"
          :items="eventTypes"
          textField="name"
          v-model="selectedItem"
          @selectedIndexChange="showSelected"
      />
      <FlexboxLayout
          col="0" row="1"
          justifyContent="center"
      >
        <MDButton
            text="отмена"
            variant="outline"
            fontSize="14"
            color="accent"
            @tap="$modal.close('')"
            class="m-8"
        />
        <MDButton
            text="ок"
            variant="flat"
            color="white"
            fontSize="14"
            @tap="submit"
            class="m-8"
        />
      </FlexboxLayout>

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