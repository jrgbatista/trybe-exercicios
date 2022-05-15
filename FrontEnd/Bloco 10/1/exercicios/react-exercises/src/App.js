import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

function App() {
  return (
    <div>
      {/* <ul>{tarefas.map(tarefa => Task(tarefa))}</ul> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
