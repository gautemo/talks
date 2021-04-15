# A new era of frontend tooling (En ny æra av frontend tooling)
Format: Lightning talk ⚡/Presentation 👨‍🏫

### canceled ~~16 April 2021 - conference CapraCon~~
[Slides](https://drive.google.com/file/d/1He-mavhgG4piMG12qelbVvpZtNJYNy5P/view?usp=sharing)

## Description (Norwegian)
Føler du at lokal utvikling bare har blitt tregere og tregere med tiden? Med Vite eller Snowpack er slutt på treg feedback med at koden skal bygges og bundles under utvikling som blir tregere og tregere ved større prosjekter. Nå vil du se endringene raskere enn du klarer å flytte blikket.

## Private notes 🤫

### Unofficial Timings (my machine)
Create project & npm install:
* CRA - 4min 18s
* vite(react) - 28s
* snowpack(react) - 55s
* Vue CLI - 1min 46s
* vite(vue) - 16s
* snowpack(vue) - 43s

Start up:
* CRA - 25s
* vite(react) - 2s / (1s)
* snowpack(react) - (10s) 2s / (55ms)
* Vue CLI - 14s
* vite(vue) - 2s / (730ms)
* snowpack(vue) - (10s) 2s 50ms / (63ms)

Change:
* CRA - ~2s
* vite(react) - ⚡
* snowpack(react) - ⚡
* Vue CLI - ~1s 50ms
* vite(vue) - ⚡
* snowpack(vue) - ~1s 50ms

Build:
* CRA - 42s
* vite(react) - 14s
* snowpack(react) - 10s
* Vue CLI - 15s
* vite(vue) - 12s
* snowpack(vue) - 10s

[Vite and VitePress - Evan You](https://www.youtube.com/watch?v=xXrhg26VCSc&t=1406s&ab_channel=VueConfToronto)  
[Next generation frontend tooling with ViteJS - Open Source Friday](https://www.youtube.com/watch?v=UJypSr8IhKY&ab_channel=GitHub)
[Svelte from Snowpack to Vite](https://svelte.dev/blog/sveltekit-beta#From_Snowpack_to_Vite)

`npm init @vitejs/app projname`

```html
<script src="main.tsx" type="module"></script>
```

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return <h1>Hei!</h1>
}

ReactDOM.render(<App/>, document.querySelector('#app'))
```