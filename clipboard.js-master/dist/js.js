let clipboard = new ClipboardJS('.btn');
 

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});
 
function toClipboard(el) {
  el.setAttribute('data-clipboard-text',location.href+'');
  let clipboard = new ClipboardJS(el);
  
  clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
  });  
}