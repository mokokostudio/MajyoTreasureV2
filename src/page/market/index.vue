<template>
  <div class="market-view">
    <!-- headbox -->
    <headers/>

    <div v-if="this.isBuy" class="goods-list">
      <div v-if="false" class="find-notice">
        <span class="text-stroke">freshing the goods<span class="dot"></span></span>
      </div>
      <div class="goods" v-for="index in 30" :key="index">
        <div class="goods-item">
          <div class="goods-icon"><img src="~@/assets/items/10.png" /></div>
          <div class="goods-info text-stroke"><span>Items</span><span class="goods-num">&nbsp;x&nbsp;30000</span></div>
        </div>
        <div class="goods-sale-info">
          <div class="goods-state text-stroke">59s</div>
          <div class="goods-price">
            <img src="~@/assets/ETHERicon.png" />
            <span class="text-stroke">1001.0001</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!this.isBuy" class="my-goods-list">
      <div class="my-listed-items">
        <div v-if="false" class="notsale"><span class="text-stroke">You did not sell any items</span></div>
        <div class="goods">
          <div class="goods-repoint"></div>
          <div class="goods-item">
            <div class="goods-icon"><img src="~@/assets/items/10.png" /></div>
            <div class="goods-info text-stroke"><span>Items</span><span class="goods-num">&nbsp;x&nbsp;30000</span></div>
          </div>
          <div class="goods-sale-info">
            <div class="goods-state text-stroke">Sold out</div>
            <div class="goods-price">
              <img src="~@/assets/ETHERicon.png" />
              <span class="text-stroke">1001.0001</span>
            </div>
          </div>
        </div>
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
      </div>
      <div class="list-window">
        <div class="list-body">
          <div class="list-item">
            <div>
              <img v-if="this.selectItem == 10" src="../../assets/items/10.png"/>
              <img v-if="this.selectItem == 11" src="../../assets/items/11.png"/>
              <img v-if="this.selectItem == 12" src="../../assets/items/12.png"/>
              <img v-if="this.selectItem == 13" src="../../assets/items/13.png"/>
              <img v-if="this.selectItem == 14" src="../../assets/items/14.png"/>
              <img v-if="this.selectItem == 15" src="../../assets/items/15.png"/>
            </div>
          </div>
          <div class="list-info">
            <div class="list-num">
              <span class="text-stroke">Number:&nbsp;</span>
              <input type="number" class="input-placeholder" v-model="formData.number" placeholder="Number of inputs">
            </div>
            <div class="list-price">
              <img src="~@/assets/ETHERicon.png" />
              <span class="text-stroke">Total Price:&nbsp;</span>
              <input type="number" class="input-placeholder" v-model="formData.price" placeholder="Enter total price">
            </div>
          </div>
          <div class="list-deal">
            <div class="list-fee text-stroke">
              <span>Handling fee:&nbsp;</span>
              <img src="~@/assets/ETHERicon.png" />
              <span class="fee">10</span>
            </div>
            <div class="list-btn">
              <div @click=""><span class="text-stroke">List</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="goods-filter">
      <div class="fliter-items">
        <div @click="selectitemFilter(10)">
          <img v-if="this.selectItem == 10" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/10.png"/>
        </div>
        <div @click="selectitemFilter(11)">
          <img v-if="this.selectItem == 11" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/11.png"/>
        </div>
        <div @click="selectitemFilter(12)">
          <img v-if="this.selectItem == 12" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/12.png"/>
        </div>
        <div @click="selectitemFilter(13)">
          <img v-if="this.selectItem == 13" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/13.png"/>
        </div>
        <div @click="selectitemFilter(14)">
          <img v-if="this.selectItem == 14" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/14.png"/>
        </div>
        <div @click="selectitemFilter(15)">
          <img v-if="this.selectItem == 15" class="fliter-choiced" src="../../assets/icon-border.png"/>
          <img src="../../assets/items/15.png"/>
        </div>
      </div>
      <div class="goods-dotype">
        <div :class="this.isBuy ? 'g-btn-unable':'g-btn'" @click="changeTab(1)"><span class="text-stroke">Buy</span></div>
        <div :class="this.isBuy ? 'g-btn':'g-btn-unable'" @click="changeTab(2)"><span class="text-stroke">Sell</span></div>
      </div>
    </div>

    <div class="tips-div">
      <Tip ref="tip"></Tip>
    </div>
    <foots/>

    <div class="popbox marketbox" v-if="istip">
      <div class="bgs"></div>
      <!-- type 1-->
      <div class="popbody" v-if="isType === 1">
        <div class="head">
          <span class="text-stroke">PVP History</span>
        </div>
        <div class="middle">
          <div class="c-his">
            <div class="text-stroke" v-for="his in this.pvpHis" :key="his.date">
              {{his.date}}&nbsp;&nbsp;No.{{his.rank}}&nbsp;&nbsp;&nbsp;{{his.account.nickname}}
            </div>
          </div>
        </div>
        <div class="foots">
          <div class="btn f30 noani" @click="onPopClose()"><span class="text-stroke">Confirm</span></div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>

import api from '@/utils/api'
import foots from '@/components/foots'
import headers from '@/components/header'
import cache from '@/utils/cache'
import jskit from '@/utils/index'

export default {
  data() {
    return {
      istip: false,
      isType: 0,
      isBuy: true,
      selectItem: 10,
      formData:{}
    }
  },
  components: {foots, headers},
  mounted() {

  },
  activated(){


  },
  methods: {
    onPopBox(type) {
      this.istip = true;
      this.isType = parseInt(type);

      console.log(this.isType, 'this.isType')
    },
    onPopClose(){
      this.istip = false
      this.isType = 0
    },
    selectitemFilter(index){
      this.selectItem = index
    },
    changeTab(index){
      if(index === 1){
        this.isBuy = true
      }else{
        this.isBuy = false
      }
    },
    calTimeCount(futureTime, curTime){
      let remain = futureTime - curTime;//毫秒
      let s = parseInt(remain / 1000 % 60)//秒 余下多少秒（0-59）
      let m = parseInt(remain / 1000 / 60 % 60); //余下了多少分钟（0-59）
      let h = parseInt(remain / 1000 / 60 / 60 % 24);//余下多少时（0-23）
      s = s < 10 ? '0' + s : s;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      let t = parseInt(remain / 1000 / 60 / 60 / 24);
      // console.log(t," day ", h, ' hour ', m,' min ', s, ' sec')
      this.countdownTime = "End in " + h + ":" + m + ":" + s;
    },
    showTimeCountdown(){
      this.countdownTime = ''
      let curDate = new Date()
      let futureDate = new Date()
      let freePvpNumFreshDate = new Date()
      futureDate.setUTCHours(23, 0, 0, 0)
      freePvpNumFreshDate.setUTCHours(23, 59, 55, 0)
      // console.log( "curDate: ", curDate.getTime() );
      // console.log("futureDate: ", futureDate.getTime())
      let ctime = curDate.getTime()
      let ftime = futureDate.getTime()
      let fpftime = freePvpNumFreshDate.getTime()
      if(ctime > ftime){
        if(ctime > fpftime){
          this.myRank.challenger_cnt = this.pvpMaxFreeNum
        }
        this.counting = true
      }else{
        this.counting = false
        this.calTimeCount(ftime, ctime)
      }
    }

  }
}
</script>

<style lang='stylus' src="./index.css" />
