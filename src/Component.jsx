import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'; 
import "./Component.css"

export default function Component() {

  const firstLoadText = "# Esto es MarkDown pibe!\n\n ## Así es un subtítulo\n\n  [Best free code camp in the wolrd](https://www.freecodecamp.org)\n\n```\n //Un poco de código\n\n const arrowFunction () => {\n  if(isFree) {\n    canStudy;\n   }\n }\n```\n - y listas\n - Una cosa\n - Otra cosa\n > También bloques de citas\n **Texto en negrita**\n código en línea `const = asi` \ny una imágen ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n ";
  //const firstLoadText2= "# Welcome to my React Markdown Previewer!\n\n ## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"

  const [previewer, setPreviewer] = useState(firstLoadText);

  const handleChange = (event) => {
    const text = event.target.value;
    setPreviewer(text);
  }

  return (
    <div>
        <h1>Enter text and preview Markdown below:</h1>
        <textarea onChange={handleChange} 
        value={previewer} className="textInput" 
        id="editor">
        </textarea>
        <div id="preview">
        <ReactMarkdown
        remarkPlugins={[remarkBreaks]}>
          {previewer}
          </ReactMarkdown> 
        </div>
    </div>
  )
}
