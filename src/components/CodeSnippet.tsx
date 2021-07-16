import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

import useTheme from '@Hooks/useTheme'

interface Props {
  children: string
}

const CodeSnippet: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language="jsx"
      theme={nightOwlLight}
    >
      {({ className, tokens, getLineProps, getTokenProps, style }) => {
        // console.log({ className })
        // console.log({ tokens })
        // console.log({ getLineProps })
        // console.log({ getTokenProps })
        // console.log({ style })

        return (
          <pre className="bg-white px-4 py-3 my-4 rounded-md font-semibold">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeSnippet
