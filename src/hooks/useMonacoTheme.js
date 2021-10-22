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
    editor.updateOptions({ fontFamily: 'CaskaydiaCove NF, SauceCodePro Nerd Font, Fira Code Nerd Font, Fira Code iCursive S12, Fira Code iCursive Op, UbuntuMono Nerd Font, Mononoki Nerd Font, CodeNewRoman NF, monospace', fontSize: 16 })
  }

  return [handleDidMount]
}
