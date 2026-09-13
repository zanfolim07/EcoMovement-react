# Contribuição de front-end — Sobre e Solução

Esta contribuição completa duas páginas que já estavam previstas no menu e no README do grupo: Sobre e Solução do projeto. Também permite explorar individualmente as telas do protótipo.

## Cinco etapas de implementação

1. Criar os dados tipados do projeto e o componente reutilizável `TituloSecao`.
2. Criar a página `Sobre`, reaproveitando o `Card` e as imagens existentes.
3. Criar o catálogo tipado de 12 telas, o `TelaSolucaoCard` e a galeria com filtros.
4. Criar a página de detalhes com `useParams`, `useNavigate` e tratamento de identificador inválido.
5. Acrescentar os imports e as rotas em `App.tsx` e documentar a contribuição.

## Rotas acrescentadas

| Rota | Conteúdo |
| --- | --- |
| `/sobre` | Contexto, pilares e jornada do EcoMovement |
| `/solucao` | Galeria do protótipo com filtros por categoria |
| `/solucao/:telaId` | Detalhes, imagem ampliada e navegação entre telas |

Exemplo de rota dinâmica: `/solucao/arvore-digital`.

## Decisões técnicas

- TypeScript tipa os dados, as props e as categorias dos filtros.
- `TituloSecao` é reutilizado nas três páginas novas.
- A página Sobre reutiliza o componente `Card` já existente.
- `useState` controla o filtro da galeria.
- `useParams` identifica a tela; `useNavigate` aciona os botões anterior e próxima.
- O início e o fim da sequência desabilitam a navegação correspondente.
- Um identificador inexistente apresenta uma mensagem e acesso à galeria.
- O layout compartilhado mantém Header e Footer nas páginas novas.
- Tailwind define uma, duas ou três colunas conforme a largura disponível.
- Os filtros têm indicação de seleção para tecnologia assistiva e funcionam como botões nativos.
- As imagens e os ícones são os assets do próprio repositório.
- A contribuição apresenta o protótipo, sem requisições a APIs nem processamento real de evidências.
- Nenhuma dependência foi acrescentada. `App.tsx` recebeu somente seis linhas novas; as anteriores foram preservadas.
- A pasta `Pages` mantém a grafia já usada pelo grupo para evitar renomear arquivos de outros integrantes.

## Como conferir

```bash
npm ci
npm run build
npm run lint
npm run dev
```

No endereço exibido pelo Vite:

1. Abra Sobre e Solução pelo menu.
2. Confira os filtros: Todas = 12 telas; Missões = 7; Comunidade = 3; Perfil e conquistas = 2.
3. Abra uma tela pelo botão Ver detalhes.
4. Navegue com Anterior e Próxima; confirme os limites da sequência.
5. Abra `/solucao/nao-existe` e use Voltar à galeria.
6. Atualize `/solucao/arvore-digital` para conferir o acesso direto à rota.
7. Verifique as novas páginas em larguras de 375, 768 e 1280 pixels e navegue pelos botões usando Tab e Enter.

As capturas representam telas do protótipo; os controles desenhados dentro das imagens não são controles deste site.
