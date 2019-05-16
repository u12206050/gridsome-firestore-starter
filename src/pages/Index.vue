<template>
  <Layout>
    <h2>Popular Topics</h2>
    <hr/>
    <div class="row">
      <template v-for="topic in topics">
        <g-link :key="topic.id" :to="topic.path"><h2>{{topic.name}}</h2></g-link>
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
</style>
