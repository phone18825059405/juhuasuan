webpackJsonp([4],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "c:\\juhuasuan\\views\\cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98f41874", Component.options)
  } else {
    hotAPI.reload("data-v-98f41874", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			items: {},
			price: {},
			totalMoney: 0,
			totalQun: 0,
			isEmpty: true
		};
	},
	created: function created() {
		/*window.onunload = function(){
  	localStorage.jhsCart = JSON.stringify(this.items)
  }*/
		var count = 0;

		if (localStorage.jhsCart) {
			this.items = JSON.parse(localStorage.jhsCart);

			for (var i in this.items) {
				var that = this;
				if (that.items[i].goods.length < 1) return;
				that.items[i].goods.forEach(function (item) {
					//console.log(item)
					that.price[item.skuId] = item.info.price.priceText;

					count++;
				});
			}
			//console.log(that.price)
		}

		this.isEmpty = count > 0 ? false : true;
		//console.log(window)
	},

	filters: {
		_parseInt: function _parseInt(value) {
			return parseInt(value);
		},
		sliceDecimal: function sliceDecimal(value) {
			return value = value.toFixed(2).toString().split('.')[1];
		}
	},
	methods: {
		changeQun: function changeQun(str, ev) {
			var that = this;
			var max = $(ev.target).attr('max');
			var sellerId = $(ev.target).attr('data-sellerId');
			var index = this.findSkuId(ev.currentTarget);

			var value = this.items[sellerId].goods[index].quantity;
			if (str == 'minus') {
				value--;
				value = value < 1 ? 1 : value;
			} else {
				value++;
				value = value > max ? max : value;
			}
			this.items[sellerId].goods[index].quantity = value;
			//console.log(value);
			setTimeout(function () {
				that.countMoney();
			}, 17);

			localStorage.jhsCart = JSON.stringify(this.items);
		},
		delSkuObj: function delSkuObj(ev) {
			var that = this;
			console.log(ev.currentTarget);
			var sellerId = $(ev.target).attr('data-sellerId');
			var index = this.findSkuId(ev.target);
			this.items[sellerId].goods.splice(index, 1);

			localStorage.jhsCart = JSON.stringify(this.items);
			setTimeout(function () {
				that.countMoney();
			}, 17);
		},
		findSkuId: function findSkuId(ele) {

			var sellerId = $(ele).attr('data-sellerId');
			var skuId = $(ele).attr('data-skuId');
			var _index;
			this.items[sellerId].goods.forEach(function (item, index) {
				if (item.skuId == skuId) {
					_index = index;
					return;
				}
			});
			return _index;
		},
		findTargetParent: function findTargetParent(ele, classStr) {
			var target;
			while (ele = ele.parentElement) {
				if (ele.className == classStr) {
					target = ele;
					break;
				}
			}
			return target;
		},
		toggleEditor: function toggleEditor(ev) {
			if (ev.target.innerText === '编辑') {
				ev.target.innerText = '完成';
			} else {
				ev.target.innerText = '编辑';
			}
			var sellerEle = this.findTargetParent(ev.target, 'bundlev2');
			var goods = $('.group', sellerEle);

			goods.forEach(function (item) {
				var info2 = $('.item-info2', item)[0];
				var info = $('.item-info', item)[0];
				if (info.style.display == 'none') {
					info.style.display = '';
					info2.style.display = 'none';
				} else {
					info.style.display = 'none';
					info2.style.display = '';
				}
			});
		},
		selectRange: function selectRange(range, ev) {
			var that = this;
			var _boolean = ev.currentTarget.checked;
			//console.log(ev.currentTarget.checked)
			if (range === 'seller') {
				var parent = this.findTargetParent(ev.target);
				Array.prototype.forEach.call(document.querySelectorAll('input[data-skuId]', parent), function (item) {
					item.checked = _boolean;
				});
				//.checked = true;
			} else if (range === 'all') {
				Array.prototype.forEach.call(document.querySelectorAll('input[type="checkbox"]'), function (item) {
					item.checked = _boolean;
				});
			}
			setTimeout(function () {
				that.countMoney();
			}, 17);
		},
		countMoney: function countMoney(ev) {
			/*$('.group[data-skuId]').forEach(function(item){
   	var arr = [];
   	var input = $(item).find('input[data-skuId]');					
   })*/
			var that = this;

			this.totalMoney = 0;
			this.totalQun = 0;

			$('input:checked[data-skuId]').forEach(function (item, index) {
				//console.log(item)
				var item = $(item);

				var skuId = item.attr('data-skuId');
				var quantity = item.attr('data-quantity');
				console.log('quantity: ' + quantity);
				//console.log( that.total)
				that.totalMoney += that.price[skuId] * quantity;
				that.totalQun++;

				//console.log(item)
			});
		},
		addToOrder: function addToOrder(ev) {
			if (this.isEmpty) return;
			var that = this;
			var obj = {};
			var rest = {};

			var sellers = $('.bundlev2[data-seller');
			sellers.forEach(function (item) {
				var goods = $('input[data-skuId]', item);
				var seller = $(item).attr('data-seller');
				obj[seller] = {};
				rest[seller] = {};
				obj[seller].goods = [];
				rest[seller].goods = [];
				obj[seller].totalQun = 0;
				obj[seller].totalPrice = 0;

				goods.forEach(function (item2) {
					if (item2.checked) {

						that.items[seller].goods.forEach(function (item3, index3) {
							if (item3.skuId == $(item2).attr('data-skuId')) {
								obj[seller].totalQun += item3.quantity * 1;
								obj[seller].totalPrice += item3.quantity * item3.info.price.priceText;

								obj[seller].goods.push(item3);
							}
							return;
						});
					} else {

						that.items[seller].goods.forEach(function (item3, index3) {
							if (item3.skuId == $(item2).attr('data-skuId')) {
								rest[seller].goods.push(item3);
							}
							return;
						});
					}

					//console.log(that.items[item])
				});

				/*goods.forEach(function(item2){					
    	that.items[seller].goods.forEach(function(item3,index3){
    		console.log('index3: '+index3)
    		if(item3.skuId == $(item2).attr('data-skuId')){						
    			obj[seller].totalQun += item3.quantity * 1;
    			obj[seller].totalPrice += item3.quantity * item3.info.price.priceText;
    				obj[seller].goods.push(item3);
    		}else{
    			rest[seller].goods.push(item3);
    		}
    	})
    	//console.log(that.items[item])
    	
    })*/
			});
			localStorage.order = JSON.stringify(obj);
			localStorage.rest = JSON.stringify(rest);

			setTimeout(function () {
				location.href = 'order.html';
			}, 300);
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartbuy"
  }, [_vm._l((_vm.items), function(item, key) {
    return (item.goods.length) ? _c('div', {
      staticClass: "bundlev2",
      attrs: {
        "id": "bundlev2_s_126446588",
        "data-seller": key
      }
    }, [_c('div', {
      staticClass: "shop"
    }, [_c('div', {
      staticClass: "o-t-title-shop"
    }, [_c('div', {
      staticClass: "tcont"
    }, [_c('div', {
      staticClass: "shopcb"
    }, [_c('p', [_c('input', {
      staticClass: "o-t-cb",
      attrs: {
        "id": key,
        "type": "checkbox"
      },
      on: {
        "click": function($event) {
          _vm.selectRange('seller', $event)
        }
      }
    }), _c('label', {
      attrs: {
        "for": key
      }
    })])]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "contact"
    }, [_c('a', {
      attrs: {
        "href": "//shop.m.taobao.com/shop/shop_index.htm?shop_id=57301063"
      }
    }, [(item.goods.length) ? _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.goods[0].sellerNick))]) : _vm._e(), _vm._v(" "), _vm._m(1, true)])]), _vm._v(" "), _c('div', {
      staticClass: "state"
    }, [_c('div', {
      staticClass: "state-cont"
    }, [_c('p', {
      staticClass: "edit undefined",
      on: {
        "click": _vm.toggleEditor
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t编辑\n\t\t\t\t\t\t\t")])])])])])]), _vm._v(" "), _vm._l((item.goods), function(good) {
      return _c('div', {
        staticClass: "group",
        attrs: {
          "data-skuId": good.skuId
        }
      }, [_c('div', {
        staticClass: "itemv2 edit-false"
      }, [_c('div', {
        staticClass: "item-box"
      }, [_c('div', {
        staticClass: "item-list o-t-item undefined"
      }, [_c('div', {
        staticClass: "item-cb"
      }, [_c('p', [_c('input', {
        staticClass: "cb o-t-cb",
        attrs: {
          "data-skuId": good.skuId,
          "data-quantity": good.quantity,
          "id": good.skuId,
          "type": "checkbox"
        },
        on: {
          "click": _vm.countMoney
        }
      }), _c('label', {
        attrs: {
          "for": good.skuId
        }
      })])]), _vm._v(" "), _c('div', {
        staticClass: "item-detail"
      }, [_c('div', [_c('div', {
        staticClass: "item-img"
      }, [_c('a', {
        attrs: {
          "href": "//a.m.taobao.com/i544551041175.htm"
        }
      }, [_c('img', {
        staticClass: "lazy",
        attrs: {
          "src": 'http:' + good.imgUrl
        }
      })])]), _vm._v(" "), _c('div', {
        staticClass: "item-info"
      }, [_c('a', {
        attrs: {
          "href": "//a.m.taobao.com/i544551041175.htm"
        }
      }, [_c('h3', {
        staticClass: "title"
      }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('div', {
        staticClass: "sku"
      }, [_c('p', _vm._l((good.params), function(value, key) {
        return _c('span', [_vm._v(_vm._s(key) + ":" + _vm._s(value) + ",")])
      }))])]), _vm._v(" "), _c('div', {
        staticClass: "item-logos"
      }, [_c('div', {
        staticClass: "item-logo-text"
      }, [_c('div', {
        staticClass: "item-logo-title",
        staticStyle: {
          "color": "#FF5000"
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t限购" + _vm._s(good.info.limit) + "件\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span')])]), _vm._v(" "), _c('div', {
        staticClass: "pay"
      }, [_c('div', {
        staticClass: "pay-price"
      }, [_c('div', {
        staticClass: "price"
      }, [_c('p', {
        staticClass: "o-t-price",
        attrs: {
          "data-symbol": "￥"
        }
      }, [_c('span', [_c('span', {
        staticClass: "major"
      }, [_vm._v(_vm._s(good.info.price.priceText))]), _c('span', {
        staticClass: "point"
      }, [_vm._v(".")]), _c('span', {
        staticClass: "minor"
      }, [_vm._v("00")])])])]), _vm._v(" "), _c('div', {
        staticClass: "originPrice"
      }, [_c('p', [_c('del', [_vm._v("￥" + _vm._s(good.oldPrice))])])])]), _vm._v(" "), _c('div', {
        staticClass: "quantity"
      }, [_c('p', [_c('span', [_vm._v("x")]), _c('span', [_vm._v(_vm._s(good.quantity))])])])])]), _vm._v(" "), _c('div', {
        staticClass: "item-info2",
        staticStyle: {
          "display": "none"
        }
      }, [_c('div', {
        staticStyle: {
          "-webkit-box-flex": "1"
        }
      }, [_c('div', {
        staticClass: "edit-quantity"
      }, [_c('p', {
        staticClass: "btn-minus"
      }, [_c('a', {
        staticClass: "btn minus off",
        attrs: {
          "data-sellerId": key,
          "data-skuId": good.skuId,
          "min": "1"
        },
        on: {
          "click": function($event) {
            _vm.changeQun('minus', $event)
          }
        }
      })]), _vm._v(" "), _c('p', {
        staticClass: "btn-input"
      }, [_c('input', {
        attrs: {
          "type": "tel",
          "max": good.info.limit,
          "min": "1"
        },
        domProps: {
          "value": good.quantity
        }
      })]), _vm._v(" "), _c('p', {
        staticClass: "btn-plus"
      }, [_c('a', {
        staticClass: "btn plus",
        attrs: {
          "data-sellerId": key,
          "data-skuId": good.skuId,
          "max": good.info.limit
        },
        on: {
          "click": function($event) {
            _vm.changeQun('add', $event)
          }
        }
      })])]), _vm._v(" "), _c('div', {
        staticClass: "edit-sku"
      }, [_c('div', [_c('p', _vm._l((good.params), function(value, key) {
        return _c('span', [_vm._v(_vm._s(key) + ":" + _vm._s(value) + ",")])
      }))])])]), _vm._v(" "), _c('div', {
        staticClass: "item-del c-edit-delshow",
        staticStyle: {
          "-webkit-box-flex": "1"
        },
        attrs: {
          "data-sellerId": key,
          "data-skuId": good.skuId
        },
        on: {
          "click": _vm.delSkuObj
        }
      }, [_vm._v("删除")])])])]), _vm._v(" "), _vm._m(2, true)])]), _vm._v(" "), _vm._m(3, true), _vm._v(" "), _c('div', {
        staticClass: "op2"
      })])])
    })], 2) : _vm._e()
  }), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "f-fx"
  }, [_c('div', [_c('div', {
    staticClass: "ft-cb"
  }, [_c('p', [_c('input', {
    staticClass: "cb o-t-cb",
    attrs: {
      "id": "cb-footer",
      "type": "checkbox"
    },
    on: {
      "click": function($event) {
        _vm.selectRange('all', $event)
      }
    }
  }), _c('label', {
    attrs: {
      "for": "cb-footer"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "qx"
  }, [_vm._v("\n\t\t\t\t\t全选\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "pay"
  }, [_c('div', [_c('div', [_c('span', {
    staticClass: "hj"
  }, [_vm._v("合计：")]), _vm._v(" "), _c('p', {
    staticClass: "o-t-price",
    attrs: {
      "data-symbol": "￥"
    }
  }, [_c('span', [_c('span', {
    staticClass: "major"
  }, [_vm._v(_vm._s(_vm._f("_parseInt")(_vm.totalMoney)))]), _c('span', {
    staticClass: "point"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "minor"
  }, [_vm._v(_vm._s(_vm._f("sliceDecimal")(_vm.totalMoney)))])])])]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t\t\t\t\t不含运费\n\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.addToOrder
    }
  }, [_c('p', [_c('span', [_vm._v("结算")]), _c('span', [_vm._v("(")]), _c('span', [_vm._v(_vm._s(_vm.totalQun))]), _c('span', [_vm._v(")")])])])])])]), _vm._v(" "), (_vm.isEmpty) ? _c('div', {
    staticClass: "emptyCart",
    staticStyle: {
      "position": "fixed",
      "z-index": "-1",
      "top": "0",
      "left": "0",
      "right": "0",
      "bottom": "0",
      "width": "100%",
      "height": "100%",
      "display": "-webkit-box",
      "-webkit-box-pack": "center",
      "-webkit-box-align": "center"
    }
  }, [_vm._m(4)]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ico"
  }, [_c('span', {
    staticClass: "shopIco_B"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "arrow"
  }, [_c('span', {
    staticClass: "icon-right"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item-del c-edit-delhide"
  }, [_c('p', [_vm._v("\n\t\t\t\t\t\t\t\t删除\n\t\t\t\t\t\t\t")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "op"
  }, [_c('div', {
    staticClass: "item-del c-edit-delhide"
  }, [_c('p', [_vm._v("\n\t\t\t\t\t\t\t删除\n\t\t\t\t\t\t")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "centerbox"
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin": "0 auto",
      "width": "60%"
    },
    attrs: {
      "src": "public/images/emptyCart.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "0.325rem",
      "margin-top": "0.125rem"
    }
  }, [_vm._v("购物车空啦，再忙也要买点东西")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-98f41874", module.exports)
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueLazyload = __webpack_require__(2);

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _webpackZepto = __webpack_require__(0);

var _webpackZepto2 = _interopRequireDefault(_webpackZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueLazyload2.default, {
  preLoad: 1.3,
  error: 'dist/404.png',
  loading: 'dist/loading-spin.svg',
  attempt: 1
});

new _vue2.default({
  el: "#app",
  components: {
    cart: __webpack_require__(25)
  }
});

/***/ })

},[46]);