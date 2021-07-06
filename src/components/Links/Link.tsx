import Link from 'next/link'

const MyLink: React.FC<{ className?: string; href: string }> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default MyLink
