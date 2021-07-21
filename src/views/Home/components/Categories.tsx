import Link from '@Components/Links/Link'
import BtnCategorie from './BtnCategorie'
import { Categorie } from '@Types'

const Categories: React.FC<{ categories: Categorie[] }> = ({ categories }) => {
  const renderCategories = () => {
    return categories.map(({ name, url }, i) => {
      return <BtnCategorie key={`${i}-${name}`} url={url} name={name} />
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
