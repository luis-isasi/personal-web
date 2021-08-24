import Link from '@Components/Links/Link'
import { Categorie } from '@Types'

const BtnCategorie: React.FC<Categorie> = ({ url, name }) => {
  return (
    <Link
      href={url}
      className="bg-indigo-600  w-auto max-w-min py-1 px-2 mr-1 rounded-md text-white text-sm font-medium hover:bg-indigo-500 transition-all ease-in-out duration-150"
    >
      {name}
    </Link>
  )
}

export default BtnCategorie