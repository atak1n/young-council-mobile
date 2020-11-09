<template>
  <GridLayout rows="auto" columns="*, *, *">
    <Button class="nav-btn" text='события' @tap="goTo('/adsList')" row="1" col="0" />
    <Button class="nav-btn" text='управление' @tap="goTo('/adsmgrlist')" row="1" col="1" />
    <Button class="nav-btn" text='профиль' @tap="goTo('/profile')" row="1"
            col="2" />
  </GridLayout>
</template>

<script>
export default {
  name: "BilBottomNav",
  methods: {
    goTo(name) {
      this.$navigator.navigate(name);
    }
  }
}
</script>

<style>
.nav-btn {
  background-color: #FFC4D1;
  margin: 20;
  padding: 10;
  border-radius: 10;
  font-size: 30;
}

.selected {
  background-color: #D4DCCD;
  border-radius: 10;
}

Button {
  background-color: rgba(255, 0, 0, 0.0);
  border-color: rgba(255, 0, 0, 0.0);
  border-width: 1;
}
</style>