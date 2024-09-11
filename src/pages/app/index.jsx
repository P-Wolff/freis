import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

import './index.scss';


export default function App() {
  return (
    <div className="pagina-app">
      <Cabecalho />


    <main className='container-text'>
      <h2>Escolha um treino...</h2>
    </main>

    <section className="cards">
      <Link to='/exc1'>
        <div className='cartao'>
          <div className='retangulo rtgl1'>
          </div>
          <div className='text'>
            <h4>Cupom de desconto</h4>
            <p>Exercício 01</p>
          </div>
        </div>
      </Link>

      <Link to='/exc2'>
        <div className='cartao'>
          <div className='retangulo rtgl2'>
          </div>
          <div className='text'>
            <h4>Converter Kg/gramas</h4>
            <p>Exercício 02</p>
          </div>
        </div>
      </Link>

      <Link to='/exc3'>
        <div className='cartao'>
          <div className='retangulo rtgl3'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 03</p>
          </div>
        </div>
      </Link>

      <Link to='/exc4'>
        <div className='cartao'>
          <div className='retangulo rtgl4'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 04</p>
          </div>
        </div>
      </Link>

      <Link to='/exc5'>
        <div className='cartao'>
          <div className='retangulo rtgl5'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 05</p>
          </div>
        </div>
      </Link>

      <Link to='/exc6'>
        <div className='cartao'>
          <div className='retangulo rtgl6'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 06</p>
          </div>
        </div>
      </Link>

      <Link to='/exc7'>
        <div className='cartao'>
          <div className='retangulo rtgl7'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 07</p>
          </div>
        </div>
      </Link>

      <Link to='/exc8'>
        <div className='cartao'>
          <div className='retangulo rtgl8'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 08</p>
          </div>
        </div>
      </Link>

      <Link to='/exc9'>
        <div className='cartao'>
          <div className='retangulo rtgl9'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 09</p>
          </div>
        </div>
      </Link>

      <Link to='/exc10'>
        <div className='cartao'>
          <div className='retangulo rtgl10'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 10</p>
          </div>
        </div>
      </Link>

      <Link to='/exc11'>
        <div className='cartao'>
          <div className='retangulo rtgl11'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 11</p>
          </div>
        </div>
      </Link>

      <Link to='/exc12'>
        <div className='cartao'>
          <div className='retangulo rtgl12'>
          </div>
          <div className='text'>
            <h4>Valor total por quantidade</h4>
            <p>Exercício 12</p>
          </div>
        </div>
      </Link>

    </section>

  </div>
  );
}

