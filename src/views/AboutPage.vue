<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">
          LIFF — LINE Frontend Framework
        </h2>
        <p>
          <strong>LIFF</strong> (LINE Frontend Framework) is a platform by LINE that allows developers
          to build web apps that run inside the LINE app. LIFF apps can access LINE user data and
          interact with the LINE platform directly from the browser.
        </p>

        <h3 class="subtitle mt-4">
          What this app explores
        </h3>
        <ul>
          <li>Initializing the LIFF SDK and authenticating with a LINE account</li>
          <li>Retrieving user profile (display name, picture, status message)</li>
          <li>Detecting whether the app is running inside the LINE client or an external browser</li>
          <li>Sending messages on behalf of the user via the LINE Messaging API</li>
        </ul>

        <h3 class="subtitle mt-4">
          Tech stack
        </h3>
        <ul>
          <li><strong>Vue 3</strong> — Composition API with TypeScript</li>
          <li><strong>Vite</strong> — fast dev server and bundler</li>
          <li><strong>Vuex</strong> — state management</li>
          <li><strong>Oruga UI + Bulma</strong> — component library and CSS framework</li>
          <li><strong>@line/liff</strong> — official LIFF SDK</li>
        </ul>

        <h3 class="subtitle mt-4">
          Getting started
        </h3>
        <p>
          To run this app you need a LINE Developer account and a LIFF ID. Register your app at the
          <a
            href="https://developers.line.biz/"
            target="_blank"
            rel="noopener"
          >LINE Developers Console</a>,
          then replace the <code>liffId</code> in <code>src/main.ts</code> with your own.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./About.ts">

</script>
