const Preview = ({renderedMarkdown}) => {
  return (
    <div>
      <iframe
        srcDoc={renderedMarkdown}
        className='preview-iframe'
      />
    </div>
  )
}

export default Preview