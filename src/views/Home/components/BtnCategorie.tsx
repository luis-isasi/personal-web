import Link from '@Components/Links/Link'
import { Categorie } from '@Types'

const BtnCategorie: React.FC<Categorie> = ({ url, name }) => {
  return (
    <Link
      href={url}
      className="bg-indigo-600 m-1 w-auto max-w-min px-3 pb-1 rounded-md text-white text-sm font-medium hover:bg-indigo-500 transition-all ease-in-out duration-150"
    >
      {name}
    </Link>
  )
}

export default BtnCategorie
