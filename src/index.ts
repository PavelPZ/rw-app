import { about as loginAbout } from 'rw-login/src/index';
import test from 'rw-login/src/test/index';

export function about(): string {
  return `login: ${loginAbout()}, app: about rw-app, loginTest: ${test()}`;
}

alert(about());