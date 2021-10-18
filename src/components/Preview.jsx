import ReactHtmlParser from 'react-html-parser'

const Preview = ({renderedMarkdown}) => {
  return (
    <div class='preview-container'>
      {ReactHtmlParser(renderedMarkdown)}
    </div>
  )
}

export default Preview