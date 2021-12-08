<template>
  <div
    class="inline-block"
    :class="[width, height]"
    :style="`background-color: ${codeColor}`"
  ></div>
</template>
<script>
export default {
  props: ["codeColor", "width", "height"],
};
</script>