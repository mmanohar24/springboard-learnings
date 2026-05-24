import AppRouter from './Router';
import Child from './Family/Child';
import NavBar from './NavBar';
import ThemeProvider from './ThemeProvider';
import './App.css'

function App() {

  return (
    <div>

      <h1> This is App Component !!</h1>

      <AppRouter />

      <ThemeProvider>

        <NavBar />
        <Child />

      </ThemeProvider>

    </div>
  )
}

export default App