# Comandos basicos

## Comandos para NodeJS

- Para parar um serviço rodando utilizar "control + c"
- Todo projeto de node js tem um arquvo package.json
- A secao scripts tem comands que rodam com "npm run"
  - por exemplo: para subir o site do VITE use "npm run dev"
- Para instalar um projeto node sempre rodar "npm install" na raiz do projeto

## Comandos de UNIX

- "cd" para navegar entre pastas
  - cd frontends (entra na pasta fronteds)
  - cd .. (volta uma pasta)
  - cd ../.. (volta duas pastas)
  - cd / (vai para raiz do sistema operacional)
- ls -la para verificar o que tem numa pasta em forma de lista
  - ls -la (lista o diretorio atual)
  - ls -la frontends (lista o diretorio frontends)
- pwd para mostrar o caminh completo de qual diretorio voce esta no momento

## Conceitos basicos de react js

- Todo componente é uma funçao com nome maiusculo
  - function MyComponent
- O compoenent React tem basicamente 4 areas:
  - area de variaveis
  - area de funcoes internas
  - area de react hooks
  - area de template
- useEffect é executada quando o componente é montado na memoria
- useState é usado para criar variaveis dentro do componente

## Receita basica do git

- git add --all (ou git add -- ./caminho do arquivo)
- git commit -m "Mensagem do commit"
- git pull origin main (para atualizar com o servidor)
- git push origin main (para enviar para o servidor)
