import { init as loginInit } from 'rw-lib/login/client/index';
import { init as navigInit } from 'rw-lib/navig/dispatcher';

export function init() {
  loginInit();
  navigInit(null);
}