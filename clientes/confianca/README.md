# Confiança Assessoria Jurídica e de Trânsito — site institucional

Primeira versão navegável, estática e responsiva, preparada para Cloudflare Pages com integração Git.

## Estrutura

- `index.html`: página institucional, metadados e conteúdo.
- `styles.css`: identidade visual e responsividade.
- `script.js`: navegação mobile e ano automático no rodapé.
- `assets/brand/`: logos SVG/PNG e favicons finais recebidos.
- `assets/images/`: fotografias selecionadas do escritório, otimizadas em WebP.

## Publicação recomendada: Git + Cloudflare Pages

O projeto foi preparado para entrar no repositório `joaoa187-ux/maverick-digital-site` na subpasta `clientes/confianca`, em uma branch exclusiva chamada `feat/confianca-site-preview`.

Ao criar um novo projeto Pages:

- Repositório: `joaoa187-ux/maverick-digital-site`
- Production branch: `feat/confianca-site-preview`
- Framework preset: `None`
- Root directory (advanced): `clientes/confianca`
- Build command: `exit 0`
- Build output directory: `.`

Assim, o Cloudflare publica somente o conteúdo desta subpasta. A branch de produção da Maverick não deve ser alterada.

Recomendo manter Git integration. Não escolha Direct Upload para este projeto: o Cloudflare não permite converter depois um projeto criado por Direct Upload em um projeto Git-integrated; seria necessário criar outro projeto.

## Antes de publicar para o público

1. Confirmar com o cliente o endereço completo e o pin correto no Maps. O endereço mais recente do briefing veio incompleto como “Rua 6”, por isso não foi publicado.
2. Confirmar o domínio definitivo e configurar canonical, sitemap e Search Console depois da escolha.
3. Pedir ao cliente revisão e aprovação formal dos textos e da forma de apresentação da equipe jurídica.
4. Confirmar a autorização de uso de qualquer fotografia em que apareçam terceiros. As imagens com pessoas, telas ou documentos não foram usadas.
5. A fotografia da fachada mostra a sinalização antiga com semáforo e dois telefones. A página usa o número atual informado no briefing, mas recomenda-se atualizar/validar a placa antes de dar destaque à foto.
6. Solicitar ao responsável uma fotografia institucional original, se desejar manter uma seção pessoal. Nenhum retrato de rede social foi reaproveitado nesta versão.
7. Submeter os textos e chamadas à revisão dos advogados responsáveis, considerando as regras de publicidade profissional da OAB.

## Conteúdo e limites desta primeira versão

- Nome e serviços foram estruturados a partir dos briefings preenchidos em novembro de 2026.
- Número utilizado nos links: +55 62 98318-5806.
- Horário: segunda a sexta, das 9h às 18h.
- Atuação presencial em Anápolis e região; a necessidade de atendimento online/presencial é descrita como dependente do caso.
- Não foram divulgados honorários, percentuais de sucesso, promessas de resultado, depoimentos ou casos concretos.
- O e-mail foi omitido porque o briefing de validação mais recente não confirmou um e-mail público.

## Teste local

Abra `index.html` no navegador. Para testar em servidor local, execute na pasta:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.
