export const H3: React.FC = ({ children }) => {
  return (
    <h3 className="text-xl lg:text-2xl xl:text-3xl mt-10 font-bold text-blue-700 dark:text-green-500">
      {children}
    </h3>
  )
}

export const H4: React.FC = ({ children }) => {
  return (
    <h3 className="text-lg lg:text-xl xl:text-2xl mt-10 font-bold text-blue-800 dark:text-green-600">
      {children}
    </h3>
  )
}

export const H5: React.FC = ({ children }) => {
  return (
    <h3 className="text-base lg:text-lg xl:text-xl mt-10 font-bold text-blue-800 dark:text-green-600">
      {children}
    </h3>
  )
}

export const P: React.FC = ({ children }) => {
  return (
    <p className="mt-4 mb-8 text-base lg:text-lg text-dark-light dark:text-white">
      {children}
    </p>
  )
}

export const A: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="text-green-500 dark:text-gray-400 underline cursor-pointer"
    >
      {children}
    </a>
  )
}

export const InlineCode: React.FC = ({ children }) => {
  return (
    <code className="bg-pink-50 dark:bg-base-light-dark-mode rounded-sm px-1">
      {children}
    </code>
  )
}
