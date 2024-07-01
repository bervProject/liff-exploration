<template>
  <nav class="navbar is-fixed-bottom">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h1 class="title">LIFF</h1>
      </router-link>

      <button @click="makeBurger" type="button" class="button navbar-burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample" v-bind:class="{ 'is-active': activator }">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>

        <router-link class="navbar-item" to="/about">
          About
        </router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item" v-if="isLogin">
          Welcome, {{ userData.displayName }}! , hi {{ userData.userId }}!
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="!isLogin" class="button is-primary" v-on:click="login">Login</a>
            <a v-else class="button is-danger" v-on:click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./MyNavBar.ts">
</script>
