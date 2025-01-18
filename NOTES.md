#APRENDENDO REACT

## Setup do Projeto

npx create-react-app nameOfProject (Exemplo: npx create-react-app juvenilson)

Depois só limpar tudo que é desnecessário

index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

app.js:

function App() {
  return (
    <div className="App">
        Olá react
    </div>
  );
}

export default App;


index.html:

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>

de resto pode apagar tudo

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

### Outro jeito

Outro jeito é você criar um projeto e depois adicionar o react. Para isso iremos instalar o babel, o yarn, webpack e por fim o react

1. yarn init -y

2. yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D

3. Criar arquivo de configuração do Babel: .babelrc

colocar isso: 

{
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", {"runtime": "automatic"}]
    ]
}

4. yarn add html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server style-loader css-loader file-loader -D

5. Criar arquivo de configuração do webpack: webpack.config.js

colocar isso:

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "..src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: ["file-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};

6. yarn add react react-dom -D

7. criar pasta com nome public

8. Criar arquivo html com estrutura básica:

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chora boy</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>

9. Criar pasta com nome src

10. criar arquivo App.js

Colocar isso:

const App = () => {
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
};

export default App;

11. Criar arquivo index.js

Colocar isso: 

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

12. Colocar esses scripts no package.json:
  "scripts": {
    "start": "webpack serve --open --hot --mode development",
    "build": "webpack --mode production"
  },

13. Dai rodar o comando *yarn start* no terminal

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Criar projeto com REACT CLI

1. npx create-react-app gitfind

2. Limpar tudo que não for útil

3. Criar pasta src/pages e src/components

4. Criar pasta src/pages/home e colocar o arquivo App.js lá dentro e renomear o arquivo para index.js (lembrar de atualizar a importação)

5. Caso queira, pode criar pastas de components que serão utilizados no projeto, como Header, buttons e inputs

6. Criar pasta src/assets

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Criar projeto com REACT CLI E ROUTER DOM

1. npx create-react-app gitfind

2. Limpar tudo que não for útil

3. yarn add react-router-dom (intalar)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Instalando e configurando STYLED COMPONENTS

1. npx create-react-app gitfind

2. Limpar tudo que não for útil

3. yarn add styled-components (intalar)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## HOOKS BÁSICOS

1. Hook useState:

import { useState } from 'react';

const hookUS = () => {

    const [name, setName] = useState('Daniel');

    const handleChangeName = () => {
        setName('Juvenilson')
    }

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { hookUS }

Esse hook, como o exemplo mostrar é usado para mudar o estado de um componente. No exemplo acima temos a criação do componente hookUS, logo em seguida a criação de um estado e um que será mudado, depois é declarado o valor inicial que se encontrará, nesse caso, Daniel. Depois disso temos outra função que irá alterar esse estado, entretanto, se essa função nunca for acionada o estado inicial se permanecerá para sempre. Para tanto, iremos adicionar um botão que ao clicar irá alterar o estado inicial 'Daniel' para 'Juvenilson'.


2. Hook useEffect:

    useEffect(() => {
        alert('Renderizei')
    }, [])

Esse hook irá agir, nesse caso, sempre que a tela renderizar, ou seja, assim que dar reload na página será exibido o alert. Entretanto, ele pode receber dependências para ser executado. Por exemplo:

import { useEffect, useState } from 'react';

const HokUS = () => {

    const [name, setName] = useState('Daniel');

    const handleChangeName = () => {
        setName('Juvenilson')
    }

    useEffect(() => {
        alert('Renderizei')
    }, [name])

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { HokUS }

Observemos que dentro do array após a vírgula foi adicionada a variável "name", ou seja, sempre que ela renderizar novamente, o que estiver dentro das chaves do useEffect será renderizado.

3. Hook useMemo:

    useMemo(() => {

    }, [])

Essa é a sintaxe do useMemo, segue o mesmo padrão do useEffect, o espaço para colocar dependências. O useMemo irá realizar uma ação quando o componente renderizar, porém irá realizar essa ação sempre com o mesmo valor do estado inicial. Por exemplo:

import { useEffect, useMemo, useState } from 'react';

const HokUS = () => {

    const [age, setAge] = useState(17);

    const handleChangeAge = () => {
        setAge(18)
    }

    useEffect(() => {
        alert('Renderizei')
    }, [age])

    const calculo = useMemo(() => {
        console.log('Calculou', age);
        return 10 * age
    }, [])

    console.log('Renderizou', calculo);

    return (
        <div>
            <p>
                {age}
            </p>
            <button onClick={handleChangeAge}>Alterar</button>
        </div>
    )
}

export { HokUS }

A saída desse código será:
Calculou 17
Renderizou 170

Caso eu clique no botão e mude a idade para 18, o resultado será a mesma saída pois o useMemo guardou na memória a const age como 17. Entretanto, se eu passar uma dependência:

    const calculo = useMemo(() => {
        console.log('Calculou', age);
        return 10 * age
    }, [age])

Agora ele irá renderizar com a idade que estará sendo modificada pois está sendo guardado na memória sempre que age é modificado.

4. Hook useCallback

useCallback(() => {

}, [])

Mesma lógica do useMemo, porém para resultados de função, isto é, caso uma função em sua primeira vez retornou 260, sempre que essa função for solicitada ela irá continuar retornando 260 (Caso não seja passado nenhum parâmetro)