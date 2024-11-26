import { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `Jumlah Klik${count}`;
    }, [count]);
  return (
    <div><h1>Counter</h1>
    <button onClick={() => setCount(count + 1)}> + </button>
    <p>Jumlah Klik: {count}</p>
    </div>
  )
}

export default Counter