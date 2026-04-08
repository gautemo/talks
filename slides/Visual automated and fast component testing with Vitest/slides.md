---
background: /cover.jpg # Photo by Sebastien Bonneval on Unsplash
title: Visual, automated, and fast component testing with Vitest
info: |
  ## Visual, automated, and fast component testing with Vitest
  By [Gaute Meek Olsen](https://gaute.dev)
class: text-center
drawings:
  persist: false
routerMode: hash    
transition: slide-left
comark: true
duration: 20min
fonts:
  sans: Robot
---

<h1><span>Visual</span>, <span>automated</span>, and <span>fast</span> component testing with Vitest</h1>

<div class="abs-br m-6 text-xl">
  <Homepage/>
</div>

<style>
  h1 {
    font-size: 2rem;

    span {
      font-weight: bold;
    }

    span:nth-child(1) {
      background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span:nth-child(2) {
      background: linear-gradient(
        90deg,
        #fff 0%,
        #ffffff 38%,
        #000 40%,
        #ffffff 42%,
        #fff 100%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 3s linear infinite;
    }
    span:nth-child(3) {
      text-shadow:
        0 3px 20px red,
        0 0 20px red,
        0 0 10px orange,
        4px -5px 6px yellow,
        -4px -10px 10px yellow,
        0 -10px 30px yellow;
      animation: 2s Blazing infinite alternate linear;
    }

    @keyframes shimmer {
      0% { background-position: 200% center; }
      100% { background-position: -200% center; }
    }

    @keyframes Blazing {
      0% {
        text-shadow:
          0 3px 20px red,
          0 0 20px red,
          0 0 10px orange,
          0 0 0 yellow,
          0 0 5px yellow,
          -2px -5px 5px yellow,
          4px -10px 10px yellow;
      }
      25% {
        text-shadow:
          0 3px 20px red,
          0 0 30px red,
          0 0 20px orange,
          0 0 5px yellow,
          -2px -5px 5px yellow,
          3px -10px 10px yellow,
          -4px -15px 20px yellow;
      }
      50% {
        text-shadow:
          0 3px 20px red,
          0 0 20px red,
          0 -5px 10px orange,
          -2px -5px 5px yellow,
          3px -10px 10px yellow,
          -4px -15px 20px yellow,
          2px -20px 30px rgba(255, 255, 0, 0.5);
      }
      75% {
        text-shadow:
          0 3px 20px red,
          0 0 20px red,
          0 -5px 10px orange,
          3px -5px 5px yellow,
          -4px -10px 10px yellow,
          2px -20px 30px rgba(255, 255, 0, 0.5),
          0px -25px 40px rgba(255, 255, 0, 0);
      }
      100% {
        text-shadow:
          0 3px 20px red,
          0 0 20px red,
          0 0 10px orange,
          0 0 0 yellow,
          0 0 5px yellow,
          -2px -5px 5px yellow,
          4px -10px 10px yellow;
      }
    }
  }

  @keyframes spread {
    0%, 10% {
      transform: scale(0);
    }
    25% {
      transform: scale(1.2) rotate(40deg);
    }
    50% {
      transform: scale(1.2) rotate(40deg) skewX(-25deg);
    }
  }
</style>

---

# But first

<v-clicks>

 - Do we really need to test our frontend code?
 - Do you test your frontend code?

</v-clicks>

---

# The testing pyramid

<section>
  <v-clicks>

  <img src="/pyramids/1.svg" width="500"/>
  <img src="/pyramids/2.svg" width="500" class="translate-x-5 translate-y-2"/>
  <img src="/pyramids/3.svg" width="500" class="translate-x--20 translate-y--10 rotate-2"/>
  <img src="/pyramids/4.svg" width="500" class="translate-x-20 translate-y-10 rotate--5"/>
  <img src="/pyramids/5.svg" width="500" class="translate-x-50 translate-y--20 rotate--10"/>
  <img src="/pyramids/6.svg" width="500" class="translate-x--50 translate-y--20 rotate-7"/>
  <img src="/pyramids/7.svg" width="500" class="translate-x-50 translate-y--20 rotate-1"/>
  <p class="translate-y--20"><b>Key takeaway:</b>Test pyramids are difficult.</p>

  </v-clicks>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    height: 400px;

    img, p {
      grid-row: 1;
      grid-column: 1;
    }
  }

  p {
    background-color: #044f87;
    padding: 2rem;
    border-radius: 2px;
    z-index: 100;
    font-size: 2rem;
    line-height: 2rem;

    b {
      display: block;
    }
  }
</style>

---

# What is component testing?

<v-clicks>

> Component testing sits between unit tests and end-to-end tests  
> — *Vitest docs*

## What is unit testing?

> unit tests are low-level, focusing on a small part of the software system  
> — *Martin Fowler*

## What is end to end testing?

Browser renders the web page to user flows.

</v-clicks>


---
layout: iframe

url: http://localhost:5173
---
---

# What is component testing?

Renders just the component to test component behaviour.

<v-click>Demo time</v-click>

---

# Frontend test pyramid?

<img src="/pyramids/frontend-pyramid.svg" width="500"/>
<p v-click class="translate-y--50"><b>Key takeaway:</b>Test pyramids are difficult.</p>

<style>
  p {
  background-color: #044f87;
  padding: 2rem;
  border-radius: 2px;
  z-index: 100;
  font-size: 2rem;
  line-height: 2rem;

  b {
    display: block;
  }
}
</style>

---

# The rules of frontend testing

<v-clicks>

1. If it renders the test should run in a browser
2. If it renders the test should run in a browser

</v-clicks>

---

<h1>Frontend test <span v-mark.crossed>pyramid</span><v-click>       table</v-click></h1>

<v-click>

| Test type               | When to use                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| Unit tests              | Logic/things that don't render                                                    |
| Component tests         | For UI components (should be most of your tests)                                  |
| E2E tests               | For entire user flows, involves routes in a non SPA, or URL behaviour is involved |
| Visual regression tests | Catch visual bugs, unexpected style/layout changes                                |

</v-click>

---

# Let's compare the most popular testing frameworks

<section>
  <logos-vitest class="text-3xl"/>
  <span>vs</span>
  <logos-playwright class="text-3xl"/>
  <span>vs</span>
  <logos-cypress-icon class="text-3xl"/>
</section>

<style>
  section {
    display: flex;
    gap: 1rem;
    background-color: #fff;
    justify-content: center;
    width: 500px;
    margin: 5rem auto;
    border-radius: 2px;
    padding: 5rem;
    color: #333;
  }
</style>

---

# Stable

| Testing framework | Stable                         |
| ----------------- | ------------------------------ |
| Vitest            | ✅ Since October 2025          |
| Playwright        | ❌ Experimental since May 2022 |
| Cypress           | ✅ August 2022                 |
---

# Frontend framework support

<table>
  <thead>
    <tr>
      <th>Testing framework</th>
      <th>Frontend framework</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vitest</td>
      <td>
        <logos-react/>
        <logos-vue/>
        <logos-svelte-icon/>
        <logos-preact/>
        <logos-solidjs-icon/>
        <logos-lit-icon/>
        <logos-marko/>
        <logos-qwik-icon/>
      </td>
    </tr>
    <tr>
      <td>Playwright</td>
      <td>
        <logos-react/>
        <logos-vue/>
        <logos-svelte-icon/>
        <logos-solidjs-icon/>
      </td>
    </tr>
    <tr>
      <td>Cypress</td>
      <td>
        <logos-react/>
        <logos-vue/>
        <logos-svelte-icon/>
        <logos-angular-icon/>
        (<logos-lit-icon/>
        <logos-qwik-icon/>)
      </td>
    </tr>
  </tbody>
</table>

---

# Browser support

<table>
  <thead>
    <tr>
      <th>Testing framework</th>
      <th>Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vitest</td>
      <td>
        <logos-chrome/>
        <logos-firefox/>
        <logos-microsoft-edge/>
        <logos-safari/>
        <logos-webkit/>
        <logos-chrome class="chromium"/>
      </td>
    </tr>
    <tr>
      <td>Playwright</td>
      <td>
        <logos-chrome/>
        <logos-firefox/>
        <logos-microsoft-edge/>
        <logos-webkit/>
        <logos-chrome class="chromium"/>
      </td>
    </tr>
    <tr>
      <td>Cypress</td>
      <td>
        <logos-chrome/>
        <logos-firefox/>
        <logos-microsoft-edge/>
        (<logos-webkit/>)
      </td>
    </tr>
  </tbody>
</table>

<style>
  .chromium {
    filter: grayscale(1) sepia(27%) hue-rotate(184deg) saturate(900%);
  }
</style>

---

# Bundler

<table>
  <thead>
    <tr>
      <th>Testing framework</th>
      <th>Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vitest</td>
      <td>Vite</td>
    </tr>
    <tr>
      <td>Playwright</td>
      <td>Vite</td>
    </tr>
    <tr>
      <td>Cypress</td>
      <td>
        Vite 5-7, Webpack
      </td>
    </tr>
  </tbody>
</table>

---

# Time travel

| Testing framework | Time travel |
| ----------------- | ----------- |
| Vitest            | ❌          |
| Playwright        | ✅          |
| Cypress           | ✅          |

---

# Interactive

| Testing framework | Interactive |
| ----------------- | ----------- |
| Vitest            | ✅          |
| Playwright        | ❌          |
| Cypress           | ✅          |

---

# Speed

<table>
  <thead>
    <tr>
      <th>Testing framework</th>
      <th>Time on my machine</th>
      <th>Time in GitHub Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vitest</td>
      <td><v-click at="1">8.6s</v-click></td>
      <td><v-click at="4">9s</v-click></td>
    </tr>
    <tr>
      <td>Playwright</td>
      <td><v-click at="2">14.7s</v-click></td>
      <td><v-click at="5">25s</v-click></td>
    </tr>
    <tr>
      <td>Cypress</td>
      <td><v-click at="3">1m 13s</v-click></td>
      <td><v-click at="6">1m 3s</v-click></td>
    </tr>
  </tbody>
</table>

---

## That's it...

# Bonus: a simpler way to develop your component

---
layout: cover
background: /end-cover.jpg # Photo by JAM on Unsplash
---

# Thank you for listening

<div class="abs-br m-6 text-xl">
  <Homepage/>
</div>

<style>
  h1 {
    text-shadow: -4px 4px #000;
  }
</style>