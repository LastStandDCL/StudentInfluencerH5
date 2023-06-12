export function IsDesktop() {
    let matcher = navigator.userAgent;
    let os;
    if (!!matcher.match(/compatible/i) || matcher.match(/Windows/i)) {
        os = 'windows';
    } else if (!!matcher.match(/Macintosh/i) || matcher.match(/MacIntel/i)) {
        os = 'macOS';
    } else if (!!matcher.match(/iphone/i) || matcher.match(/Ipad/i)) {
        os = 'ios';
    } else if (!!matcher.match(/android/i)) {
        os = 'android';
    } else {
        os = 'other';
    }
    if (os === 'android' || os === 'ios') {
        return false;
    } else {
        return true;
    }
}