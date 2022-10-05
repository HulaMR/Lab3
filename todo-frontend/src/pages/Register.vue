<template>
    <div>
        <section id="register" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header bg-black text-white">
                  <h4>
                    <i class="fas fa-user-plus"></i> Register</h4>
                </div>
                <div class="card-body">
                <form action="index.html">
                    

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="password2">Password</label>
                        <input type="password" name="password" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" name="password2" class="form-control" required>
                    </div>
                    <router-link tag="div" to="/">
                    <input type="submit" value="Register" class="btn btn-secondary btn-block"></router-link>
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