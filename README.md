# ✨ Motivacional.IA & Motivacionalia ✨

## 📝 Descrição

**Motivacional.IA** é uma aplicação web que gera mensagens motivacionais personalizadas com base nas informações fornecidas pelo usuário. Utilizando um formulário interativo, a aplicação coleta dados sobre o estado emocional, desafios, objetivos e fontes de apoio, gerando mensagens inspiradoras com referências bíblicas.

**Motivacionalia** é uma API construída com **FastAPI**, que cria mensagens motivacionais personalizadas utilizando a **Google Gemini API**, transformando as informações do usuário em mensagens inspiradoras no formato JSON.

---

## ✨ Funcionalidades

### 📱 Motivacional.IA

- Formulário interativo para coleta de informações pessoais.
- Geração de mensagens motivacionais personalizadas.
- Título com efeito de gradiente animado.
- Design responsivo para desktop e dispositivos móveis.
- Integração com backend **FastAPI**.
- Mecanismo de fallback para funcionamento offline.

### ⚙️ Motivacionalia

- `GET /teste`: Exibe uma mensagem motivacional de exemplo.
- `POST /create`: Gera mensagens personalizadas com base nos dados do usuário.
- Integração com **Google Gemini API** para respostas dinâmicas.
- Validação robusta com **Pydantic**.
- Suporte a variáveis de ambiente via `.env`.

---

## 🛠️ Tecnologias Utilizadas

### Frontend (Motivacional.IA)

- **Next.js 14**
- **React**
- **Tailwind CSS**
- **Shadcn/UI**
- **React Hook Form**
- **Zod**

### Backend (Motivacionalia)

- **FastAPI**
- **Google Gemini API**

---

## 🚀 Instalação e Configuração

### 📦 Pré-requisitos

- **Node.js 18.0.0+** (para Motivacional.IA)
- **npm** ou **yarn**
- **Python 3.12.4** (para Motivacionalia)
- Ambiente virtual (recomendado para Motivacionalia)
- Chave válida da **Google Gemini API**

---

## 📲 Instalação da Motivacional.IA

```bash
git clone https://github.com/seu-usuario/motivacional-ia.git
cd motivacional-ia
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
Configure as variáveis de ambiente em .env.local:

ini
Copiar
Editar
FASTAPI_URL=http://0.0.0.0:3333/create
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
Acesse: http://localhost:3000

🖥️ Instalação da Motivacionalia
bash
Copiar
Editar
git clone https://github.com/seu-usuario/motivacionalia.git
cd motivacionalia
Crie e ative o ambiente virtual:

bash
Copiar
Editar
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
Instale as dependências:

bash
Copiar
Editar
pip install -r requirements.txt
Configure as variáveis de ambiente em .env:

ini
Copiar
Editar
API_KEY=sua_chave_gemini_aqui
PORT=3333
HOST=0.0.0.0
Inicie o servidor:

bash
Copiar
Editar
python main.py
Acesse a API: http://localhost:3333

📁 Estrutura do Projeto
📱 Motivacional.IA
lua
Copiar
Editar
motivacional-ia/
├── app/
│   ├── api/
│   │   └── motivational-message/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animated-gradient-text.tsx
│   └── ui/
├── public/
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.ts
⚙️ Motivacionalia
bash
Copiar
Editar
motivacionalia/
├── main.py
├── routes.py
├── models/
│   └── motivational_message.py
├── services/
│   └── create_motivational_message_service.py
├── scripts/
│   └── script.py
├── .env
├── .gitignore
├── requirements.txt
└── README.md
🔄 Integração com o Backend
📡 Motivacional.IA → FastAPI
A comunicação é feita via API Route do Next.js (/api/motivational-message), enviando dados para o endpoint FastAPI /create.

📤 Formato da Requisição
json
Copiar
Editar
{
  "name": "Nome do usuário",
  "how_you_feel_currently": "Como o usuário se sente atualmente",
  "main_challenges": "Principais desafios do usuário",
  "goals_dreams": "Objetivos e sonhos do usuário",
  "how_you_handle_emotions": "Como o usuário lida com emoções",
  "support_sources": "Fontes de apoio do usuário",
  "personal_care": "Cuidados pessoais do usuário"
}
📥 Formato da Resposta
json
Copiar
Editar
{
  "nome": "Nome do usuário",
  "mensagem": "Mensagem motivacional personalizada"
}
🧪 Testando a API
Use Thunder Client, Postman ou curl.

GET /teste
bash
Copiar
Editar
curl http://localhost:3333/teste
Resposta:

json
Copiar
Editar
{
  "data": {
    "nome": "Ana",
    "mensagem": "Ei, Ana! Deus está contigo em cada passo! 'Tudo posso naquele que me fortalece' (Filipenses 4:13). Continue brilhando!"
  }
}
POST /create
bash
Copiar
Editar
curl -X POST http://localhost:3333/create \
-H "Content-Type: application/json" \
-d '{
  "name": "João",
  "how_you_feel_currently": "Cansado, mas motivado",
  "main_challenges": "Conciliar estudos e trabalho",
  "goals_dreams": "Ser um engenheiro de software",
  "how_you_handle_emotions": "Oro e converso com amigos",
  "support_sources": "Família e igreja",
  "personal_care": "Leio a Bíblia e corro"
}'
Resposta:

json
Copiar
Editar
{
  "nome": "João",
  "mensagem": "Olá, João! Deus te capacita para superar os desafios! 'Esforcem-se e tenham bom ânimo' (Josué 1:9). Com tua fé, apoio da família e corrida, vais conquistar teu sonho de ser engenheiro!"
}
⚙️ Variáveis de Ambiente
Variável	Descrição	Valor Padrão
FASTAPI_URL	URL do endpoint FastAPI para geração de mensagens	http://0.0.0.0:3333/create
API_KEY	Chave da Google Gemini API	sua_chave_gemini_aqui
PORT	Porta onde o servidor FastAPI será iniciado	3333
HOST	Endereço do servidor FastAPI	0.0.0.0

🤝 Contribuição
Contribuições são bem-vindas!

Faça um fork do projeto.

Crie uma branch: git checkout -b feature/nova-feature.

Faça commit das alterações: git commit -m 'Adiciona nova feature'.

Faça push: git push origin feature/nova-feature.

Abra um Pull Request.

📄 Licença
Motivacional.IA: Licenciado sob a licença MIT.

Motivacionalia: Uso livre, sem licença específica. Use e adapte como quiser!

📞 Contato
Para dúvidas ou sugestões, entre em contato:

📧 seu-email@exemplo.com

Desenvolvido com ❤️ para inspirar e motivar. Que este projeto traga luz e inspiração a todos!
