<template>
  <header class="Header">
    <div class="Header__row Header__row_logo">
      <RouterLink :to="$localePath">
        <img
          class="Header__logo"
          src="~@img/layout/workato-logo.png"
          alt="Workato docs"
        >
      </RouterLink>
      <a class="Header__return" href="https://workato.com">Return to Workato</a>
    </div>

    <div class="Header__row Header__row_toolbar">
      <Search/>
      <div class="Header__toolbar">
        <HeaderButton label="Menu" icon="align-justify" @click="$emit('toggle-sidebar')"></HeaderButton>
        <HeaderButton :label="editPageLabel" icon="github" :href="editPageUrl"></HeaderButton>
      </div>
    </div>
  </header>
</template>

<script>
  import HeaderButton from '@theme/components/HeaderButton';
  import Search from '@theme/components/Search';
  import {addLayoutListener, isMobile} from '../helpers';

  export default {
    components: {
      Search,
      HeaderButton
    },

    mounted() {
      this.removeLayoutListener = addLayoutListener(isMobile => {
        this.isMobile = isMobile;
      })
    },

    destroyed() {
      this.removeLayoutListener();
    },

    data() {
      return {
        isMobile: isMobile()
      }
    },

    computed: {
      editPageLabel() {
        return this.isMobile ? 'Edit' : 'Edit this page';
      },

      editPageUrl() {
        const {repo} = this.$site.themeConfig;
        const {relativePath} = this.$page;
        return `https://github.com/${repo}/edit/master/docs/${relativePath}`;
      }
    }
  }
</script>

<style lang="stylus">
  .Header {
    height: $navbarHeight;
    background: $primaryBackground;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .1);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    &__row {
      align-items: center;
      display: flex;
      height: 70px;
      padding: 0 15px;

      &_logo {
        border-bottom: 1px solid #e7e7e7;
        justify-content: space-between;
      }

      &_toolbar {
        height: 50px;
        padding-right: 0;
      }
    }

    &__toolbar {
      align-items: center;
      align-self: stretch;
      background: $secondaryBackground;
      display: flex;
      flex: 1;
      padding: 0 8px;
    }

    &__logo {
      display: block;
      width: 184px;

      @media (max-width: $MQMobile) {
        width: 160px;
      }
    }

    &__return {
      border: 1px solid #27989f;
      border-radius: 2px;
      color: #27989f;
      padding: 5px 15px;
      text-decoration: none;

      @media (max-width: $MQMobile) {
        font-size: 12px;
        padding: 5px;
      }
    }
  }
</style>
