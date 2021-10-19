import ReactHtmlParser from 'react-html-parser'

const Preview = ({renderedMarkdown}) => {
  return (
    <div className='preview-container'>
      {ReactHtmlParser(renderedMarkdown)}
    </div>
  )
}

export default Preview
