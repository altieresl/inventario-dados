import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Select from 'react-select'

const options = [
    { value: 'dados-identificacao-pessoal', label: 'Dados de Identificação Pessoal' },
    { value: 'dados-financeiros', label: 'Dados Financeiros' },
    { value: 'caracteristicas-pessoais', label: 'Características Pessoais' }
  ]
  
  const SecoesInventario = () => (
    <Select value={options} options={options} isMulti="true"/>
  )

  const navButton = {
    marginRight: '5px'
  };

  const container = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  };
export const Home = () => (
    <div>
        <header>
            <h1>Inventário de Dados</h1>
        </header>
        <nav style={{flex: 1}}>
            <Button style={navButton}>{options[0].label}</Button>
            <Link to="/dadosFinanceiros"><Button style={navButton}>{options[1].label}</Button></Link>
            <Button style={navButton}>{options[2].label}</Button>
        </nav>
        <div style={container}>
            <div style={{flex: 1, marginRight: 10}}>
                <SecoesInventario />
            </div>
            <div style={{flex: 5}}>
                <h5>Dados de Identificação Pessoal</h5>
                <form>
                    <div>
                        <label for="info_identificacao" style={{marginRight: 10}}>7.1.1 - Informações de identificação pessoal</label>
                        <input id="info_identificacao"/>
                    </div>
                    <div>
                        <label for="info_identificacao_gov" style={{marginRight: 10}}>7.1.2 - Informações de identificação atribuídas por instituições governamentais</label>
                        <input id="info_identificacao_gov"/>
                    </div>
                </form>
            </div>
        </div>
        <p>
        </p>
    </div>
)