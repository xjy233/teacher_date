const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatTime2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
const formatTime3 = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':')
}
module.exports = {
  formatTime: formatTime,
  formatTime2: formatTime2,
  formatTime3: formatTime3,
  insertSchedule: insertSchedule,
  getSchedule: getSchedule,
  getDates: getDates,
  formatDate: formatDate
}

//数据库操作
//插入日程
function insertSchedule(site, classes, content, timeStart, timeEnd, zao_zhong_wan) {
  wx.request({
    url: 'http://123.207.168.242//beeapi/beedata/insert/', //仅为示例，并非真实的接口地址
    data: {
      //未实现
      teacher_id:'123',
      name: '莫同',   /*在这里可以选择插入数据库的老师*/
      //已实现
      site: site,
      classes: classes,
      content: content,
      timeStart: timeStart,
      timeEnd: timeEnd,
      zao_zhong_wan: zao_zhong_wan
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.data)
    }
  })
}

//返回日程公示信息
/*已更新到schedule这里是个备份，请到schedule里修改要查的老师*/
function getSchedule (currunt_time_sta) {
  var that = this;
  /*变量赋值*/
  wx.request({
    url: 'http://123.207.168.242/beeapi/beedata/getSchedule/', //仅为示例，并非真实的接口地址
    data: {
      //还未找到更简便写法，先写成这样,在后端再分解jason
      datajason: {
        name: ['莫同', '方越坚', '郁莲'],  /*修改即可得到要查的老师 */
        currunt_time_sta: currunt_time_sta + '0:00:00'
      }
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      //加载对应值
      that.setData({
        teacherdata: res.data
      })
    }
  })

}


//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
function getDates(days, todate) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}

function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('日', '一', '二', '三', '四', '五', '六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.day = dayFormate;
  dateObj.week = show_day[day];
  return dateObj;
}


//得到时间格式2018-10-02

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}


function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}
module.exports.json2Form = json2Form