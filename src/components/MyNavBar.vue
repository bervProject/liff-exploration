<template>
  <nav class="navbar is-fixed-bottom">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
      >
        <h1 class="title">
          LIFF
        </h1>
      </router-link>

      <button
        type="button"
        class="button navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': activator }"
        @click="makeBurger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': activator }"
    >
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/"
        >
          Home
        </router-link>

        <router-link
          class="navbar-item"
          to="/about"
        >
          About
        </router-link>
      </div>

      <div class="navbar-end">
        <div
          v-if="isLogin"
          class="navbar-item"
        >
          Welcome, {{ userData.displayName }}!
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <button
              v-if="!isLogin"
              class="button is-primary"
              @click="login"
            >
              Login
            </button>
            <button
              v-else
              class="button is-danger"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./MyNavBar.ts">
</script>
