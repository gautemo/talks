---
layout: center
---

# Hydration

---
layout: center
---

# SSR/SSG + Hydration

---
transition: none
---

<DemoRender :steps="['GET', 'html']" :working="false">
<Screen :empty="false" :items="['melk']" :static="true">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button>Lagre</button>
<ul>
  <li>melk</li>
</ul>
<script src="app.js"></script>
```

</Screen>
</DemoRender>

---
transition: none
---

<DemoRender :steps="['GET', 'html', 'GET']" :working="false">
<Screen :empty="false" :items="['melk']" :static="true">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button>Lagre</button>
<ul>
  <li>melk</li>
</ul>
<script src="app.js"></script>
```

</Screen>
</DemoRender>

---
transition: none
---

<DemoRender :steps="['GET', 'html', 'GET', 'js']" :working="false">
<Screen :empty="false" :items="['melk']" :work="true" :static="true">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button>Lagre</button>
<ul>
  <li>melk</li>
</ul>
```
```js
import App from './myApp.js'
framework.hydrate(App)
```

</Screen>
</DemoRender>

---
transition: none
---

<DemoRender :steps="['GET', 'html', 'GET', 'js']" :working="false">
<Screen :empty="false" :items="['melk']">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button>Lagre</button>
<ul>
  <li>melk</li>
</ul>
```
```js
button.onclick(() => framework.updateStateAndDom())
```

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html', 'GET', 'js', 'POST']" :working="false">
<Screen :empty="false" :items="['melk', 'egg']">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button>Lagre</button>
<ul>
  <li>melk</li>
  <li>egg</li>
</ul>
```
```js
button.onclick(() => framework.updateStateAndDom())
```

</Screen>
</DemoRender>

---

## Ulempe
- Ikke intereaktiv før hydration er ferdig

---
layout: center
---

# Partial Hydration

---

<Islands />

---
layout: center
---

# Islands

---

<Islands />

---

<Islands :f="true"/>