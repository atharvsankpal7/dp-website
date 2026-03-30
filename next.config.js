/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/adcet-marketing',
        destination: '/adcet-marketing/adcet_marketing_plan.html',
      },
    ];
  },
};

module.exports = nextConfig; 