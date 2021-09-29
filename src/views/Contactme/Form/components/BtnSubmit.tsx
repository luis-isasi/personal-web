const BtnSubmit: React.FC<{ handleDisabled: () => boolean }> = ({
  handleDisabled,
}) => {
  const isDisabled = handleDisabled()

  return (
    <button
      type="submit"
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-medium text-white disabled:bg-gray-500 dark:disabled:bg-gray-600  disabled:cursor-not-allowed max-w-max rounded self-center ease-in-out duration-200"
      disabled={isDisabled}
    >
      Enviar Mensaje
    </button>
  )
}

export default BtnSubmit
