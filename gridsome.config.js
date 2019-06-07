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
		}
  ],
}