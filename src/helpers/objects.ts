export const updateObjectsInArray = (items: any[], itemValue:any, objPropName:any, newObjProps:any) => {
    return items.map( e => {
        if (e[objPropName] === itemValue) {
            return {
                ...e, ...newObjProps
            }    
        }
        return e;
    })
}