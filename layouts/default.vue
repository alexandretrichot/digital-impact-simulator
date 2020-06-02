<script>
import { version } from "~/package.json";

export default {
  data() {
    return {
      version
    };
  }
};
</script>
<template>
  <div class="root">
    <header class="noprint">
      <a class="logo" href="https://meusenature.fr/" target="_blank">
        <img src="~/assets/png/banner.svg" alt="MNE Logo" />
      </a>
      <nav>
        <nuxt-link class="link" to="/">
          <img src="~/assets/svg/home-solid.svg" alt="Home icon" />
        </nuxt-link>
      </nav>
    </header>
    <div class="frame">
      <nuxt />
    </div>
    <footer class="noprint">
      <div>
        © Copyright
        <a href="https://github.com/alexandretrichot">@alexandretrichot</a>
      </div>
      <div>Version : {{ version }}</div>
    </footer>
  </div>
</template>