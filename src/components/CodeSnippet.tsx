import Highlight, { defaultProps, Language } from 'prism-react-renderer'

import palenight from 'prism-react-renderer/themes/palenight'

const CodeSnippet: React.FC<{ children: string; language: Language }> = ({
  children,
  language = 'javascript',
}) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={palenight}
    >
      {({ className, tokens, getLineProps, getTokenProps, style }) => {
        return (
          <pre
            className={`${className} relative my-6 rounded-md font-semibold`}
            style={style}
          >
            <span className="absolute top-0 right-1 text-xs text-white">
              {language}
            </span>
            <div className="p-5 overflow-x-auto">
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </div>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeSnippet
