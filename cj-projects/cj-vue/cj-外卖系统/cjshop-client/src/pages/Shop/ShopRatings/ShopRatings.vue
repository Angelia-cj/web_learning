<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评价</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <Split />

      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive" :class="{active: selectType===2}" @click="setSelectType(2)">
            全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" :class="{active: selectType===0}" @click="setSelectType(0)">
            满意
            <span class="count">{{positiveCount}}</span>
          </span>
          <span class="block positive" :class="{active: selectType===1}" @click="setSelectType(1)">
            不满意
            <span class="count">{{ratings.length-positiveCount}}</span>
          </span>
        </div>
        <div class="switch" :class="{on: onlyContent}" @click="toggleOnlyContent">
          <span class="iconfont icon-check-circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
            <div class="avater">
              <img width="28" height="28" :src="rating.avater">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="rating.rateType===0 ? 'icon-thumb_up' : 'icon-thumb_down'"></span>
                <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | dateString}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BScroll from '@better-scroll/core'
import Star from '../../../components/Star/Star.vue'
import Split from '../../../components/Split/Split.vue'
export default {
  data () {
    return {
      selectType: 2, // 选择显示的内容（2全部，0满意，1不满意）
      onlyContent: true // 是否只显示有文本的
    }
  },
  computed: {
    ...mapState(['info', 'ratings']),
    ...mapGetters(['positiveCount']),

    // 好评数量
    // positiveCount (state) {
    //   return state.ratings.reduce((preTotal, rating) => {
    //     return preTotal + (rating.rateType === 0 ? 1 : 0)
    //   }, 0)
    // },
    // 过滤后评价数量
    filterRatings () {
      // 得到相关的数据
      const ratings = this.ratings
      if (!ratings) {
        return []
      }
      const { selectType, onlyContent } = this
      // 产生一个过滤的新数组
      return ratings.filter(rating => {
        const { rateType } = rating
        /*
          条件1：
            selectType: 0/1/2
            rateType: 0/1  评价的类型
            selectType === 2 || selectType === rateType
          条件2：
            onlyContent: true/false
            text: 有值/没值
            !onlyContent || text.length > 0

          selectType: 2, //全部
          // rating.rateType(0/1)
          onlyContent: true // 是否只看有内容的
          //rating.text

          selectType: 0/1/2
          如果是 0/1 需要判断是否与 rating.rateType 相等, 如果是 2 就不
          需要
          onlyContent: true/false
          如果为 true 需要判断 rating.text 必须有值, 如果是 false
          就不需要
        */
        if (selectType === 2) {
          return !onlyContent || rating.text.length > 0
        } else {
          return selectType === rateType && (!onlyContent || rating.text.length > 0)
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('getShopRatings', () => {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.ratings, {
          click: true
        })
      })
    })
  },
  methods: {
    setSelectType (selectType) {
      this.selectType = selectType
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    toggleOnlyContent (onlyContent) {
      this.onlyContent = onlyContent
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  components: {
    Star,
    Split
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.ratings
  position absolute
  top 195px
  bottom 0
  left 0
  width 100%
  overflow hidden
  background #fff
  .overview
    display flex
    padding 18px 0
    .overview-left
      flex 0 0 137px
      padding 6px 0
      width 137px
      border-right 1px solid rgba(7, 17, 27, 0.1)
      text-align center
      @media only screen and (max-width 320px)
        flex 0 0 120px
        width 120px
      .score
        margin-bottom 6px
        line-height 28px
        font-size 24px
        color rgb(255, 153, 0)
      .title
        margin-bottom 8px
        line-height 12px
        font-size 12px
        color rgb(7, 17, 27)
      .rank
        line-height 10px
        font-size 10px
        color rgb(147, 153, 159)
    .overview-right
      flex 1
      padding 6px 0 6px 24px
      @media only screen and (max-width 320px)
        padding-left 6px
      .score-wrapper
        margin-bottom 8px
        font-size 0
        .title
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color rgb(7, 17, 27)
        .star
          display inline-block
          margin 0 12px
          vertical-align top
        .score
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color rgb(255, 153, 0)
      .delivery-wrapper
        font-size 0
        .title
          line-height 18px
          font-size 12px
          color rgb(7, 17, 27)
        .delivery
          margin-left 12px
          font-size 12px
          color rgb(147, 153, 159)
  .split
    width 100%
    height 16px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background #f3f5f7
  .ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size 0
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        line-height 16px
        border-radius 1px
        font-size 12px
        color rgb(77, 85, 93)
        background rgba(77, 85, 93, 0.2)
        &.active
          background $green
          color #fff
        .count
          margin-left 2px
          font-size 8px
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      color rgb(147, 153, 159)
      font-size 0
      &.on
        .icon-check-circle
          color $green
      .icon-check-circle
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        display inline-block
        vertical-align top
        font-size 12px
  .rating-wrapper
    padding 0 18px
    .rating-item
      display flex
      padding 18px 0
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex 0 0 28px
        width 28px
        margin-right 12px
        img
          border-radius 50%
      .content
        position relative
        flex 1
        .name
          margin-bottom 4px
          line-height 12px
          font-size 10px
          color rgb(7, 17, 27)
        .star-wrapper
          margin-bottom 6px
          font-size 0
          .star
            display inline-block
            margin-right 6px
            vertical-align top
          .delivery
            display inline-block
            vertical-align top
            line-height 12px
            font-size 10px
            color rgb(147, 153, 159)
        .text
          margin-bottom 8px
          line-height 18px
          color rgb(7, 17, 27)
          font-size 12px
        .recommend
          line-height 16px
          font-size 0
          .icon-thumb_up, .icon-thumb_down, .item
            display inline-block
            margin 0 8px 4px 0
            font-size 9px
          .icon-thumb_up
            color $yellow
          .icon-thumb_down
            color rgb(147, 153, 159)
          .item
            padding 0 6px
            border 1px solid rgba(7, 17, 27, 0.1)
            border-radius 1px
            color rgb(147, 153, 159)
            background #fff
        .time
          position absolute
          top 0
          right 0
          line-height 12px
          font-size 10px
          color rgb(147, 153, 159)
</style>
