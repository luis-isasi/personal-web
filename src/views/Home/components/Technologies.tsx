import Image from 'next/image'

const technologiesCol1 = [
  {
    url: '/Images/Typescript.svg',
    alt: 'typescript',
  },
  {
    url: '/Images/aws-lambda.png',
    alt: 'aws-lambda',
  },
  {
    url: '/Images/tailwind.svg',
    alt: 'tailwind',
  },
  {
    url: '/Images/github.png',
    alt: 'github',
  },
]

const technologiesCol2 = [
  {
    url: '/Images/react.png',
    alt: 'react',
  },
  {
    url: '/Images/aws.png',
    alt: 'amazon web services',
  },
  {
    url: '/Images/nextjs.svg',
    alt: 'next-js',
  },
  {
    url: '/Images/cognito.png',
    alt: 'AWS Cognito',
  },
]

const Technologies = () => {
  const renderTechnologies = (
    technologiesArray: { url: string; alt: string }[]
  ) =>
    technologiesArray.map((img, index) => (
      <div
        key={`${index}-${img.alt}`}
        className="my-6 animate-float"
        style={{ animationDelay: `${index * 0.275}s` }}
      >
        <Image src={img.url} width={60} height={60} alt={img.alt} />
      </div>
    ))

  return (
    <div className="h-auto w-full py-7 lg:pb-0 xl:py-0 xl:ml-5 flex flex-row flex-wrap">
      <div className="flex-grow flex flex-col items-center">
        {renderTechnologies(technologiesCol1)}
      </div>
      <div className="flex-grow flex flex-col items-center">
        {renderTechnologies(technologiesCol2)}
      </div>
    </div>
  )
}

export default Technologies
