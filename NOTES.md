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

## Criar projeto com REACT CLI

1. npx create-react-app gitfind

2. Limpar tudo que não for útil

3. Criar pasta src/pages e src/components

4. Criar pasta src/pages/home e colocar o arquivo App.js lá dentro e renomear o arquivo para index.js (lembrar de atualizar a importação)

5. Caso queira, pode criar pastas de components que serão utilizados no projeto, como Header, buttons e inputs

6. Criar pasta src/assets

## Criar projeto com REACT CLI E ROUTER DOM

1. npx create-react-app gitfind

2. Limpar tudo que não for útil

3. yarn add react-router-dom (intalar)