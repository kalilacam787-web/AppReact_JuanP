function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header id="inicio" className="bg-bright px-6 py-8 text-center text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">Mi primera app en React</h1>
        <p className="mt-2 text-sm sm:text-base">Un ejemplo sencillo para aprender creando</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-x-10 gap-y-2 bg-deep px-4 py-4 text-sm text-white" aria-label="Navegación principal">
        <a className="hover:text-green-300" href="#inicio">Inicio</a>
        <a className="hover:text-green-300" href="#servicios">Servicios</a>
        <a className="hover:text-green-300" href="#nosotros">Nosotros</a>
        <a className="hover:text-green-300" href="#contacto">Contacto</a>
      </nav>

      <main className="mx-auto min-h-[55vh] max-w-6xl px-6 py-10 sm:py-14">
        <section id="servicios" className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-forest">Bienvenidos</h2>
          <p className="mt-3 leading-7 text-muted">
            Esta es una sección de nuestra aplicación. Cada parte de la página
            está organizada en componentes independientes.
          </p>
        </section>

        <section id="nosotros" className="mt-8 rounded-lg border border-line bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-forest">Sobre este proyecto</h2>
          <p className="mt-2 leading-7 text-muted">
            Una página básica hecha con React y Tailwind CSS para practicar
            componentes, estilos y navegación.
          </p>
        </section>
      </main>

      <footer id="contacto" className="bg-deep px-6 py-5 text-center text-sm text-white">
        © 2026 · Mi primera app en React
      </footer>
    </div>
  )
}

export default App
