/*
 * @Author: qinyushan
 * @Date: 2022-06-21 15:47:45
 * @LastEditTime: 2022-06-21 17:07:22
 * @LastEditors: qinyushan
 * @FilePath: \ssq\篮球开奖次数统计.js
 * @Description: 篮球开奖次数统计
 */
let obj = {}
let arr = []

export default function () {
    dataArr.forEach(item => {
        obj[item.backWinningNum]
            ? obj[item.backWinningNum] += 1
            : obj[item.backWinningNum] = 1
    })
    Object.keys(obj).forEach(key => {
        arr.push({
            '篮色号码': key,
            '出现次数': obj[key]
        })
    })
    return arr.sort((a, b) => a['出现次数'] - b['出现次数'])
}
