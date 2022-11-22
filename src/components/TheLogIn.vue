<template>
    <div class="container mt-3">
        <div class="row">
           <div class="col-sm-6 mx-auto"> 
        
        <form>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
   
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
  
            <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
            </div>
            <div class="mb-3">
            <button type="submit" class="btn btn-primary m-1">Войти</button>
            </div>
            
            <div>
            <p>
            <router-link class= "text-primary" to="/ThePassRestore">Восстановить пароль</router-link> </p>
            </div>           
        </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheLogIn"
    }
</script>

<style scoped>

</style>