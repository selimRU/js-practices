const saihan = {
    age: 5,
    district: 'chuadanga',
    school: 'model',
    father: 'selim'
};

for (const pro in saihan) {
    // got properties
    const prop = pro
    console.log(prop);
    // got values
    const value = saihan[prop];
    console.log(value);
}