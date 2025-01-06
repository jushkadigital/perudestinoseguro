export const defaultLanguage = 'es';
export const availableLocales = [defaultLanguage, 'en'];
export const defaultNS = 'inicio';
export type LocaleType = (typeof availableLocales)[number];
export const cookieName = 'language';

export function getOptions(lng = defaultLanguage, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: availableLocales,
    preload: availableLocales,
    backend: {
    loadPath: 'https://vps.perudestinoseguro.com/api/{{ns}}/?locale={{lng}}&pLevel',
    parse: (data)=>{
      console.log(data)
        const parseData = JSON.parse(data)
        console.log(parseData.data)
        return parseData.data
      },
      requestOptions: {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      },

    },
         defaultLanguage,
    react: {
      useSuspense:false,
    },
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
export function getOptionsCli(lng = defaultLanguage, ns = defaultNS) {
  return {
// debug: true,
    supportedLngs: availableLocales,
    // preload: availableLocales,
    defaultLanguage,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
