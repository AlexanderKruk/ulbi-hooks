
import { useState, useRef } from 'react';
import { useScroll } from '../hooks/useScroll'

const List = () => {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)

  const childRef = useRef();
  const parentRef = useRef();
  const intersection = useScroll(parentRef, childRef, () => fetchTodo(page, limit))

  function fetchTodo(page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
      .then(response => response.json())
      .then(json =>  {
        setTodos( prev => [...prev, ...json])
        setPage( prev => prev + 1)
      })
  }


  return (
    <div ref={parentRef} style={{overflow: 'auto', height: '30vh'}}>
      {todos.map(item => 
        <div key={item.id} style={{padding: '30px', border: '2px solid black' }}>
          {item.title}
        </div>)}
      <div ref={childRef} style={{height: 30, background: 'green'}}></div>
    </div>
  )
}

export default List;