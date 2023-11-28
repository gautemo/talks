# Angular

- Signals 2023, v16

<logos-angular-icon class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---
transition: fade
---

# Angular reactivity
 
```js
import { Component } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  increase() {
  }
}
```

---
transition: fade
---

# Angular reactivity
 
```js {1,8,11}
import { Component, signal } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = signal(0)

  increase() {
    this.count.set(this.count() + 1)
  }
}
```

---
transition: fade
---

# Angular reactivity
 
```js {1,9}
import { Component, signal, computed } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = signal(0)
  double = computed(() => this.count() * 2)

  increase() {
    this.count.set(this.count() + 1)
  }
}
```

---
transition: fade
---

# Angular reactivity
 
```js {1,11-13}
import { Component, signal, computed, effect } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = signal(0)
  double = computed(() => this.count() * 2)

  constructor() {
    effect(() => console.log(this.double()))
  }

  increase() {
    this.count.set(this.count() + 1)
  }
}
```

---
transition: fade
---

# Angular reactivity
 
```js {16-18}
import { Component, signal, computed, effect } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = signal(0)
  double = computed(() => this.count() * 2)

  constructor() {
    effect(() => console.log(this.double()))
  }

  increase() {
    this.count.set(this.count() + 1)
    console.log(this.count()) // 1
    console.log(this.double()) // 2
  }
}
```

---

# Angular reactivity
 
```js {3,4,11-15}
import { Component, signal, computed, effect } from '@angular/core'

const count = signal(0)
const double = computed(() => count() * 2)

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = count
  double = double
  constructor() {
    effect(() => console.log(double()))
  }

  increase() {
    count.set(count() + 1)
  }
}
```

---
layout: center
---

# Angular re-render

```mermaid
graph TD;
    A---B;
    A---C[C - state changed];
    B---E;
    C---D;
    C---F;
    D---G;
    D---H;
    F---I;
    linkStyle 3,4,5,6,7 stroke:#ff0000,color:red;
    style C stroke:#ff0000
    style D stroke:#ff0000
    style F stroke:#ff0000
    style G stroke:#ff0000
    style H stroke:#ff0000
    style I stroke:#ff0000
```

---

# Angular summary

|                                            | <logos-angular-icon class="text-5xl"/>                                |
| ------------------------------------------ | --------------------------------------------------------------------- |
| mutable vs immutable API                   | <span v-click>Immutable</span>                                        |
| State is always in sync                    | <emojione-white-heavy-check-mark v-click class="text-2xl"/>           |
| Re-render                                  | <noto-deciduous-tree v-click class="text-2xl"/>                       |
| Works outside the component                | <span v-click><openmoji-palm-down-hand class="text-2xl"/>(2/3)</span> |
| Works outside the framework                | <span v-click><openmoji-palm-down-hand class="text-2xl"/>(2/3)</span> |

<!--
effect() can only be used within an injection context
-->