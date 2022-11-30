<template>
    <nav class = "navbar navbar-dark bg-white navbar-expand-sm">
    <div class="container clear">
        
            <img :src="logoIcon" width="100" height="100"/>
        </div>
        <div class="col col-lg-10 col-xl-8">
        <figure class="note note-primary p-4">
          <blockquote class="blockquote">
            <p class="pb-2">
                <i>&rdquo; Watch and explore the world, not the monitor &rdquo;</i>
            </p>
          </blockquote>
          <figcaption class="blockquote-footer mb-0">
            Grace Hopper
          </figcaption>
        </figure>
        </div>
      <router-link class="navbar-brand text-dark" to="/">Example1</router-link>
      
      <form>
        <input type="search" placeholder="Search" aria-label="Search">
        <button type="submit">Поиск</button>
        </form>
    
      
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
    <nav class = "navbar navbar-dark navbar-expand-sm" style="background-color: rgba(104, 123, 166, 1)">
    <div class="container">
      <router-link class="navbar-brand text-white" to="/">Главная страница</router-link>
        <div class="collapse navbar-collapse"> 
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/HmCatalog">Example2</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/HmReg">Example3</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/PersonalAccount">Example4</router-link>
                </li>
               
            </ul>
        </div>
    </div>
  </nav>
    </template>

<script>

import Logohm from "../assets/logo.png";

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