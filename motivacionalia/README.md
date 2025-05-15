# 📖 Motivacionalia

**Motivacionalia** é uma aplicação Python baseada em **FastAPI** que gera mensagens motivacionais personalizadas utilizando princípios bíblicos e a **Google Gemini API**.  
O projeto aceita informações como nome, sentimentos, desafios, metas e fontes de apoio, entregando mensagens inspiradoras em formato JSON.

---

## 📂 Estrutura do Projeto

motivacionalia/
├── main.py
├── routes.py
├── models/
│ └── motivational_message.py
├── services/
│ └── create_motivational_message_service.py
├── scripts/
│ └── script.py
├── .env
├── .gitignore
└── README.md

yaml
Copiar
Editar

---

## 📋 Pré-requisitos

- Python **3.12.4**
- Ambiente virtual (recomendado)
- **Google Gemini API Key**

---

## ⚙️ Configuração

### 1️⃣ Clone o repositório:

```bash
git clone <repository-url>
cd motivacionalia
2️⃣ Crie e ative o ambiente virtual:
bash
Copiar
Editar
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
3️⃣ Instale as dependências:
bash
Copiar
Editar
pip install fastapi uvicorn python-dotenv google-generativeai pydantic
4️⃣ Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto:

ini
Copiar
Editar
API_KEY=your_google_gemini_api_key
PORT=3333
HOST=0.0.0.0
Substitua your_google_gemini_api_key pela sua chave válida.

🚀 Como Executar
Inicie o servidor FastAPI:

bash
Copiar
Editar
python main.py
A aplicação estará disponível em:
http://localhost:3333

📡 Testando a API
Você pode testar os endpoints via Thunder Client, Postman ou curl:

🔸 GET /teste
Retorna uma mensagem motivacional de exemplo.

bash
Copiar
Editar
curl http://localhost:3333/teste
Resposta esperada:

json
Copiar
Editar
{
  "data": {
    "nome": "Ana",
    "mensagem": "Ei, Ana! Deus está contigo em cada passo! 'Tudo posso naquele que me fortalece' (Filipenses 4:13). Continue brilhando!"
  }
}
🔸 POST /create
Gera uma mensagem motivacional personalizada.

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
Resposta esperada:

json
Copiar
Editar
{
  "nome": "João",
  "mensagem": "Olá, João! Deus te capacita para superar os desafios! 'Esforcem-se e tenham bom ânimo' (Josué 1:9). Com tua fé, apoio da família e corrida, vais conquistar teu sonho de ser engenheiro!"
}
🧪 Testando com Thunder Client (VS Code)
Instale a extensão Thunder Client.

Crie uma requisição GET para http://localhost:3333/teste.

Crie uma requisição POST para http://localhost:3333/create com o JSON acima.

Envie e confira as respostas.

📝 Executando Script de Teste
Para testar diretamente o serviço:

bash
Copiar
Editar
python scripts/script.py
🛠️ Problemas Comuns
ModuleNotFoundError: Certifique-se de instalar todas as dependências.

bash
Copiar
Editar
pip install -r requirements.txt  # caso crie um requirements
Erros de API key: Verifique a variável API_KEY no .env.

Conflito de porta: Confirme que a porta 3333 está disponível.

🤝 Contribuição
Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou pull requests com melhorias e sugestões.

📄 Licença
Este projeto é livre para uso e não possui licença específica.

yaml
Copiar
Editar

---

Se quiser eu já posso gerar isso direto em um arquivo `README.md` pra você baixar também — quer? 🚀







