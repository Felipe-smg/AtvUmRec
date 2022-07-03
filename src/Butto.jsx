
import { useState } from 'react';
import './Butto.css'
function Butto() {
    const [selecionado, setSelecionado] = useState(false);



function mudaBotao() {
setSelecionado(!selecionado);
console.log(selecionado);
}

            return(


            <div className="butao">
            
            <button className='btn'>
            <p className='titulo'>PREVIOUS</p>
            <p className='Descrição'>JQUERY: DETECT UPDATE OF HTML <p>ELEMENT</p></p>
            </button>    
            
            <button className='btn'>
            <p className='titulo'>NEXT</p>
            <p className='Descricao'>RAILS + DEVISE WORKING WITH <p>MULTIPLE MODELS</p></p>
            </button>

            </div>


            );
}
export default Butto;