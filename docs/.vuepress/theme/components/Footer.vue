<template>
  <Footer class="Footer">
    <div class="Footer__terms">
    <span class="Footer__terms-item">
      <a class="Footer__terms-link" href="https://www.workato.com/privacy">Privacy</a>
    </span>
      <span class="Footer__terms-item">
      <a class="Footer__terms-link" href="https://www.workato.com/terms">Terms</a>
    </span>
      <span class="Footer__terms-item">
      <a class="Footer__terms-link" href="tel:+18444696752">(844) 469-6752</a>
    </span>
      <span class="Footer__terms-item">Workato 2019</span>
    </div>
    <div class="Footer__social">
      <a class="Footer__social-icon" href="mailto:info@workato.com">
        <span class="fa fa-envelope"></span>
      </a>
      <a class="Footer__social-icon" href="https://facebook.com/workato" rel="noopener noreferrer" target="_blank">
        <span class="fa fa-facebook"></span>
      </a>
      <a class="Footer__social-icon" href="https://twitter.com/workato" rel="noopener noreferrer" target="_blank">
        <span class="fa fa-twitter"></span>
      </a>
      <a class="Footer__social-icon" href="https://linkedin.com/company/workato" rel="noopener noreferrer" target="_blank">
        <span class="fa fa-linkedin"></span>
      </a>
    </div>
  </Footer>
</template>

<style lang="stylus">
  .Footer {
    background: #27989f;
    border-top: 1px solid #fff;
    color: #fff;
    font-size: 14px;
    line-height: 1.6;
    overflow: hidden;
    padding: 40px 50px;

    @media (max-width: $MQMobile) {
      padding: 35px 30px;
    }

    &__terms-link {
      &,
      &:link,
      &:visited,
      &:active,
      &:hover,
      &:focus {
        color: inherit;
        font-size: 14px;
      }
    }

    &__terms {
      margin: 0 0 15px;
      text-align: center;
    }

    &__terms-item {
      margin: 0 5px 0 0;
      font-weight: bold;

      &:not(:first-child)::before {
        content: "|";
        margin-right: 5px;
        text-decoration: none;
      }
    }

    &__social {
      text-align: center;
    }

    &__social-icon {
      border: 2px solid #fff;
      border-radius: 100%;
      box-sizing: border-box;
      display: inline-block;
      font-size: 15px;
      height: 30px;
      line-height: 1.6;
      margin-left: 15px;
      text-align: center;
      transition: color 150ms ease-in, border-color 150ms ease-in;
      width: 30px;

      &:link,
      &:visited,
      &:active {
        color: #fff;
      }

      &:hover,
      &:focus {
        border-color: #e8e8e8;
        color: #e8e8e8;
      }
    }
  }
</style>
