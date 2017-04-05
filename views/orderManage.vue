<template>
	<div>
		<div class="fixed-top">
	        <header>
	            <div class="back flex-1"><span></span></div>
	            <h3 class="title flex-1 flex-center">订单管理</h3>
	            <div class="flex-1"></div>
	        </header>
	        <div class="nav-bar">
	            <ul> 
	                 <li data-index="0" data-code="all"      @click="changeTabs" v-bind:class="[curTabs==0?'cur':'']">全部</li>
	                 <li data-index="1" data-code="waitPay"  @click="changeTabs" v-bind:class="[curTabs==1?'cur':'']">待付款</li>
	                 <li data-index="2" data-code="waitSend" @click="changeTabs" v-bind:class="[curTabs==2?'cur':'']">待发货</li>
	                 <!--<li data-code="waitConfirm" class="">待收货</li>
	                 <li data-code="waitRate" class="">待评价</li> -->
	             </ul>
	        </div>
	    </div>
	    <div class="order">
	        <ul class="order-list">
	            <li v-for="item in current">
	                <div data-id="">
	                    <div class="header-title box">
	                        <div class="icon box flex-center"><img src="http://img.alicdn.com/tps/i4/TB12mhwHVXXXXctXVXXAAT2HVXX-63-63.png" alt=""></div>
	                        <div class="seller-link flex-1"><a href="javascript:">{{item.goods[0].sellerNick}}</a></div>
	                        <div class="state"><span>{{item.stateText}}</span></div>
	                    </div>
	                    <div v-for="good in item.goods" class="main box">
	                        <div class="img"><img v-lazy="'http:'+good.imgUrl" alt=""></div>
	                        <div class="info flex-1">
	                            <h4 class="title">{{good.title}}</h4>
	                            <p class="params">
	                            	<span v-for="(value,key) in good.params">{{key}}:{{value}};</span>
	                            </p>
	                            <ul class="tag"><li>七天退换</li></ul>
	                        </div>
	                        <div class="pay">
	                            <div>
	                                <p class="price">￥{{good.info.price.priceText}}</p>
	                                <p class="price"><del>￥{{good.oldPrice}}</del></p>
	                                <p class="nums">x{{good.quantity}}</p>
	                            </div>                            
	                        </div>
	                    </div>
	                    <div class="service box">
	                        <div class="flex-1">
	                            <h5 class="title ">保险服务</h5>
	                            <p></p>
	                        </div>                        
	                        <div class="pay-data">
	                            <p class="price">￥0.00</p>
	                            <p class="nums">x1</p>
	                        </div>
	                    </div>
	                    <div class="total-price">
	                        <span>共{{item.totalQun}}件商品</span>
	                        <span>合计：¥ {{item.totalPrice}}</span>
	                        <span>(含运费 ¥: 0.00)</span>
	                    </div>
	                    <div class="operation">
	                        <ul class="clearfix">	                            
	                            <li v-if="item.state === 'dead'" :data-time="item.createTime" @click="deleteOrder">删除订单</li>
	                            <li v-if="item.state === 'waitSend'" :data-time="item.createTime" @click="deleteOrder">取消订单</li>
	                            <li v-if="item.state === 'waitPay'" :data-time="item.createTime" @click="deleteOrder">取消订单</li>
	                            <li v-if="item.deadline" :data-time="item.createTime" @click="toggleShow">付款</li>
	                        </ul>
	                    </div>
	                </div>
	            </li>
	        </ul>
	    </div>
	    <div class="pay" ref="pay">
			<header class="box">
				<div class="shut flex-1"><span @click="toggleShow" ></span></div>
				<div class="title flex-1">付款详情</div>
				<div class="flex-1"></div>
			</header>
			<ul>
				<li class="box"><h4>银行卡号</h4><p class="flex-1">6648****565545</p></li>
				<li class="box"><h4>付款方式</h4><p class="flex-1">在线支付</p></li>
				<li class="box totalPrice"><h4>需付款</h4><p class="flex-1">7855.99元</p></li>
			</ul>
			<div class="btn">
				<button @click="pay">确认付款</button>
			</div>
		</div>
		<transition name="fade">
			<div class="mask"  v-show="maskShow" style="position: fixed;z-index: 9998;top: 0;
			right: 0;left: 0;bottom: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,.8);"></div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				all:[],
				waitPay:[],
				waitSend:[],
				current:[],
				curTabs:0,
				maskShow:false,
				tempOperId:'',		
			}
		},
		created(){
			var nowTime = new Date()*1;
			var that = this;

			this.all = JSON.parse(localStorage.allOrder);

			this.all.forEach(function(item){
				if(item.state === 'waitSend'){
					that.waitSend.push(item);
				}
				else if(item.state === 'waitPay'){
					if(item.deadline > nowTime){
						that.waitPay.push(item);
					}else{
						item.state = 'dead';
						delete item.deadline;
						item.stateText = '交易关闭';
					}
				}
			})

			localStorage.allOrder = JSON.stringify(this.all);

			var index = location.search.match(/type=([0-9]+)/)[1];
			this.curTabs = index;
			switch(index){
				case '0':
					this.current = this.all;
					break;

				case '1':
					this.current = this.waitPay;
					break;

				case '2':
					this.current = this.waitSend;
					break;
			}

		},
		methods:{
			changeTabs(ev){
				var index = $(ev.target).attr('data-index');
				var type = $(ev.target).attr('data-code');

				this.current = this[type];
				this.curTabs = index;
				location.search = '?type=' +index;
			},
			toggleShow(ev){
				this.maskShow = !this.maskShow;
				$(this.$refs.pay).toggleClass('show');

				this.tempOperId = $(ev.target).attr('data-time');
			},
			pay(ev){
				var that = this;
				var now = new Date()*1;
				this.all.forEach(function(item){

					if(item.createTime == that.tempOperId){
						
						if(item.deadline > now){							
							item.state = 'waitSend';
							item.stateText = '等待发货';
						}else{
							item.state = 'dead';						
							item.stateText = '交易关闭';
							alert('操作超时，交易已结束');
						}

						delete item.deadline;

						localStorage.allOrder = JSON.stringify(that.all);
						that.tempOperId = '';

						return;
					}
				})

				this.maskShow = !this.maskShow;
				$(this.$refs.pay).toggleClass('show');	
				location.reload();					
			},
			deleteOrder(ev){
				var that = this;
				var createTime = $(ev.target).attr('data-time');
				this.all.forEach(function(item,index,arr){
					if(createTime == item.createTime){
						arr.splice(index,1);
						localStorage.allOrder = JSON.stringify(that.all);
						return;
					}
				})
				location.reload();
			}
		}
	}
</script>

<style>
*{
    padding: 0;
    margin:0;
}
a{
    text-decoration: none;
}
h3,h4,h5{
    font-weight: 400;
}
body{
    background-color: #f5f5f5;
}
ul{
    list-style: none;
}
img{
    max-width: 100%;
    display: block;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
/*.clearfix{*+height:1%;}*/

.fixed-top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
}
header{
    background: #fff;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    border-bottom: 1px solid #e7e7e7;
    height: 45px;
    line-height: 45px;
}
header .title{
    font-weight: 400;
    text-align: center;
}
header .back span{
    display: block;
}
header .back span:after{
    content: "";
    position: absolute;
    left: 20px;
    top: 14px;
    width: 14px;
    height: 14px;
    border-left: 2px solid #999;
    border-bottom: 2px solid #999;
    display: inline-block;
    -webkit-transform:rotate(45deg);
    border-radius: 1px;
}
.flex-1{
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.box{
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
}
.flex-center{
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
}
.nav-bar{
    background-color: #fff;
}
.nav-bar ul{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;

    height: 44px;
    line-height: 44px;
}
.nav-bar li{
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    text-align: center;
    font-size: 14px;
}
.nav-bar li.cur {
    border-bottom: 2px solid #ff5000;
    box-sizing: border-box;
    color: #ff5000;
}

.order{
    padding-top: 90px;
    font-size: 14px;
    margin-top: 8px;
}
.order-list>li {
    margin-bottom: 8px;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
    background-color: #fff;
}
.order-list .header-title{
    padding: 0 14px;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    -webkit-box-pack:center;
}
.order-list .main{
    font-size: 12px;
    padding: 6px 14px;
    font-weight: 400;
    background-color: #f2f2f2;
}
.order-list .img{
    margin-right: 14px;
    width: 66px;
}
.order-list .main .info .title{
    padding:0;
    height: auto;
    line-height: 1.2;
}
.order-list .header-title .icon{
    width: 18px;
    margin-right: 11px;
}
.order-list .title .state{
    text-align: right;
}
.order-list .title .state span{
    color: #ff5000;
}

.order-list .main .img{
    width: 66px;
    height: 66px;
    margin-right: 12px;
}
.info .title, .info .params{
    overflow: hidden;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    box-orient: vertical;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    word-break: break-all;
}
.order-list .main .info .params{
    margin-top: 5px; 
    color: #999;
}
.order-list .main .tag{
    background: #f5f5f5;
    box-sizing: border-box;
}
.tag li{
    display: inline-block;
    background: #ff5000;
    color: #fff;
    margin: 6px 6px 0 0;
    padding: 2px 6px;
}
.order-list .pay{
    width: 82px;
    font-size: 14px;
    text-align: right;
}

.order-list .price{
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
del{
    color: #999;
}
.order-list .nums{
    color: #999;
}
.order-list .service{
    padding: 0 14px;
    background-color: #f2f2f2;
}
.order-list .service .pay-data{
    text-align: right;
}
.order-list .total-price{
    text-align: right;
    line-height: 44px;
    height: 44px;
    padding-right: 14px;
    border-bottom: 1px solid #f0f0f0;
}
.order-list .total-price>*{
    display: inline-block;
    margin-left: 13px;
}
.order-list .operation{
    padding-right: 14px;
    line-height: 48px;
    height: 48px;
}
.operation li{
    height: 32px;
    line-height: 32px;
    padding: 0 11px;
    margin:6px 6px 0 6px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    display: inline-block;
    float: right;
}

/*--------------*/
	.pay{
		transition: transform 300ms ease;
		-webkit-transition: transform 300ms ease;
		transform: translateY(100%);
		-webkit-transform: translateY(100%);
		z-index: 9999;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		background-color: #fff;
		min-height: 60%;
		visibility: hidden;
	}
	.pay.show{
		transform: translateY(0);
		-webkit-transform: translateY(0);
		visibility: visible;
	}
	.pay header{
		height: 44px;
		line-height: 44px;
		border-bottom: 1px solid #f0f0f0;
	}
	.pay header .shut span{
		display: block;
		position: relative;
	}
	.shut span:after{
		content: "+";
		position: absolute;
		font-size: 35px;
		top: 0;
		left: 10px;
		transform: rotate(45deg);
	}
	.pay .title{
		text-align: center;
		font-size: 16px;
	}
	.pay>ul{
		min-width: 50%;
	}
	.pay>ul>li{
		border-bottom: 1px solid #f0f0f0;
		line-height: 48px;
		height: 48px;
		padding: 0 14px;
		color: #999
	}
	.pay>ul>li:last-children{
		border-bottom: none;
	}
	.pay>ul>li p {
		text-align: right;
	}
	.pay>ul>li.totalPrice{
		color: #000;
	}
	.pay>ul>li.totalPrice p{
		font-size: 18px;
	}
	.box{
		display: box;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-box;
		display: -o-box;
	}
	.flex-1{		
		-webkit-box-flex:1;
		-moz-box-flex:1;
		-ms-box-flex:1;
		-o-box-flex:1;
		box-flex:1;
	}
	.pay .btn{
		position: absolute;
		left: 0;
		bottom:0;
		right: 0;
		width: 100%;
		padding: 20px 14px;
		box-sizing: border-box;		
	}
	.pay .btn button{
		width: 100%;		
		line-height: 46px;
		height: 46px;
		text-align: center;
		background-color: #ff5000;
		color: #fff;
		font-size: 18px;
		border:none;
		border-radius: 4px;
	}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>