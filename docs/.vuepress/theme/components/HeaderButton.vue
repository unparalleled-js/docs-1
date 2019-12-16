<template>
  <a v-if="href" class="HeaderButton" :href="href" target="_blank" rel="noopener noreferrer">
    <i :class="`fa fa-${icon}`"></i> {{ label }}
  </a>
  <button v-else class="HeaderButton" type="button" @click="$emit('click')">
    <i :class="`fa fa-${icon}`"></i> {{ label }}
  </button>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      href: String
    }
  };
</script>

<style lang="stylus">
  .HeaderButton {
    $height = 50px;

    color: $textColor;
    font-family: $fontFamily;
    text-transform: none;
    white-space: nowrap;
    display: block
    height: $height;
    padding: 0 15px;
    line-height: $height;
    font-size: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: 0;

    @media (max-width: $MQMobile) {
      padding: 0 6px;
      font-size: 12px;
    }
  }
</style>
