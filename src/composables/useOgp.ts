interface OgpOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useOgp = (options: OgpOptions = {}) => {
  const config = useRuntimeConfig();
  const baseUrl = 'https://venere-emi.com'; // 本番環境のURLに変更してください

  const {
    title = 'Venere Emi Flower Salone',
    description = 'プリザーブドフラワーのアトリエ。オリジナルの作品制作からレッスンまで、花のある暮らしをご提案します。',
    image = '/ogp.jpg',
    url = baseUrl,
    type = 'website'
  } = options;

  useHead({
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Venere Emi Flower Salone'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: type
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: url
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image.startsWith('http') ? image : `${baseUrl}${image}`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ]
  });
}; 