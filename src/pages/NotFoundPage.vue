<script>

export default {
  name: "NotFoundPage",
}
</script>

<template>
  <div class="content">
    <div class="message container">
      <h3>404</h3>
      <h4>We are sorry, but the page
        you requested was not found</h4>
      <router-link to="/">
        <button>
          Back To Home
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: 73vh;
  background-image: url("@/assets/img/404.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  .message {
    h3 {
      color: #CDA274;
      font-weight: 400;
      font-family: DM Serif Display;
      font-size: 200px;
    }

    h4 {
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-weight: 400;
      max-width: 569px;
    }

    button {
      margin-top: 30px;
      border-radius: 18px;
      background: #292F36;
      box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
      display: flex;
      padding: 26px 54px;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      color: #FFF;
    }
  }
}
</style>