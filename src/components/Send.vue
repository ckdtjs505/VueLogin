<template>
  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
    <div class="card" id="send_view">
      <div class="card-body">
        <div class="form-group row">
         <label for="staticEmail" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10">
            <input type="text" v-model="sendAddr" class="form-control" id="inputSendAddr" placeholder="Send Address">
          </div>
        </div>
        <div class="form-group row">
          <label for="Num" class="col-sm-2 col-form-label">Money</label>
          <div class="col-sm-10">
            <input type="text" v-model="money" class="form-control" id="inputSendMondy" placeholder="Send Money">
          </div>
        </div>
        <button type="submit" @click="checkMoney" class="btn btn-secondary">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    money: "",
    sendAddr: ""
  }),
  methods: {
    checkMoney: function() {
      if (!this.sendAddr.match(/^[A-Z9]{4,60}/)) {
        alert("주소를 형식에 맞게 입력하세요");
      }
      if (!this.money.match(/^[1~9]+/g)) {
        alert("보낼 금액을 형식에 맞게 입력하세요");
      } else if (this.money > this.$store.state.seed.balance) {
        alert("잔액이 부족합니다");
      } else {
        /* sendEvent 삽입 */
      }
      /* 테스트 컨솔
      console.log(this.money);
      console.log(this.sendAddr);
      */
    }
  }
};
</script>
