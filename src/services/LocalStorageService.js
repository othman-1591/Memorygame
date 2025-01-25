export default class LocalStorageService {
   
    static getDataList = (key, callback, size = 10) => {
        const data = JSON.parse(localStorage.getItem(key)) || [];
        const items = data.slice(-size); 
        if (callback) callback(items); 
        return items;
    };

    
    static getDataListWhere = (key, filterKey, filterValue, callback, size = 10) => {
        const data = JSON.parse(localStorage.getItem(key)) || [];
        const filteredData = data
            .filter((item) => item[filterKey] === filterValue)
            .slice(-size); 
        if (callback) callback(filteredData); 
        return filteredData;
    };


    static pushData = (key, objToSubmit) => {
        const data = JSON.parse(localStorage.getItem(key)) || [];
        objToSubmit.id = new Date().getTime(); 
        data.push(objToSubmit);
        localStorage.setItem(key, JSON.stringify(data)); 
        return objToSubmit;
    };


    static remove = (key, id) => {
        let data = JSON.parse(localStorage.getItem(key)) || [];
        const newData = data.filter((item) => item.id !== id);
        localStorage.setItem(key, JSON.stringify(newData)); 
        return true;
    };
}
