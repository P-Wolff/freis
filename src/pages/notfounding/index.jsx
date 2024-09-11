import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';


import './index.scss';


export default function NotFounding() {
    
    
    return (
        <div className="pagina-exc">
            <Cabecalho />

            <h1>TEM ANDA AQUI
                <br>
                    ERROR 404
                </br>
            </h1>
        </div>
    );
}