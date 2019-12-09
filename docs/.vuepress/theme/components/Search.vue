<template>
  <div class="Search">
    <i class="fa fa-search" aria-hidden="true"></i>
    <AlgoliaSearchBox v-if="algoliaSearchEnabled" :options="algoliaOptions"/>
    <SearchBox/>
  </div>
</template>

<script>
  import SearchBox from '@SearchBox';
  import AlgoliaSearchBox from '@AlgoliaSearchBox';

  export default {
    components: {
      SearchBox,
      AlgoliaSearchBox
    },

    computed: {
      algoliaSearchEnabled() {
        return Boolean(
          this.algoliaOptions &&
          this.algoliaOptions.apiKey &&
          this.algoliaOptions.indexName
        );
      },

      algoliaOptions() {
        return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia;
      }
    }
  };
</script>

<style lang="stylus">
  .Search {
    align-items: center;
    display: flex;
    width: 285px;
    background: $primaryBackground;

    .search-box {
      flex: 1;
      margin: 0;
      align-self: stretch;
      padding: 7px;

      input {
        font-size: 14px;
        width: 100%;
        display: block;
        border-radius: 0;
        border: none;
        padding: 0;
        background: none;
        position: static;

        @media (max-width: $MQMobile) {
          font-size: 12px;
        }
      }
    }

    .suggestions {
      &.align-right {
        right: auto;
      }
    }
  }
</style>
