// import { Child1, Child2 } from './components/Child'
// import './App.css';

// 配列の定義
// type array = {
//   id: number
//   title: string
// }

// const items: array[] = [
//   {
//     id: 1,
//     title: '一番高い商品'
//   },
//   {
//     id: 2,
//     title: '一番ださい商品'
//   }
// ]

// propsを使って値を渡す、別ファイルにしてpropsを渡す
// type Props = {
//   number: string
//   children: React.ReactNode
// }

// const Child: React.FC<Props> = ({ number, children }) => {
//   return (
//   <p>{ number }の{ children }</p>
//   )
// }

// const App: React.FC = () => {
//   return (
//     <div className='App'>
//       <Child number='1'>子のコンポーネントに渡す</Child>
//       <Child number='2'>子のコンポーネントに渡す</Child>
//     </div>
//   )
// }

// const App2: React.FC = () => {
//   return (
//     <div>
//       <Child1 />
//       <Child2 />
//     </div>
//   )
// }

import React, { useState } from 'react'

const App: React.FC = () => {
  const [ count, setCount ] = useState<number>(0)
  return (
    <div className='App'>
      <div>{ count }</div>
      <div>
        <button onClick={ () => setCount(count+1)}>+1</button>
        <button onClick={ () => setCount(count-1)}>-1</button>
      </div>
    </div>
  )
}

export default App
// export default App2
