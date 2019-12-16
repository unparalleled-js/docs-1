<template>
  <ParentSidebar v-bind="$props" v-on="$listeners" @click.native="handleClick($event)"/>
</template>

<script>
  import ParentSidebar from '@parent-theme/components/Sidebar.vue';
  import {isMobile} from '../helpers';

  export default {
    inheritAttrs: false,

    components: {
      ParentSidebar
    },

    props: ParentSidebar.props,

    mounted() {
      this.scrollToActiveLink();
    },

    methods: {
      scrollToActiveLink() {
        const activeLink = this.$el.querySelector('a.active');

        if (activeLink) {
          activeLink.scrollIntoView({
            block: 'center',
            inline: 'start'
          });
        }
      },

      handleClick(event) {
        const link = event.target.closest('a');

        if (!link) {
          return;
        }

        // Restoring active link position after rerendering
        const originalLinkPosition = this.getLinkPosition(link);
        setTimeout(() => {
          this.$el.scrollTop += this.getLinkPosition(link) - originalLinkPosition;
        }, 100);

        // Closing sidebar on mobile after clicking on links
        if (
          isMobile() &&
          // Don't close on toggling links group
          !event.target.closest('.arrow')
        ) {
          this.$emit('toggle-sidebar', false);
        }
      },

      getLinkPosition(link) {
        return link.getBoundingClientRect().top - this.$el.getBoundingClientRect().top;
      }
    }
  };
</script>
