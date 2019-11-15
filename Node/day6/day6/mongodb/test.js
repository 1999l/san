const {
    find,
    insert,
    updata,
    remove
} = require('./db')

    ;
(async () => {
    await insert('user', [{
        username: '1231231aaaa',
        psw: "123123123aaaa",
        nicheng: "tafid1daaaaaa"
    }])
    let data = await find('user')
    console.log(data);
    await updata('juejin', {
        name: 'aaa'
    }, { $set: { name: 'sss' } })
    let data1 = await find('juejin')
    console.log(data1);

    await remove('juejin', {
        name: 'sss'
    })
    let data2 = await find('juejin')
    console.log(data2);

})()