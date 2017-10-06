{
  /**
   * Application configuration section
   * PM2 - Application Declaration
   */
  apps : [
    // First application
    {
      name      : 'node_bushu',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],
  /**
   * Deployment section
   * PM2 - Deployment
   */
  deploy : {
    production : {
      user: "root",
      host: "192.168.1.117",
      ref: "origin/master",
      repo: "git@github.com:wolfdong7/node_bushu.git",
      path: "/home/yishi/www/production"      
    }
  }
}