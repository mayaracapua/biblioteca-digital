# Biblioteca Digital

## Sobre o projeto

A Biblioteca Digital é uma aplicação desenvolvida com React e Tailwind CSS que permite visualizar livros, filtrar por gênero, realizar empréstimos, devolver livros e solicitar reservas por e-mail.

O projeto foi desenvolvido como atividade prática para aplicar conceitos de desenvolvimento de interfaces, componentes, gerenciamento de estado e programação assíncrona.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- shadcn/ui
- HTML e CSS

## Funcionalidades

- Listagem de livros disponíveis.
- Filtro de livros por gênero.
- Realização e devolução de empréstimos.
- Contador de empréstimos.
- Formulário de reserva com validação de e-mail.
- Alternância entre tema claro e escuro.
- Consulta simulada de disponibilidade dos livros.
- Painel com as cinco atividades mais recentes.

## Organização do projeto

```text
src/
├── components/
│   ├── ui/
│   ├── ActivityPanel.jsx
│   ├── BookCard.jsx
│   ├── BookGrid.jsx
│   ├── FilterBar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── LoanPanel.jsx
│   └── ReservationForm.jsx
├── data/
│   └── books.js
├── lib/
│   └── eventBus.js
├── App.jsx
└── index.css
```

## Como executar o projeto

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto no terminal.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm run dev
```

5. Acesse o endereço informado pelo Vite no navegador.

## Conceitos aplicados

### Componentização

A aplicação foi dividida em componentes menores, facilitando a organização, manutenção e reutilização do código.

### Gerenciamento de estado

Foi utilizado o hook `useState` para controlar os filtros, empréstimos e tema da aplicação.

### Event Bus

Foi implementado um sistema de eventos utilizando `subscribe` e `emit`, permitindo que o painel de atividades receba notificações de outras partes da aplicação.

### Programação assíncrona e Event Loop

- **Call Stack:** executa as instruções síncronas do JavaScript.
- **Microtasks:** recebem prioridade após a execução da pilha atual, como a continuação de uma Promise.
- **Macrotasks:** incluem tarefas agendadas com `setTimeout`.

Na consulta de disponibilidade, foi utilizado `Promise` com `setTimeout` para simular uma operação assíncrona. Após a conclusão do temporizador, a Promise é resolvida e a continuação do código é executada como microtask.

## Build de produção

Para verificar a compilação do projeto:

```bash
npm run build
```

O projeto utiliza Vite para gerar os arquivos de produção na pasta `dist`.
