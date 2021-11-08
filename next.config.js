/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "csd-requests.s3.ap-southeast-1.amazonaws.com"]
  },
  env: {
    NEXT_PUBLIC_ROSTER_URL: "https://ba8cm5du31.execute-api.ap-southeast-1.amazonaws.com/dev"
  }
}
