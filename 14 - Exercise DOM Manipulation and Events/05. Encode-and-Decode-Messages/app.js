function encodeAndDecodeMessages() {
  let inputText = document.getElementsByTagName("textarea")[0];
  let encodeButton = document.getElementsByTagName("button")[0];

  let decodetext = document.getElementsByTagName("textarea")[1];
  let decodeButton = document.getElementsByTagName("button")[1];

  encodeButton.addEventListener("click", encode);
  decodeButton.addEventListener("click", decode);

  function encode() {
    let textToEncode = inputText.value;
    let encodedText = "";

    for (let index = 0; index < textToEncode.length; index++) {
      const element = textToEncode[index];
      let newText = String.fromCodePoint(element.charCodeAt(0) + 1);
      encodedText += newText;
    }
    decodetext.value = encodedText;
    inputText.value = "";
    encodeButton.disabled = false;
  }
  function decode() {
    let textToDecode = decodetext.value;
    let decodedText = "";

    for (let index = 0; index < textToDecode.length; index++) {
      const element = textToDecode[index];
      let newText = String.fromCodePoint(element.charCodeAt(0) - 1);
      decodedText += newText;
    }
    inputText.value = "";
    decodetext.value = decodedText;
    decodeButton.disabled = true;
  }
}
