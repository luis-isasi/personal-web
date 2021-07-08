const RecentContent = () => {
  const renderArticle = () => {
    return Array.from({ length: 3 }).map(() => {
      return (
        <article className="rounded-md py-8">
          <header className="font-bold text-xl dark:text-white">
            ¿Cómo leer y modificar archivos y carpetas en golang?
          </header>
          <time className="text-sm font-bold text-gray-400 dark:text-gray-500">
            29/06/2021
          </time>
          <p className="py-3 dark:text-white">
            Hace unas semanas tuve la necesidad de recorrer miles de archivos y
            carpetas, leer su contenido y luego contabilizar cuántos de estos
            cumplían con cierto requerimiento. Al inicio pensaba usar nodejs
            pero luego de revisar la documentación de cade lenguaje decidí usar
          </p>
          <button className="rounded-md py-1 px-2 bg-blue-700 text-white font-bold hover:bg-blue-600  transition-all ease-in-out duration-150">
            Leer más
          </button>
        </article>
      )
    })
  }

  return (
    <section className="w-full lg:max-w-2xl">
      <p className="text-sm font-bold py-5 text-pink-600">
        CONTENIDO RECIENTE:
      </p>
      {renderArticle()}
    </section>
  )
}

export default RecentContent
