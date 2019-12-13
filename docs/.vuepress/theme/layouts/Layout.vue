<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Header @toggle-sidebar="toggleSidebar"/>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
    </Sidebar>

    <Page :sidebar-items="sidebarItems">
      <template #bottom>
        <Ask/>
        <Footer/>
      </template>
    </Page>
  </div>
</template>

<script>
  import Page from '@theme/components/Page.vue';
  import Sidebar from '@theme/components/Sidebar.vue';
  import Header from '@theme/components/Header';
  import Ask from '@theme/components/Ask';
  import Footer from '@theme/components/Footer';
  import {resolveSidebarItems} from '@theme/util';
  import {isMobile, addLayoutListener} from '../helpers';

  export default {
    components: { Header, Page, Sidebar, Ask, Footer },

    mounted() {
      this.removeLayoutListener = addLayoutListener(isMobile => {
        this.toggleSidebar(!isMobile);
      });
    },

    destroyed() {
      this.removeLayoutListener();
    },

    data() {
      return {
        isSidebarOpen: !isMobile()
      };
    },

    computed: {
      sidebarItems() {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        );
      },

      pageClasses() {
        return [
          {'sidebar-open': this.isSidebarOpen},
          this.$page.frontmatter.pageClass
        ];
      }
    },

    methods: {
      toggleSidebar(flag = !this.isSidebarOpen) {
        if (flag !== this.isSidebarOpen) {
          this.isSidebarOpen = flag;
          this.$emit('toggle-sidebar', this.isSidebarOpen);
        }
      },

      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        };
      },

      onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x;
        const dy = e.changedTouches[0].clientY - this.touchStart.y;

        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true);
          } else {
            this.toggleSidebar(false);
          }
        }
      }
    }
  };
</script>
