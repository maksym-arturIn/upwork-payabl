export enum EBuildCheckoutTabs {
  API = 'API',
  WebSDK = 'Web SDK',
  MobileSDK = 'Mobile SDK',
  HPP = 'HPP',
}

export const buildCheckoutTabs = [
  { key: EBuildCheckoutTabs.API, title: 'API' },
  { key: EBuildCheckoutTabs.WebSDK, title: 'Web SDK' },
  { key: EBuildCheckoutTabs.MobileSDK, title: 'Mobile SDK' },
  { key: EBuildCheckoutTabs.HPP, title: 'HPP' },
];

export const buildCheckoutCards = [
  {
    id: EBuildCheckoutTabs.API,
    imgSrc: '/images/bill-face.svg',
    imgAlt: 'Direct API',
    imgClass: 'size-[72px] mb-6',
    title: 'Direct API',
    description:
      'Build exactly what you need. Create custom checkout flows that match your brand and business perfectly.',
  },
  {
    id: EBuildCheckoutTabs.WebSDK,
    imgSrc: '/images/bank-face.svg',
    imgAlt: 'Web SDK',
    imgClass: 'size-[72px] mb-6',
    title: 'Web SDK',
    description: 'Go live faster. Our plug-and-play solution allows you to accept payments in minutes, not weeks.',
  },
  {
    id: EBuildCheckoutTabs.MobileSDK,
    imgSrc: '/images/mobile-face.svg',
    imgAlt: 'Mobile SDK',
    imgClass: 'size-[72px] mb-6',
    title: 'Mobile SDK',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh volutpat vivamus augue dolor praesent elementum libero iaculis.',
  },
  {
    id: EBuildCheckoutTabs.HPP,
    imgSrc: '/images/document-face.svg',
    imgAlt: 'Hosted Payment Page',
    imgClass: 'size-[72px] mb-6',
    title: 'Hosted Payment Page',
    description:
      'Start selling today. Ready-to-use checkout that requires zero development time or technical expertise.',
  },
];
