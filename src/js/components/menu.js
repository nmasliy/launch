import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';
import '../functions/menu';

getHeaderHeight()

let func = throttle(getHeaderHeight);
window.addEventListener('resize', func);

