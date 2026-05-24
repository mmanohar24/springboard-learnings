import UserForm from './UserForm'
import ShoppingList from './ShoppingList'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1> This is App Component</h1>

      <ShoppingList />

      <UserForm />
    </div>
  )
}

export default App
