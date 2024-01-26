import { registerPlugin } from '@capacitor/core';
const PhoneCall = registerPlugin('PhoneCall', {
    web: () => import('./web').then(m => new m.PhoneCallWeb()),
});
export * from './definitions';
export { PhoneCall };
//# sourceMappingURL=index.js.map