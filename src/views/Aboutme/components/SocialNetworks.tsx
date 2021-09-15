import Image from 'next/image'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const SocialNetworks = () => {
  return (
    <div className="w-30 flex justify-between items-center">
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://www.linkedin.com/in/luis-isasi-oyolo-147865212/"
      >
        <LinkedInIcon className="fill-current text-blue-500 dark:text-white" />
      </a>
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://twitter.com/luis_isasi"
      >
        <TwitterIcon className="fill-current text-blue-500 dark:text-white" />
      </a>
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://github.com/luis-isasi"
      >
        <GitHubIcon className="fill-current dark:text-white" />
      </a>
    </div>
  )
}

export default SocialNetworks
