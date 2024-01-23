import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

const IconLinkedin = ({ className = '', ...props }: Props) => (
  <svg
    className={className}
    data-name="Layer 1"
    viewBox="0 0 122.88 122.31"
    width={122}
    height={122}
    {...props}
  >
    <title>{'linkedin-app'}</title>
    <path
      d="M27.75 0h67.38a27.83 27.83 0 0 1 27.75 27.75v66.82a27.83 27.83 0 0 1-27.75 27.74H27.75A27.83 27.83 0 0 1 0 94.57V27.75A27.83 27.83 0 0 1 27.75 0Z"
      style={{
        fillRule: 'evenodd',
        fill: '#0a66c2',
      }}
    />
    <path
      d="M49.19 47.41h15.53v8h.22c2.17-3.88 7.45-8 15.34-8 16.39 0 19.42 10.2 19.42 23.47v28.06H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72 6.21-9.72 12.65v25.4H49.19V47.41ZM40 31.79a8.42 8.42 0 1 1-8.42-8.42A8.43 8.43 0 0 1 40 31.79ZM23.18 47.41H40v51.53H23.18V47.41Z"
      style={{
        fill: '#fff',
        fillRule: 'evenodd',
      }}
    />
  </svg>
)
export default IconLinkedin
