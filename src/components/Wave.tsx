const Wave: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 160"
      fill="#ffffff"
    >
      <path
        className="fill-current"
        fill=""
        fillOpacity="1"
        d="M0,32L60,53.3C120,75,240,117,360,138.7C480,160,600,160,720,138.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  )
}

export default Wave
