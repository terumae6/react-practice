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

import React, { useState, useCallback } from 'react'

/* MEMO
React hooks
useCallback/useMemoって？
hooksは基本的にdependencyList(deps)と呼ばれるものを配列とした引数に取り、その値が変わった時に値が更新されるようになっている
useMemoは計算した結果を保持するための関数
useCallbackは不要に新しく関数インスタンスを作成することを抑制することによって不要な再描画を減らしてくれる

useMemo
疑わしきものは大体useMemo使っておけばOK
useCallback
子に関数の参照を渡す場合はuseCallback使っておくのが無難

*/

const App: React.FC = () => {
  const [ count, setCount ] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, [])

  return (
    <div className='App'>
      <div>{ count }</div>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </div>
  )
}

export default App
// export default App2
