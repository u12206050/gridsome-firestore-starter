// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { db } = require('gridsome-source-firestore')

module.exports = {
  siteName: 'Gridsome+Firestore Starter',
  plugins: [
    {
      use: 'gridsome-source-firestore',
      options: {
        debug: true,
        collections: [
          {
            ref: db.collection('posts').where('status', '==', '1'),
            slug: 'title',
            children: [{
              ref: (postDoc) => {
                return postDoc.ref.collection('comments').limit(10)
              }
            }]
          },
          {
            ref: db.collection('topics'),
            slug: (doc, slugify) => {
              return `/topics/${slugify(doc.data.name)}`
            }
          },
          {
            ref: db.collection('tags'),
            slug: (doc, slugify) => {
              return `/tags/${slugify(doc.data.name)}`
            },
          },
          {
            ref: db.collection('authors'),
            slug: (doc, slugify) => {
              return `/authors/${slugify(doc.data.name)}`
            }
          },
        ]
      }
    }
  ]
}
