module.exports = {
  router: {
    base: process.env.NODE_ENV === 'production' ? '//design.gitlab.com/' : '/'
  },
  generate: {
    dir: 'public'
  }
}

