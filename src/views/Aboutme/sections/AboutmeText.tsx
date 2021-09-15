const AboutmeText = () => {
  return (
    <section>
      <h3 className="font-bold text-3xl md:text-4xl mb-2">Sobre mí</h3>
      <p className="my-7 w-4/5 mx-auto text-lg text-center lg:text-left md:text-xl font-normal">
        Soy{' '}
        <b className="text-blue-600 dark:text-blue-500">Luis Isasi Oyolo,</b>{' '}
        tengo 22 años y soy un estudiante cursando el octavo ciclo de la carrera
        de ing. de Sistemas, en los primeros ciclos me interesaba mucho el
        desarrollo web, comencé estudiando HTML5 y CSS3, como todo principiante
        pensé que eso errá suficiente y me equivoque, seguí tomando cursos de
        JavaScript, hasta ese punto descubrí que el desarrollo web era un mundo
        muy extenso, pero me agradaba y estaba dispuesto a seguir estudiando de
        la mano con la universidad,
        <i className="font-bold">
          {' '}
          luego comencé con React js, react hooks, Github, styled components,
          webpack, babel, tailwind css, next js, etc.{' '}
        </i>
        Hasta el día de hoy sigo aprendiendo en diferente plataformas virtuales,
        tengo proyectos en mi perfil de github y estoy dispuesto a crecer
        personalmente y profesionalmente para aportar a esta comunidad del
        desarrollo web.
      </p>
    </section>
  )
}

export default AboutmeText
