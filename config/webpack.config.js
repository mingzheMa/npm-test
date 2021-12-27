const path = require("path")

module.exports = {
  mode: "none", // 模式
  entry: path.resolve(__dirname, "../src/index.js"), // 入口
  // 出口
  output: {
    filename: "index.js", // 文件名
    path: path.resolve(__dirname, "../dist") // 文件路径
  }
}
