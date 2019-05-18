<template>
  <Layout>
    <h1>Gridsome & Firestore Blog Example</h1>
    <h4>Supports: </h4>
    <ul>
      <li>Reference fields of collections included get automatically attached as Graphql References</li>
      <li>Image urls on fields within documents are downloaded and optimized by Gridsome.</li>
      <li>Load collections and their sub-collections and access them via <pre>_parent</pre> and the <pre>belongsTo</pre> property</li>
      <li>Live data updates from Firestore while you develop! Set <pre>debug: true</pre></li>
    </ul>
    <hr>
    <h2>Popular Topics</h2>
    <div class="row">
      <template v-for="topic in topics">
        <g-link class="topic__card" :key="topic.id" :to="topic.path">
          <g-image :src="topic.image" width="300" height="200" fit="outside"></g-image>
          <h3>{{topic.name}}</h3>
        </g-link>
      </template>
    </div>
  </Layout>
</template>

<page-query>
query Topics {
  allFireTopics {
    edges {
      node {
        id
        name
        image
        path
        posts: belongsTo {
          count: totalCount
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Firestore Source'
  },
  computed: {
    topics() {
      return this.$page.allFireTopics.edges && this.$page.allFireTopics.edges.map(e => e.node)
    }
  }
}
</script>

<style>
p pre, li pre {
  display: inline-block;
  background: #eee;
  border-radius: 2px;
  border: 1px solid #ddd;
  padding: 2px 4px;
  line-height: 1;
  margin: 0;
}

.topic__card {
  position: relative;
  width: 300px;
  height: 200px;
}
.topic__card img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.topic__card h3 {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 200;
  background: rgba(255,255,255,.7)
}
</style>
