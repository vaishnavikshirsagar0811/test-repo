// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'example.com',
      'www.google.com',
      'img.freepik.com',
      'instaplex-optimize-image.s3.ap-south-1.amazonaws.com',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
  },
  
  devIndicators: false,
};
 
export default nextConfig;