<template>
    <nav class="navbar  fixed-top navbar-expand-lg " style="background-color: rgb(173,54,205);">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item active mr-3">
                        <router-link tag="div" to="/"><a class="nav-link">Home</a></router-link>
                    </li>

                    <li class="nav-item mr-3">
                        <router-link tag="div" to="/About"><a class="nav-link">About</a></router-link>
                    </li>
                </ul>
        
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-3">
                        <router-link tag="div" to="/Register">
                        <a class="nav-link">
                        <i class="fas fa-user-plus"></i> Register</a></router-link>
                    </li>
                    
                    <li class="nav-item mr-3">
                        <router-link tag="div" to="/Login">
                        <a class="nav-link">
                        <i class="fas fa-sign-in-alt"></i>Login</a></router-link>
                    </li>
                </ul>
           </div>
        </div>
      </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    
</style>