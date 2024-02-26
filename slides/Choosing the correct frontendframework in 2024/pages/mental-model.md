# Hva er din mentale modell?

<section class="options">

<div>
UI as function of state

```jsx
function MyComponent(state) {
  console.log('re-render')
  return (
    <p>Hello {state.name}</p>
  );
}
```

<section v-click="1">
  <logos-react/>
  <logos-preact />
</section>
</div>
<div>
UI create function

```jsx
function MyComponent(state) {
  console.log('component created')
  return (
    <p>Hello {state().name}</p>
  );
}
```

<section v-click="1">
  <logos-vue />
  <logos-svelte-icon />
  <logos-angular-icon />
  <logos-solidjs-icon />
  <logos-preact class="opacity-50" />
</section>
</div>
</section>
