const http = require('http')
const jQuery = require('jquery')
const { JSDOM } = require('jsdom')
const mock = (html) => {
    const { window } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
http.get('http://www.umei.cc/p/gaoqing/cn/', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', async () => {
        let $ = await mock(rawData)
        // 用$去获取图片信息
        $("img").each((index, element) => {
            console.log($(element).attr('src'))
        })
    })
})