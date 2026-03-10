# Mini Portfólio Acadêmico - Abimael Dev

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro para fins acadêmicos.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Funcionalidades

- **Tema Dark/Light**: Alternância entre modos claro e escuro com persistência no localStorage
- **Menu Responsivo**: Menu hamburger animado para dispositivos móveis
- **Animações de Scroll**: Elementos aparecem suavemente ao rolar a página
- **Efeito Cursor Glow**: Brilho que segue o cursor (apenas no tema escuro)
- **Contador Animado**: Estatísticas com animação de contagem
- **Validação de Formulário**: Validação em tempo real com feedback visual
- **Scroll Suave**: Navegação suave entre seções

## Estrutura de Arquivos

```
├── index.html    # Estrutura da página
├── style.css     # Estilos e animações
├── script.js     # Interatividade
└── README.md     # Documentação
```

## Como Usar

1. Baixe os três arquivos (`index.html`, `style.css`, `script.js`)
2. Coloque-os na mesma pasta
3. Abra o `index.html` no navegador

## Seções

- **Hero**: Apresentação com janela de código estilizada
- **Sobre**: Informações pessoais e estatísticas
- **Formação**: Timeline de formação acadêmica
- **Portfólio**: Grid de projetos com cards interativos
- **Contato**: Formulário de contato com validação

## Personalização

Para personalizar o portfólio, edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
    --primary: #10b981;      /* Cor principal */
    --primary-dark: #059669; /* Cor principal escura */
    --bg-dark: #0a0a0a;      /* Fundo tema escuro */
    --bg-light: #ffffff;     /* Fundo tema claro */
}
```

## Responsividade

O layout é totalmente responsivo com breakpoints em:
- 768px (tablets)
- 480px (smartphones)

## Autor

**Abimael de Menezes Pedro**  
Estudante de Engenharia de Software - UNINTER

## Licença

Este projeto é de uso acadêmico e livre para estudos.
