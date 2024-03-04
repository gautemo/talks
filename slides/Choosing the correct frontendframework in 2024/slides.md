---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Sånn gjør du riktig valg av frontendrammeverk i 2024
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
defaults:
  foo: true
transition: fade
title: Sånn gjør du riktig valg av frontendrammeverk i 2024
mdc: true
routerMode: hash
---

<div class="bg"></div>

# Sånn gjør du riktig valg av frontendrammeverk i 2024

<logos-vue class="text-6xl translate-x-20 translate-y-5 opacity-50"/>
<logos-react class="text-6xl translate-x-15 translate-y--65  opacity-50"/>
<logos-svelte-icon class="text-6xl translate-x--80 translate-y--70  opacity-50"/>
<logos-angular-icon class="text-6xl translate-x--90 translate-y-20  opacity-50"/>
<logos-solidjs-icon class="text-6xl translate-x-5 translate-y-15  opacity-50"/>
<logos-preact class="text-6xl translate-x-10 translate-y--70  opacity-50"/>

<style>
  h1 {
    font-weight: bold;
    font-size: 4rem !important;
    translate: 0 30px;
    color: black;
  }

  .bg {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
</style>

---
layout: cover
class: text-center
---

<div class="bg"></div>

<logos-vue class="text-7xl translate-y--25" />
<logos-react class="text-7xl translate-y--25" />
<logos-svelte-icon class="text-7xl translate-y--25" />
<logos-angular-icon class="text-7xl translate-y--25" />
<logos-solidjs-icon class="text-7xl translate-y--25" />
<logos-preact class="text-7xl translate-y--25" />

<style>
  .bg {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
</style>

---

<div class="row">
  <div class="column">
    <img src="/gaute.jpg" class="me">
    <h1>Gaute Meek Olsen</h1>
  </div>
  <img src="/Capra.png" class="capra">
</div>

<style>
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5rem;
}

.column{
  display: grid;
  place-items: center;
}

img.me{
  height: 320px;
  border-radius: 40px;
  object-fit: contain;
}

img.capra {
  height: 250px;
  object-fit: contain;
}

h1{
  font-size: 3rem;
}
</style>

---

Hvorfor er det jeg som står her?

<section>
<table>
  <thead>
    <tr>
      <td>Jobb</td>
      <td>Fritid</td>
      <td>Talks</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td v-click="1">2019-2020, Sparebank 1: <logos-react/></td>
      <td v-click="2">gaute.dev: <logos-vue/></td>
      <td v-click="3">2022: Hvilket frontend rammeverk liker du?</td>
    </tr>
    <tr>
      <td v-click="1">2020-*, Gjensidige: <logos-react/></td>
      <td v-click="2">ordle.no: <logos-vue/></td>
      <td v-click="3">2023: Reaktivitet i rammeverk og hva greia med signals er</td>
    </tr>
    <tr>
      <td v-click="1"></td>
      <td v-click="2">kuizzi.app: <logos-vue/></td>
      <td v-click="3">2024: Sånn gjør du riktig valg av frontendrammeverk i 2024</td>
    </tr>
  </tbody>
</table>
</section>

<style>
  td {
    min-width: 250px;
  }
</style>

---

# Hva er et frontend rammeverk?

- Abstraksjon
- Oppsett/struktur for å lage HTML, JS og CSS
- Lar deg utvikle UI komponenter
- Holder på data
- Reaktiv UI basert på data
- ++

---

# Hva er viktig å vurdere?

- Utvikler opplevelse
- Lærings kurve
- Dokumentasjon
- Performance
- Bundle size
- Skalerbarhet
- Økosystemet
- Tåler tidas tann
- Jobbmuligheter/Ansettelsesmuligheter

<!-- Source https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react -->

---

# Hva er viktig å vurdere?

- Utvikler opplevelse
  - Lærings kurve
  - Dokumentasjon
- Performance
  - Bundle size
  - Skalerbarhet
- Popularitet
  - Økosystemet
  - Tåler tidas tann
  - Jobbmuligheter/Ansettelsesmuligheter

---

# Hva er viktig å vurdere?

- Utvikler opplevelse
- Performance
- Popularitet

---

# Hvem er du?

<section>
  <div v-click>
    <img src="/solo.svg" class="h-32"/>
    <p>Solo prosjekt</p>
  </div>
  <div v-click>
    <img src="/team.svg" class="h-32"/>
    <p>Team</p>
  </div>
  <div v-click>
    <img src="/cto.svg" class="h-32"/>
    <p>Bedrift med flere team</p>
  </div>
</section>

<style>
  section {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }

  section div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

---
src: ./pages/framework-intro.md
---

---
layout: center
---

# DX - Utvikler opplevelse

---
src: ./pages/mental-model.md
---
---

# Komponent

<section class="options">

<div>
Separert

<p class="file">component.html:</p>
```html
<p>Kode24-dagen {{version}}</p>
```
<p class="file">component.js:</p>
```js
export class MyComponent {
  version = 3
}
```
<p class="file">component.css:</p>
```css
p { color: black; }
```

<section v-click="1">
  <logos-angular-icon/>
  <logos-vue class="opacity-50"/>
</section>
</div>
<div>
JSX

```jsx
function MyComponent() {
  const version = 3
  return (
    <p>Kode24-dagen {version}</p>
  );
}
```

<section v-click="1">
  <logos-react/>
  <logos-preact />
  <logos-solidjs-icon />
  <logos-vue class="opacity-80"/>
</section>
</div>
<div>
Single File Component (SFC)

```svelte
<script>
const version = 3
</script>

<p>Kode24-dagen {version}</p>

<style></style>
```

<section v-click="1">
  <logos-vue />
  <logos-svelte-icon />
  <logos-angular-icon class="opacity-80"/>
</section>
</div>
</section>

<style>
  .file {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    font-size: 0.5rem;
  }
</style>

---

# Hvordan liker du å skrive din template?

<section class="options grid">

<div>
JSX

```jsx
{ isDay && <p>☀️</p> }
```

</div>
<div>
Directive

```vue
<p v-if="isDay">☀️</p>
```

</div>
<div>
Control flow

```svelte
{#if isDay}
  <p>☀️</p>
{/if}
```

</div>
<div>
dedicated components

```jsx
<Show when={isDay}>
  <p>☀️</p>
</Show>
```

</div>
</section>

---

# Hvordan liker du å skrive din template?

<section class="options grid">

<div>
JSX

```jsx
<ul>
  {todos.map(todo => 
    <li>{todo.text}</li>
  )}
</ul >
```

<section v-click="1">
  <logos-react/>
  <logos-preact />
</section>
</div>
<div>
Directive

```html
<ul>
  <li v-for="todo in todos">{{todo.text}}</li>
</ul>
```

<section v-click="1">
  <logos-vue />
  <logos-angular-icon class="opacity-80"/>
</section>
</div>
<div>
Control flow

```html
<ul>
  @for (todo of todos) {
    <li>{{ todo.text }}</li>
  }
</ul>
```

<section v-click="1">
  <logos-angular-icon />
  <logos-svelte-icon />
</section>
</div>
<div>
dedicated components

```jsx
<For each={todos()}>
  {todo =>
    <li>{todo.text}</li>
  }
</For>
```

<section v-click="1">
  <logos-solidjs-icon />
</section>
</div>
</section>

---
src: ./pages/signals.md
---
---

# Mutable vs immutable

<section class="options">

<div>
Immutable

```js
const [count, setCount] = useState(0)
setCount(count + 1)
```

</div>
<div>
Mutable

```js
const count = ref(0)
count.value++
```

</div>
</section>

---

# Mutable vs immutable

<section class="options">

<div>
Immutable

```js
const [person, setPerson] = useState({ name: 'Gaute', age: 32 })
setPerson({
  ...person,
  age: person.age + 1,
})
```

<section v-click="1">
  <logos-react/>
  <logos-solidjs-icon />
  <logos-angular-icon />
  <logos-preact class="opacity-60"/>
</section>
</div>
<div>
Mutable

```js
const person = reactive({ name: 'Gaute', age: 32 })
person.age++
```

<section v-click="1">
  <logos-vue />
  <logos-svelte-icon />
  <logos-preact />
  <logos-angular-icon class="opacity-60"/>
</section>
</div>
</section>

---

# Stabilitet og innovasjon

<Arrow x1="100" y1="200" x2="850" y2="200" />
<Arrow x1="800" y1="200" x2="100" y2="200" />

<p class="translate-x-20 translate-y-18">Lite endringer</p>
<p class="translate-x-168 translate-y-8">Innovasjon</p>

<logos-react class="text-4xl translate-y-10 translate-x-60" v-click="1"/>
<logos-vue class="text-4xl translate-y-10 translate-x-110" v-click="4"/>
<logos-solidjs-icon class="text-4xl translate-y-10 translate-x-50" v-click="2"/>
<logos-angular-icon class="text-4xl translate-y-10 translate-x-130" v-click="5"/>
<logos-svelte-icon class="text-4xl translate-y-10 translate-x-130" v-click="6"/>
<logos-preact class="text-4xl translate-y-10 translate-x-30" v-click="3"/>

---
layout: center
---

# Popularitet og økosystem

---

<BarChart title="NPM weekly downloads" :bars="[
  { name: 'React', points: 25_100_000 }, 
  { name: 'Vue', points: 4_900_000 }, 
  { name: 'Angular', points: 3_500_000 },
  { name: 'Svelte', points: 960_000 },
  { name: 'Preact', points: 3_400_000 },
  { name: 'Solid', points: 225_000 },
  ]"/>

---

<BarChart title="State of JS 22 - Usage" postfix="%" :bars="[
  { name: 'React', points: 82 }, 
  { name: 'Vue', points: 46 }, 
  { name: 'Angular', points: 49 },
  { name: 'Svelte', points: 21 },
  { name: 'Preact', points: 13 },
  { name: 'Solid', points: 6 },
  ]"/>

<div v-click>


Popularitet gir fordeler i blant annet:
- Antall Utviklere/jobber
- Antall NPM pakker
  - state
  - UI-bibliotek
- Antall meta-rammeverk

</div>

---
layout: center
---

# Performance

---

<BarChart title="Hello world size" postfix="kB" :bars="[
  { name: 'React', points: 39.16 }, 
  { name: 'Vue', points: 16.48 }, 
  { name: 'Angular', points: 35.77 },
  { name: 'Svelte 4', points: 1.67 },
  { name: 'Svelte 5', points: 6.34 },
  { name: 'Preact', points: 4.12 },
  { name: 'Solid', points: 2.47 },
  ]"/>

---

```mermaid
xychart-beta
    title "Vekst per komponent"
    x-axis "Antall komponenter" [1, 10]
    y-axis "Størrelse i kB" 0 --> 60
    line "Vue" [18.45,32.65]
    line "React" [38.79,51.89]
    line "Angular" [43.97,60.67]
    line "Svelte 4" [1.8,25.3]
    line "Svelte 5" [6.34,21.94]
    line "Preact" [6.37,19.07]
    line "Solid" [3.37,19.27]
    
```

<p class="translate-x-177 translate-y--68 color-yellow">Svelte 4 (25 kB)</p>
<p class="translate-x-177 translate-y--134 color-red">Angular (61 kB)</p>
<p class="translate-x-177 translate-y--128 color-green">React (52 kB)</p>
<p class="translate-x-177 translate-y--87">Solid (19 kB)</p>
<p class="translate-x-177 translate-y--103">Svelte 5 (22 kB)</p>
<p class="translate-x-177 translate-y--128 color-blue">Vue (33 kB)</p>
<p class="translate-x-177 translate-y--112 color-white">Preact (19 kB)</p>

---

```mermaid
xychart-beta
    title "Vekst per komponent"
    x-axis "Antall komponenter" [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    y-axis "Størrelse i kB" 0 --> 240
    line "Vue" [18.45,32.65,46.85,61.05,75.25,89.45,103.65,117.85,132.05,146.25,160.45]
    line "React" [38.79,51.89,64.99,78.09,91.19,104.29,117.39,130.49,143.59,156.69,169.79]
    line "Angular" [43.97,60.67,77.37,94.07,110.77,127.47,144.17,160.87,177.57,194.27,210.97]
    line "Svelte 4" [1.8,25.3,48.8,72.3,95.8,119.3,142.8,166.3,189.8,213.3,236.8]
    line "Svelte 5" [6.34,21.94,37.54,53.14,68.74,84.34,99.94,115.54,131.14,146.74,162.34]
    line "Preact" [6.37,19.07,31.77,44.47,57.17,69.87,82.57,95.27,107.97,120.67,133.37]
    line "Solid" [3.37,19.27,35.17,51.07,66.97,82.87,98.77,114.67,130.57,146.47,162.37]
    
```

<p class="translate-x-177 translate-y--120 color-yellow">Svelte 4 (237 kB)</p>
<p class="translate-x-177 translate-y--120 color-red">Angular (211 kB)</p>
<p class="translate-x-177 translate-y--120 color-green">React (170 kB)</p>
<p class="translate-x-177 translate-y--125">Solid (162 kB)</p>
<p class="translate-x-177 translate-y--130">Svelte 5 (162 kB)</p>
<p class="translate-x-177 translate-y--135 color-blue">Vue (160 kB)</p>
<p class="translate-x-177 translate-y--136 color-white">Preact (133 kB)</p>

---

# krausest/js-framework-benchmark

<BarChart title="Data og DOM endringer" :bars="[
  { name: 'React', points: 1.53 }, 
  { name: 'Vue', points: 1.24 }, 
  { name: 'Angular', points: 1.35 },
  { name: 'Svelte 5', points: 1.08 },
  { name: 'Preact', points: 1.5 },
  { name: 'Solid', points: 1.08 },
  { name: 'Vanilla', points: 1.02 },
  ]"/>

---

# krausest/js-framework-benchmark

<BarChart title="Memory" :bars="[
  { name: 'React', points: 2.81 }, 
  { name: 'Vue', points: 2.13 }, 
  { name: 'Angular', points: 3.12 },
  { name: 'Svelte 5', points: 1.52 },
  { name: 'Preact', points: 2.04 },
  { name: 'Solid', points: 1.45 },
  { name: 'Vanilla', points: 1.03 },
  ]"/>

---

# Konklusjon

- Alle sider kan lages med alle rammeverkene
- Basert på hva du vektlegger mest finnes det bedre valg

---
layout: iframe-right

url: https://frontend-framework-chooser.pages.dev/
---

# Din egen velger

<img src="/qr1.png" alt="QR code to https://frontend-framework-chooser.pages.dev/">
https://frontend-framework-chooser.pages.dev/

---

<section>
  <div>
    <h2>Din egen velger</h2>
    <img src="/qr1.png" alt="QR code to https://frontend-framework-chooser.pages.dev/">
    <p class="translate-y--3">https://frontend-framework-chooser.pages.dev/</p>
  </div>
  <div>
    <h2>Slides</h2>
    <img src="/qr2.png" alt="QR code to https://gaute-talks.netlify.app/choosing-the-correct-frontendframework-in-2024/index.html">
    <p class="translate-y--3">https://gaute-talks.netlify.app/choosing-the-correct-frontendframework-in-2024/index.html</p>
  </div>
</section>

<style>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

img {
  max-height: 290px;
}
</style>

---
layout: center
---

# Takk for meg!