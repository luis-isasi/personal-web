import Highlight, { defaultProps } from 'prism-react-renderer'
import palenight from 'prism-react-renderer/themes/palenight'

const CodeSnippet: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language="javascript"
      theme={palenight}
    >
      {({ className, tokens, getLineProps, getTokenProps, style }) => {
        return (
          <pre
            className={`${className} my-6 rounded-md font-semibold border-20 border-transparent overflow-x-auto`}
            style={style}
          >
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
