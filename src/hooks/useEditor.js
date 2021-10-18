import {useState} from 'react'
import marked from 'marked'

export const useEditor = () => {
  const [rendederMarkdown, setRenderedMarkdown] = useState('<h1>Some markdown content</h1>')

  const handleEditorChange = value => {
    setRenderedMarkdown(marked(value))
  }

  return [rendederMarkdown, handleEditorChange]
}