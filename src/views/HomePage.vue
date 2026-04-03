<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div
            v-if="!isLogin"
            class="content"
          >
            Please login first. To use our apps.
          </div>
          <div
            v-else
            class="content"
          >
            <figure class="image is-128x128">
              <img
                v-if="userData.pictureUrl"
                class="is-rounded"
                :src="userData.pictureUrl"
                alt="Profile picture"
              >
              <img
                v-else
                class="is-rounded"
                src="@/assets/user.png"
                alt="Default user"
              >
            </figure>
            <o-field label="Message">
              <o-input v-model="message" />
            </o-field>
            <button
              class="button"
              @click="addNote"
            >
              Submit
            </button>
          </div>
          <div class="buttons">
            <button
              class="button is-link"
              @click="openAnother"
            >
              Open Author Personal Web
            </button>
            <button
              v-if="isLogin"
              class="button is-success"
              @click="getAccessToken"
            >
              Get Access Token
            </button>
            <button
              v-if="isLogin"
              class="button is-danger"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="isLogin"
        class="content"
      >
        <h2 class="title">
          My Notes
        </h2>
        <div class="columns is-multiline">
          <div
            v-for="(note, index) in notes"
            :key="index"
            class="column"
          >
            <div class="box">
              <p>{{ note }}</p>
              <div class="buttons">
                <button
                  v-if="isClient"
                  class="button is-link"
                  @click="submit(index)"
                >
                  Send To Chat
                </button>
                <button
                  v-if="isLogin"
                  class="button is-danger"
                  @click="deleteNote(index)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Home.ts">
</script>
