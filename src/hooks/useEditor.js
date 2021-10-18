import {useState} from 'react'
import marked from 'marked'
import {baseHtml as baseHtmlContent} from '../basePreviewHtml'

export const useEditor = () => {
  const [rendederMarkdown, setRenderedMarkdown] = useState('')
  const [baseHtml] = useState(baseHtmlContent)

  const handleEditorChange = value => {
    // setRenderedMarkdown(baseHtml.replace(/\~body\~/g, marked(value)))
    setRenderedMarkdown(marked(value))
  }

  return [rendederMarkdown, handleEditorChange]
}