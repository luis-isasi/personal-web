export const H3: React.FC = ({ children }) => {
  return (
    <h3 className="text-xl lg:text-2xl xl:text-3xl mt-10 font-bold text-blue-700 dark:text-green-500">
      {children}
    </h3>
  )
}

export const P: React.FC = ({ children }) => {
  return (
    <p className="my-4 text-sm md:text-base lg:text-lg text-dark-light dark:text-white">
      {children}
    </p>
  )
}

export const A: React.FC = ({ children }) => {
  return (
    <a
      target="_blank"
      className="text-green-500 dark:text-gray-400 underline cursor-pointer"
    >
      {children}
    </a>
  )
}
