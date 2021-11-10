const Skills = () => {
  return (
    <section>
      <h3 className="font-bold text-3xl md:text-4xl mb-2">Skills</h3>
      <div className="my-7 w-4/5 mx-auto text-lg text-center lg:text-left md:text-xl font-normal">
        <p className="mb-4">Soy Tengo conocimientos solidos en:</p>
        <div>
          <ul className="list-disc list-inside mb-4">
            <p className="mb-1 font-bold">UI</p>
            <li>React</li>
            <li>Next js</li>
            <li>Typescript</li>
            <li>redux</li>
            <li>Graphql: apollo client</li>
            <li>react-query</li>
            <li>react-router</li>
            <li>prism-react-renderer</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <p className="mb-1 font-bold">Styling</p>
            <li>css</li>
            <li>styled-components</li>
            <li>Tailwind css</li>
            <li>sass</li>
            <li>css modules</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <p className="mb-1 font-bold">Javascript Tooling</p>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Eslint</li>
            <li>Prettier</li>
            <li>husky</li>
            <li>lint-staged</li>
            <li>commitlint</li>
            <li>lodash</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <p className="mb-1 font-bold">SEO</p>
            <li>next-seo</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <p className="mb-1 font-bold">Tools</p>
            <li>npm</li>
            <li>yarn</li>
            <li>git</li>
            <li>Vercel</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
