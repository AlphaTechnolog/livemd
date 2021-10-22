import TextEditor from './components/TextEditor'
import Preview from './components/Preview'
import {useEditor} from './hooks/useEditor'

const App = () => {
  const [renderedMarkdown, handleEditorChange] = useEditor()

  return (
    <>
      <div className="container">
        <TextEditor handleEditorChange={handleEditorChange} />
      </div>
      <div className="container">
        <Preview renderedMarkdown={renderedMarkdown} />
      </div>
    </>
  )
}

export default App
