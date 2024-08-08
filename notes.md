npx create-next-app@latest mywallstreetadvisor
# or
yarn create next-app my-nextjs-app


cd mywallstreetadvisor


npm run dev
# or
yarn dev


npm install --save-dev gh-pages


Update package.json:
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "export": "next export",
  "deploy": "npm run build && npm run export && gh-pages -d out -b gh-pages"
}
```

 add a next.config.js
```
module.exports = {
  assetPrefix: './',
  basePath: '/<repository-name>',
  trailingSlash: true,
}

```

config.js
npm run deploy

=========================================== 
 
```
git clone https://github.com/themefisher/bookworm-light-nextjs.git
cd bookworm-light-nextjs
rm -fr .git
npm i
npm run dev
npm install --save-dev gh-pages
```

Update package.json:
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "export": "next export",
  "deploy": "npm run build && npm run export && gh-pages -d out -b gh-pages"
}
```


 add a next.config.js
```
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  basePath: '/MyWallStreetAdvisor',
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;



```
npm run deploy
```



