import Link from '@Components/Links/Link'
import { Categorie } from '@Types'

const Categories: React.FC<{ categories: Categorie[] }> = ({ categories }) => {
  const renderCategories = () => {
    return categories.map(({ name, url }, i) => {
      return (
        <Link
          href={url}
          key={`${i}-${name}`}
          className="bg-indigo-600 m-1 w-auto max-w-min px-3 pb-1 rounded-md text-white font-medium hover:bg-indigo-500 transition-all ease-in-out duration-150"
        >
          {name}
        </Link>
      )
    })
  }

  return (
    <div className="w-full lg:min-w-xs lg:max-w-xs">
      <p className="text-sm font-bold py-5 text-pink-500">CATEGORÍAS:</p>
      <div className="flex flex-wrap">{renderCategories()}</div>
    </div>
  )
}

export default Categories
