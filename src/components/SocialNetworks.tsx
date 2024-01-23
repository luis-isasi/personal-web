import IconGitHub from './Icons/IconGitHub'
import IconLinkedin from './Icons/IconLinkedin'
import IconTwitter from './Icons/IconTwitter'

const SocialNetworks = () => {
  return (
    <div className="w-30 flex justify-between items-center">
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://www.linkedin.com/in/luis-isasi-oyolo-147865212/"
      >
        <IconLinkedin className="w-5 max-w-5 h-5 max-h-5" />
      </a>
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://twitter.com/luis_isasi"
      >
        <IconTwitter className="w-5 max-w-5 h-5 max-h-5" />
      </a>
      <a
        className=" hover:scale-125 ease-in-out duration-75"
        target="_blank"
        href="https://github.com/luis-isasi"
      >
        <IconGitHub className="w-5 max-w-5 h-5 max-h-5" />
      </a>
    </div>
  )
}

export default SocialNetworks
