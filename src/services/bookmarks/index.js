export default {
  getTree() {
    var promise = new Promise((resolve, reject) => {
        chrome.bookmarks.getSubTree("0",result=>{
            resolve(result);
        });
    });
    return promise;
  }
}