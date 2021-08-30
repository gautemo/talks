# Intro to React Hooks
Format: Presentation 👨‍🏫

### 1 September 2021 - Capra
[Slides](https://docs.google.com/presentation/d/1WH8K-EbINJ01FaVO7nZp_KJhhCgdoJaFNvVRiKLuO3M/edit?usp=sharing)  
[Article](https://dev.to/gautemeekolsen/explain-react-hooks-like-i-m-1nkp)

## Private notes 🤫
<details>
  <summary>Expand</summary>
function:
```jsx
function App(props){
  return <h1>Hei {props.name}</h1>
}
```

useState:
```jsx
function App(props){
  const [count, setCount] = useState(0)
  return (
    <>
      <p>{props.name} clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}
```

useState object:
```jsx
function App(props){
  const [obj, setObj] = useState({ count: 0, name: 'xyz'})
  return (
    <>
      <p>{obj.name} clicked {obj.count} times!</p>
      <button onClick={() => setObj({...obj, count: obj.count + 1})}>Click me</button>
    </>
  )
}
```

useReducer:
```jsx
function App(props) {
  const [count, bump] = useReducer((prevValue) => prevValue + 1, 0)
  return (
    <>
      <p>{props.name} clicked {count} times!</p>
      <button onClick={bump}>+1</button>
    </>
  )
}
```
```jsx
function App(props) {
  const reduce = (prevState, action) => {
    if(action === 'double'){
      return prevState * 2
    }
    if(action === 'increment'){
      return prevState + 1
    }
  }

  const [count, dispatch] = useReducer(reduce, 0)
  return (
    <>
      <p>{props.name} clicked {count} times!</p>
      <button onClick={() => dispatch('double')}>*2</button>
      <button onClick={() => dispatch('increment')}>+1</button>
    </>
  )
}
```

useEffect:
```jsx
  useEffect(() => {
    console.log('Component ready')
    return () => console.log('Component leaves');
  }, [])

  useEffect(() => {
    console.log('U counting!?')
  }, [count])
```

useMemo:
```jsx
function App(props) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const double = useMemo(() => {
    return count * 2
  }, [count])

  return (
    <>
      <p>{props.name} clicked {count} times! Double is {double}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <input type="text" onInput={e => setName(e.target.value)} /> - {name}
    </>
  )
}
```

context:
```jsx
const countContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount(count + 1), [count])

  return (
    <countContext.Provider value={{count, increment}}>
      <Show/>
      <Inc/>
    </countContext.Provider>
  )
}

function Show(){
  const { count } = useContext(countContext)
  return <p>Count is {count}</p>
}

function Inc(){
  const { increment } = useContext(countContext)
  return <button onClick={increment}>+1</button>
}
```

ref:
```jsx
function App() {
  const inputEl = useRef();

  const copy = () => {
    inputEl.current.select();
    document.execCommand("copy");
  }

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={copy}>Copy</button>
    </>
  )
}
```

custom hooks:
```jsx
function App() {
  const { double, increment } = useCount();

  return (
    <>
      <p>double: {double}</p>
      <button onClick={increment}>+1</button>
    </>
  )
}

const useCount = () => {
  const [count, setCount] = useState(0)
  const double = count * 2
  const increment = () => setCount(count+1)
  return { double, increment}
}
```
</details>