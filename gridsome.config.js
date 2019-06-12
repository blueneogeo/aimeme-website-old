module.exports = {
  siteName: 'Gridsome',
  icon: 'src/assets/favicon.png',
  plugins: [
    { 
      use: 'gridsome-plugin-typescript' 
    },
    {
			use: 'gridsome-plugin-pug',
			options: {
				pug: { /* Options for `pug-plain-loader` */ },
				pugLoader: { /* Options for `pug-loader` */ }
			}
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'http://localhost:3001/graphql',
        fieldName: 'aimeme',
        typeName: '',
        headers: {
          // Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    }
  ],
}
