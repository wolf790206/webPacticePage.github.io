const str = 'ztm is the best of the best';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
str.replaceAll('best', 'worst');
// 'ztm is the worst of the worst'
str;
// 'ztm is the best of the best'

const b = str.replaceAll('best', 'worst');
b;
// 'ztm is the worst of the worst'

const c = str.replace('best', 'worst');
c;
// 'ztm is the worst of the best'
