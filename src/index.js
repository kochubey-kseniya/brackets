  module.exports = function check(str, bracketsConfig) {
  let config = [];
  let new_str = str.slice(0);
  bracketsConfig.forEach(item => config.push(item.join('')));
  let count = str.length;
  while (count > 0) {
    for (let key of config) {
      if (new_str.includes(key)) new_str = new_str.replace(key, '');
    }
    count--;
  }
  return new_str.length === 0 ? true : false;
}
