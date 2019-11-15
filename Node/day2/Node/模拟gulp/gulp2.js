const {
    writeFile,
    readFile
} = require("fs");

const readCode = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        })
    })
};
const remove = (code) => {
    let output = code.replace(/console.log\([0-9a-z'\[,\s\]]+\);*/g, '');
    let output1 = output.replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '');
    let output2 = output1.replace(/let/g, 'var');
    let output3 = output2.replace(/;+/g, ';');
    let output4 = output3.replace(/\s{2,}/g, '');

    return output4;
}

const writeCode = (path, code) => {
    return new Promise((resolve, reject) => {
        writeFile(path, code, (err) => {
            err ? reject(err) : resolve()
        })
    })
};
(async () => {
    let code = await readCode('./src/index.js');
    code = remove(code)
    await writeCode('./dist/index2.js', code)
})();