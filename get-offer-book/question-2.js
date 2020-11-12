/**
 * @description: 实现单例模式
 * **/

// eg: 实现一个单例模式的类, 类有属性为name

// 闭包方式实现
var Singleton = (function (name) {
  var instance = null;
  var SingletonClass = function (name) {
    this.name = name;
  };
  if (instance) {
    return instance;
  } else {
    instance = new SingletonClass(name);
  }
})("Wiihame");

class SingletonClassV2 {
  constructor(name) {
    this.name = name;
  }
  static getInStance(name) {
    if (!SingletonClassV2.instance) {
      SingletonClassV2.instance = new SingletonClassV2(name);
    } else {
      return SingletonClassV2.instance;
    }
  }
}
