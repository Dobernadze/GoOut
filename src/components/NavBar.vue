<template>
    <nav class = "navbar navbar-dark bg-white navbar-expand-sm">
    <div class="container clear">
        <div class="logohm">
            <img :src="logoIcon" width="50" height="50"/>
        </div>
      <router-link class="navbar-brand text-dark" to="/">Ярмарка мастеров</router-link>
      
      <form>
        <input type="search" placeholder="Search" aria-label="Search">
        <button type="submit">Поиск</button>
        </form>
    </div>
      
     <div class="collapse navbar-collapse"> 
        
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-dark" to="/HmReg" style="text-align:right">Регистрация</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-dark" to="/TheLogin" style="text-align:right">Войти</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-dark" to="/HmCatalog" style="text-align:right">Избранное</router-link>
                </li>
            </ul>
        </div>
  </nav>
    <nav class = "navbar navbar-dark navbar-expand-sm" style="background-color: rgba(0, 128, 128, 1)">
    <div class="container">
      <router-link class="navbar-brand text-white" to="/">Главная страница</router-link>
        <div class="collapse navbar-collapse"> 
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/HmCatalog">Одежда</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/HmReg">Обувь</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/PersonalAccount">Украшения и аксессуары</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/PersonalAccount">Дом и интерьер</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/PersonalAccount">Игрушки</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/PersonalAccount">Свадьба</router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
    </template>

<script>

import Logohm from "../assets/logo-hm.jpg";

export default {
    name: "NavBar",
    data (){
        return {
            logoIcon: Logohm
        }
    }
        }
    
</script>

<style scoped>

</style>