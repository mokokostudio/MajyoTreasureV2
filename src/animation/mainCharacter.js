export function MainCharacter(_type, _cavCtx, _element, _dpr){
  this.mainCav = _cavCtx
  this.mainElement = _element
  this.dpr = _dpr
  this.status = 0 // 0 刚初始化   1 move   2 stand  3 atk  4 战斗结束
  this.isWin = 0 // 0 初始化  1 是  2 否
  this.type = _type // 1 自己  2 对手
  this.width = 100
  this.height = 94
  this.source = _type === 1 ? 'main_toright' : 'main_toleft'
  this.xStand = this.type === 1 ? 0 : this.mainElement.width / this.dpr - this.width
  this.yStand = this.mainElement.height/ this.dpr / 2 - this.height / 2
  this.moveAtr = {
    direction : this.type === 1 ? 1 : -1,
    xStart : this.xStand,
    yStart : this.yStand,
    xEnd : this.type === 1 ? this.mainElement.width / this.dpr / 2 - this.width - 40 : this.mainElement.width / this.dpr / 2 + 40
  }

  this.finish = function(_isWin){
    this.isWin = _isWin ? 1 : 2
    let time = setInterval(() => {
      if(this.status == 2){
        this.status = 4
        console.log("finish === ", this)
        clearInterval(time)
      }
    },100)
  }

  this.stand = function(_fps){
    let wait = 0
    let diffTime = _fps;
    let lastDate = Date.now()
    let doDraw = (() =>{
      //console.log('type ',this.type," status ", this.status)
      // if(wait == 20){
      //   return
      // }
      //console.log("stand ",this.xStand, this.yStand)
      wait++
      let curDate = Date.now()
      if(curDate - lastDate >= diffTime){
        lastDate = curDate
        let that = this
        let img = new Image()
        img.src = require('@/assets/frameimg/'+that.source+'/nvzhu-attack_0.png')
        img.onload = (() => {
          that.mainCav.clearRect(0, 0, that.mainElement.width, that.mainElement.height)
          that.mainCav.drawImage(img, that.xStand, that.yStand, that.width, that.height)
        })
        if(this.status !== 2){
          return
        }
      }
      requestAnimationFrame(doDraw)
    })
    requestAnimationFrame(doDraw)
  }

  this.move = function(_fps){
    this.status = 1
    let idx = 0
    let movediff = 0
    let diffTime = _fps; // 动画最小时间间隔,单位 ms
    let lastDate = Date.now()
    let doDraw = (() =>{
      let curDate = Date.now()
      if(curDate - lastDate >= diffTime){
        lastDate = curDate
        let that = this
        let img = new Image()
        console.log(idx)
        img.src = require('@/assets/frameimg/'+that.source+'/nvzhu-move_' + idx + '.png')
        img.onload = (() => {
          that.mainCav.clearRect(0, 0, that.mainElement.width, that.mainElement.height)
          that.mainCav.drawImage(img, that.xStand, that.yStand, that.width, that.height)
        })
        that.xStand = that.moveAtr.xStart + movediff * that.moveAtr.direction
        if(that.xStand * that.moveAtr.direction < that.moveAtr.xEnd * that.moveAtr.direction){
          movediff += 5;
        }else{
          that.status = 2
          that.stand(120)
          return
        }
        idx++
        idx %= 8
      }
      requestAnimationFrame(doDraw)
    })
    requestAnimationFrame(doDraw)
  }

  this.attack = function(_fps){
    this.status = 3
    let idx = 0
    let diffTime = _fps;
    let lastDate = Date.now()
    let doDraw = (() =>{
      let curDate = Date.now()
      if(curDate - lastDate >= diffTime){
        lastDate = curDate
        let that = this
        let img = new Image()
        console.log(idx)
        img.src = require('@/assets/frameimg/'+that.source+'/nvzhu-attack_' + idx + '.png')
        img.onload = (() => {
          that.mainCav.clearRect(0, 0, that.mainElement.width, that.mainElement.height)
          that.mainCav.drawImage(img, that.xStand, that.yStand, that.width, that.height)
        })

        idx++
        if(idx == 16){
          that.status = 2
          that.stand(120)
          return
        }
        idx %= 16
      }
      requestAnimationFrame(doDraw)
    })
    requestAnimationFrame(doDraw)
  }


}
