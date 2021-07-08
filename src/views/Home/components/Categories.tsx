const Categories = () => {
  const renderCategories = () => {
    return Array.from({ length: 7 }).map(() => {
      return (
        <button className="bg-indigo-600 m-1 px-3 py-1 rounded-md text-white font-medium hover:bg-indigo-500 transition-all ease-in-out duration-150">
          React
        </button>
      )
    })
  }

  return (
    <div className="w-full lg:min-w-xs lg:max-w-xs">
      <p className="text-sm font-bold py-5 text-pink-600">CATEGORÍAS:</p>
      {renderCategories()}
    </div>
  )
}

export default Categories
