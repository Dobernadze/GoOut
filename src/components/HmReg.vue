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
            <label for="exampleInputName1" class="form-label">Имя</label>
            <input type="email" class="form-control" id="exampleInputName1">
            </div>
   
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            </div>

            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Повторите пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
           
            <div class="mb-3" style="text-align:right"> 
            <p><i>Уже зарегистрированы? </i>
            <router-link class="p-2 mb-2 bg-secondary text-white rounded" to="/TheLogIn">Войдите на сайт</router-link>
        </p>
            </div>
            
        </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HmReg"
    }
</script>

<style scoped>

</style>