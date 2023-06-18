export const getFileType = (fileName) => {
    let result = '';
    const fileArr = fileName.split('.');
    let suffix = fileArr[fileArr.length - 1];
    if (!suffix) return 'none'; // fileName无后缀返回false
    suffix = suffix.toLocaleLowerCase();
// 匹配图片
    const imgList = [
        'png',
        'jpg',
        'jpeg',
        'bmp',
        'gif',
        'tif',
        'svg',
        'webp',
    ]; // 图片格式
    result = imgList.find(item => item === suffix);
    if (result) return 'image';
    // 匹配txt
    const txtList = [
        'txt',
    ];
    result = txtList.find(item => item === suffix);
    if (result) return 'txt';
    // 匹配excel
    const excelList = [
        'xls',
        'xlsx',
        'csv',
    ];
    result = excelList.find(item => item === suffix);
    if (result) return 'excel';
    // 匹配word
    const wordList = [
        'doc',
        'docx'
    ];
    result = wordList.find(item => item === suffix);
    if (result) return 'word';
    // 匹配pdf
    const pdfList = ['pdf'];
    result = pdfList.find(item => item === suffix);
    if (result) return 'pdf';
    // 匹配ppt
    const pptList = [
        'ppt',
        'pptx'
    ];
    result = pptList.find(item => item === suffix);
    if (result) return 'ppt';
    // 匹配zip
    const zipList = [
        'rar',
        'zip',
        '7z',
        'jar',
        'iso',
        'gz',
    ];
    result = zipList.find(item => item === suffix);
    if (result) return 'zip';
    // 匹配视频
    const videoList = [
        'mp4',
        'm2v',
        'mkv',
        'rmvb',
        'wmv',
        'avi',
        'flv',
        'mov',
        'm4v'
    ];
    result = videoList.find(item => item === suffix);
    if (result) return 'video';
    const markdownList = [
        'md',
    ];
    result = markdownList.find(item => item === suffix);
    if (result) return 'markdown';
    // 其他文件类型
    return 'other';
}
