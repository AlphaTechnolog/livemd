import { useEffect } from 'react'
import { useMonaco } from '@monaco-editor/react'

export const useMonacoTheme = () => {
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco) {
      fetch('/theme.json')
        .then(data => data.json())
        .then(data => {
          monaco.editor.defineTheme('customtheme', data)
          monaco.editor.setTheme('customtheme')
        })
    }
  }, [monaco])

  return [monaco]
}
