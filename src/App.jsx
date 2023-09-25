import './App.css'

function App () {
  return (
    <div>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        Aqui iran los resultados
      </main>
    </div>
  )
}

export default App
