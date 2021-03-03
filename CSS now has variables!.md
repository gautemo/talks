# CSS now has variables!
Format: Lightning talk ⚡

### May 2019 - conference Apps Deep Dive, Sopra Steria
[Repo](https://github.com/gautemo/css-variables-presentation)

## Description
Preprocessors such as Sass or Less is no longer necessary to use variables in CSS. Let me show you how to use them.
Variables make you write better and less CSS. Bonus is that they can be altered through JavaScript, making cool functionality very easy.

## Private notes 🤫

```js
document.documentElement.style.setProperty('--primary-color', e.target.value);

document.querySelector('main').style.setProperty('--primary-color', e.target.value);
```

```html
<input type="range" min="1" max="35" />
```

Body: font-size: var(--size, 1em);  
```js
document.documentElement.style.setProperty('--size', e.target.value + 'px');
```

```css
:root {
   --primary-color: #d94e1f;
   --bg: white;
   --text-around: #49367e;
   --text-inside: white;
}

.night {
   --bulb: url(bulb-off.svg);
   --bg: black;
   --text-around: white;
   --text-inside: black;
}
```
```js
document.documentElement.classList.toggle('night');
```
