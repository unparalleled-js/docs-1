<template>
  <img :src="src" :alt="alt" :style="forcedDimensions" @load="handleImageLoad"/>
</template>

<script>
  /**
   * This component is needed for accurate scrolling to page headers.
   *
   * Without it when navigation happens from e.g. `/foo` to `/bar#anchor-in-the-middle-of-the-page` if this page
   * contains images then scrolling to the anchor may be inaccurate because when "scroll-to" position is calculated
   * images may not be loaded yet and they have zero-height.
   *
   * This component reserves space for the currently loading image.
   */
  export default {
    name: 'DocImage',
    props: ['src', 'alt', 'width', 'height'],

    data: function () {
      return {
        imageLoaded: false,
        parentWidth: null
      }
    },

    mounted() {
      if (this.hasDimensions) {
        this.determineParentWidth();
        window.addEventListener('resize', this.determineParentWidth);
      }
    },

    destroyed() {
      window.removeEventListener('resize', this.determineParentWidth);
    },

    computed: {
      hasDimensions() {
        return Boolean(this.width && this.height);
      },

      forcedDimensions() {
        if (!this.hasDimensions || this.imageLoaded || !this.parentWidth) {
          return null;
        }

        const width = Math.min(this.parentWidth, this.width);
        const height = Math.min(this.height, this.height * (this.parentWidth / this.width));

        return {
          width: `${width.toFixed(2)}px`,
          height: `${height.toFixed(2)}px`,
        };
      }
    },

    methods: {
      handleImageLoad() {
        this.imageLoaded = true;
        window.removeEventListener('resize', this.determineParentWidth);
      },

      determineParentWidth() {
        this.parentWidth = this.$el.parentElement.getBoundingClientRect().width;
      }
    }
  };
</script>
