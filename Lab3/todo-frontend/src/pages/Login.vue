<template>
    <div>
        <section id="login" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header bg-black text-white">
                  <h4>
                    <i class="fas fa-sign-in-alt"></i> Login</h4>
                </div>
                <div class="card-body">
                  <form action="index.html">
                    <div class="form-group">
                      <label for="username">Username</label>
                      <input type="text" name="username" class="form-control" required>
                    </div>
    
                    <div class="form-group">
                      <label for="password2">Password</label>
                      <input type="password" name="password" class="form-control" required>
                    </div>
                    <router-link tag="div" to="/">
                    <input type="submit" value="Login" class="btn btn-secondary btn-block"></router-link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>

</style>