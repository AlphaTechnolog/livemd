import Editor from '@monaco-editor/react'
import { useMonacoTheme } from '../hooks/useMonacoTheme'

const TextEditor = ({handleEditorChange}) => {
  const [handleDidMount] = useMonacoTheme(handleEditorChange)

  return (
    <div>
      <Editor
        onChange={handleEditorChange}
        defaultLanguage='markdown'
        language='markdown'
        defaultValue='# Some markdown content'
        theme='vs-dark'
        height='100vh'
        onMount={handleDidMount}
      />
    </div>
  )
}

export default TextEditor
