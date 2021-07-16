export const H2: React.FC = ({ children }) => {
  return <h2 className="text-3xl text-red-600 dark:text-white">{children}</h2>
}

export const Blockquote: React.FC = ({ children }) => {
  return <blockquote className="bg-gray-700">{children}</blockquote>
}

export const StaticCode: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-500 dark:bg-gray-800">
      <pre>{children}</pre>
    </div>
  )
}
