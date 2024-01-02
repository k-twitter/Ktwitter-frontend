/** @type {import('next').NextConfig} */
const API_KEY = '2e201022eab1a682969b0d16b54e8ffd'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/contact',
  //       destination: '',
  //       permanent: false,
  //     },
  //   ]
  // },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig
