const BtnSubmit: React.FC<{ handleDisabled: () => boolean }> = ({
  handleDisabled,
  children,
}) => {
  const isDisabled = handleDisabled()

  return (
    <button
      type="submit"
      className="min-w-24 max-w-max px-4 py-2 flex justify-center bg-indigo-600 hover:bg-indigo-500 font-medium text-white disabled:bg-gray-500 dark:disabled:bg-gray-600 disabled:cursor-not-allowed  rounded self-center ease-in-out duration-200"
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default BtnSubmit
