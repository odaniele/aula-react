# aula-react

## Objetivo:
Criar um componente React que exiba uma mensagem de saudação personalizada com base no nome fornecido pelo usuário, utilizando um componente de entrada separado que recebe props.


https://github.com/campinho-digital/aula-react/assets/108235987/d4034a63-e5ab-4ded-8f25-a5550df795b6


## Requisitos:
Campo de Entrada como Componente Separado:

Crie um componente de entrada (InputComponent) que receba props para o valor do input e a função de mudança.
Exibição da Saudação:

O componente principal (App) deve utilizar o InputComponent para receber o nome e exibir a saudação personalizada.


Passos:
1 - Crie um novo projeto React usando create-react-app (ou qualquer método que preferir).
2 - No componente principal (App.js), crie um estado para armazenar o nome digitado pelo usuário.
3 - Crie um componente de entrada (InputComponent) que receba props para o valor e a função de mudança.
4 - No componente principal (App), utilize o InputComponent e passe as props necessárias.

Sua estrutura de arquivos deverá ser assim:

~~~
src/
|-- components/
|   |-- InputComponent.js
|-- App.js
|-- index.js
~~~

## O `src/components/InputComponent.js`

~~~
import React from 'react';

function InputComponent({ value, onChange }) {
  return (
    <input
     //seu código
    />
  );
}

export default InputComponent;

~~~

## O `src/App.js`
~~~
import React, { useState } from 'react';
import InputComponent from './components/InputComponent';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      //seu código
    </div>
  );
}

export default App;

~~~


## Instruções:

- Instale create-react-app se ainda não tiver instalado: npx create-react-app saudacao-app.
- Navegue até o diretório do projeto: cd seu-app.
- Crie um diretório src/components e adicione o arquivo InputComponent.js com o seu código de input.
- Substitua o conteúdo do arquivo src/App.js uma vez que precisamos importar o input.
- Execute o projeto: npm start.

## o useState 

https://legacy.reactjs.org/docs/hooks-state.html

https://awari.com.br/como-usar-o-usestate-no-react-js-guia-completo-para-iniciantes/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Como%20usar%20o%20useState%20no%20React%20JS:%20guia%20completo%20para%20iniciantes



