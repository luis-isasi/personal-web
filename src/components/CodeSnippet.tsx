import { Highlight, themes } from 'prism-react-renderer'

const CodeSnippet: React.FC = ({ children }) => {
  if (!children) return null

  const {
    props: { className, children: code },
  } = children as { props: { className: string; children: string } }

  const language = className ? className.replace(/language-/, '') : 'javascript'

  return (
    <Highlight code={code.trim()} language={language} theme={themes.palenight}>
      {({ className, tokens, getLineProps, getTokenProps, style }) => {
        return (
          <pre
            className={`${className} relative my-6 rounded-md font-semibold text-sm md:text-base`}
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
