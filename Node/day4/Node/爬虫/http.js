const http = require('http')
// DOM操作
const jQuery = require('jquery')
// 模拟DOM
const { JSDOM } = require('jsdom')
const mock = (html) => {
    // 模拟出一个window
    const { window } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
http.get('http://i1.zhiaigou.com/uploads/tu/201910/10073/9e5476575f_333.jpg', (res) => {
    // res流
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        let $ = mock(rawData)
        // 用$去获取图片信息
        $("img").each((index, element) => {
            console.log($(element).attr('src'))
        })
    })
})
// gulp.src('./xxx').pipe().pipe(gulp.dest('./')) 文件流

http.get(img, (res) => {
    // 读取流
    res.pipe(fs.createWriteStream('file.jpg'))
})