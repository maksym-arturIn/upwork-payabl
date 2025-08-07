export const links = ['WooCommerce', 'Shopify', 'Magento', 'PrestaShop'];

export enum ELocalPaymentLinks {
  DIGITAL_WALLETS = 'digital-wallets',
  BANK_TRANSFERS = 'bank-transfers',
  PAY_WITH_CRYPTO = 'pay-with-crypto',
  REGIONAL_METHODS = 'regional-methods',
}
export const localPaymentLinks = [
  {
    key: ELocalPaymentLinks.DIGITAL_WALLETS,
    title: 'Digital wallets',
    image: '/images/local-payment/placeholder-1.webp',
  },
  {
    key: ELocalPaymentLinks.BANK_TRANSFERS,
    title: 'Bank transfers',
    image: '/images/local-payment/placeholder-2.webp',
  },
  {
    key: ELocalPaymentLinks.PAY_WITH_CRYPTO,
    title: 'Pay with crypto',
    image: '/images/local-payment/placeholder-1.webp',
  },
  {
    key: ELocalPaymentLinks.REGIONAL_METHODS,
    title: 'Regional methods',
    image: '/images/local-payment/placeholder-2.webp',
  },
];
