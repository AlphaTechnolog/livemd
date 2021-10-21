import {useState} from 'react'
import {defaultEditorValue} from '../defaultEditorValue'
import marked from 'marked'

export const useEditor = () => {
  const [rendederMarkdown, setRenderedMarkdown] = useState(defaultEditorValue)

  const handleEditorChange = value => {
    setRenderedMarkdown(marked(value))
  }

  return [rendederMarkdown, handleEditorChange]
}
