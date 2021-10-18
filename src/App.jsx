import Editor from "@monaco-editor/react"

const App = () => {
  return (
    <>
      <div className="container">
        <div>
          <Editor
            theme='vs-dark'
            defaultLanguage='markdown'
            language='markdown'
            defaultValue='# Some markdown content'
            height='100vh'
          />
        </div>
      </div>
      <div className="container">
        <div>
          <h1>Hello 2</h1>
        </div>
      </div>
    </>
  )
}

export default App