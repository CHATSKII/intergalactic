/* eslint-disable no-cyrillic-string/no-cyrillic-string */
import React from 'react';
import Components from './index';
import dataIcons from './icons-old-list';

const Icons = importAll(require.context('@semcore/icon/lib', true, /^\.\/.*\.js$/));
const icons = {}; // {name, fn}

Object.keys(Icons).forEach((nameFile) => {
  const fn = Icons[nameFile];
  const name = fn.displayName;
  if (fn && name && name !== 'Icon') {
    icons[name] = fn;
  }
});

function importAll(r) {
  return r.keys().reduce((components, key) => {
    const module = r(key);

    if (module.default) {
      components[key] = module.default;
    } else {
      components[key] = module;
    }
    return components;
  }, {});
}

export default () => <Components icons={icons} json={dataIcons} old />;
