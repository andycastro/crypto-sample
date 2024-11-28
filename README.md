# Projeto Vite React TypeScript

Este projeto utiliza [Vite](https://vitejs.dev/) para configurar uma aplicação React com TypeScript de forma rápida e eficiente.

## 📋 Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## 🚀 Como rodar o projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
## 2. Instale as dependências
Com npm:
```bash
npm install
```
Com Yarn:
```bash
yarn install
```
3. Inicie o servidor de desenvolvimento
Com npm:
```bash
npm run dev
```
Com Yarn:
```bash
yarn dev
```
O projeto estará disponível em http://localhost:5173 por padrão.

## 🛠️ Scripts disponíveis
dev
Inicia o servidor de desenvolvimento.

```bash
npm run dev
```
build
Compila o projeto para produção.

```bash
npm run build
````

Os arquivos compilados estarão disponíveis na pasta dist.

preview
Visualiza o projeto compilado para produção.

```bash
npm run preview
```

## 🗂️ Estrutura do projeto
A estrutura básica do projeto é:

```bash

src/
├── assets/       # Arquivos estáticos
├── components/   # Componentes reutilizáveis
  ├── charts/     # Principais gráficos do projeto
├── configs/      # Responsável pelas configurações compartilhadas
├── view/         # Páginas da aplicação - Dashboard
├── hooks/        # Hooks para segregação de lógica 
├── utils/        # Funções úteis
├── useCases/     # Separação da lógica de consumo de apis
├── services/     # Services das requisições
├── App.tsx       # Componente principal
├── main.tsx      # Ponto de entrada do React
└── vite-env.d.ts # Declarações de tipo do Vite
```

## 🧪 Tecnologias utilizadas
- React
- TypeScript
- Vite
- ApexCharts
- reactQuery
- Shadcn

## Disclaimers
Pontos de atenção referente a alterações do projeto:
- Os gráficos Candlestick básico e Candlestick synced with a brush chart não foram usados, pois a estrutura de dados entre os endpoints e o necessário para alimentar os gráficos eram distintos, o que levaria tempo para criar uma factory, podendo prejudicar a entrega final no prazo.

## Filtros
Os dados da lista dos filtros da aplicação são recebidos pelo endpoint da coinGecko e armazenados em cache.


## Cache - Persistência de dados
Os dados são armazenados em localStorage utilizando a camada de useCase (src/useCases/cryptoUseCase.ts) criado justamente para reunir qualquer lógica ou tratamento vindos dos endpoints.

Uma vez que é armazenado, os compoentes consultam flags booleanas para avisar aos usuários sobre o carregamento de dados estáticos.

## Ajustes de performance
Além do cache, foram aplicadas virtualização de listas nos componentes de dropDown para melhor performance da aplicação.

## Personalizações mínimas
É possível alterar a foto do perfil de forma prática e rápida. Basta clicar no avatar para abrir uma drawer e inserir uma url válida de um perfil do github.

No gráfico *Comparação de Market Cap* foi adicionado um multipleSelect com busca para poder compor a montagem do gráfico com as moedas escolhidas pelos usuários.

## Skeleton e ErrorState para transparência com os usuários
Foram adicionados componentes de skeletons e ErrorState com botões de retry para maior transparência e controle para os usuários.