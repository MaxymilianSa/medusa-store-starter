/* eslint-disable @typescript-eslint/no-empty-interface */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/pl.json');
declare interface IntlMessages extends Messages {}
