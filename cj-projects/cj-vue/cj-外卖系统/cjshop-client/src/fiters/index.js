// 自定义过滤器模块

// moment
/* import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateString', function (value, format) {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
}) */

import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('dateString', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})
