const Skills = () => {
  return (
    <section>
      <h3 className="font-bold text-3xl md:text-4xl mb-2">Skills</h3>
      <div className="my-7 w-4/5 mx-auto text-lg text-center lg:text-left md:text-xl font-normal">
        <p className="mb-4">Tengo conocimientos sólidos en:</p>
        <div className="grid grid-cols-2">
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
              <li>css modules</li>
            </ul>
            <ul className="list-disc list-inside mb-4">
              <p className="mb-1 font-bold">Testing Tools</p>
              <li>Jest</li>
              <li>React testing Library</li>
              <li>aws-sdk-client-mock-jest</li>
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
          </div>
          <div>
            {' '}
            <ul className="list-disc list-inside mb-4">
              <p className="mb-1 font-bold">Backend</p>
              <li>AWS Lambda</li>
              <li>AWS DynamoDb</li>
              <li>AWS Key Management Service (KMS)</li>
              <li>AWS Secrets Manager</li>
              <li>AWS S3</li>
              <li>AWS Cognito</li>
              <li>etc</li>
            </ul>
            <ul className="list-disc list-inside mb-4">
              <p className="mb-1 font-bold">DevOps Tools</p>
              <li>AWS IAM</li>
              <li>AWS ApiGateway</li>
              <li>AWS Cloudformation</li>
              <li>AWS CloudFront</li>
              <li>AWS Route53</li>
              <li>AWS SQS</li>
              <li>AWS WAF</li>
              <li>Amazon SES</li>
              <li>AWS CodeCommit</li>
              <li>etc</li>
            </ul>
            <ul className="list-disc list-inside mb-4">
              <p className="mb-1 font-bold">CI/CD</p>
              <li>AWS CodeBuild</li>
              <li>AWS CodeDeploy</li>
              <li>AWS CodePipeline</li>
              <li>Automatización e integración de aws con Slack API</li>
            </ul>
            <ul className="list-disc list-inside mb-4">
              <p className="mb-1 font-bold">Tools</p>
              <li>npm</li>
              <li>yarn</li>
              <li>git</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
