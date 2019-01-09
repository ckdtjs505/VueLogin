<template lang="html">
  <div class="jumbotron">

    <header>
      <h1 class="display-4">TEST 님 </h1>
      <p class="lead">IOTA DAG 기반 계좌입니다</p>
    </header>

    <hr class="my-4">

    <section id="insertpage">
      <article class="card" id="acount_view">
        <header class="card-header" id="headingOne">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong class="str">계좌번호</strong>
          </button>
        </header>
        <div id="collapseOne" class="collapse show">
          <div class="card-body">
            {{this.$store.state.seed.latestAddress}}
          </div>
        </div>
      </article>

      <article class="card" id="balance_view">
        <header class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong class="str">잔액</strong>
            </button>
          </h5>
        </header>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            잔액 : {{this.$store.state.seed.balance}}
          </div>
        </div>
      </article>

      <article class="card" id="send_view">
        <header class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong class="str">보내기</strong>
            </button>
          </h5>
        </header>
        <Send/>
      </article>
    </section>

  </div>

</template>

<script>
import Send from "@/components/Send.vue";

export default {
  name: "transaction",
  components: {
    Send
  }
};
</script>

<style lang="css" scoped>
.jumbotron {
  margin: 2em;
}
.str {
  font-size: 20px;
  color: rgb(0, 0, 0);
}
.str:hover,:focus {
  color: black;
  text-decoration: underline;
  text-decoration-color: black;
}
</style>
