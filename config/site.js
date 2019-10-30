module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: '버킷플레이스 개발 블로그', // Navigation and Site Title
  titleAlt: '버킷플레이스(오늘의집)의 개발 블로그입니다.', // Title for JSONLD
  description: '버킷플레이스(오늘의집)의 개발 블로그입니다.',
  url: 'https://bucketplace.dev', // Domain of your site. No trailing slash!
  siteUrl: 'https://bucketplace.dev', // url + pathPrefix
  siteLanguage: 'ko', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'DevBucketPlace', // shortname for manifest. MUST be shorter than 12 characters
  author: 'BucketPlace', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@justinformentin', // Twitter Username
};
