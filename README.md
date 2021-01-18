# Prismic & Gatsby website

A Gatsby website which uses the Headless CMS [Prismic](https://prismic.io/).

[Website](https://test-synapse.netlify.app/)

## Features

- **Prismic as Headless CMS**
- **Slices**
- **Netlify form**
- **Mailchimp newsletter**
- **Styled Components for styling**
- **SEO**
  - Sitemap
  - Schema.org JSONLD
  - Helmet

## Test it

```shell
cd synapse
yarn && yarn start
```

### Custom types folder

path: `./src/schemas/*`

### .Env

.env.production & .env.development

```sh
API_KEY=
MAILCHIMP_ENDPOINT=
GA_TRACKING_ID=
```

### ThemeProvider :

path: `src/utils/theme`:

```JS
const Theme = {
	colors: {
		primary: '#003753',
		secondary: '#6DD5C2',
		ternary: '#EBFAFF',
		grey: '#C4D0D4',
		lightGrey: '#E5E5E5',
		black: '#000',
		white: '#fff',
	},
	breakpoints: {
		xs: 0,
		sm: '480px',
		md: '768px',
		lg: '992px',
		xl: '1280px',
		xxl: '1440px',
	},
	shadows: {
		sm: ' 0px 16px 48px rgba(0, 55, 83, 0.1)',
	},
};

export default Theme;
```
