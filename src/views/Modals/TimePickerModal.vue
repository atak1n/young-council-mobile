<template>
  <Page @loaded="">
    <ActionBar title="Выбор времени" class="">
      <NavigationButton android.systemIcon="ic_menu_back" text="Назад" @tap="$modal.close"/>
    </ActionBar>
    <GridLayout columns="*,*" rows="auto,auto" class="p-20">
      <TimePicker
          col="0"
          row="0"
          colSpan="2"
          :time="time"
          v-model="time"
          @loaded="onPickerLoaded"
      />
      <Button
          col="0"
          row="1"
          text="отмена"
          class="-outline"
          @tap="$modal.close"
      />
      <Button
          col="1"
          row="1"
          text="ок"
          class="-primary"
          @tap="submit"
      />
    </GridLayout>
  </Page>
</template>

<script>
import {isAndroid, isIOS} from "@nativescript/core/platform";

export default {
  name: "TimePickerModal",
  data: () => ({
    time: '',
  }),
  methods: {
    submit() {
      const time = this.time.toTimeString().slice(0,5)
      this.$modal.close(time)
    },
    onPickerLoaded(args) {
      const timePicker = args.object;
      this.time = new Date()
      console.log(this.time.toTimeString().slice(0,5))

      if (isAndroid) {
        timePicker.android.setIs24HourView(java.lang.Boolean.TRUE);
        // timePicker.hour = 23;
        // timePicker.minute = 59;
      } else if (isIOS) {
        // a bit hacky solution
        // important set the country not the language for locale
        const local = NSLocale.alloc().initWithLocaleIdentifier("NL");
        timePicker.ios.locale = local;
        // timePicker.hour = 23;
        // timePicker.minute = 59;
      }
    }

  }
}
</script>

<style scoped>

</style>