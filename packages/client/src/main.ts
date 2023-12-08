import { marked } from 'marked'

const apiUrl = 'http://localhost:3000/generate'

function postCode(input: string) {
  return fetch(apiUrl, {
    method: 'POST',
    body: input
  })
}
function safeQuerySelector(element: string) {
  const selected = document.querySelector(element)
  if (selected) {
    return selected
  }
  throw('Element not found')
}

const inputArea = safeQuerySelector('#input') as HTMLTextAreaElement
const generateButton = safeQuerySelector('#generate') as HTMLButtonElement
const renderArea = safeQuerySelector('#render')

generateButton?.addEventListener('click', async () => {
  try {
    const response = await postCode(inputArea?.value).then(res => res.text())
    renderArea.innerHTML = await marked.parse(response)
  } catch(e) {
    console.log(e)
  }
})

export {}
