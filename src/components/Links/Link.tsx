import Link from 'next/link'

const MyLink: React.FC<{
  className?: string
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}> = ({ children, className, href, onClick }) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default MyLink
