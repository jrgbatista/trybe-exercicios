import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <main className='App'>
      <fieldset>
        <legend>
          <h1>Processo Seletivo</h1>
        </legend>
        <Formulario />
      </fieldset>
      <input
        type="button"
        value="Enviar"
      />
      <input
        type="reset"
        value="Limpar"
      />
    </main >
  );
}

export default App;
