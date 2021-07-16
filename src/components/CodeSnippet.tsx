import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import palenight from 'prism-react-renderer/themes/palenight'

import { LIGHT } from '@Constants'
import { useContextTheme } from '@Context/contextTheme'

const CodeSnippet: React.FC<{ children: string }> = ({ children }) => {
  const { theme } = useContextTheme()

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language="jsx"
      theme={theme === LIGHT ? nightOwlLight : palenight}
    >
      {({ className, tokens, getLineProps, getTokenProps, style }) => {
        return (
          <pre
            className={`${className} my-4 rounded-md font-semibold border-20 border-gray-100 dark:border-transparent`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div
                {...getLineProps({ line, key: i })}
                className="bg-gray-100 dark:bg-transparent"
              >
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
