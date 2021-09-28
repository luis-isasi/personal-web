const Error: React.FC = ({ children }) => {
  return (
    <span className="text-red-500 text-xs text-center mt-3 mb-6">
      {children}
    </span>
  )
}

export default Error
