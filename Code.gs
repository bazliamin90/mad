function doGet(e) {
  
  return HtmlService.createTemplateFromFile("Index").evaluate()
  .setTitle("Mad")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
