<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from './partials/Navbar'
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>
