---
layout: center
transition: fade
---

# What's the deal with signals?

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

# What's the deal with signals?

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

# What's the deal with signals?

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

# What's the deal with signals?

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

# What's the deal with signals?

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

# What's the deal with signals?

```js
function signal(value) {
  return {
    get value() {
      // track
      return value
    },
    set value(newValue) {
      value = newValue
      // notify all trackers
    }
  }
}
```