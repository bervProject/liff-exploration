<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div v-if="!isLogin" class="content">Please login first. To use our apps.</div>
          <div class="content" v-else>
            <figure class="image is-128x128">
              <img class="is-rounded" v-if="userData.pictureUrl" :src="userData.pictureUrl" />
              <img class="is-rounded" v-else src="@/assets/user.png" />
            </figure>
            <b-field label="Message">
              <b-input v-model="message"></b-input>
            </b-field>
            <button class="button" v-on:click="addNote">Submit</button>
          </div>
          <div class="buttons">
            <button class="button is-link" v-on:click="openAnother">Open Author Personal Web</button>
            <button
              v-if="isLogin"
              class="button is-success"
              v-on:click="getAccessToken"
            >Get Access Token</button>
          </div>
        </div>
      </div>
      <div v-if="isLogin" class="content">
        <h2 class="title">My Notes</h2>
        <div class="columns is-multiline">
          <div class="column" v-for="(note, index) in notes" :key="index">
            <div class="box">
              <p>{{ note }}</p>
              <div class="buttons">
                <button
                  v-if="isClient"
                  class="button is-link"
                  v-on:click="submit(index)"
                >Send To Chat</button>
                <button
                  v-if="isLogin"
                  class="button is-danger"
                  v-on:click="deleteNote(index)"
                >Delete</button>
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
