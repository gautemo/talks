---
layout: center
---

# Resumability
<br/>
<p>
Tenk:
<logos-qwik class="text-5xl"/>
<logos-marko class="text-5xl"/>
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

<DemoRender :steps="['GET']" :working="true">
<Screen :empty="true">

```html
```

</Screen>
</DemoRender>

---
transition: none
---

<DemoRender :steps="['GET', 'html']" :working="false">
<Screen :empty="false" :items="['melk']">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button
  on:click="app_shopping_button_onclick_jasd1"
>
  Lagre
</button>
<ul>
  <li>melk</li>
</ul>
```

</Screen>
</DemoRender>

---
transition: none
---

<DemoRender :steps="['GET', 'html', 'GET']" :working="false">
<Screen :empty="false" :items="['melk']" pre="egg">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button
  on:click="app_shopping_button_onclick_jasd1"
>
  Lagre
</button>
<ul>
  <li>melk</li>
</ul>
```

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html', 'GET', 'js']" :working="false">
<Screen :empty="false" :items="['melk', 'egg']">

```html
<h1>Min handleliste</h1>
<label for="add">Legg til</label>
<input type="text" id="add">
<button
  on:click="app_shopping_button_onclick_jasd1"
>
  Lagre
</button>
<ul>
  <li>melk</li>
  <li>egg</li>
</ul>
```
```js
const add = () => framework.update(framework.getInput())
```

</Screen>
</DemoRender>

---

## Ulempe
- Ikke modent enda