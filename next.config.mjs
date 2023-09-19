const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./src/db/*']
    }
  }
}

export default nextConfig
