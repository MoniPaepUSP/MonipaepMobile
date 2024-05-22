# MoniPaEp

## Implementação do aplicativo mobile MoniPaEp.

#### Aplicação mobile desenvolvida para ajudar o Sistema de Vigilância em Saúde (SVS) no combate a epidemias

## 🚀 Como executar

1) Fazer um clone do projeto para o seu computador
2) Instale o sistema de empacotamento de software [Yarn](https://classic.yarnpkg.com/en/)
3) Instale o [Watchman](https://facebook.github.io/watchman/docs/install) em sua máquina: 
4) Rodar `yarn install` no diretório raiz.
5) Instale o [Expo Go](https://expo.dev/go) para celular, selecione o seu sistema operacional e a versão **46** do aplicativo.
6) No diretório raiz, crie um arquivo env, com uma variável `APP_URL` e coloque a URL do servidor.
7) No diretório raiz, execute `npx expo start` para iniciar a aplicação.
8) Ou `yarn android | ios` para rodar a aplicação usando emulador.
9) Versão acessível está atualmente na branch `Acessibility`.

## Modo desenvolvedor

Alternativamente, é possível emular a aplicação em seu celular com as principais funcionalidades de depuração de uma emulação no computador.

- Execute os passos de 1 a 6 acima.
- Rode `eas build --plataform android | ios` na linha de comando para gerar o APK da aplicação.
- Apos a criação do APK, transfira-o para seu celular e instale o app.
- Rode `npx expo start --dev-client` em seu computador e conecte o app ao servidor exposto.


- **Realize o commit das mudanças pelo comando `npx cz`**

## Padrão Commitizen

- **feat**: adiciona ou remove novas funcionalidades.
- **fix**: corrige algum bug.
- **refactor**: commits que reescrevem ou reestruturam o código, porém não alteram o comportamento da aplicação.
- **perf**: direcionados para melhoria de desempenho.
- **style**: mudanças no código que não afetam o seu comportamento (ponto e vírgula, espaço em branco, formatação).
- **test**: adiciona ou corrige testes existentes.
- **docs**: commits que afetam apenas a documentação.
- **build**: afeta apenas os componentes de construção (ferramentas, dependências, versão do projeto...).
- **ci**: afeta apenas os componentes de configuração do CI, arquivos ou scripts (Travis, Circle, BrowserStack, SauceLabs).
- **chore**: outras mudanças que não afetam o source ou arquivos de teste.
