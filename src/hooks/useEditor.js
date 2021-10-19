import {useState} from 'react'
import marked from 'marked'

export const useEditor = () => {
  const [rendederMarkdown, setRenderedMarkdown] = useState('')

  const handleEditorChange = value => {
    setRenderedMarkdown(marked(value))
  }

  return [rendederMarkdown, handleEditorChange]
}
