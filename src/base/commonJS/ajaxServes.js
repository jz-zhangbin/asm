export function AjaxRemove(name, type, searchIndex, popularityIndex, maxCurrentAppNum) {
  let url = '/api/v1/IntellSearchApi/HotKeyword/OperatKeywords'
  let data = {
    "keywordName": name,
    "hotKeywordActionType": type, 
    "searchIndex": searchIndex,
    "popularityIndex": popularityIndex,
    "maxCurrentAppNum": maxCurrentAppNum
  }
  //let data1 = JSON.stringify(data)
  return axios.post(url, data)
}
