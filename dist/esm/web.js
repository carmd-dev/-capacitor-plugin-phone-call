import { WebPlugin } from '@capacitor/core';
export class PhoneCallWeb extends WebPlugin {
    async start(options) {
        console.log(options);
        return { msg: "成功" };
    }
}
//# sourceMappingURL=web.js.map