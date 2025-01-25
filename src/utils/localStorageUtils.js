
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};


export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};


export const updateItemInLocalStorage = (key, itemId, updatedData) => {
    const data = getFromLocalStorage(key) || [];
    const updatedList = data.map((item) =>
        item.id === itemId ? { ...item, ...updatedData } : item
    );
    saveToLocalStorage(key, updatedList);
};


export const removeItemFromLocalStorage = (key, itemId) => {
    const data = getFromLocalStorage(key) || [];
    const filteredList = data.filter((item) => item.id !== itemId);
    saveToLocalStorage(key, filteredList);
};


export const addItemToLocalStorage = (key, newItem) => {
    const data = getFromLocalStorage(key) || [];
    newItem.id = new Date().getTime(); 
    data.push(newItem);
    console.log(newItem);
    saveToLocalStorage(key, data);
    return newItem;
};
