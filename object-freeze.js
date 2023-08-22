// if i freeze an object ,can't not add or remove any property anymore in this object
const saihan = {
    age: 5,
    district: 'chuadanga',
    school: 'model',
    father: 'selim'
};
const freeze = Object.freeze(saihan);
saihan.ps = 'alamdanga';
console.log(saihan);