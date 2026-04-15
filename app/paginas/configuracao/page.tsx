export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Guia Básico de Git e GitHub 🚀
        </h1>

        {/* Passo 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Iniciar um repositório</h2>
          <p className="mb-2">Cria um novo repositório Git no seu projeto:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git init
          </code>
        </section>

        {/* Passo 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Adicionar arquivos</h2>
          <p className="mb-2">Adiciona arquivos para controle de versão:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git add .
          </code>
        </section>

        {/* Passo 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Fazer commit</h2>
          <p className="mb-2">Salva as mudanças com uma mensagem:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git commit -m {"Primeiro commit"}
          </code>
        </section>

        {/* Passo 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Conectar ao GitHub</h2>
          <p className="mb-2">Liga seu projeto a um repositório remoto:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git remote add origin https://github.com/usuario/repositorio.git
          </code>
        </section>

        {/* Passo 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Enviar para o GitHub</h2>
          <p className="mb-2">Envia seu código para o repositório remoto:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git push -u origin main
          </code>
        </section>

        {/* Passo 6 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Atualizar projeto</h2>
          <p className="mb-2">Baixa atualizações do repositório remoto:</p>
          <code className="block bg-gray-200 p-3 rounded">
            git pull origin main
          </code>
        </section>
      </div>
    </main>
  );
}