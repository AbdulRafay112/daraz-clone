/** @type {import('next').NextConfig} */  
const nextConfig = {  
    images: {  
      remotePatterns: [  
        {  
          protocol: 'https',  
          hostname: 'localhost:3000',  
          port: '',  
          pathname: '/account123/**',  
          search: '',  
        },  
        {  
          protocol: 'https',  
          hostname: 'cdn.sanity.io',  
          port: '',  
          pathname: '/**',  
          search: '',  
        },  
      ],  
    },  
  };  
  
  export default nextConfig;
