const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}
// it will NOT store as an array, 
localStorage.setItem('friends', [12,32,54]);
// it will store as an array 
localStorage.setItem('friends', JSON.stringify[12,32,54])

const pen = {price: 10, color: 'black'};
// it will NOT store as an object, 
localStorage.setItem('pen', pen)
// it will store as an object,
localStorage.setItem('pen', JSON.stringify(pen))

// use/get key value from local storage
const storedPen = localStorage.getItem('pen');
const penObj = JSON.parse(storedPen);

// update pen object in local storage 
pen.price = 50;
localStorage.setItem('pen',JSON.stringify(pen));


