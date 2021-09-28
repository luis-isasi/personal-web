const BtnSubmit: React.FC<{ handleDisabled: () => boolean }> = ({
  handleDisabled,
}) => {
  const isDisabled = handleDisabled()

  return (
    <button
      type="submit"
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed max-w-max rounded self-center"
      disabled={isDisabled}
    >
      Enviar Mensaje
    </button>
  )
}

export default BtnSubmit
