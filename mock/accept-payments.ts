export enum EAcceptPaymentsTabs {
  WooCommerce = 'WooCommerce',
  Shopify = 'Shopify',
  Magento = 'Magento',
  PrestaShop = 'PrestaShop',
}

export const acceptPaymentsTabs = [
  {
    key: EAcceptPaymentsTabs.WooCommerce,
    title: 'WooCommerce',
    description: 'Seamless WordPress integration with full feature support and automatic updates.',
  },
  {
    key: EAcceptPaymentsTabs.Shopify,
    title: 'Shopify',
    description: 'Native Shopify app with one-click installation and complete payment method coverage.',
  },
  {
    key: EAcceptPaymentsTabs.Magento,
    title: 'Magento',
    description: 'Comprehensive Magento extension supporting both Magento 1 and 2 platforms.',
  },
  {
    key: EAcceptPaymentsTabs.PrestaShop,
    title: 'PrestaShop',
    description: 'Easy integration for PrestaShop stores with multi-language and multi-currency support.',
  },
];
