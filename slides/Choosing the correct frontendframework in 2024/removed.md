---
preload: false
---

# Hvilket frontendrammeverk skal man velge?

<logos-react v-motion class="text-8xl" :initial="{ x: 1200, y: 500, scale: 0.2 }" :enter="{ x: 0, y: 0, scale: 1, transition: { duration: 7000, delay: 1000 } }"/>

<!--
Vi må slutte å velge React kun basert på at det er det flest folk kan. Det gjør at React har blitt en standard, så flere føler de må lære React for å følge jobbmarkedet og boblen blir da bare større. Det er en ond spiral! Jeg sier ikke at React er et feil valg, men du må velge det for de riktige grunnene i såfall.
-->

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=1]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]==>B[double=count * 2];
    A==>C["console.log(count)"];
    A==>D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
    style A stroke:#ff0000
    linkStyle 0,1,2 stroke:#ff0000,color:red;
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]===B[double=count * 2];
    A===C["console.log(count)"];
    A===D["&lt;p&gt;count is 2&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
    linkStyle 0,1,2 stroke:#ff0000,color:red;
    style B stroke:#ff0000
    style C stroke:#ff0000
    style D stroke:#ff0000
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B==>E["&lt;p&gt;double is 2&lt;/p&gt;"];
    style B stroke:#ff0000
    linkStyle 3 stroke:#ff0000,color:red;
```

---
layout: center
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 2&lt;/p&gt;"];
    B===E["&lt;p&gt;double is 4&lt;/p&gt;"];
    linkStyle 3 stroke:#ff0000,color:red;
    style E stroke:#ff0000
```

---

<BarChart title="Hello world size" postfix="kB" :bars="[
  { name: 'React', points: 39.16 }, 
  { name: 'Vue', points: 16.48 }, 
  { name: 'Angular', points: 35.77 },
  { name: 'Svelte', points: 1.67 },
  { name: 'Preact', points: 4.12 },
  { name: 'Solid', points: 2.47 },
  ]"/>

---

# Gautes tanker om React

- Best på popularitet og økosystem
- "React isn’t great at anything except being popular"

---

# Gautes tanker om Vue

- Ikke best på noe, men i toppen på alt

---

# Gautes tanker om Angular

- Har føltes litt tungt med mye boilerplate
- Har tatt gjort store forbedringer i det siste

---

# Gautes tanker om Svelte

- Hadde vært mitt valg om det ikke var for Vue
- Versjon 5 blir et skifte

---

# Gautes tanker om Solid

- Nytt og bedre JSX rammeverk
- Lite team og økosystem

---

# Gautes tanker om Preact

- Et bedre alternativ til React med mindre økosystem