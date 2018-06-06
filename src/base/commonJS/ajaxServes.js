export function AjaxRemove(name, type) {
	let url = '/api/v1/IntellSearchApi/HotKeyword/OperatKeywords'
    let data = {
        "keywordName": name,
        "hotKeywordActionType": type
    }
    //let data1 = JSON.stringify(data)
    return axios.post(url, data)
} 