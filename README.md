
# Atividade Canvas


# Desenho de Formas no Canvas

Este script JavaScript permite desenhar diferentes formas, como um retângulo, uma bola, um triângulo, uma curva e uma linha reta, em um elemento `<canvas>`. Além disso, o script também permite mover uma imagem no canvas e alterar a cor de fundo de um elemento `<h1>` em intervalos regulares.

## Funcionalidades

### Desenho de Formas

O script utiliza o elemento `<canvas>` do HTML e o contexto 2D para desenhar as seguintes formas:

1. Retângulo: Um retângulo vermelho é desenhado no canvas na posição (700, 30), com uma largura de 100 e altura de 100 pixels.

2. Bola: Uma bola cor de rosa é desenhada no canvas utilizando a função `arc()`. A posição central da bola é calculada com base na posição do retângulo.

3. Triângulo: Um triângulo cor de rosa é desenhado no canvas utilizando a função `fill()` e `closePath()`. Os pontos do triângulo são calculados com base na posição do retângulo.

4. Curva: Uma curva azul é desenhada no canvas utilizando a função `bezierCurveTo()`. A curva é formada por pontos calculados com base na posição do retângulo e do triângulo.

5. Linha Reta: Uma linha reta verde é desenhada no canvas utilizando a função `lineTo()`. As coordenadas de início e fim da linha são definidas com base em valores predefinidos.

![Captura de tela 2023-05-13 020823](https://github.com/KalCastro/Atividade-Canvas/assets/127865406/0ae71a62-2460-492b-8a81-1bf17d303e1c)

### Movimento da Imagem

O script carrega uma imagem a partir de um arquivo e a desenha no canvas na posição (100, 50). A imagem é movida utilizando a função `drawImage()`.

### Alteração de Cor de Fundo

O script altera a cor de fundo de um elemento `<h1>` em intervalos regulares. As cores são definidas em um array e alternam a cada segundo.

 
