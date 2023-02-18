export function insertNode(data, id, name, isFolder) {
    if(data.id == id && data.isFolder) {
        data.items.unshift({
            id: new Date().getTime(),
            name,
            isFolder,
            items: []
        })
        return data;
    }
    data.items = data.items.map(el => {
        if(el.isFolder) {
           return insertNode(el, id, name, isFolder);
        } else {
            return el
        }
    })
    return data;
}

export function deleteNode(data, id) {
    if(data.id == id) return {}
    let idx = data.items.findIndex(el => el.id == id);
    if(idx > -1) {
        data.items.splice(idx, 1);
    } else if(data.items.length > 0){
        data.items =  data.items.map(el => {
            if(el.isFolder) {
                return deleteNode(el, id)
            } else {return el}
        })
    }
    return data
}