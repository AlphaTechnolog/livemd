import { useEffect } from 'react'
import { useMonaco } from '@monaco-editor/react'

export const useMonacoTheme = (handleEditorChange) => {
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

  const handleDidMount = (editor) => {
    handleEditorChange('# Some markdown content')
    editor.updateOptions({ fontFamily: 'SauceCodePro Nerd Font, CaskaydiaCove NF, Fira Code Nerd Font, Fira Code iCursive S12, Fira Code iCursive Op, UbuntuMono Nerd Font, Mononoki Nerd Font, CodeNewRoman NF, monospace', fontSize: 20 })
  }

  return [handleDidMount]
}
