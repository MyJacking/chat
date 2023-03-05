import { onMounted, onUpdated } from 'vue'

function copyToClipboard(text: string) {
	let textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.style.position = "fixed";
	document.body.appendChild(textarea);
	textarea.focus();
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}

export function useCopyCode() {
  function copyCodeBlock() {
    const codeBlockWrapper = document.querySelectorAll('.code-block-wrapper')
    codeBlockWrapper.forEach((wrapper) => {
      const copyBtn = wrapper.querySelector('.code-block-header__copy')
      const codeBlock = wrapper.querySelector('.code-block-body')
      if (copyBtn && codeBlock) {
        copyBtn.addEventListener('click', () => {
					copyToClipboard(codeBlock.textContent ?? '')
        })
      }
    })
  }

	copyCodeBlock()

  onMounted(() => copyCodeBlock())

  onUpdated(() => copyCodeBlock())
}
