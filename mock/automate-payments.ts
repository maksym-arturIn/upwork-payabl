export enum EAutomatePaymentsTabs {
  OneClick = 'One-Click',
  Links = 'Links',
  Recurring = 'Recurring',
  Retry = 'Retry',
}

export const automatePaymentsTabs = [
  { key: EAutomatePaymentsTabs.OneClick, title: 'One-Click' },
  { key: EAutomatePaymentsTabs.Links, title: 'Links' },
  { key: EAutomatePaymentsTabs.Recurring, title: 'Recurring' },
  { key: EAutomatePaymentsTabs.Retry, title: 'Retry' },
];

export const automatePaymentsCards = [
  {
    id: EAutomatePaymentsTabs.OneClick,
    img: '/images/automate-payments/one-click-pay.webp',
    alt: 'One-click payments',
    title: 'One-click payments',
    description:
      'Speed up repeat purchases. Let returning customers pay instantly with saved payment methods, boosting conversion rates.',
  },
  {
    id: EAutomatePaymentsTabs.Links,
    img: '/images/automate-payments/link-payment.webp',
    alt: 'Payment links',
    title: 'Payment links',
    description:
      'Send secure payment requests instantly. Generate payment links for invoices, quotes, or one-off payments via email or SMS.',
  },
  {
    id: EAutomatePaymentsTabs.Recurring,
    img: '/images/automate-payments/recur-pay.webp',
    alt: 'Recurring payments',
    title: 'Recurring payments',
    description:
      'Set up subscription billing that works. Automated collections, smart retry logic, and built-in mandate management for seamless recurring revenue.',
  },
  {
    id: EAutomatePaymentsTabs.Retry,
    img: '/images/automate-payments/retry-pay.webp',
    alt: 'Retry payments',
    title: 'Retry payments',
    description:
      'Set up subscription billing that works. Automated collections, smart retry logic, and built-in mandate management for seamless recurring revenue.',
  },
];
