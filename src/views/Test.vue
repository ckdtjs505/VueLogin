<template>
<div class="test">
  <div class="jumbotron">
    <h1 class="display-4">TEST 님 </h1>
    <p class="lead">IOTA DAG 기반 계좌입니다</p>
    <hr class="my-4">
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong class ="str">계좌번호</strong>
            </button>
          </h5>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div v-show="!isset" class="card-body">
            <div >
              seed : {{posts.latestAddress}}
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong  class ="str">잔액</strong>
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          잔액 : {{posts.balance}}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong  class ="str">주의사항</strong>
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            hello
          </div>
        </div>
      </div>
    </div>

    </div>
    <p class="lead">
      <a class="btn btn-dark btn-lg" href="#" role="button">Logout</a>
    </p>
  </div>
</div>
</template>

<script>
const IOTA = require('iota.lib.js')
const iota = new IOTA({provider: 'http://192.168.10.48:24265'});
const Converter =  require("iota.lib.js/lib/crypto/converter/converter.js");

const sendSeed = 'BTRWCYJIRJTYGZET9FKGZBLPBUQVBWODKBNCIA9H9ZJBPPYGCITOGNVQHZTGOCO9E9VQSMAAZTJUQWZLC';
const sendAddr = 'ZEZJQVCZNSWWFJ9SNDQZPSVTTOKFJVQIRHJGFSLL9XCVULUSGHRTBCSDRBAVNIJNJOCOWRDGQYWGKZYCX';
const recvSeed = 'JCBMBVUCRPWNSNPVAAUISIFXQB9AZXZVAQBIMZLJSCBUCPFDCHHWLREUVKQVKJMTZUZJZDUXKFEPLSSVE';
const recvAddr = 'DOGCYVLJZWRZQSOWEHJ9LKF9KILSKWUZGQISCNDLSEQAWCM9OMKYAIXXGVHWBV9EKDNPKOXDI9FZWZFGB';

export default {
  name: 'test',
  data: function () {
    return {
      posts: [],
    }
  },
  computed : {
    isset : function()
    {
        iota.api.getAccountData(recvSeed, (error, accountData) => {
          if (error) {
            console.log(error);
          } else {
            /* console.log(JSON.stringify(accountData)); */
            console.log(accountData.latestAddress);
            this.posts = accountData;
          }
      })
    },
  },
  methods : {

  }
}
</script>

<style lang="css" scoped>
.test {
  margin: 2em;
}
.str {
  font-size: 20px;
  color: rgb(0, 0, 0);
}
</style>
