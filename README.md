# Gestor de Gastos - Versão Web

**Aplicação web para gestão de gastos e boletos**, desenvolvida com `HTML5` + `CSS3` + `JavaScript` puro.

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js Badge](https://img.shields.io/badge/Chart.js-Gráficos-orange?logo=chart.js)
![LocalStorage Badge](https://img.shields.io/badge/LocalStorage-Dados-green)

---

## Funcionalidades

### **Calendário Interativo**
- Visualização mensal de gastos
- Indicação visual de dias com boletos cadastrados
- Navegação entre meses com setas
- Hover otimizado sem flicker

### **Relatório Mensal**
- Tabela com gastos diários do mês inteiro
- Resumo com total do mês, média diária e maior gasto
- Gráfico de pizza mostrando distribuição por categoria
- Seleção de mês/ano para análise histórica

### **Gestão de Boletos**
- Categorias: Água, Luz, Internet, Telefone, Aluguel, Cartão, **Imposto**, **Contadora**, Outros
- Repetição mensal automática
- Observações e alertas personalizados
- Interface modal intuitiva para cadastro

### **Sistema de Backup**
- Export/Import de dados em JSON
- Backup manual dos dados do navegador
- Proteção contra perda de dados

### **Interface Moderna**
- Dropdowns/selects com design arredondado e animações
- Cores consistentes e transições suaves
- Layout limpo e profissional
- Botão de reinicialização rápida
- Tipografia melhorada nos dias da semana

---

## Requisitos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Node.js** `v18+` (apenas para desenvolvimento local)

---

## Desenvolvimento Local

```bash
npm install
npm start
```

Acesse: http://localhost:5173

## Deploy em Produção

A aplicação é 100% estática. Faça upload dos arquivos da pasta `public/` para qualquer servidor web:

- **Netlify/Vercel**: Arraste a pasta `public/`
- **GitHub Pages**: Configure para servir da pasta `public/`
- **Servidor próprio**: Copie `public/index.html`, `public/styles.css`, `public/renderer.js`

---

## Como Usar

### Navegação no Calendário
1. Inicie o aplicativo (`npm start`)
2. Use as **setas ◀ ▶** para navegar entre os meses
3. Clique em qualquer dia para adicionar ou visualizar boletos
4. Dias com boletos aparecem destacados visualmente

### Acessar o Relatório Mensal
1. Na tela principal, clique na aba **"Relatório Mensal"**
2. Use os **dropdowns arredondados** de mês e ano para escolher o período
3. Visualize:
   - **Tabela diária**: gastos de cada dia do mês
   - **Resumo**: totais e médias
   - **Gráfico de pizza**: distribuição por categoria

### Gerenciar Boletos
1. Clique em um dia do calendário
2. Use o botão **"Adicionar"** para cadastrar novos boletos
3. Escolha entre as categorias disponíveis: **Imposto**, **Contadora**, etc.
4. Configure repetição mensal se necessário

### Sistema de Backup
1. Clique no botão de **configurações** (ícone de engrenagem)
2. Use as opções de backup, importação e exportação
3. Mantenha seus dados sempre seguros

---

## Banco de Dados

O banco `database.db` é criado automaticamente em:

```
%APPDATA%/Gestor de Gastos
```

ArtArmazenamento de Dados

Os dados são salvos no **LocalStorage** do navegador automaticamente.

Estrutura do projeto:

```
gestor-gastos-web/
├── public/           # Arquivos da aplicação web
│   ├── index.html    # Página principal
│   ├── styles.css    # Estilos
│   └── renderer.js   # Lógica JavaScript
├── scripts/          # Ferramentas de desenvolvimento
├── assets/           # Recursos
└── package.js   | Função                            |
| -------------- | --------------------------------- |
| HTML5          | Estrutura da aplicação web        |
| CSS3           | Estilos e responsividade          |
| JavaScrição web** pura que funciona em qualquer navegador moderno
- Projeto simples e leve para controle pessoal de gastos
- Interface moderna e responsiva (PC e mobile)
- Código vanilla JavaScript sem frameworks/dependências externas
- Sistema completo de backup e recuperação de dados via JSON
- Layout otimizado e acessível
- Deploy fácil em qualquer servidor web estático

- **Aplicativo desktop** exclusivo (não é versão web)
- Projeto simples e leve para controle pessoal de gastos
- Interface moderna com dropdowns arredondados e animações suaves
- Ideal para estudo de integração entre Electron + SQLite
- Código modular e fácil de adaptar para outras aplicações desktop
- Sistema completo de backup e recuperação de dados
- Layout otimizado sem botões desnecessários
