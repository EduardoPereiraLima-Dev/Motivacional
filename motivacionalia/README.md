🌟 Motivacionalia  
Motivacionalia é uma aplicação Python vibrante, construída com FastAPI, que cria mensagens motivacionais personalizadas com base em princípios bíblicos. 🚀 Usando a Google Gemini API, ela transforma informações como nome, sentimentos, desafios e metas em mensagens inspiradoras entregues em formato JSON. Perfeito para quem busca motivação com um toque espiritual! 🙏

---

## ✨ Visão Geral  
O Motivacionalia é uma API que gera mensagens motivacionais extrovertidas, baseadas em entradas do usuário e enraizadas em valores bíblicos. Com uma arquitetura limpa e moderna, é ideal para integração com ferramentas como Thunder Client, Postman ou até aplicações front-end.

---

## 🎯 Funcionalidades  
- **Endpoint `/teste` (GET):** Exibe uma mensagem motivacional de exemplo  
- **Endpoint `/create` (POST):** Gera mensagens personalizadas com base em dados do usuário  
- **Integração com Gemini API:** Respostas dinâmicas e contextuais  
- **Validação robusta:** Modelos Pydantic para entradas seguras  
- **Configuração simples:** Suporte a variáveis de ambiente via `.env`

---

## 📂 Estrutura do Projeto  
motivacionalia/
├── main.py # 🖥️ Servidor FastAPI
├── routes.py # 🛤️ Definição dos endpoints
├── models/
│ └── motivational_message.py # 📋 Modelos de dados (Pydantic)
├── services/
│ └── create_motivational_message_service.py # 🧠 Lógica de geração de mensagens
├── scripts/
│ └── script.py # 🧪 Script de teste local
├── .env # 🔑 Variáveis de ambiente
├── .gitignore # 🚫 Arquivos ignorados pelo Git
├── requirements.txt # 📦 Dependências do projeto
└── README.md # 📖 Documentação completa


---

## 📋 Pré-requisitos  
- 🐍 Python 3.12.4  
- 🌐 Ambiente virtual (recomendado)  
- 🔑 Chave válida da Google Gemini API  
- 🛠️ Ferramenta para testes de API (Thunder Client, Postman, curl)  

---

## ⚙️ Configuração  
**Siga estas etapas para configurar o Motivacionalia localmente:**  

1️⃣ **Clone o repositório**  
```bash
git clone https://github.com/seu-usuario/motivacionalia.git
cd motivacionalia
2️⃣ Crie e ative o ambiente virtual

bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
3️⃣ Instale as dependências

bash
pip install -r requirements.txt
Conteúdo do requirements.txt:

fastapi==0.115.2
uvicorn==0.32.0
python-dotenv==1.0.1
google-generativeai==0.8.3
pydantic==2.9.2
4️⃣ Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto:

API_KEY=sua_chave_gemini_aqui
PORT=3333
HOST=0.0.0.0
⚠️ Segurança: O .gitignore já exclui o .env. Nunca compartilhe sua chave da API!

🚀 Executando a Aplicação
Inicie o servidor FastAPI:

bash
python main.py
Acesse a API em: 🌐 http://localhost:3333

Verifique o console para confirmar:

INFO:     Uvicorn running on http://0.0.0.0:3333 (Press CTRL+C to quit)
📡 Testando a API
Use Thunder Client, Postman, ou curl para interagir com os endpoints.

🔹 GET /teste
Retorna uma mensagem motivacional de exemplo

Requisição:

bash
curl http://localhost:3333/teste
Resposta (status 200):

json
{
  "data": {
    "nome": "Ana",
    "mensagem": "Ei, Ana! Deus está contigo em cada passo! 'Tudo posso naquele que me fortalece' (Filipenses 4:13). Continue brilhando!"
  }
}
🔹 POST /create
Gera uma mensagem motivacional personalizada

Requisição:

bash
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
Resposta (status 200, exemplo):

json
{
  "nome": "João",
  "mensagem": "Olá, João! Deus te capacita para superar os desafios! 'Esforcem-se e tenham bom ânimo' (Josué 1:9). Com tua fé, apoio da família e corrida, vais conquistar teu sonho de ser engenheiro!"
}
Erro possível (status 400):

json
{"detail": "Erro ao criar mensagem motivacional: <mensagem>"}
🧪 Testando com Thunder Client
Instale a extensão Thunder Client no VS Code

Crie uma requisição GET:

URL: http://localhost:3333/teste

Método: GET

Clique em "Send"

Crie uma requisição POST:

URL: http://localhost:3333/create

Método: POST

Body (JSON): Copie o exemplo acima

Clique em "Send"

Salve as requisições em uma coleção para reutilização.

📝 Script de Teste
Para testar o serviço diretamente, execute:

bash
python scripts/script.py
O script usa dados de exemplo e exibe a mensagem gerada no console.

🛠️ Solução de Problemas
ModuleNotFoundError:

bash
pip install -r requirements.txt
Verifique se está no ambiente virtual (source venv/bin/activate).

Erro de API Key: Confirme que a API_KEY no .env é válida. Teste a conexão com a Gemini API.

Conflito de porta: Verifique a porta 3333:

bash
netstat -a -n -o | find "3333"  # Windows
lsof -i :3333                   # Linux/Mac
Altere a PORT no .env se necessário.

Resposta inválida do Gemini: Certifique-se de que o modelo gemini-1.5-flash está disponível na sua conta.

🤝 Como Contribuir
Faça um fork do repositório

Crie uma branch:

bash
git checkout -b minha-feature
Commit suas alterações:

bash
git commit -m "Adiciona minha feature"
Envie para o repositório:

bash
git push origin minha-feature
Abra um Pull Request

Reporte bugs ou ideias via Issues

📄 Licença
O Motivacionalia é de uso livre e não possui licença específica. Use e adapte como quiser! 😊

🌈 Agradecimentos
Obrigado por explorar o Motivacionalia! Que este projeto inspire e motive sua jornada. "Se Deus é por nós, quem será contra nós?" (Romanos 8:31) 🙌

Desenvolvido com 💙 por Sua Comunidade
