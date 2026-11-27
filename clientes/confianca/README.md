# Logomarca CONFIANÇA — Assessoria Jurídica e de Trânsito

Reconstrução vetorial a partir da imagem de referência (avatar do Instagram). Textos exatos:

- **CONFIANÇA**
- **Assessoria Jurídica e de Trânsito**

A grafia foi conferida pela sequência de glifos de cada texto (C-O-N-F-I-A-N-Ç-A e "Assessoria Jurídica e de Trânsito", com í e â). Não há semáforo e não há o fundo circular preto do avatar.

## Arquivos

| Pasta | Arquivo | Uso |
|---|---|---|
| svg/ e png/ | `confianca-logo-vertical-fundo-escuro.svg` / `.png` | Logo principal: símbolo acima, nome e subtítulo abaixo. Para fundos escuros |
| svg/ e png/ | `confianca-logo-vertical-fundo-claro.svg` / `.png` | Mesma logo para fundos claros |
| svg/ e png/ | `confianca-logo-horizontal-fundo-escuro.svg` / `.png` | Cabeçalho de site: símbolo à esquerda, texto à direita. Fundos escuros |
| svg/ e png/ | `confianca-logo-horizontal-fundo-claro.svg` / `.png` | Cabeçalho de site em fundos claros |
| svg/ e png/ | `confianca-simbolo-fundo-escuro.svg` / `.png` | Só o losango com o aperto de mãos |
| svg/ e png/ | `confianca-simbolo-fundo-claro.svg` / `.png` | Só o símbolo, para fundos claros |
| favicon/ | `favicon-32x32.png` | Favicon da aba (versão reforçada para 32 px) |
| favicon/ | `apple-touch-icon-180x180.png` | Ícone para iPhone e iPad |
| favicon/ | `favicon-512x512.png` | Ícone grande (manifesto, atalhos) |
| favicon/ | `confianca-icone-512.svg` e `confianca-icone-32-reforcado.svg` | Ícones em vetor |
| (raiz) | `previa-conferencia.png` | Imagem para conferir as seis versões lado a lado |

Os SVGs ficam em `svg/` e os PNGs em `png/`. Todos os PNGs têm fundo transparente (canal alfa real). As versões **fundo-escuro** têm texto branco: sobre fundo branco elas parecem "sumir", e isso é esperado.

## Especificações

| Versão | Proporção (viewBox) | PNG |
|---|---|---|
| Vertical | 427 × 320 (≈ 4 : 3) | 2400 × 1799 px |
| Horizontal | 836 × 226 (≈ 3,7 : 1) | 2400 × 649 px |
| Símbolo | 231 × 198 | 2400 × 2057 px |
| Favicon / ícone | quadrado, 262 × 262 (32 px: 228 × 228 reforçado) | 32, 180 e 512 px |

Os ícones de favicon usam um **quadrado preto de cantos arredondados** atrás do símbolo, porque as mãos são brancas e sumiriam em abas claras. Os traços são mais grossos que no logo, para continuarem legíveis em tamanho pequeno. Sem os brilhos e sem as barras curtas.

**Tamanho mínimo recomendado:** vertical 120 px de largura, horizontal 160 px, símbolo 24 px. **Área de respiro:** pelo menos a altura da letra "O" de CONFIANÇA (≈ 12% da largura da logo vertical) em todos os lados.

## Cores

### Versão para fundo escuro (fiel à referência)

| Elemento | Código |
|---|---|
| Losango externo (degradê medido na referência) | de `#C28B52` (âmbar) a `#F3E687` (brilho), mediana `#CFB076` |
| Brilhos horizontais e barras curtas | `#FFD666` (brilho), núcleo `#FFF3B8` |
| Losango interno | `#FFFFFF` |
| Mãos | degradê `#E6E6E6` → `#FAFAFA` → `#E9E9E9` → `#C8C8C8` |
| Punhos | preenchimento `#0E1A2E` → `#060D19`, contorno `#CFD4DA` |
| Nome CONFIANÇA | degradê `#FFFFFF` → `#F2F2F2` → `#DCDCDC` |
| Subtítulo | degradê dourado `#E4C27C` → `#CFA55B` |
| Fundo recomendado | `#000000` |

### Versão para fundo claro

| Elemento | Código |
|---|---|
| Losango externo, barras e brilhos | degradê dourado `#8A6214` → `#D0A034` (os realces brancos da referência foram trocados por ouro, para não sumirem no branco) |
| Losango interno | `#141414` |
| Mãos | degradê `#1D1D1D` → `#0A0A0A` |
| Punhos | preenchimento dourado `#D4A53A` → `#8A6214`, contorno `#141414` |
| Nome CONFIANÇA | preto `#0D0D0D` → `#000000` |
| Subtítulo (dourado escuro) | `#9A7420` → `#7D5C14` (contraste de cerca de 5 : 1 sobre branco) |

## Tipografia

Os textos estão **convertidos em contornos** (caminhos), então o SVG não depende de nenhuma fonte instalada. Por isso o texto não é editável como texto; para trocar uma letra é preciso editar o caminho ou refazer o arquivo.

- Nome: **DejaVu Serif Bold**, com espaçamento −10/1000 em (licença livre Bitstream Vera/DejaVu).
- Subtítulo: **Caladea Bold**, com espaçamento −0,365 px no tamanho de referência (licença Apache 2.0).

Essas foram as fontes instaladas que mais se aproximaram do letreiro da referência (medimos largura, altura de maiúscula e altura das minúsculas). **A fonte original da marca não é conhecida**, então as letras não são idênticas às da imagem.

## Decisões e limitações

- **Imagem de referência:** é uma captura de tela borrada do avatar (cerca de 460 px de diâmetro; o aperto de mãos tem uns 110 px de largura). O desenho foi reconstruído pelo contorno que aparece nessa imagem, e os dedos, a segunda mão e os punhos são aproximações suavizadas. Se existir o arquivo original da marca (de uma gráfica ou designer), vale comparar.
- **"Símbolo dourado":** na referência, só o losango externo e os detalhes são dourados; o losango interno e as mãos são brancos. Na versão para fundo escuro mantive essa leitura, para preservar o desenho original. Na versão para fundo claro, o losango externo e os punhos são dourados e as mãos e o losango interno ficam pretos.
- **Segunda mão:** a mão do aperto que na referência aparece em preto sobre preto é o espaço vazio dentro da silhueta; por isso ela não tem preenchimento próprio.
- **Brilhos:** a luz sobre as linhas e as duas pontas brilhantes são aproximações em vetor (degradês e círculos com transparência), não um efeito de luz fotográfico.
- Todos os SVGs foram verificados: XML válido, sem imagem incorporada, sem JPEG, só caminhos e formas.
