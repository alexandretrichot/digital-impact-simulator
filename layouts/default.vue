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
    <header>
      <div class="logo">
        <img src="~/assets/png/banner-black.png" alt="MNE Logo" />
      </div>
      <nav>
        <nuxt-link class="link" to="/">
          <img src="~/assets/svg/home-solid.svg" alt="Home icon" />
        </nuxt-link>
      </nav>
    </header>
    <div class="frame">
      <nuxt />
    </div>
    <footer>
      <div>
        © Copyright
        <a href="https://github.com/alexandretrichot">@alexandretrichot</a>
      </div>
      <div>Version : {{ version }}</div>
    </footer>
  </div>
</template>
<style lang="scss">
* {
  font-family: sans-serif;
  box-sizing: border-box;
  outline: none;
}

body {
  background: black;
  color: black;
  margin: 0;
}

h1,
h2,
h3,
h4,
p,
input,
.input {
  margin: 12px;
}

p {
  font-size: 18px;
}

header {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  background: black;
  display: flex;
  justify-content: space-between;

  .logo {
    height: 100%;
    padding: 6px;

    img {
      display: block;
      height: 100%;
    }
  }

  nav {
    height: 100%;
    .link {
      height: 100%;
      display: block;
      padding: 12px;
      img {
        display: block;
        height: 100%;
      }
    }
  }
}

.frame {
  margin-top: 60px;
  min-height: calc(100vh - 120px);
  background-color: white;
}

footer {
  background: black;
  color: white;
  padding: 12px;
  font-weight: bold;
  height: 60px;

  div {
    text-align: center;

    a {
      color: white;
    }
  }
}
</style>