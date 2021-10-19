import Editor, { useMonaco } from '@monaco-editor/react'
import {useEffect} from 'react'
import { useMonacoTheme } from '../hooks/useMonacoTheme'

const TextEditor = ({handleEditorChange}) => {
  useMonacoTheme()

  return (
    <div>
      <Editor
        onChange={handleEditorChange}
        defaultLanguage='markdown'
        language='markdown'
        defaultValue='# Some markdown content'
        theme='vs-dark'
        height='100vh'
        onMount={() => handleEditorChange('# Some markdown content')}
      />
    </div>
  )
}

export default TextEditor
