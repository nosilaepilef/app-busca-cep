import React, { useState } from 'react';
import './App.css';
import {baseURL, json} from './utils'
import Axios from 'axios';
import {RiMapPinLine} from 'react-icons/ri'

function App() {
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

  async function handleCep(e) {
    e.preventDefault();
    const resp = await Axios.get(baseURL+cep+json);
    return ( setBairro(resp.data.bairro),
      setLogradouro(resp.data.logradouro),
      setComplemento(resp.data.complemento),
      setLocalidade(resp.data.localidade),
      setUf(resp.data.uf) )
  }
  return (
      <form className="formulario" onSubmit={handleCep}>
        <input className="caixa-cep" placeholder="Ex: 78134264" maxLength="9" type="text "
          value={cep}
          onChange={ e => setCep( e.target.value )}
        />
        <button className="btn-busca" type="submit"><RiMapPinLine className="ico-btn-busca"/>Pesquisa End</button>

        <div className="log">
          <span className={ (logradouro) ? 'black': 'gray'}>
            {(logradouro) ? logradouro : 'Ex: Rua Rondonópolis'}
          </span>
        </div>

        <div className="comp">
          <span className={ (complemento) ? 'black': 'gray'}>
            {(complemento) ? complemento : 'Ex: (Lot N M Grosso)'}
          </span>
        </div>

        <div className="bair">
          <span className={ (bairro) ? 'black': 'gray'}>
            {(bairro) ? bairro : 'Ex: Capão do Pequi'}
          </span>
        </div>

        <div className="local">
          <span className={ (localidade) ? 'black': 'gray'}>
            {(localidade) ? localidade : 'Ex: Várzea Grande'}
          </span>
        </div>

        <div className="uf">
          <span className={ (uf) ? 'black': 'gray'}>
            {(uf) ? uf : 'MT'}
          </span>
        </div>
        <h1>&lt; Busca End /&gt;</h1>       
      </form>
  );
}

export default App;
