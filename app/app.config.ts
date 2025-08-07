export default defineAppConfig({
  myLayer: {
    name: 'base',
  },
  ui: {
    colors: {
      primary: '#7CDDAE',
    },
    button: {
      slots: {
        base: 'rounded-[72px] text-black',
      },
      sizes: {
        lg: { base: 'px-8 py-4 text-[20px]/[1] font-medium' },
      },
    },
  },
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
