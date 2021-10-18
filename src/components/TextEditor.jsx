import Editor from '@monaco-editor/react'

const TextEditor = ({handleEditorChange}) => {
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