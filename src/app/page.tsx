import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SAN MEDICINE</div>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600">Entrar</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Cadastrar</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Superior ao White Book
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A plataforma definitiva para médicos em plantões. Tome decisões precisas, faça prescrições seguras e realize cálculos médicos com confiança.
        </p>
        <div className="space-x-4">
          <Link href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
            Começar Teste Gratuito
          </Link>
          <Link href="#features" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-50">
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Funcionalidades Principais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-4">Tomada de Decisão</h3>
            <p className="text-gray-600">Algoritmos inteligentes para auxiliar na tomada de decisões clínicas baseadas em evidências.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold mb-4">Prescrições Seguras</h3>
            <p className="text-gray-600">Sistema de prescrição com verificações automáticas de interações medicamentosas e dosagens.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-semibold mb-4">Cálculos Médicos</h3>
            <p className="text-gray-600">Calculadoras precisas para dosagens, índices e parâmetros médicos essenciais.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Planos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4">Mensal</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">R$ 39,90</div>
            <p className="text-gray-600 mb-6">Cobrança recorrente mensal</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✓ Acesso completo a todas as funcionalidades</li>
              <li>✓ Atualizações em tempo real</li>
              <li>✓ Suporte prioritário</li>
              <li>✓ Backup automático</li>
            </ul>
            <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Assinar Mensal
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-600">
            <h3 className="text-2xl font-semibold mb-4">Anual</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">R$ 390</div>
            <p className="text-gray-600 mb-6">Pagamento único via PIX</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✓ Acesso completo a todas as funcionalidades</li>
              <li>✓ Atualizações em tempo real</li>
              <li>✓ Suporte prioritário</li>
              <li>✓ Backup automático</li>
              <li>✓ 2 meses grátis</li>
            </ul>
            <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Assinar Anual
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">7 dias de teste gratuito para novos usuários</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2024 SAN MEDICINE. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}