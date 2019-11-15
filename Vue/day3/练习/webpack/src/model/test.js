const {
    find,
    insert,
    updata,
    remove
} = require('./db')

    ;
(async () => {
    await insert('student', [{
        name: 'rrrrrrrrr'
    }])
    let data = await find('student')
    console.log(data);
    await updata('student', {
        name: 'aaa'
    }, { $set: { name: 'sss' } })
    let data1 = await find('student')
    console.log(data1);

    await remove('student', {
        name: 'sss'
    })
    let data2 = await find('student')
    console.log(data2);

})()