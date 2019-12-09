<template>
  <div class="Ask">
    <div class="Ask__title">Didn’t find what you are looking for?</div>
    <div class="Ask__links">
      <a href="http://resources.workato.com/content-library/" class="Ask__link">
        <span class="Ask__link-title">Search our resource library</span>
        <span class="Ask__link-description">View getting started guides, tutorials, training videos, webinars and FAQ</span>
      </a>
      <a href="https://support.workato.com/support/discussions" class="Ask__link">
        <span class="Ask__link-title">Ask our community</span>
        <span class="Ask__link-description">View questions and answers from other users and Workato experts.</span>
      </a>
      <a href="https://support.workato.com/support/tickets/new" class="Ask__link">
        <span class="Ask__link-title">File a support ticket</span>
        <span class="Ask__link-description">File a support ticket for critical issues that require a higher level of support.</span>
      </a>
    </div>
  </div>
</template>

<style lang="stylus">
  .Ask {
    background: #27989f;
    border-top: 1px solid #dedede;
    padding: 50px 50px 60px;

    @media (max-width: $MQMobile) {
      padding: 45px 30px 50px;
    }

    &__title {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 40px;
    }

    &__links {
      display: flex;
      justify-content: space-between;

      @media (max-width: $MQMobile) {
        display: block;
      }
    }

    &__link {
      box-sizing: border-box;
      border: 1px solid #e3e3e3;
      background: #fff;
      border-radius: 2px;
      color: #525252;
      display: block;
      flex: 0 0 32%;
      font-size: 14px;
      padding: 15px;
      transition: color .3s ease, box-shadow .3s ease;

      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 1px 8px rgba(0, 0, 0, .2);
        color: #27989f;
      }

      @media (max-width: $MQMobile) {
        & + & {
          margin-top: 20px;
        }
      }
    }

    &__link-title,
    &__link-description {
      display: block;
      margin: 0 auto;
      max-width: 300px;
      text-align: center;
    }

    &__link-title {
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
</style>
