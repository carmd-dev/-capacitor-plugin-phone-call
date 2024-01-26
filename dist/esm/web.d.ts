import { WebPlugin } from '@capacitor/core';
import type { PhoneCallPlugin, PhoneCallOptions, SucessCallBack } from './definitions';
export declare class PhoneCallWeb extends WebPlugin implements PhoneCallPlugin {
    start(options: PhoneCallOptions): Promise<SucessCallBack>;
}
