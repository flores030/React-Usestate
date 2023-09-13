import { useState } from 'react';

const useCadastro = () => {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    usuario: '',
    senha: '',
    email: '',
    confirmaEmail: '',
    cpf: '',
    idioma: '',
  });

  const handleChange = (campo, valor) => {
    setDadosCadastro({
      ...dadosCadastro,
      [campo]: valor,
    });
  };

  const handleCadastro = () => {
    console.log('Dados de cadastro:', dadosCadastro);
  };

  return {
    dadosCadastro,
    handleChange,
    handleCadastro,
  };
};

export default useCadastro;
