<template>
	<div>
		<div class="orderItem" v-for="(item,key) in items">
			<header>
				<img src="http://img.alicdn.com/tps/i4/TB12mhwHVXXXXctXVXXAAT2HVXX-63-63.png" alt="" class="icon">
				<p class="title">{{item.goods[0].sellerNick}}</p>
			</header>
			<div class="goodInfo" v-for="good in item.goods">
				<div class="imgWrapper cell">
					<img :src="'http:'+good.imgUrl" alt="">
				</div>
				<div class="cell">
					<h4 class="title">{{good.title}}</h4>
					<p>
						<span class="params" v-for="(value,key) in good.params">{{key}}:{{value}},</span>
					</p>
					<div class="tag"></div>
				</div>
				<div class="text-r">
					<p class="price">¥ {{good.info.price.priceText}}.00</p>
					<p class="quantity">x{{good.quantity}}</p>
				</div>
			</div>
			<ul>
				<li class="list-item">
					<h4 class="title ">店铺优惠</h4>
					<p class="content cell">包邮活动</p>
					<div class=""><i class="icon"></i></div>
				</li>
				<li class="list-item">
					<h4 class="title ">配送方式</h4>
					<p class="content cell">快递 免邮费</p>
					<div class=""><i class="icon"></i></div>
				</li>
				<li class="list-item">
					<h4 class="title ">配送时间</h4>
					<p class="content cell">22:00前付款，预计3月29日(明天)送达</p>
					<div class=""><i class="icon"></i></div>
				</li>
				<li class="list-item">
					<h4 class="title cell">共{{item.totalQun}}件，合计:</h4>
					<p class="content price"><span class="icon-yuan fontS12">¥ </span>{{item.totalPrice| _parseInt}}<span class="icon-yuan fontS12">.{{item.totalPrice | sliceDecimal}}</span></p>
				</li>			
			</ul>
			
		</div>
		<div class="apply">
			<div class="text">
				<p>共<span class="price">{{totalQun}}</span>件,总金额 <span class="price fontS12">¥</span><span class="price">{{totalPrice | _parseInt}}</span><span class="price fontS12">.{{totalPrice | sliceDecimal}}</span></p>
			</div>
			<div class="submit" @click="submitOrder"><span>提交订单</span></div>
		</div>
		<div class="pay" ref="pay">
			<header class="box">
				<div class="shut flex-1"><span @click="setState('waitPay','等待付款',$event)" ></span></div>
				<div class="title flex-1">付款详情</div>
				<div class="flex-1"></div>
			</header>
			<ul>
				<li class="box"><h4>银行卡号</h4><p class="flex-1">6648****565545</p></li>
				<li class="box"><h4>付款方式</h4><p class="flex-1">在线支付</p></li>
				<li class="box totalPrice"><h4>需付款</h4><p class="flex-1">{{totalPrice | _parseInt}}.{{totalPrice | sliceDecimal}}元</p></li>
			</ul>
			<div class="btn">
				<button @click="setState('waitSend','等待发货',$event)">确认付款</button>
			</div>
		</div>
		<transition name="fade">
			<div class="mask" @click="setState('waitPay','等待付款',$event)" v-show="maskShow" style="position: fixed;z-index: 9998;top: 0;
			right: 0;left: 0;bottom: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,.8);"></div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:{},
				totalQun:0,
				totalPrice:0,
				maskShow:false,
				dirBuy:false,
			}
		},
		created(){

			if(/dir=(true)/.test(location.search)){
				this.items = JSON.parse(localStorage.jhsDirBuy);
				for(var i in this.items){
					var target = this.items[i];	
					console.log(target.goods)				
					target.totalQun = target.goods[0].quantity;
					target.totalPrice = target.totalQun * target.goods[0].info.price.priceText;
				}

				this.dirBuy = true;
			}else{
				this.items = JSON.parse(localStorage.order)
			}

			for(var i in this.items){
				this.totalQun += this.items[i].totalQun *1;
				this.totalPrice += this.items[i].totalPrice *1;
			}
		},
		mounted(){
			console.log(this.$refs.pay)
		},
		filters:{	
			_parseInt(value){
				return parseInt(value);
			},
			sliceDecimal(value){
				return value = value.toFixed(2).toString().split('.')[1];
			}
		},
		methods:{
			submitOrder(){				
				//localStorage.buyed = localStorage.order;
				localStorage.jhsCart = localStorage.rest;
				this.maskShow = true;
				$(this.$refs.pay).addClass('show');
				//this.showTips();
			},
			shut(){
				this.maskShow = false;
			},
			showTips(ev){
                var div = $('<div class="tips">订单已生成,将在3秒后自动返回首页</div>');
                div.appendTo($('body'));
                setTimeout(function(){
                    div.css('opacity',1);
                })
                
                setTimeout(function(){
                    div.remove();
                    location.href = 'index.html'
                },3000)
            },
            setState(state,stateText,ev){
            	var that = this;
            	var time = new Date()*1;
            	var allOrder = localStorage.allOrder?JSON.parse(localStorage.allOrder):[];

            	for(var i in this.items){

            		this.items[i].createTime = time;
            		this.items[i].id = i;
            		this.items[i].state = state;
            		this.items[i].stateText = stateText;
            		if(state === 'waitPay'){
            			this.items[i].deadline = time *1 + 1800000;
            		}
            		allOrder.push(this.items[i])
            		
            	}

            	this.maskShow = false;
            	$(this.$refs.pay).removeClass('show');

            	localStorage.allOrder = JSON.stringify(allOrder);

            	if(state === 'waitPay'){
            		setTimeout(function(){
            			location.href = "orderManage.html?type=1";
            		},1000)
            	}else if(state === 'waitSend'){
            			location.href = 'index.html';
            	}
           	
            },
		}
		
	}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
h4{
	font-weight: 400;
}
#app{
	padding-bottom: 60px;
}
.tips{
    position: fixed;
    opacity: 0;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.7);
    padding: 20px;
    z-index: 9999;
    color: #fff;
    font-size: 14px;
    border-radius: 6px;
    margin-left: -129px;
    margin-top: -17px;
    transition: all 300ms ease;
}
.apply{
	display: -webkit-box;
	height: 60px;
	line-height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	text-align: right;
}
.fontS12{
	font-size: 12px !important;
}
.apply .submit{
	background-color: #f50;
	color: #fff;
}
.submit span{
	padding: 0 20px;
}
.apply .text{
	-webkit-box-flex:1;
	padding: 0 10px;
}
.icon-yuan{
	font-size: 12px;
}
*{
	margin:0;
	padding: 0;
}
body{
    font: 400 14px/1.3 "Helvetica Neue",Helvetica,Arial,sans-serif,'\5b8b\4f53';
    color: #666;
    background-color: #f9f9f9;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}
.orderItem {
    margin-bottom: 9px;
    -webkit-box-shadow: 0 2px 5px 0 #eee, 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 2px 5px 0 #eee, 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 5px 0 #eee, 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
}
.orderItem header {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 9px;
    background-color: #fff;
}
.orderItem header .icon {
    -webkit-box-flex: 0!important;
    -webkit-flex: none!important;
    -ms-flex: none!important;
    flex: none!important;
    width: auto;
    margin-right: 9px;
    height: 21px;
    width: 21px;
}
.orderItem header .title{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    padding: 0!important;
    position: relative;
	margin-right: 15px;
	line-height: 1.4;
}
.goodInfo{
	 padding: 9px;
	 display: -webkit-box;
}
.goodInfo .imgWrapper{
    width: 92px!important;
    height: 92px;
    -webkit-box-flex: 0!important;
    -webkit-flex: none!important;
    -ms-flex: none!important;
    flex: none!important;
    margin-right: 9px;
}
.goodInfo .imgWrapper img{
	width: 100%;
    overflow: hidden;
    display: block;
}
.cell{
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    padding: 0!important;
    position: relative;
}
.goodInfo .title{
 	line-height: 1.2;
}
.goodInfo .params{
	color: #999;
	font-size: 12px;
}
.goodInfo .tag{    
	display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
	-webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.price{
    font-weight: bolder;
    font-size: 16px;
    color: #f50 !important;
}
.text-r{
	text-align: right;
	margin-left: 9px;
}
.list-item{
	display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background-color: #fff;
    color: #999;
    padding: 9px;
    line-height: 2;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
}
.list-item .title{
	margin-right: 9px;
    color: #666;
}
.list-item .content {
    text-align: right;
    color: #666;
    line-height: 28px;
}
.list-item .icon{
    width: 6.5px;
    height: 12px;
    background: url(http://img.alicdn.com/tps/i2/TB1e8C3IXXXXXb1XXXXkFJaFXXX-14-24.png) 50% 50% no-repeat;
    background-size: 100%;
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
</style>