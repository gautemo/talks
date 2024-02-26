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

<logos-vue class="text-6xl translate-x--10 translate-y-5 opacity-50"/>
<logos-react class="text-6xl translate-x--15 translate-y--65  opacity-50"/>
<logos-svelte-icon class="text-6xl translate-x--10 translate-y-27  opacity-50"/>
<logos-angular-icon class="text-6xl translate-x-100 translate-y--60  opacity-50"/>
<logos-solidjs-icon class="text-6xl translate-x--25 translate-y--65  opacity-50"/>
<logos-preact class="text-6xl translate-x--10 translate-y--55  opacity-50"/>
<logos-nextjs-icon class="text-6xl translate-x--30 translate-y-30  opacity-50"/>
<logos-remix-icon class="text-6xl translate-x-10 translate-y-10  opacity-50"/>
<logos-nuxt-icon class="text-6xl translate-x-30 translate-y-5  opacity-50"/>
<logos-analog class="text-6xl translate-x--100 translate-y-5  opacity-50"/>
<logos-astro-icon class="text-6xl translate-x-20 translate-y--80  opacity-50"/>
<logos-fresh class="text-6xl translate-x-5 translate-y-20  opacity-50"/>

<style>
  h1 {
    font-weight: bold;
    font-size: 4rem !important;
    translate: 0 30px;
    color: black;
  }

  .bg {
    background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
</style>

---
layout: cover
class: text-center
transition: fade
---

<div class="bg"></div>

# Sånn gjør du riktig valg av frontendrammeverk i 2024

<logos-vue class="text-6xl translate-x--10 translate-y-5"/>
<logos-react class="text-6xl translate-x--15 translate-y--65"/>
<logos-svelte-icon class="text-6xl translate-x--10 translate-y-27"/>
<logos-angular-icon class="text-6xl translate-x-100 translate-y--60"/>
<logos-solidjs-icon class="text-6xl translate-x--25 translate-y--65"/>
<logos-preact class="text-6xl translate-x--10 translate-y--55"/>
<logos-nextjs-icon class="text-6xl translate-x--30 translate-y-30" v-click.hide="1"/>
<logos-remix-icon class="text-6xl translate-x-10 translate-y-10" v-click.hide="1"/>
<logos-nuxt-icon class="text-6xl translate-x-30 translate-y-5" v-click.hide="1"/>
<logos-analog class="text-6xl translate-x--100 translate-y-5" v-click.hide="1"/>
<logos-astro-icon class="text-6xl translate-x-20 translate-y--80" v-click.hide="1"/>
<logos-fresh class="text-6xl translate-x-5 translate-y-20" v-click.hide="1"/>

<style>
  h1 {
    font-weight: bold;
    font-size: 4rem !important;
    translate: 0 30px;
    visibility: hidden;
  }

  .bg {
    background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
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
    background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
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

<ul>
  <li v-click>Abstraksjon</li>
  <li v-click>Oppsett/struktur for å lage HTML, JS og CSS</li>
  <li v-click>Lar deg utvikle UI komponenter</li>
  <li v-click>Holder på data</li>
  <li v-click>Reaktiv UI basert på data</li>
</ul>

---
preload: false
---

# Hvilket frontendrammeverk skal man velge?

<logos-react v-motion class="text-8xl" :initial="{ x: 1200, y: 500, scale: 0.2 }" :enter="{ x: 0, y: 0, scale: 1, transition: { duration: 7000, delay: 1000 } }"/>

<!--
Vi må slutte å velge React kun basert på at det er det flest folk kan. Det gjør at React har blitt en standard, så flere føler de må lære React for å følge jobbmarkedet og boblen blir da bare større. Det er en ond spiral! Jeg sier ikke at React er et feil valg, men du må velge det for de riktige grunnene i såfall.
-->

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
</section>
</div>
<div>
SFC

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
</section>
</div>
</section>

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
<p v-if="day">☀️</p>
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

# Signals?

<section class="options">

<div>
Re-run

```jsx
const [count, setCount] = useState(0)

useEffect(() => {
  console.log(count)
}, [count])
```

<section v-click="1">
  <logos-react/>
  <logos-preact class="opacity-50"/>
</section>
</div>
<div>
Signal

```jsx
const [count, setCount] = createSignal(0)

createEffect(() => {
  console.log(count())
})
```

<section v-click="1">
  <logos-vue />
  <logos-solidjs-icon />
  <logos-preact />
  <logos-angular-icon />
  <logos-svelte-icon class="opacity-80"/>
</section>
</div>
</section>

---

Mutable vs immutable

---

Stabilitet vs innovasjon

---
layout: center
---

# Popularitet og økosystem

---
layout: iframe

url: https://npmtrends.com/@angular/core-vs-preact-vs-react-vs-solid-js-vs-svelte-vs-vue
---

---

<BarChart title="State of JS 22 - Usage" postfix="%" :bars="[
  { name: 'React', points: 82 }, 
  { name: 'Vue', points: 46 }, 
  { name: 'Angular', points: 49 },
  { name: 'Svelte', points: 21 },
  { name: 'Preact', points: 13 },
  { name: 'Solid', points: 6 },
  ]"/>

---

- Comunity
- Økosystem

---
layout: center
---

# Performance

---

Performance
- Bundle size
- Rendering speed
- Memory usage

---

# Gautes tanker om React

---

# Gautes tanker om Vue

---

# Gautes tanker om Angular

---

# Gautes tanker om Svelte

---

# Gautes tanker om Solid

---

# Gautes tanker om Preact

---

Konklusjon

---