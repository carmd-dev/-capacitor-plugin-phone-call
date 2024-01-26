var capacitorPhoneCall = (function (exports, core) {
    'use strict';

    const PhoneCall = core.registerPlugin('PhoneCall', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PhoneCallWeb()),
    });

    class PhoneCallWeb extends core.WebPlugin {
        async start(options) {
            console.log(options);
            return { msg: "成功" };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PhoneCallWeb: PhoneCallWeb
    });

    exports.PhoneCall = PhoneCall;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
