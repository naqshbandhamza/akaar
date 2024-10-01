/**
 * Core Utilities
 * 
 * Usage:
 * 
 
const windowScrollUpdate = CoreUtils.return('throttle', handleScrollEvent, 5);
CoreUtils.call('delCookie', 'DATA_NAME', '/')

 */
import CoreUtils from './UtilsHook';

import {
    getCookie,
    setCookie,
    delCookie
} from './libs/cookies-tool';



import {
    JWT_SECRET,
    JWT_EXPIRES_IN,
    sign as jwtSign,
    decode as jwtDecode,
    verify as jwtVerify
} from './libs/jwt';

;
CoreUtils.add('getCookie', (...attrs) => getCookie(...attrs));
CoreUtils.add('setCookie', (...attrs) => setCookie(...attrs));
CoreUtils.add('delCookie', (...attrs) => delCookie(...attrs));

CoreUtils.add('JWT_SECRET', () => JWT_SECRET);
CoreUtils.add('JWT_EXPIRES_IN', () => JWT_EXPIRES_IN);
CoreUtils.add('jwtSign', (...attrs) => jwtSign(...attrs));
CoreUtils.add('jwtDecode', (...attrs) => jwtDecode(...attrs));
CoreUtils.add('jwtVerify', (...attrs) => jwtVerify(...attrs));


export default CoreUtils;