<template>
  <img :src="src" :alt="alt" :height="calculatedHeight" @load="handleImageLoad"/>
</template>

<script>
  /**
   * This component is needed for accurate scrolling to page headers.
   * Without it when when navigation happens from `/foo` to `/bar#anchor-in-the-middle-of-the-page` if this page
   * contains images then scrolling to the anchor may be inaccurate because when "scroll-to" position is calculated
   * images may not be loaded yet and they have zero-height.
   *
   * This component reserves vertical space for the currently loading image.
   */
  export default {
    name: 'DocImage',
    props: ['src', 'alt', 'width', 'height'],

    data: function () {
      return {
        imageLoaded: false,
        currentWidth: null
      }
    },

    mounted() {
      if (this.hasDimensions) {
        this.updateCurrentWidth();
        window.addEventListener('resize', this.updateCurrentWidth);
      }
    },

    destroyed() {
      window.removeEventListener('resize', this.updateCurrentWidth);
    },

    computed: {
      hasDimensions() {
        return Boolean(this.width && this.height);
      },

      calculatedHeight() {
        if (!this.hasDimensions || this.imageLoaded || !this.currentWidth) {
          return null;
        }

        return Math.min(this.height, this.height * (this.currentWidth / this.width));
      }
    },

    methods: {
      handleImageLoad() {
        this.imageLoaded = true;
        window.removeEventListener('resize', this.updateCurrentWidth);
      },

      updateCurrentWidth() {
        this.currentWidth = this.$el.parentElement.getBoundingClientRect().width;
      }
    }
  };
</script>
