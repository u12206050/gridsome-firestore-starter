// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome+Firestore Starter',
  plugins: [
    {
      use: 'gridsome-source-firestore',
      options: {
        // Update this with your service credentials file
        credentials: require('./gridsome-firestore-starter-firebase-adminsdk-8d62h-62hf8c6dis.json'),
        debug: true,
        collections: [
          {
            ref: (db => db.collection('posts').where('status', '==', '1')),
            slug: 'title',
            children: [{
              ref: (db, postDoc) => {
                return postDoc.ref.collection('comments').limit(10)
              }
            }]
          },
          {
            ref: (db => db.collection('topics')),
            slug: (doc, slugify) => {
              return `/topics/${slugify(doc.data.name)}`
            }
          },
          {
            ref: (db => db.collection('tags')),
            slug: (doc, slugify) => {
              return `/tags/${slugify(doc.data.name)}`
            },
          },
          {
            ref: (db => db.collection('authors')),
            slug: (doc, slugify) => {
              return `/authors/${slugify(doc.data.name)}`
            }
          },
        ]
      }
    }
  ]
}
