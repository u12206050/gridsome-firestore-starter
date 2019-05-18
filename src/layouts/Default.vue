<template>
  <div>
    <header>
      <div class="container header">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav row">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <a class="github__link" href="https://github.com/u12206050/gridsome-source-firestore">
            <g-image width="20" height="20" src="../assets/github-logo.svg" />
          </a>
        </nav>
      </div>
    </header>
    <main class="container">
      <slot/>
    </main>
    <footer>
      <p>All Copyright Reserved 2019</p>
      <p><a href="https://twitter.com/GLamusse">@GLamusse</a></p>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

a {
  text-decoration: none;
  outline: none;
  color: #3F51B5;
}

header a {
  font-weight: 400;
  color: #3F51B5;
}

header a:hover, header a.active--exact {
  color: #2196F3;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.nav__link {
  margin-left: 1rem;
}

.github__link {
  display: flex;
  margin-left: 1rem;
  align-content: center;
  color: #37474F;
}
.github__link img {
  width: 2rem;
  height: 2rem;
}

main {
  min-height: calc(100vh - 228px);
  margin-top: 20px;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #E8EAF6;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.row.links {
  justify-content: center;
}
.row.links a {
  margin: 6px;
  padding: 4px 6px;
  border-radius: 4px;
  background: #eee;
  color: #3F51B5;
  font-weight: 600;
}
.row.links a.topic {
  padding: 4px 8px;
  background: #3F51B5;
  color: #fff;
}

figure img {
  width: 100%;
}

.post_card {
  flex-basis: calc(33% - 24px);
  margin: 24px 12px;
  transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
  border-radius: 8px;
  border: 1px solid #dadce0;
}

.post_card:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 4px 0 rgba(60, 64, 67, .3), 0 6px 11px 5px rgba(60, 64, 67, .15);
}

.post_card:active {
  box-shadow: 0;
}

.post_card figure {
  margin: 0;
  border-radius: 8px;
}

.post_card figure img {
  border-bottom: 1px solid #999;
  border-radius: 8px;
}

.post_card figure figcaption {
  padding: 4px 10px;
  color: #37474F;
}
</style>
