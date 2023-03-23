# Konklusjon?

<v-clicks>

- Ting er sjeldent bare en ting
  - CSR og MPA/SPA
  - SSR/SSG, hydration og SPA/MPA
  - SSR, Islands, Hydration og MPA
  - SSR og Streaming

</v-clicks>

---

<section>
  <img src="/zelda.png"/>
  <p v-click id="a">Initiell last</p>
  <p v-click id="one">SSR/SSG</p>
  <p v-click id="b">Videre interaktivitet</p>
  <p v-click id="two">CSR og SPA</p>
  <p v-click id="c">DX</p>
</section>

<style scoped>
  section {
    height: 100%;
    display: grid;
    place-items: center;
  }

  img {
    height: 350px;
    filter: drop-shadow(0 2px 8px #333);
  }

  p {
    position: absolute;
  }

  #a {
    left: 450px;
    top: 200px;
  }

  #b {
    left: 306px;
    top: 405px;
  }

  #c {
    left: 600px;
    top: 400px;
  }

  #one {
    left: 450px;
    top: 50px;
  }

  #two {
    left: 150px;
    top: 405px;
  }
</style>