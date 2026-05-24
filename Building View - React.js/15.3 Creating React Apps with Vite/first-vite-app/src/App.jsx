import Header from './Header.jsx'
import ShoppingList from './ShoppingList.jsx'
import reactImage from './assets/react.svg'


function App() {
  return (
    <>
      <img src = {reactImage} alt='React Logo'/>
      <Header text = "My First Vite App" color = "blue"/>
      <ShoppingList />
    </>
  )
}

export default App
