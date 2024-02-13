<template>
  <div class="pvpfight-view">
    <div class="battle-ground">
      <div class="head-info text-stroke">
        <div class="my-head">
          <div>
            <img alt="NFT" src="~@/assets/sculpture.png" />
            <span>{{nickname}}</span>
          </div>
          <div class="my-hp">
            <div class="hp-progress">
              <div class="val my-val text-stroke">{{this.progressChallengerVal}}</div>
              <div class="victory" :style="{ width: progressChallenger + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="tar-head">
          <div>
            <span>{{this.targetName}}</span>
            <img alt="NFT" src="~@/assets/sculpture.png" />
          </div>
          <div class="tar-hp">
            <div class="hp-progress">
              <div class="val tar-val text-stroke">{{this.progressDefenderVal}}</div>
              <div class="fail" :style="{ width: progressDefender + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="battle-body" ref="batbodyCavs"></div>
      <div class="battle-equip">
        <div class="my-nft">
          <div class="nftequip" v-for="nft in this.myNfts" :key="nft.id">
            <img alt="NFT" v-if="nft.level == 1 && nft.type == 1" src="~@/assets/nfts/Garm1.png" />
            <img alt="NFT" v-if="nft.level == 1 && nft.type == 2" src="~@/assets/nfts/Edda1.png" />
            <img alt="NFT" v-if="nft.level == 1 && nft.type == 3" src="~@/assets/nfts/Norns1.png" />
            <img alt="NFT" v-if="nft.level == 1 && nft.type == 4" src="~@/assets/nfts/Parvati1.png" />
            <img alt="NFT" v-if="nft.level == 1 && nft.type == 5" src="~@/assets/nfts/Tartarus1.png" />

            <img v-if="nft.level > 1 && nft.level <= 3 && nft.type == 1" alt="NFT" src="~@/assets/nfts/Garm2.png" />
            <img v-if="nft.level > 1 && nft.level <= 3 && nft.type == 2" alt="NFT" src="~@/assets/nfts/Edda2.png" />
            <img v-if="nft.level > 1 && nft.level <= 3 && nft.type == 3" alt="NFT" src="~@/assets/nfts/Norns2.png" />
            <img v-if="nft.level > 1 && nft.level <= 3 && nft.type == 4" alt="NFT" src="~@/assets/nfts/Parvati2.png" />
            <img v-if="nft.level > 1 && nft.level <= 3 && nft.type == 5" alt="NFT" src="~@/assets/nfts/Tartarus2.png" />

            <img v-if="nft.level > 3 && nft.level <= 6 && nft.type == 1" alt="NFT" src="~@/assets/nfts/Garm3.png" />
            <img v-if="nft.level > 3 && nft.level <= 6 && nft.type == 2" alt="NFT" src="~@/assets/nfts/Edda3.png" />
            <img v-if="nft.level > 3 && nft.level <= 6 && nft.type == 3" alt="NFT" src="~@/assets/nfts/Norns3.png" />
            <img v-if="nft.level > 3 && nft.level <= 6 && nft.type == 4" alt="NFT" src="~@/assets/nfts/Parvati3.png" />
            <img v-if="nft.level > 3 && nft.level <= 6 && nft.type == 5" alt="NFT" src="~@/assets/nfts/Tartarus3.png" />

            <img v-if="nft.level > 6 && nft.level <= 9 && nft.type == 1" alt="NFT" src="~@/assets/nfts/Garm4.png" />
            <img v-if="nft.level > 6 && nft.level <= 9 && nft.type == 2" alt="NFT" src="~@/assets/nfts/Edda4.png" />
            <img v-if="nft.level > 6 && nft.level <= 9 && nft.type == 3" alt="NFT" src="~@/assets/nfts/Norns4.png" />
            <img v-if="nft.level > 6 && nft.level <= 9 && nft.type == 4" alt="NFT" src="~@/assets/nfts/Parvati4.png" />
            <img v-if="nft.level > 6 && nft.level <= 9 && nft.type == 5" alt="NFT" src="~@/assets/nfts/Tartarus4.png" />

            <img v-if="nft.level > 9 && nft.level <= 12 && nft.type == 1" alt="NFT" src="~@/assets/nfts/Garm5.png" />
            <img v-if="nft.level > 9 && nft.level <= 12 && nft.type == 2" alt="NFT" src="~@/assets/nfts/Edda5.png" />
            <img v-if="nft.level > 9 && nft.level <= 12 && nft.type == 3" alt="NFT" src="~@/assets/nfts/Norns5.png" />
            <img v-if="nft.level > 9 && nft.level <= 12 && nft.type == 4" alt="NFT" src="~@/assets/nfts/Parvati5.png" />
            <img v-if="nft.level > 9 && nft.level <= 12 && nft.type == 5" alt="NFT" src="~@/assets/nfts/Tartarus5.png" />

            <img v-if="nft.level > 12 && nft.type == 1" alt="NFT" src="~@/assets/nfts/Garm6.png" />
            <img v-if="nft.level > 12 && nft.type == 2" alt="NFT" src="~@/assets/nfts/Edda6.png" />
            <img v-if="nft.level > 12 && nft.type == 3" alt="NFT" src="~@/assets/nfts/Norns6.png" />
            <img v-if="nft.level > 12 && nft.type == 4" alt="NFT" src="~@/assets/nfts/Parvati6.png" />
            <img v-if="nft.level > 12 && nft.type == 5" alt="NFT" src="~@/assets/nfts/Tartarus6.png" />

            <div class="nftlv"><span class="text-stroke">{{nft.level}}</span></div>
          </div>
        </div>
        <div class="tar-nft">
          <div class="nftequip">
            <img alt="NFT"  src="~@/assets/nfts/Norns4.png" />
            <div class="nftlv tarlv"><span class="text-stroke">11</span></div>
          </div>
          <div class="nftequip">
            <img alt="NFT"  src="~@/assets/nfts/Garm6.png" />
            <div class="nftlv tarlv"><span class="text-stroke">15</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="battle-info-show">
      <div class="pkshow" ref="pktxtbody">
        <div class="itemdata onsd text-stroke" v-for="(item, index) in battleTxt" :key="index">
          <span class="my" v-if="item.showTitle && item.status === 0" v-html="nickname"></span>
          <span class="tar" v-if="item.showTitle && item.status === 1">{{targetName}}</span>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>

    <!-- pop start -->
    <div class="popbox pvpfightbox" v-if="istip">
      <div class="bgs"></div>
      <!-- type 1-->
      <div class="popbody" v-if="isType === 1">
        <div class="head">
          <span v-if="isWin === 1" class="text-stroke">Congratulations</span>
          <span v-if="isWin === 0" class="text-stroke">Challenge Failed</span>
        </div>
        <div class="middle">
          <div v-if="isWin === 1" class="notice-win text-stroke">
            <div>You won the battle</div>
            <div>Your ranking becomes</div>
            <div class="num">No.{{this.targetRank}}</div>
          </div>
          <div v-if="isWin === 0" class="notice-win text-stroke">
            <div>Your ranking is still No.{{this.myRank}}</div>
            <div class="suggest">·Enhance equipment to defeat opponents</div>
          </div>
        </div>
        <div class="foots">
          <div class="btn f30" @click="onPopClose(1)"><span class="text-stroke">Confirm</span></div>
        </div>
      </div>

    </div>
    <!-- pop end -->

    <div class="tips-div">
      <Tip ref="tip"></Tip>
    </div>
  </div>
</template>
<script>

import cache from '@/utils/cache'
import jskit from '@/utils/index'
import tmpdata from './tmpdata.json'
import { pvpFight } from '@/api/fight'
import { MainCharacter } from '@/animation/mainCharacter'
import { Damage } from '@/animation/damageFade'

export default {
  data() {
    return {
      myBaseCav: null,
      enemyBaseCav: null,
      enemyskillCav: null,
      myskillCav:null,

      istip: false,
      isType: 0,

      targetRank: 0,
      targetUid: 0,
      targetName:'',
      myRank:0,

      myNfts:{},
      tarNfts:{},

      bossItem: 1,

      battleTxt: [],
      len: 1,
      progressDefender: 100,
      progressChallenger: 100,
      progressDefenderVal: "--",
      progressChallengerVal: "--",
      hit: false,
      is_cri: false,
      nickname: '',

      showBossDmg: false,
      defenderDmgTxt: '',
      showBossCoin: false,
      recoverBossCoin: false,
      isWin: 0,

      // 战斗
      dpr: 1,
      battleFinish: false,
      characterImg:{
        my:{},
        emeny:{}
      },
      position:{
        my:{},
        enemy:{}
      },
      myCharacter:{},
      enemyCharacter:{}
    }
  },
  computed: {
    textLines() {
      return this.text.split('\n');
    },
  },
  components: {},
  created() {
  },
  activated() {
    this.dpr = window.devicePixelRatio || 1
    this.$nextTick(() => {
      console.log('dpr==',this.dpr)
      //初始化
      this.init()
      this.initCavs()
      this.initNfts()

      //init boss信息
      console.log("start pk....")
      const querys = this.$route.query || {}

      if(querys && querys.rank && querys.uid){
        this.targetRank = querys.rank
        this.targetUid = querys.uid
        this.targetName = querys.tname || 'Defender'
      }else{
        this.$refs.tip.openTip('Param Err')
      }

      // this.moveTest()
      // this.drawHp()

      //this.pvpFight()
      this.testFight()

      this.createBattleAni()
    })
  },
  updated(){
    this.scrollToBottom()
  },
  methods: {
    init() {
      this.targetRank = 0
      this.targetUid = 0
      this.progressDefender = 100
      this.progressChallenger = 100
      this.progressDefenderVal = '--'
      this.progressChallengerVal = '--'
      this.battleTxt = []
      this.len = 1
      this.hit = false
      this.istip = false
      this.isType = 0
      this.defenderDmgTxt = ''
      this.isWin = 0

      this.nickname = cache.getSession('nickName') || 'Not found'

      this.position = {my:{},enemy:{}}
      this.characterImg = {my:{},enemy:{}}
    },
    initCavs(){
      this.battleFinish = false
      const canvas1 = document.createElement('canvas');
      canvas1.style.width = "380px";
      canvas1.style.height = "230px";
      canvas1.className  = 'battlecav left'
      canvas1.width = 380 * this.dpr;
      canvas1.height = 230 * this.dpr;
      this.$refs.batbodyCavs.appendChild(canvas1);
      this.myBaseCav = canvas1.getContext('2d');
      this.myBaseCav.scale(this.dpr, this.dpr)
      this.myCharacter = new MainCharacter(1, this.myBaseCav, canvas1, this.dpr)
      console.log('my character ',this.myCharacter)

      const canvas2 = document.createElement('canvas');
      canvas2.style.width = "380px";
      canvas2.style.height = "230px";
      canvas2.className  = 'battlecav right'
      canvas2.width = 380 * this.dpr;
      canvas2.height = 230 * this.dpr;
      this.$refs.batbodyCavs.appendChild(canvas2);
      this.enemyBaseCav = canvas2.getContext('2d');
      this.enemyBaseCav.scale(this.dpr, this.dpr)
      this.enemyCharacter = new MainCharacter(2, this.enemyBaseCav, canvas2, this.dpr)
      console.log('enemy character ',this.enemyCharacter)

      const canvas3 = document.createElement('canvas');
      canvas3.style.width = "380px";
      canvas3.style.height = "230px";
      canvas3.className  = 'battlecav myskill'
      canvas3.width = 380 * this.dpr;
      canvas3.height = 230 * this.dpr;
      this.$refs.batbodyCavs.appendChild(canvas3);
      this.myskillCav = canvas3.getContext('2d');
      this.myskillCav.scale(this.dpr, this.dpr)

      const canvas4 = document.createElement('canvas');
      canvas4.style.width = "380px";
      canvas4.style.height = "230px";
      canvas4.className  = 'battlecav enemyskill'
      canvas4.width = 380 * this.dpr;
      canvas4.height = 230 * this.dpr;
      this.$refs.batbodyCavs.appendChild(canvas4);
      this.enemyskillCav = canvas4.getContext('2d');
      this.enemyskillCav.scale(this.dpr, this.dpr)
    },
    clearCav(){
      let childNode = this.$refs.batbodyCavs.childNodes
      for(let i = childNode.length - 1; i >= 0; i--){
        this.$refs.batbodyCavs.removeChild(childNode[i])
      }
    },
    initNfts(){
      let nft1 = jskit.localStorageGet('equip1')
      let nft2 = jskit.localStorageGet('equip2')
      let nft3 = jskit.localStorageGet('equip3')
      let nftArr = []
      if(nft1){
        nftArr.push(nft1)
      }
      if(nft2){
        nftArr.push(nft2)
      }
      if(nft2){
        nftArr.push(nft3)
      }
      this.myNfts = nftArr
    },
    scrollToBottom(){
      this.$nextTick(()=>{
        let body = this.$refs.pktxtbody
        body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' })
      })
    },
    pvpFight() {
      let data = {
        target_id : parseInt(this.targetUid),
        target_rank : parseInt(this.targetRank)
      }
      console.log('-----------data', data)
      pvpFight(data).then(response => {
        console.log('pvp fight response', response)
        // let fightData = tmpdata
        let fightData = response
        console.log(fightData)
        if(fightData && fightData.details && fightData.details.length > 0){
          let mana =+ fightData.mana || 0
          cache.setSession('zpa', mana)
          this.progressDefenderVal = fightData.defender_hp + ''
          this.progressChallengerVal = fightData.challenger_hp + ''
          if(fightData.win){
            this.isWin = 1
            this.targetRank = fightData.new_rank
          }else{
            this.isWin = 0
            this.myRank = fightData.old_rank
          }
          console.log('此局我方赢：', fightData.win)
          //判断谁先开
          let isme = false
          if(fightData.details[0].attacker_type && fightData.details[0].attacker_type === 2){
            // type 2 攻击者   3  防守者
            isme = true
          }else{
            if(fightData.details[0].be_attacker && fightData.details[0].be_attacker === 3){
              isme = true
            }
          }
          // console.log("isme===",isme)
          this.battleTxt.push({
            status: !isme ? 1 : 0,
            text: ' starts the attack first...',
            showTitle: true
          })

          let challengeInitHp = fightData.challenger_hp || 0
          let defenderInitHp = fightData.defender_hp || 0
          let time = setInterval(() => {
            if(this.myCharacter.status == 2 && this.enemyCharacter.status == 2){
              this.len ++
              let item = fightData.details[this.len - 2]
              // console.log(item)
              let atkDefenderNow = false
              if(item.be_attacker && item.be_attacker === 3){
                atkDefenderNow = true
              }
              let atkChallengerNow = false
              if(item.attacker_type && item.attacker_type === 3){
                atkChallengerNow = true
              }
              // console.log('====攻击防守者', atkDefenderNow, "===攻击挑战者",atkChallengerNow)
              // console.log(atkDefenderNow ? "我方 -> 对方:" : "对方 -> 我方:", '被攻击前：', item.hp_before, '被攻击后：', item.hp_after, ' 造成伤害', item.dmg ,item.is_miss ? ' Miss' : '', item.is_cri ? ' 暴击':'')

              // 设置双方血条
              if (atkDefenderNow) {
                this.attackAni(1)
                setTimeout(() => {
                  let dmg = item.is_miss ? 0 : item.dmg
                  if(item.is_cri){
                    this.drawDmg(false, dmg, 2, 3)
                  }else{
                    this.drawDmg(false, dmg, 1, 1)
                  }
                  let defenderHP = item.hp_after || 0
                  this.progressDefender = defenderHP == defenderInitHp ? 100 : Math.ceil(defenderHP / defenderInitHp * 100)
                  this.progressDefenderVal = defenderHP + ''
                }, 400)
              }
              if (atkChallengerNow) {
                this.attackAni(2)
                setTimeout(() => {
                  let dmg = item.is_miss ? 0 : item.dmg
                  if(item.is_cri){
                    this.drawDmg(true, dmg, 2, 3)
                  }else{
                    this.drawDmg(true, dmg, 1, 1)
                  }
                  let challengerHP = item.hp_after || 0
                  this.progressChallenger = challengerHP ==  challengeInitHp ? 100 : Math.ceil(challengerHP / challengeInitHp * 100)
                  this.progressChallengerVal = challengerHP + ''
                }, 400)
              }

              let text = '';
              if (item.is_miss) {
                text = 'attacked, but it was missed.'
              } else if (item.is_cri) {
                text = 'delivered a full-force strike, and caused '+item.dmg+' critical hit damage.'
              } else {
                text = 'caused ' + item.dmg + ' damage.'
              }
              this.battleTxt.push({
                status: atkChallengerNow ? 1 : 0,
                text : text,
                showTitle : true
              })

              // 本次伤害后有一方血量归0
              if (!item.hp_after || item.hp_after === undefined || item.hp_after === 0) {
                text = 'was defeated.'
                this.battleTxt.push({
                  status: atkChallengerNow ? 0 : 1, // 需要反一下，被击败的是对方
                  text : text,
                  showTitle : true
                })
              }

              // 退出战斗
              if (this.len > fightData.details.length) {
                if(this.isWin == 1){
                  text = 'Battle victory, you defeated ' + this.targetName
                  this.battleFinishAni(1)
                }else{
                  text = 'Challenge failed...'
                  this.battleFinishAni(2)
                }
                this.battleTxt.push({
                  status: atkChallengerNow ? 1 : 0,
                  text: text,
                  showTitle: false
                })
                // this.hit = false
                //延时弹窗
                setTimeout(() => {
                  // 延时之后进入结算弹窗
                  this.onPopBox(1)
                }, 1500)
                //结束定时器
                clearInterval(time)
              }
            }
          }, 600)

        }else{
          this.$refs.tip.openTip('Fight error')
        }
      })
    },
    testFight() {
      let data = {
        target_id : parseInt(this.targetUid),
        target_rank : parseInt(this.targetRank)
      }
      console.log('-----------data', data)
      let fightData = tmpdata
      console.log(fightData)
      if(fightData && fightData.details && fightData.details.length > 0){
        let mana =+ fightData.mana || 0
        cache.setSession('zpa', mana)
        this.progressDefenderVal = fightData.defender_hp + ''
        this.progressChallengerVal = fightData.challenger_hp + ''
        if(fightData.win){
          this.isWin = 1
          this.targetRank = fightData.new_rank
        }else{
          this.isWin = 0
          this.myRank = fightData.old_rank
        }
        console.log('此局我方赢：', fightData.win)
        //判断谁先开
        let isme = false
        if(fightData.details[0].attacker_type && fightData.details[0].attacker_type === 2){
          // type 2 攻击者   3  防守者
          isme = true
        }else{
          if(fightData.details[0].be_attacker && fightData.details[0].be_attacker === 3){
            isme = true
          }
        }
        // console.log("isme===",isme)
        this.battleTxt.push({
          status: !isme ? 1 : 0,
          text: ' starts the attack first...',
          showTitle: true
        })

        let challengeInitHp = fightData.challenger_hp || 0
        let defenderInitHp = fightData.defender_hp || 0
        let time = setInterval(() => {
          if(this.myCharacter.status == 2 && this.enemyCharacter.status == 2){
            this.len ++
            let item = fightData.details[this.len - 2]
            // console.log(item)
            let atkDefenderNow = false
            if(item.be_attacker && item.be_attacker === 3){
              atkDefenderNow = true
            }
            let atkChallengerNow = false
            if(item.attacker_type && item.attacker_type === 3){
              atkChallengerNow = true
            }
            // console.log('====攻击防守者', atkDefenderNow, "===攻击挑战者",atkChallengerNow)
            // console.log(atkDefenderNow ? "我方 -> 对方:" : "对方 -> 我方:", '被攻击前：', item.hp_before, '被攻击后：', item.hp_after, ' 造成伤害', item.dmg ,item.is_miss ? ' Miss' : '', item.is_cri ? ' 暴击':'')

            // 设置双方血条
            if (atkDefenderNow) {
              this.attackAni(1)
              setTimeout(() => {
                let dmg = item.is_miss ? 0 : item.dmg
                if(item.is_cri){
                  this.drawDmg(false, dmg, 2, 3)
                }else{
                  this.drawDmg(false, dmg, 1, 1)
                }
                let defenderHP = item.hp_after || 0
                this.progressDefender = defenderHP == defenderInitHp ? 100 : Math.ceil(defenderHP / defenderInitHp * 100)
                this.progressDefenderVal = defenderHP + ''
              }, 400)

            }
            if (atkChallengerNow) {
              this.attackAni(2)
              setTimeout(() => {
                let dmg = item.is_miss ? 0 : item.dmg
                if(item.is_cri){
                  this.drawDmg(true, dmg, 2, 3)
                }else{
                  this.drawDmg(true, dmg, 1, 1)
                }
                let challengerHP = item.hp_after || 0
                this.progressChallenger = challengerHP ==  challengeInitHp ? 100 : Math.ceil(challengerHP / challengeInitHp * 100)
                this.progressChallengerVal = challengerHP + ''
              }, 400)
            }

            let text = '';
            if (item.is_miss) {
              text = 'attacked, but it was missed.'
            } else if (item.is_cri) {
              // 播暴击振屏
              //this.is_cri = true;
              text = 'delivered a full-force strike, and caused '+item.dmg+' critical hit damage.'
            } else {
              text = 'caused ' + item.dmg + ' damage.'
            }
            this.battleTxt.push({
              status: atkChallengerNow ? 1 : 0,
              text : text,
              showTitle : true
            })

            // 本次伤害后有一方血量归0
            if (!item.hp_after || item.hp_after === undefined || item.hp_after === 0) {
              text = 'was defeated.'
              this.battleTxt.push({
                status: atkChallengerNow ? 0 : 1, // 需要反一下，被击败的是对方
                text : text,
                showTitle : true
              })
            }

            // 退出战斗
            if (this.len > fightData.details.length) {
              if(this.isWin == 1){
                text = 'Battle victory, you defeated ' + this.targetName
                this.battleFinishAni(1)
              }else{
                text = 'Challenge failed...'
                this.battleFinishAni(2)
              }
              this.battleTxt.push({
                status: atkChallengerNow ? 1 : 0,
                text: text,
                showTitle: false
              })
              // this.hit = false
              //延时弹窗
              setTimeout(() => {
                // 延时之后进入结算弹窗
                this.onPopBox(1)
              }, 1500)
              //结束定时器
              clearInterval(time)
            }
          }
        }, 600)

      }else{
        this.$refs.tip.openTip('Fight error')
      }
    },
    //打开弹窗
    onPopBox(type) {
      this.isType = parseInt(type)
      this.istip = true
    },
    onPopClose(closeType) {
      this.istip = false
      this.isType = 0
      if (closeType == 1) {
        this.battleFinish = true
        this.clearCav()
        this.$router.push({ path: '/pvp'})
      }
    },
    showBossDmgValue() {
      this.showBossDmg = true
      setTimeout(() => {
        this.showBossDmg = false
      }, 100)
    },
    showBossCoinOut() {
      this.showBossCoin = true
      setTimeout(() => {
        this.showBossCoin = false
      }, 100)
    },
    showRecoverBossCoin() {
      this.recoverBossCoin = true
      setTimeout(() => {
        this.recoverBossCoin = false
      }, 100)
    },

    // 战斗canvas
    // 文字颜色RGB 描边（92,33,2）  白色（255,244,208），黄色（255,211,70）
    drawAndMoveDmg(x,y,dmgTxt,type,move,fps,canvas,element){
      let spdX = 0
      let spdY = 0
      let opacity = 1
      let size = 1
      let sizeMuti = 1
      let diffTime = fps;
      let lastDate = Date.now()
      let doDraw = (() => {
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate
          if(type === 1){
            // 普攻
            canvas.font = "600 italic 14px myFirstFont";
            canvas.textBaseline = 'alphabetic';
            canvas.fillStyle = "rgba(255,244,208,"+opacity+")";
            canvas.strokeStyle = "rgba(92,33,2,"+opacity+")"; // 描边颜色
            canvas.lineWidth = 2; // 描边宽度
            canvas.clearRect(0, 0, 380, 230);
            canvas.strokeText(dmgTxt, x + spdX, y+spdY)
            canvas.fillText(dmgTxt, x + spdX, y+spdY)
            spdY = spdY - 1
            opacity = opacity - 0.04
            if(move === 1){
              // 往右
              spdX = spdX + 2
            }else{
              // 往左
              spdX = spdX - 2
            }
            if(opacity <= 0){
              element.remove()
              return
            }
          }else if(type == 2){
            // 暴击、技能
            canvas.font = "600 italic "+20*size+"px myFirstFont";
            canvas.textBaseline = 'alphabetic';
            canvas.fillStyle = "rgba(255,211,70,"+opacity+")";
            canvas.strokeStyle = "rgba(92,33,2,"+opacity+")"; // 描边颜色
            canvas.lineWidth = 2; // 描边宽度
            canvas.clearRect(0, 0, 380, 230);
            canvas.strokeText(dmgTxt, x + spdX, y+spdY)
            canvas.fillText(dmgTxt, x + spdX, y+spdY)
            size = size + 0.1 * sizeMuti
            if(size >= 1.5){
              sizeMuti = -1
            }
            if(size <= 1){
              sizeMuti = 0
            }
            spdY = spdY - 1
            opacity = opacity - 0.04
            if(move === 1){
              // 往右
              spdX = spdX + 2.4
            }else{
              // 往左
              spdX = spdX - 2.4
            }
            // console.log("opacity", opacity)
            if(opacity <= 0){
              element.remove()
              return
            }
            if(sizeMuti == 0){

            }
          }
        }
        requestAnimationFrame(doDraw)
      })
      requestAnimationFrame(doDraw)
    },
    drawHp(x,y,dmgTxt,type,move,showTimes){
      let _dmg = parseInt(dmgTxt)
      let dmgArr = []
      if(showTimes > 1){
        let _total = 0
        for(let i = 0; i < showTimes; i++){
          let d = 0
          if(i == showTimes - 1){
            d = _dmg - _total
          }else{
            d = Math.floor(_dmg / showTimes)
          }
          dmgArr.push(d)
          _total += d
        }
      }else{
        dmgArr.push(_dmg)
      }
      for (let i = 0; i < showTimes; i++) {
        let t = new Date().getTime().toString()
        t = parseInt(t.substring(t.length - 6, t.length)) + i
        const canvas = document.createElement('canvas');
        canvas.width = 380;
        canvas.height = 230;
        canvas.style.zIndex = t
        canvas.className  = 'battlecav'
        this.$refs.batbodyCavs.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        this.$nextTick(() => {
          setTimeout(() => {
            // this.drawAndMoveDmg(200,200,140*(i+1),2,1,20,ctx,canvas)
            this.drawAndMoveDmg(x,y,dmgArr[i],type,move,20,ctx,canvas)
          },300*i)
        });
      }
    },

    createBattleAni(){
      this.myCharacter.move(60)
      this.enemyCharacter.move(60)
      //this.myCharacter.stand()
      // setTimeout(() => {
      //   this.myCharacter.attack(60)
      //   this.enemyCharacter.attack(60)
      // },1200)
    },

    attackAni(type){
      if(type === 1){
        this.myCharacter.attack(60)
      }else{
        this.enemyCharacter.attack(60)
      }
    },
    drawDmg(atkMy,dmgTxt,type,showTimes){
      let _dmg = parseInt(dmgTxt)
      let dmgArr = []
      if(showTimes > 1){
        let _total = 0
        for(let i = 0; i < showTimes; i++){
          let d = 0
          if(i == showTimes - 1){
            d = _dmg - _total
          }else{
            d = Math.floor(_dmg / showTimes)
          }
          dmgArr.push(d)
          _total += d
        }
      }else{
        dmgArr.push(_dmg)
      }
      let cht = atkMy ? this.myCharacter : this.enemyCharacter
      let dir = atkMy ? -1 : 1
      for (let i = 0; i < showTimes; i++) {
        let t = new Date().getTime().toString()
        t = parseInt(t.substring(t.length - 6, t.length)) + i
        const canvas = document.createElement('canvas');
        canvas.style.width = "380px";
        canvas.style.height = "230px";
        canvas.className  = 'battlecav'
        canvas.width = 380 * this.dpr;
        canvas.height = 230 * this.dpr;
        canvas.style.zIndex = t
        this.$refs.batbodyCavs.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        ctx.scale(this.dpr, this.dpr)
        this.$nextTick(() => {
          setTimeout(() => {
            let x = cht.xStand + cht.width / 2
            let y = cht.yStand
            let obj = new Damage(x, y, dmgArr[i], ctx, canvas)
            obj.moveDirection(dir)
            if(type === 1){
              obj.fadeNormalDmgToPVP()
            }else{
              obj.fadeCriDmgToPVP()
            }
          },200*i)
        });
      }
    },
    battleFinishAni(winner){
      this.myCharacter.finish(true)
      this.enemyCharacter.finish(false)
    },

    moveTest(){
      let stop = false
      let idx = 0
      let movediff = 0
      let xStart = 10
      let yStart = 2
      let xStartR = 300
      let yStartR = 130
      let diffTime = 120; // 动画最小时间间隔,单位 ms
      let lastDate = Date.now()
      let drawMove = (() =>{
        if(stop){
          return
        }
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/right_move/npc_1604-'+(idx+1)+'.png')
          img.onload = (() => {
            that.myBaseCav.clearRect(2,2,380,230)
            that.myBaseCav.drawImage(img, xStart + movediff, yStart+movediff)
            that.position.my.x = xStart + movediff
            that.position.my.y = yStart+movediff
            that.characterImg.my.width = img.width
            that.characterImg.my.height = img.height
          })

          let imgR = new Image()
          imgR.src = require('@/assets/frameimg/left_move/npc_1608-'+(idx+1)+'.png')
          imgR.onload = (() => {
            that.enemyBaseCav.clearRect(2,2,380,230)
            that.enemyBaseCav.drawImage(imgR, xStartR - movediff, yStartR - movediff)
            that.position.enemy.x = xStartR - movediff
            that.position.enemy.y = yStartR - movediff
            that.characterImg.enemy.width = img.width
            that.characterImg.enemy.height = img.height
          })

          idx++
          idx %= 8
          if(xStart + movediff < 60){
            movediff += 4
          }else{
            stop = true
            that.atkTest()
            that.atkTestL()
          }
        }
        requestAnimationFrame(drawMove)
      })
      requestAnimationFrame(drawMove)
    },
    atkTest(){
      let isSkill = false
      let atkGap = 0
      let idx = 0
      let diffTime = 120;
      let lastDate = Date.now()
      let drawAtk = (() =>{
        if(isSkill){
          return
        }
        if(this.battleFinish){
          return
        }
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let x = that.position.my.x
          let y = that.position.my.y
          let img = new Image()
          img.src = require('@/assets/frameimg/right_attack/npc_1609-'+(idx+1)+'.png')
          img.onload = (() => {
            that.myBaseCav.clearRect(10,0,x+70,y+90)
            that.myBaseCav.drawImage(img, x, y)
          })
          idx++
          idx %= 12
          if(idx == 11){
            // 完整一次攻击
            that.drawHp(that.position.enemy.x + that.characterImg.enemy.width / 2,that.position.enemy.y,1400,1,1,1)
            atkGap ++
          }
          if(atkGap == 5){
            isSkill = true
            that.skillTest(x,y)
          }
        }
        requestAnimationFrame(drawAtk)
      })
      requestAnimationFrame(drawAtk)
    },
    atkTestL(){
      let isSkill = false
      let atkGap = 0
      let idx = 0
      let diffTime = 40; // 动画最小时间间隔,单位 ms
      let lastDate = Date.now()
      let drawAtkL = (() =>{
        if(isSkill){
          return
        }
        if(this.battleFinish){
          return
        }
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let x = that.position.enemy.x
          let y = that.position.enemy.y
          let img = new Image()
          img.src = require('@/assets/frameimg/left_attack/npc_1610-'+(idx+1)+'.png')
          img.onload = (() => {
            that.enemyBaseCav.clearRect(x,y,x+70,y+90)
            that.enemyBaseCav.drawImage(img, x, y)
          })
          idx++
          idx %= 12
          if(idx == 11){
            that.drawHp(that.position.my.x,that.position.my.y,800,1,2,1)
            atkGap ++
          }
          if(atkGap == 5){
            isSkill = true
            that.skillTestL(x,y)
          }
        }
        requestAnimationFrame(drawAtkL)
      })
      requestAnimationFrame(drawAtkL)
    },
    skillTest(x,y){
      let idx = 0
      let diffTime = 60;
      let lastDate = Date.now()
      let drawSkill = (() =>{
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/right_skill/npc_1625-'+(idx+1)+'.png')
          img.onload = (() => {
            that.myBaseCav.clearRect(x,y,x+70,y+90)
            that.myBaseCav.drawImage(img, x, y)
          })
          idx++
          idx %= 16
          if(idx === 4){
            that.skillAni()
          }
          if(idx === 15){
            that.atkTest()
            return
          }
        }
        requestAnimationFrame(drawSkill)
      })
      requestAnimationFrame(drawSkill)
    },
    skillTestL(x,y){
      let idx = 0
      let diffTime = 60;
      let lastDate = Date.now()
      let drawSkill = (() =>{
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/left_skill/npc_1626-'+(idx+1)+'.png')
          img.onload = (() => {
            that.enemyBaseCav.clearRect(x,y,x+70,y+90)
            that.enemyBaseCav.drawImage(img, x, y)
          })
          idx++
          idx %= 16
          if(idx === 4){
            that.skillAniAF()
          }
          if(idx === 15){
            that.atkTestL(x,y)
            return
          }
        }
        requestAnimationFrame(drawSkill)
      })
      requestAnimationFrame(drawSkill)
    },
    skillAni(){
      let idx = 0
      let diffTime = 40;
      let lastDate = Date.now()
      let drawSkillFire = (() =>{
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/skills/fire-'+(idx)+'.png')
          img.onload = (() => {
            let x = that.position.enemy.x
            let y = that.position.enemy.y
            that.myskillCav.clearRect(x-10,y-35,100,200)
            that.myskillCav.drawImage(img, x-10, y-35,80,120)
          })
          idx++
          if(idx===5){
            that.drawHp(that.position.enemy.x + that.characterImg.enemy.width / 2,that.position.enemy.y,5500,2,1,2)
          }
          if(idx === 10){
            return
          }
          idx %= 10
        }
        requestAnimationFrame(drawSkillFire)
      })
      requestAnimationFrame(drawSkillFire)
    },
    skillAniAF(){
      let idx = 0
      let x = this.position.my.x + 100
      let y = this.position.my.y - 100
      // 先下坠
      let drawAni = (() => {
        let that = this
        let img = new Image()
        img.src = require('@/assets/frameimg/skills/af-0.png')
        img.onload = (() => {
          that.enemyskillCav.clearRect(x-idx,y+idx,110,110)
          that.enemyskillCav.drawImage(img, x-idx, y+idx,105,100)
        })
        idx += 8
        if(x-idx <= that.position.my.x){
          that.skillAniAFNext(x-idx, y+idx)
          that.drawHp(that.position.my.x,that.position.my.y,3800,2,2,5)
          return
        }
        requestAnimationFrame(drawAni)
      })
      requestAnimationFrame(drawAni)
    },
    skillAniAFNext(x,y){
      let idx = 0
      let diffTime = 100;
      let lastDate = Date.now()
      let drawAni = (() =>{
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/skills/af-'+(idx+1)+'.png')
          img.onload = (() => {
            that.enemyskillCav.clearRect(x-100,y-50,300,200)
            that.enemyskillCav.drawImage(img, x, y-50, 105,150)
            if(idx === 9){
              that.enemyskillCav.clearRect(x-100,y-50,300,200)
            }
          })
          if(idx === 9){
            return
          }
          idx++
          idx %= 10
        }
        requestAnimationFrame(drawAni)
      })
      requestAnimationFrame(drawAni)
    },
    deadAniRight(){
      let idx = 0
      let diffTime = 40;
      let lastDate = Date.now()
      let drawAni3 = (() =>{
        let curDate = Date.now()
        if(curDate - lastDate >= diffTime){
          lastDate = curDate

          let that = this
          let img = new Image()
          img.src = require('@/assets/frameimg/right_dead/npc_1616-'+(idx+1)+'.png')
          img.onload = (() => {
            let x = that.position.enemy.x
            let y = that.position.enemy.y
            that.enemyBaseCav.clearRect(x,y,x+70,y+90)
            that.enemyBaseCav.drawImage(img, x,y,x+70,y+90)
          })
          idx++
          idx %= 13
          if(idx === 12){
              return
            }
          }
        requestAnimationFrame(drawAni3)
      })
      requestAnimationFrame(drawAni3)
    }
  }
}
</script>

<style lang='stylus' src="./index.css" />
