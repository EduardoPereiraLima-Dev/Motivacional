🌟 Motivacionalia
Motivacionalia é uma aplicação Python moderna construída com FastAPI, projetada para gerar mensagens motivacionais personalizadas com base em princípios bíblicos. Utilizando a Google Gemini API, ela transforma informações do usuário — como nome, sentimentos, desafios, metas e fontes de apoio — em mensagens inspiradoras entregues em formato JSON. Ideal para quem busca motivação com uma perspectiva espiritual! 🙏

📋 Visão Geral
O projeto aceita entradas específicas do usuário e retorna mensagens motivacionais extrovertidas, baseadas em versículos e valores bíblicos. Ele é estruturado para ser escalável, fácil de configurar e testável, com endpoints claros para integração com ferramentas como Thunder Client ou Postman.
🎯 Funcionalidades

Endpoint de teste (/teste): Retorna uma mensagem motivacional de exemplo.
Endpoint de criação (/create): Gera mensagens personalizadas com base nos dados fornecidos.
Integração com Gemini API: Produz respostas dinâmicas e contextuais.
Validação robusta: Usa Pydantic para garantir a integridade dos dados.
Ambiente configurável: Suporta variáveis de ambiente via .env.


📂 Estrutura do Projeto
motivacionalia/
├── main.py                      # Servidor FastAPI principal
├── routes.py                   # Definição dos endpoints da API
├── models/
│   └── motivational_message.py  # Modelos Pydantic para validação
├── services/
│   └── create_motivational_message_service.py # Lógica de geração de mensagens
├── scripts/
│   └── script.py               # Script para testes locais
├── .env                        # Variáveis de ambiente
├── .gitignore                  # Arquivos ignorados pelo Git
├── requirements.txt            # Dependências do projeto
└── README.md                   # Documentação do projeto


📋 Pré-requisitos

Python 3.12.4 🐍
Ambiente virtual (recomendado)
Chave válida da Google Gemini API 🔑
Ferramenta para testes de API (ex.: Thunder Client, Postman, curl)


⚙️ Configuração
Siga estas etapas para configurar o projeto localmente:
1. Clone o repositório (se aplicável)
git clone <repository-url>
cd motivacionalia

2. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

3. Instale as dependências
pip install -r requirements.txt


Nota: Certifique-se de que o requirements.txt contém:

fastapi==0.115.2
uvicorn==0.32.0
python-dotenv==1.0.1
google-generativeai==0.8.3
pydantic==2.9.2

4. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
API_KEY=your_google_gemini_api_key
PORT=3333
HOST=0.0.0.0

Substitua your_google_gemini_api_key pela sua chave da Gemini API.

⚠️ Segurança: Nunca compartilhe ou versione sua chave da API. O .gitignore já exclui o .env.


🚀 Executando a Aplicação

Inicie o servidor FastAPI:
python main.py

A API estará disponível em: http://localhost:3333

Verifique o console para confirmar que o servidor está ativo:
INFO:     Uvicorn running on http://0.0.0.0:3333 (Press CTRL+C to quit)




📡 Testando a API
Você pode testar os endpoints usando Thunder Client (VS Code), Postman, ou curl. Abaixo estão os detalhes dos endpoints disponíveis:
🔸 GET /teste
Retorna uma mensagem motivacional de exemplo.
Requisição:
curl http://localhost:3333/teste

Resposta esperada (status 200):
{
  "data": {
    "nome": "Ana",
    "mensagem": "Ei, Ana! Deus está contigo em cada passo! 'Tudo posso naquele que me fortalece' (Filipenses 4:13). Continue brilhando!"
  }
}

🔸 POST /create
Gera uma mensagem motivacional personalizada com base nos dados fornecidos.
Requisição:
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

Resposta esperada (status 200, exemplo):
{
  "nome": "João",
  "mensagem": "Olá, João! Deus te capacita para superar os desafios! 'Esforcem-se e tenham bom ânimo' (Josué 1:9). Com tua fé, apoio da família e corrida, vais conquistar teu sonho de ser engenheiro!"
}

Erro possível (status 400):
{"detail": "Erro ao criar mensagem motivacional: <mensagem de erro>"}


🧪 Testando com Thunder Client

Instale o Thunder Client no VS Code (extensão).
Crie uma requisição GET:
URL: http://localhost:3333/teste
Método: GET
Clique em "Send"


Crie uma requisição POST:
URL: http://localhost:3333/create
Método: POST
Body (JSON): Use o exemplo de JSON acima
Clique em "Send"


Verifique as respostas e salve as requisições em uma coleção para reutilização.


📝 Executando o Script de Teste
Para testar o serviço diretamente, sem usar a API, execute o script fornecido:
python scripts/script.py

O script usa dados de exemplo e imprime a mensagem motivacional gerada no console.

🛠️ Solução de Problemas

ModuleNotFoundError:

Certifique-se de que todas as dependências estão instaladas:pip install -r requirements.txt


Verifique se está no ambiente virtual correto (source venv/bin/activate).


Erro de API Key:

Confirme que a variável API_KEY no .env é válida e corresponde a uma chave ativa da Gemini API.
Teste a conexão com a API do Google.


Conflito de porta:

Verifique se a porta 3333 está livre:netstat -a -n -o | find "3333"


Se ocupada, altere a PORT no .env ou finalize o processo.


Resposta inválida do Gemini:

Assegure-se de que o modelo gemini-1.5-flash está disponível na sua conta.
Verifique os logs do servidor para detalhes do erro.




🤝 Contribuição
Contribuições são muito bem-vindas! Para contribuir:

Faça um fork do repositório.
Crie uma branch para sua feature:git checkout -b minha-feature


Commit suas alterações:git commit -m "Adiciona minha feature"


Envie para o repositório:git push origin minha-feature


Abra um Pull Request.

Reporte bugs ou sugestões via Issues no repositório.

📄 Licença
Este projeto é de uso livre e não possui uma licença específica. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme necessário.

🌈 Agradecimentos
Obrigado por usar o Motivacionalia! Que este projeto traga inspiração e motivação para sua jornada. "Se Deus é por nós, quem será contra nós?" (Romanos 8:31) 🙌
