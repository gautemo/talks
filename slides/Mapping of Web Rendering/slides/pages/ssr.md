---
layout: center
---

# SSR - Server Side Rendering
<br/>
<p>
Tenk:
<logos-php class="text-5xl"/>
<logos-thymeleaf-icon class="text-5xl"/>
<mdi-language-ruby-on-rails class="text-5xl"/>
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
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<ul>
  <li>melk</li>
</ul>
```

</Screen>
</DemoRender>

---
transition: ssr
---
<DemoRender :steps="['GET', 'html', 'POST']" :working="true">
<Screen :empty="false" :items="['melk']" pre="egg">

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

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html', 'POST', 'html']" :working="false">
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

</Screen>
</DemoRender>

---

## Ulempe
- Må innom serveren hver gang

---
layout: center
---

# SSR + jQuery
<br/>
<p>
<span>Tenk:</span>
<logos-php class="text-5xl"/>
<logos-thymeleaf-icon class="text-5xl"/>
<mdi-language-ruby-on-rails class="text-5xl"/>
<span>og</span>
<logos-jquery class="text-7xl"/>
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
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<ul>
  <li>melk</li>
</ul>
<script src="jquery-app.js"></script>
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET']" :working="false">
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
<script src="jquery-app.js"></script>
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
$('form').submit(() => {
  $('ul').append($('input').val())
  $.post('/backend', { add: $('input').val() })
})
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'html', 'GET', 'js']" :working="false">
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
$('form').submit(() => {
  $('ul').append($('input').val())
  $.post('/backend', { add: $('input').val() })
})
```

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html', 'GET', 'js', 'POST']" :working="false">
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
$('form').submit(() => {
  $('ul').append($('input').val())
  $.post('/backend', { add: $('input').val() })
})
```

</Screen>
</DemoRender>

---

## Ulempe
- Utviklere må skrive visningslogikk i to ganger i to ulike språk