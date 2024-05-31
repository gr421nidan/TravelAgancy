<template>
  <yandex-map :coords="[55.751574, 37.573856]" :zoom="10">
    <ymap-marker :coords="[55.751574, 37.573856]"></ymap-marker>
  </yandex-map>
</template>

<script>
export default {
  name: "InteractiveMap",
};
</script>

<style scoped>
yandex-map {
  height: 479px;
  width: 1100px;
  border-radius: 60px;
  background-color: white;
}
</style>
