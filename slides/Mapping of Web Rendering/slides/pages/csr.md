---
layout: center
---

# CSR - Client Side Rendering
<br/>
<p>
Tenk:
<logos-react class="text-5xl"/>
<logos-vue class="text-5xl"/>
<logos-angular-icon class="text-5xl"/>
<logos-svelte-icon class="text-5xl"/>
</p>

<style scoped>
  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>

---
transition: none
---

<DemoRender :steps="[]" :working="false">
<Screen :empty="true">

```html
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET']" :working="false">
<Screen :empty="true">

```html
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html']" :working="false">
<Screen :empty="true">

```html
<div id="root"></div>
<script src="app.js"></script>
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET']" :working="false">
<Screen :empty="true">

```html
<div id="root"></div>
<script src="app.js"></script>
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET', 'js']" :working="false">
<Screen :empty="true" :work="true">

```html
<div id="root"></div>
```
```js
import App from './myApp.js'
framework.mount(App, '#root')
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET', 'js', 'GET']" :working="false">
<Screen :empty="false" :items="[]" :loading="true">

```html
<h1>Min handleliste</h1>
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<div class="spinner"></div>
```
```js
form.onsubmit(() => framework.updateStateAndDom())
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET', 'js', 'GET', 'json']" :working="false">
<Screen :empty="false" :items="['melk']">

```html
<h1>Min handleliste</h1>
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<ul>
  <li>melk</li>
</ul>
```
```js
form.onsubmit(() => framework.updateStateAndDom())
```

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html', 'GET', 'js', 'GET', 'json', 'POST']" :working="false">
<Screen :empty="false" :items="['melk', 'egg']">

```html
<h1>Min handleliste</h1>
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<ul>
  <li>melk</li>
  <li>egg</li>
</ul>
```
```js
form.onsubmit(() => framework.updateStateAndDom())
```

</Screen>
</DemoRender>

---

## Ulempe
- Data fetching starter først etter rendering