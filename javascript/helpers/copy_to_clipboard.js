function copyToClipboard() {

  const copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

}

function copyToClipboard(){
  navigator.clipboard.writeText(document.querySelector('#myInput').value)
}
