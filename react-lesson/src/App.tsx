import React from 'react';
import './App.css';

type array = {
  id: number
  title: string
}

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

type Props = {
  message: string
}

const Child: React.FC<Props> = props => {
  return (
    <p>{ props.message }</p>
  )
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <Child message='子コンポーネントに渡す' />
    </div>
  )
}

export default App;
