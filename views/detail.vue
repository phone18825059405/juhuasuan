<template>
	<div class="main" style="padding-bottom: 50px;">
		<!-- banner图片 -->
		<div class="slider"></div>
		<!-- 商品信息 -->
		<div id="J_itemInfo" data-spm="iteminfo">
			<div class="pricebar" id="J_PriceBar">
				<div class="subleft avil">
					<div class="price ">
						¥<strong class="small">{{baseInfo.activityPrice | removeEnd2}}</strong>
					</div>
					<div class="information">
						<div class="soldcount">
							<span>{{baseInfo.soldCount}}</span>件已售
						</div>
						<div class="oprice">
							<del>¥ {{baseInfo.originalPrice | removeEnd2}}.00</del>
						</div>
					</div>
				</div>
				<div class="countdown">
					<div id="J_CountDownTxt" class="txt">
						距结束仅剩
					</div>
					<div class="clockrun">
						<span class="num" id="J_TimeHour">{{timeObj.h}}</span><span class="dot">:</span><span class="num" id="J_TimeMin">{{timeObj.m}}</span><span class="dot">:</span><span class="num" id="J_TimeSec">{{timeObj.s}}</span><span class="dot">.</span><span class="num" id="J_TimeWSec">{{timeObj.f}}</span>
					</div>
				</div>
			</div>
			<div class="item-info">
				<h1>{{baseInfo.shortName}}</h1>
				<ul class="itemfeatures J_itemFeatures">
					<li v-for="item in baseInfo.picFeature.itemFeatures">{{item}}</li>
				</ul>
			</div>
			<div class="item-info">
				<div id="julogo" class="julogo">
					<div data-type="icon" class="icon logo">
						
					</div>
				</div>
				<ul class="showtagnames J_showTagNames">
					<li v-for="item in baseInfo.showTagNames">{{item}}</li>
				</ul>
			</div>
		</div>
		<!-- 淘宝天猫信息 -->
		<div id="J_WDetailInfo" data-spm="wdetailinfo">
			<div class="item-info" data-spm="iteminfo">
				<div class="tmallcoupon J_TmallCoupon" data-spm-click="gostr=/jhs;locaid=tmallcoupon">
					<a><img src="http://img.alicdn.com/tps/TB1okcBKVXXXXbBXVXXXXXXXXXX-116-32.png" height="16"><span class="text-wrap">                 全天猫实物商品通用</span></a>
				</div>
			</div>
		</div>
		<!-- 请选择商品的颜色尺寸等信息 -->
		<div id="J_showSku" data-spm="skubar" @click="chooseByMethod('false',$event)"> 
		   <div class="showskubar" data-spm-click="gostr=/jhs;locaid=skubar"> 
		      <span class="buytext">请选择商品的颜色尺寸等信息</span> 
		      <span class="icon"></span> 
		   </div> 
		</div>
		<!-- 评价概况 -->
		<div id="J_MinItemEval" data-spm="minieval">
			<div class="minitemeval">
				<div class="tit J_FirstRate" data-spm-click="gostr=/jhs;locaid=minieval_tit" @click="showRated">
					<em>{{rated.allNum}}</em>条评价<span class="icon"></span>
				</div>
				<div class="evallist" data-spm-click="gostr=/jhs;locaid=minieval_first">
					<ul>
						<li class="evalli">
						<div class="userinfo">
							<span class="nick">{{rated.current[0].userNick}}</span><span class="section" style="width:56px"><img :src="'http:'+rated.current[0].userStarPic"></span>
						</div>
						<div class="evalcon">{{rated.current[0].feedback}}</div>
						<div class="otherinfo">
							<span>{{rated.current[0].feedbackDate}}</span><span>颜色分类:V领粉色;尺码:M</span>
						</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 店铺详情 -->
		<div id="J_shopH5Desc">
			<div class="shopdes">
				<img class="shoppic" :src="'http:'+seller.picUrl">
				<div class="shopname">{{seller.nick}}</div>
				<img class="tm_icon" src="http://gtms04.alicdn.com/tps/i4/TB1ipsxIVXXXXauXXXXPDprHFXX-176-24.png">
				<ul class="shopasess">
					<li>宝贝描述:<span class="red">{{seller.evaluateInfo[0].score}}</span><span class="grade bad">低</span></li>
					<li>卖家服务:<span class="red">{{seller.evaluateInfo[1].score}}</span><span class="grade good">平</span></li>
					<li>物流服务:<span class="red">{{seller.evaluateInfo[2].score}}</span><span class="grade good">高</span></li>
				</ul>
			</div>
		</div>
		<!-- 宝贝描述，评价，参数tab -->
		<div id="J_TabWrap" class="tabwrap" data-spm="tabs" style="height: 42px;">
			<div class="jutabs" id="J_Tabs" :style="{position:scrollTop>=tabsOffsetT?'fixed':'relative'}">
				<div class="stab-wrap" data-spm="stab">
					<div class="stab-scroll-wrap">
						<div class="stab-scroll" style="width: 100%;">
							<div class="stab-canvas" style="width: 300px;">
								<ul>
									<li data-index="0" v-bind:class="[tabs==0?'stab-current':'']" @click="changeTab('tabs',$event)">详情</li>
									<li data-index="1" v-bind:class="[tabs==1?'stab-current':'']" @click="changeTab('tabs',$event)">评价</li>
									<li data-index="2" v-bind:class="[tabs==2?'stab-current':'']" @click="changeTab('tabs',$event)">参数</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="tools-bot" data-spm="tools" style="top: 526px;">
					<div class="btn gototop J_GoToTop" @click="scrollToTop">
						
					</div>
				</div>
			</div>
		</div>
		<!-- 宝贝描述，评价，参数content -->
		<div class="topnav">
			<div class="btngroup">
				<a data-type="icon" class="btn gotocart" href="cart.html"></a><a data-type="icon" class="btn gohome" href="index.html"></a>
			</div>
			<div id="J_shopSku" class="shopsku" data-spm="sku" style="display: none;">
				<div>
					<div class="d-prop">
						<div class="dp-top">
							<div class="dpt-l">
								<img class="J_pimg" :src="'http://gtd.alicdn.com/tps'+img+'_100x100q90.jpg'">
							</div>
							<div class="dpt-r">
								<div class="dpt-rt" id="J_detail_skupr">
									<span class="dpt-pri">¥{{price}}</span>(库存{{quantity}}件)
								</div>
								<span class="dpt-opt J_skutext" v-html="message"></span>
							</div>
							<div class="dpt-c J_dclose" @click="toggleSku('',$event)">
							</div>
						</div>
						<div class="J_skuEle">
							<div class="J_skuScroll">
								<div class="dp-cont">
									<div v-for="item in skuProps" class="dpc-p">
										<div class="dpc-tl">{{item.propName}}</div>
										<div class="dpc-pr" propname="尺码">
											<span v-for="value in item.values" :data-img="value.imgUrl?value.imgUrl:''" class="J_skuspan" :data-id="item.propId+':'+value.valueId" @click="togglebtn">{{value.name}}</span>
										</div>
									</div>
								</div>
								<div class="dp-num">
									<div class="dpn-l">
										购买数量
									</div>
									<div class="dpn-r">
										<span class="dpn-del J_buydel" @click="changeCurQun('minus',$event)"></span><span class="dpn-buy J_buytext">{{curQuantity}}</span><span class="dpn-add J_buyadd" @click="changeCurQun('add',$event)"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="dp-btom">
							<span id="J_skubton" class="dp-bton" @click="addToCart">{{buyBtnText}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- -->
        <ul id="J_TabCon" class="tabcomwap">
            <li id="J_itemH5Desc" v-show="tabs == 0 "> 
                <div class="h5-desc">
                    <div id="J_pages" class="des-pages">
                        <img v-for="item in imgInfo"  v-if="item.params.picUrl" width="100%" class="des-alimg" v-lazy="item.params.picUrl">
                    </div>
                </div>
            </li>
            <li id="J_itemEval" data-spm="evallist" v-show="tabs == 1">
                <ul class="taglist" id="J_TagList" style="display: block;">
                    <li :class="rated.currentTabs == 0?'on':''" @click="changeRateTab" data-index="0" data-type="all">全部({{rated.allNum}})</li>
                    <li :class="rated.currentTabs == 1?'on':''" @click="changeRateTab" data-index="1" data-type="hasFeedback">追加评论({{rated.feedbackNum}})</li>
                    <li :class="rated.currentTabs == 2?'on':''" @click="changeRateTab" data-index="2" data-type="hasImg">有图({{rated.imgNum}})</li>
                </ul>
                <div id="J_EvalList">
                    <div class="evallist">
                        <ul>
                            <li v-for="item in rated.current" class="evalli">
                                <div class="userinfo">
                                    <span class="nick">{{item.userNick}}</span>
                                    <span class="section"><img :src="'http:'+item.userStarPic"></span>
                                </div>
                                <div class="evalcon">{{item.feedback}}</div>
                                <ul class="evalpiclist J_EvalPicList">
                                    <li v-for="img in item.feedPicPathList">
                                    <img :data-big="'http:'+img" :src="'http:'+img+'_60x60.jpg_.webp'" @click="activeImgPlayer">
                                    </li>
                                </ul>
                                <div class="otherinfo">
                                    <span>{{item.feedbackDate}}</span>
                                    <span v-for="(value, key) in item.skuMap">{{key}}:{{value}}</span>
                                </div>
                                <div v-if="item.appendedFeed" class="appendfeed diabox">[当天追加]：{{item.appendedFeed.appendedFeedback}}</div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div id="J_Pagination">
                    <div class="pagination" data-spm-click="gostr=/jhs;locaid=eval_pagination">
                        <div :class="['pagebtn','J_prev', rated.currentT_N==1?'disabled':'']" @click="changePage('prev',$event)">上一页</div>
                        <div class="pagenumwrap">
                            <div class="selmoni">第{{rated.currentT_N}}页</div>
                            <select class="J_PageNum">
                                <option value="1" selected="" v-for="item in rated.pageLen">第{{item}}页</option>
                            </select>
                        </div>
                        <div :class="['pagebtn','J_next', rated.currentT_N==rated.pageLen?'disabled':'']" @click="changePage('next',$event)">下一页</div>
                    </div>
                </div>
            </li>
            <li id="J_itemShopinfor" class="itemshopinfor" v-show="tabs == 2">
                <ul>
                    <li v-for="item in props"><span>{{item.name}}:  </span>{{item.value}}</li>
                </ul>
            </li>
        </ul>
        <!-- -->
        <div id="imgPlayer" v-show="ImgPlayerActived">
        	<ul>
        		<li v-for="item in imgPlayer"><img :src="item" alt=""></li>
        	</ul>
        </div>
        <!-- 购物车栏-->
        <div class="bottom-bar J_bottomBar">
            <div class="btnbar">
                <div class="btngroup col_2">
                    <div id="J_BtnAddToCart" class="btn cart" @click="chooseByMethod('false',$event)">
                        <span class="icon"></span> 加入购物车
                    </div>
                    <div id="J_BtnBuy" class="btn buy" @click="chooseByMethod('true',$event)">
                        <span class="subText">{{baseInfo.picFeature.sellingPoints[0]}}</span><span class="text">马上抢</span>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
                isDirBuy:false,
                buyBtnText:'',
                tabsOffsetT:0,
                scrollTop:0,
				baseInfo:{},//基本信息
				seller:{},//卖家信息
				props:[],//产品参数
				skuProps:[],//产品属性(颜色、尺码)
				skus:[],//组合ID 显示库存量
				skuMap:[],//组合参数组成组合ID
                imgInfo:[],               
                skusLength:0,//当前sku有几组参数 例:20509:28315;1627207:381752166(2组)
                img:'',
                price:'',
                originalPrice:'',
                limit:'',
                curQuantity:1,
                quantity:0,
                params:{},
                message:'',//选择商品参数信息
                tabs:0,//详情,评价，参数切换
                imgPlayer:[],
                ImgPlayerActived:false,
                ratedTotal:{},
                rated:{
                	"current":[],
                	"all":[],
                	"hasFeedback":[],
                	"hasImg":[],
                	"allNum":0,
                	"imgNum":0,
                	"feedbackNum":0,
                	"currentTabs":0,
                	"allIndex":1,
                	"hasImgIndex":1,
                	"hasFeedbackIndex":1,
                	"pageLen":1,
                	"currentT_N":1,
                },
                matchId:'',
                timeObj:{
                    f:0,
                    h:0,
                    m:0,
                    s:0,
                }
			}
		},
        filters:{
            removeEnd2(value){
                return value.toString().slice(0,-2);
            }
        },
        methods:{
            chooseByMethod(str,ev){
                ev.stopPropagation();
                this.isDirBuy = eval(str);

                this.buyBtnText = str === 'true'?'立即购买':'加入购物车';

                this.toggleSku();
            },
            scrollToTop(){
                document.body.scrollTop = 0;
            },
            toggleSku(str,ev){
                if(str == 'close'){
                     $('#J_shopSku').removeClass('show');
                    setTimeout(function(){
                        $('#J_shopSku').css('display','none')
                    },300)
                }else{
                    if($('#J_shopSku').hasClass('show')){
                        $('#J_shopSku').removeClass('show');
                        setTimeout(function(){
                            $('#J_shopSku').css('display','none')
                        },300)
                    }else{
                        $('#J_shopSku').css('display','block')
                        setTimeout(function(){
                            $('#J_shopSku').addClass('show')
                        },17)
                    }
                }
               
            },
            togglebtn(ev){
                var that = this;
                var target = $(ev.target);
                var reg_currentSku=''; //  /xxxx:xxxx;[0-9:]+;?/
                var matchId; // 2505:4567;48789:16489 >= 165489789
                var tempArr = [];
                var matchObj = [];
                var indexOfParent;
                var isContinue = true;

                this.curQuantity = 1;
                //更换激活状态样式
                
                if(target.attr('data-img')){
                    that.img = target.attr('data-img');
                }

                target.toggleClass('sel').siblings().removeClass('sel');

                $('.dpc-pr').forEach(function(item){
                    var item = $(item);
                    var sel = $('span.sel',item);

                    sel.length?that.params[item.prev().text()] = sel.text():that.params[item.prev().text()] = '';
                    console.log(that.params)                   
                    if(sel.length){ 
                        reg_currentSku += sel.attr('data-id')+';?';                        
                    }else{
                       isContinue = false
                    }
                })
                
                $('#J_skubton').removeClass('disabled').text(this.buyBtnText).css('backgroundColor','#ff5000');


                console.log(reg_currentSku)
                if(isContinue){

                    for(var i in that.skuMap){
                        if(eval('/'+reg_currentSku+'/').test(i)){
                           that.matchId = matchId = that.skuMap[i];
                        }
                    }

                    matchObj = that.skus[matchId];
                    console.log(matchObj)

                    that.price = matchObj.price.priceText
                    that.limit = matchObj.limit
                    that.quantity = matchObj.quantity
                    console.log('price: '+that._price +'   limit: '+that._limit +'   quantity: '+that._quantity)

                    if(matchObj.quantity == 0){
                        $('#J_skubton').addClass('disabled').text('无货').css('backgroundColor','#333');
                    }
                }  

                this.updateMessage();          

            },
            updateMessage(){
                var that = this;

                var selected = [];
                var unselected = [];
                for(var i in that.params){
                    if(that.params[i] == ''){
                        unselected.push(i);
                    }else{
                        selected.push(that.params[i])
                    }
                }

                if(selected.length == 0){
                    var t = unselected.join(',');

                   that.message = '还未选 <span class="dpt-gray">'+t+'</span>' 
                }else if(unselected.length == 0){
                    var t = '';
                    selected.forEach(function(item,index){
                        t += '"'+item+'"'+','
                    });
                    t.slice(0,-1);

                    that.message = '已选：'+t
                }else if(selected.length != 0 && unselected.length != 0){
                    var t = '';
                    selected.forEach(function(item,index){
                        t += '"'+item+'"'+','
                    });
                    t.slice(0,-1); 
                    that.message = '已选：'+t+' 还未选 <span class="dpt-gray">'+unselected.join(',')+'</span>';
                }  
            },
            changeTab(prop,ev){
                this[prop] = $(ev.target).attr('data-index');
                this.toTabs();
            },
            showRated(){
                 this['tabs'] = 1;
                 this.toTabs();
            },
            toTabs(){
                setTimeout(function(){
                    document.body.scrollTop = 1014;
                },300)               
            },
            changeRateTab(ev){
            	var index = $(ev.target).attr('data-index');
            	var prop = $(ev.target).attr('data-type');
            	var pageNum = this.rated[prop+'Index'];

            	this.rated.currentTabs = index;
            	this.rated.current = this.rated[prop].slice((pageNum-1)*10,pageNum*10);
            	this.rated.currentT_N = pageNum;

            	this.rated.pageLen = Math.ceil(this.rated[prop].length/10);
            	console.log('限制页数:'+this.rated.pageLen)
            },
            changePage(str,ev){
            	if($(ev.target).hasClass('disabled')) return;
            	var prop = $('#J_TagList .on').attr('data-type');
            	var pageNum = this.rated[prop+'Index'];
            	if(str == 'prev'){
            		pageNum --;
            		pageNum = pageNum<1?1:pageNum
            	}else{
            		pageNum ++;
            		pageNum = pageNum>this.rated.pageLen?this.rated.pageLen:pageNum
            	}
            	this.rated.currentT_N = this.rated[prop+'Index'] = pageNum;
            	this.rated.current = this.rated[prop].slice((pageNum-1)*10,pageNum*10);
            	console.log('当前页数:'+this.rated.currentT_N)
            },
            imgView(ele,imgLen){
            	var vm_this = this;
 				ele.style.transform = ''
            	var index = 0;
            	var dis = window.innerWidth;
            	var target = new Hammer(ele);

	            target.on('swipeleft', function(ev) {
	            	index ++;
	            	index = index>imgLen?imgLen:index;
	            	console.log(imgLen)
					ele.style.transform = 'translateX('+ -(dis*index) +'px)';
				});
				target.on('swiperight',function(ev) {
					index --;
					index = index<0?0:index;
					console.log(index)
					ele.style.transform = 'translateX('+ -(dis*index) +'px)';
				});
				target.on('tap',function(ev) {
					vm_this.ImgPlayerActived = false;
				});
            },
            activeImgPlayer(ev){
            	var that = this;
            	var len = 0;
            	this.imgPlayer = [];
            	var ul = $(ev.target).parent().parent();
            	ul.children().forEach(function(item){
            		that.imgPlayer.push($(item).children().attr('data-big'))
            		len++;
            	})
            	                             
            	this.imgView(document.querySelector('#imgPlayer ul'),len-1)
            	this.ImgPlayerActived = true;
            },
            changeCurQun(str,ev){
                if(str == 'minus'){
                    this.curQuantity --;
                    this.curQuantity = this.curQuantity<1?1:this.curQuantity
                }else if(str == 'add'){
                    this.curQuantity ++;
                    this.curQuantity = this.curQuantity>this.limit?this.limit:this.curQuantity
                }
            },
            addToCart(ev){
                if($(ev.target).hasClass('disabled')) return;
                var that = this;
                var obj = {};
                var jhsCart;
                var isContinue = true;

                obj['skuId'] = this.matchId;
                obj['oldPrice'] = this.originalPrice;
                obj['sellerNick'] = this.baseInfo.sellerNick;
                obj['params'] = this.params;
                obj['quantity'] = this.curQuantity;
                obj['imgUrl'] = this.img;
                obj['title'] = this.baseInfo.shortName;
                obj['info'] = this.skus[this.matchId];
                console.log(obj)


                if(this.isDirBuy){  //直接购买  
                    console.log(obj)
                    var dir = {};
                    dir[this.baseInfo.sellerId] = {};
                    dir[this.baseInfo.sellerId]['goods'] = [];

                    dir[this.baseInfo.sellerId]['goods'].push(obj);

                    console.log(dir);

                    localStorage.jhsDirBuy = JSON.stringify(dir);
                    setTimeout(function(){
                        location.href = "order.html?dir=true"
                    },300)

                }else{  //添加到购物车    
                    console.log(obj)

                    jhsCart = localStorage.jhsCart?JSON.parse(localStorage.jhsCart):{};

                    if(jhsCart[this.baseInfo.sellerId]){  // 如果商品相同ID，则添加数量
                        jhsCart[this.baseInfo.sellerId]['goods'].forEach(function(item){
                            if(item['skuId'] == obj['skuId']){
                                item.quantity += obj['quantity'];
                                item.quantity = item.quantity>item.info.limit?item.info.limit:item.quantity;
                                isContinue = false;
                            }
                        })
                        if(isContinue){
                             jhsCart[this.baseInfo.sellerId]['goods'].push(obj)
                        }                  
                    }else{
                        jhsCart[this.baseInfo.sellerId] = {};
                        jhsCart[this.baseInfo.sellerId]['goods'] = [];
                        jhsCart[this.baseInfo.sellerId]['goods'].push(obj)
                    }

                    localStorage.jhsCart = JSON.stringify(jhsCart);

                    this.showTips();
                }
                               
            },
            showTips(ev){
                this.toggleSku('close',ev)
                var div = $('<div class="tips">已成功添加至购物车</div>');
                div.appendTo($('body'));
                setTimeout(function(){
                    div.css('opacity',1);
                })
                
                setTimeout(function(){
                    div.remove();
                },3000)
            }
        },
		created(){
            var that = this;
			var data = require('../json/detail.js');
			this.baseInfo = data.baseInfo.item;
			this.seller = data.detailInfo.data.seller;
			this.props = data.detailInfo.data.props;
			this.skuProps = data.detailInfo.data.skuModel.skuProps;
			this.skus = data.detailInfo.data.apiStack[0].value.skuCore.sku2info;
			this.skuMap = data.detailInfo.data.skuModel.ppathIdmap;
            this.imgInfo = data.imgInfo.model.children;
            this.ratedTotal = data.rated.data;

            for(var i in this.skus){
               that.quantity += that.skus[i]['quantity']*1;
            }

            this.price = this.baseInfo.activityPrice.toString().slice(0,-2);
            this.limit = this.baseInfo.limitNum;
            this.img = this.baseInfo.picUrlNew;
            this.originalPrice = this.baseInfo.originalPrice.toString().slice(0,-2);

            this.skuProps.forEach(function(item){
                that.params[item.propName] = "";
            })
            this.updateMessage();

            this.rated.current = this.ratedTotal.rateList.slice(0,10);
            this.rated.pageLen = Math.ceil(this.ratedTotal.rateList.length/10);
            this.ratedTotal.rateList.forEach(function(item){

            	that.rated.allNum++;
            	that.rated.all.push(item);

            	if(item.feedPicPathList){
            		that.rated.hasImg.push(item);
            		that.rated.imgNum++;
            	}
            	if(item.appendedFeed){
            		that.rated.hasFeedback.push(item);
            		that.rated.feedbackNum++;
            	}
            })
            console.log(this.rated)

		},
		mounted(){
            var that = this;
			var Slider = require('../public/js/slider.js');
			new Slider([
				{'src':'http://gtd.alicdn.com/tpsi1/1630405029689395933/TB2I88DhW8lpuFjy0FpXXaGrpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi1/1630405029689555416/TB22ixujstnpuFjSZFvXXbcTpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi3/1630405029689559493/TB2A94fjxBmpuFjSZFsXXcXpFXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi3/1630405029689601921/TB22RhtjtRopuFjSZFtXXcanpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi4/1630405029689690623/TB2ltVJjrBmpuFjSZFAXXaQ0pXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'}
			])

            /*this.skusLength = $('.dpc-pr').length;
            console.log(this.skusLength)*/

            window.onscroll = function(){
                that.scrollTop = document.body.scrollTop;
            }
            window.onload = function(){
                 that.tabsOffsetT = $('#J_TabWrap')[0].offsetTop;
                console.log(that.tabsOffsetT)
            }

            var EndTime= new Date()*1 + 170000000;
            console.log(new Date(EndTime))
                 function countTime(){
                     
                        var NowTime = new Date();
                        var t =EndTime - NowTime*1;
                        if(t>=0){                                                   
                          that.timeObj.h=Math.floor(t/1000/60/60);
                          that.timeObj.m=Math.floor(t/1000/60%60);
                          that.timeObj.s=Math.floor(t/1000%60);
                          that.timeObj.f=Math.floor(t/10%60);
                          requestAnimationFrame(countTime);
                           //console.log(11111111222333333)
                        }
                       
                }
               
                countTime();
		},
	}
</script>

<style>
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
    margin-left: -64px;
    margin-top: -17px;
    transition: all 300ms ease;
}
#imgPlayer{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.9);
	z-index: 999;
}
#imgPlayer ul{
	transition: all 300ms ease;
	display: -webkit-box;
	height: 100%;
}
#imgPlayer li{
	-webkit-flex:1;
	display: -webkit-box;
	-webkit-box-align:center;
	height: 100%;
	width: 100%;
}
#imgPlayer li img{
	width: 100%;
	max-height: 100%;
	min-width: 100%;
	display: block;
}
.pricebar {
    position: relative;
    height: 54px;
    background: -webkit-gradient(linear,0 0,0 100%,from(#fef391),to(#fbe253));
    overflow: hidden;
    color: #fff;
}
.pricebar .subleft {
    position: relative;
    margin-right: 100px;
    height: 54px;
}
.pricebar .subleft.avil, .pricebar .subleft.soldout {
    background: #E61414;
}
.pricebar .subleft .price {
    padding: 0 10px;
    display: inline-block;
    height: 54px;
    line-height: 54px;
    vertical-align: text-bottom;
    font-size: 24px;
}
.pricebar .subleft .price strong {
    font-size: 42px;
    font-weight: 400;
}
.pricebar .subleft .information {
    position: absolute;
    top: 0;
    display: inline-block;
    color: #fff;
    width: 150px;
}
.pricebar .subleft .information .soldcount {
    display: inline-block;
    padding: 0 6px;
    height: 18px;
    line-height: 18px;
    font-size: 11px;
    margin-top: 10px;
}
.pricebar .subleft .information .soldcount span {
    font-size: 13px;
    padding-right: 3px;
}
.pricebar .subleft .information .oprice {
    padding: 0 4px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
}
.pricebar .subleft .information .oprice del {
    padding-left: 2px;
    text-decoration: line-through;
}
.pricebar .subleft:after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: -11px;
    border-top: 27px solid #E61414;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 27px solid #d41414;
}
.pricebar .subleft.avil:after, .pricebar .subleft.soldout:after {
    border-top-color: #E61414;
    border-bottom-color: #d41414;
}
.pricebar .countdown {
    position: absolute;
    right: 0;
    top: 10px;
    width: 90px;
    height: 54px;
    text-align: center;
}
.pricebar .countdown .txt {
    height: 16px;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    color: #9e495b;
}
.pricebar .countdown .clockrun {
    margin: 2px 0 0 5px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #fff;
}
.pricebar .countdown .clockrun .num {
    float: left;
    min-width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    background: #690b08;
    border-radius: 3px;
}
.pricebar .countdown .clockrun .dot {
    float: left;
    width: 4px;
    height: 16px;
    line-height: 18px;
    text-align: center;
    color: grey;
}
.item-info {
    padding: 3px 10px;
    background: #fff;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: relative;
    z-index: 2;
}
.item-info h1 {
    padding-top: 8px;
    font-size: 14px;
    line-height: 18px;
    color: #333;
    font-weight: 400;
}
.item-info .itemfeatures {
    padding: 4px 0;
    overflow: hidden;
}
.item-info .itemfeatures li {
    float: left;
    padding-right: 10px;
    font-size: 13px;
    color: #B96D2C;
    line-height: 18px;
}
.item-info {
    padding: 3px 10px;
    background: #fff;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: relative;
    z-index: 2;
}
.item-info .julogo {
    position: relative;
    padding: 5px 0;
    color: #aaa;
    font-size: 12px;
    line-height: 24px;
    overflow: hidden;
    clear: both;
}
.item-info .julogo .logo {
    float: left;
    margin: -2px 10px 0 0;
    font-size: 24px;
    font-family: JHSIconfont;
    color: #E61414;
}
.item-info .showtagnames {
    clear: both;
    position: relative;
    margin-top: -3px;
    margin-bottom: -4px;
    padding-top: 10px;
    overflow: hidden;
}
.item-info .showtagnames:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 1px;
    background-color: #e5e5e5;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}
.item-info .showtagnames li {
    float: left;
    padding-left: 15px;
    margin: 0 10px 10px 0;
    font-size: 12px;
    color: #AAA;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAMAAADTXB33AAAAaVBMVEUAAAD6IV76IV74Hl35HV3yG1f6IF/5IF71HVv6IF75H135IF75IF75IF76IF74H174H133HFv2HFz6IF76IF36H175IF76IV75IF34Hlz4Hl72IFv2IF36H1zMADO/AED5IF75IV/6IF8yblojAAAAInRSTlMA+upLKxLxzxiZe+bZtJRyaR4bxo9irY12RUQ4NzIFBKlWRq3aTAAAAN5JREFUKM9t0NuWgyAMBdDEGUHkpqi9dzo9//+RbQWK1ubBhW4M4VCu0FkjhLG+p3U1ihFL1mv5EQCGvT+o/w/pAHbNcmubF4C+rpowDvEcAR0+pPqdVwp8/S6B4baSZ2i+C1kMz+dfvRUy2D/FynojJOCJ7jGGIrdbJmpfVsRDzA1HimZKtxEmjZGsnDPAxuFDtCIB6F45MVT84KPEgOa7OvCFVnVhuHe8/VJ6DZECOjL0uchZg4/5ZWKw6tMvisFT2XiqAEjXtk4CqE7L9vXISMVjSrrgtJNVJXfTGx5lKhHS+63qqQAAAABJRU5ErkJggg==) left center no-repeat;
    -webkit-background-size: auto 64%;
}

.item-info {
    padding: 3px 10px;
    background: #fff;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: relative;
    z-index: 2;
}
.item-info .tmallcoupon, .item-info .lemaibao-text {
    position: relative;
    margin: 8px 0 5px;
}
.item-info .tmallcoupon a, .item-info .lemaibao-text a {
    font-size: 12px;
    line-height: 12px;
    text-decoration: none;
    color: #555;
}
.item-info .tmallcoupon a img, .item-info .lemaibao-text a img, .item-info .tmallcoupon a .text-wrap, .item-info .lemaibao-text a .text-wrap {
    display: inline-block;
    vertical-align: middle;
}
.item-info .tmallcoupon a .arrow, .item-info .lemaibao-text a .arrow {
    position: absolute;
    right: 9px;
    font-size: 12px;
    color: #aaa;
    top: 5px;
}
.item-info .tmallcoupon a .arrow, .item-info .lemaibao-text a .arrow, .item-info .tmallcoupon a .icon, .item-info .lemaibao-text a .icon {
    font-family: JHSIconfont;
}

.showskubar {
    margin: 10px 0;
    height: 40px;
    line-height: 40px;
    text-align: left;
    font-size: 13px;
    color: #555;
    background-color: #fff;
}
.showskubar .buytext {
    margin-left: 10px;
}
.showskubar .icon {
    float: right;
    margin-right: 19px;
    font-size: 12px;
    color: #aaa;
    font-family: JHSIconfont;
}

.minitemeval {
    margin: 10px 0;
    background: #fff;
    overflow: hidden;
}
.minitemeval .tit {
    margin: 0 10px;
    position: relative;
    font-size: 14px;
    line-height: 40px;
    color: #999;
}
.minitemeval .tit em {
    color: #666;
    padding-right: 3px;
}
.minitemeval .tit .icon {
    position: absolute;
    right: 9px;
    top: 0;
    font-size: 12px;
    color: #aaa;
    font-family: JHSIconfont;
}
.minitemeval .tit:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}
.evallist {
    clear: both;
    font-size: 14px;
    line-height: 21px;
    color: #333;
}
.evallist>ul {
    padding: 0 10px;
}
.evallist>ul .evalli {
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative;
}
.evallist>ul .evalli:first-child {
    padding-top: 8px;
}
.evallist>ul .evalli:last-child {
    margin-bottom: 0!important;
}
.evallist>ul .evalli .userinfo {
    margin-bottom: 3px;
    overflow: hidden;
}
.evallist>ul .evalli .userinfo span {
    float: left;
    margin-right: 5px;
    height: 21px;
    line-height: 21px;
    overflow: hidden;
    font-size: 13px;
}
.evallist>ul .evalli .userinfo span {
    float: left;
    margin-right: 5px;
    height: 21px;
    line-height: 21px;
    overflow: hidden;
    font-size: 13px;
}
.evallist>ul .evalli .userinfo img {
    margin-top: 3px;
    max-width: initial;
}
.evallist>ul .evalli .evalcon {
    clear: both;
    font-size: 13px;
    line-height: 18px;
    color: #333;
    text-align: justify;
}
.evallist>ul .evalli .otherinfo {
    margin-top: 5px;
    font-size: 12px;
    line-height: 18px;
    color: #999;
}
.evallist>ul .evalli .otherinfo span {
    margin-right: 5px;
}
.evallist>ul .evalli:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}
.evallist>ul .evalli:last-child:after {
    height: 0!important;
}
.shopdes {
    position: relative;
    height: 103px;
    background-color: #fff;
    margin: 10px 0;
}
.shopdes .shoppic {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
}
.shopdes .shopname {
    padding-top: 15px;
    height: 25px;
    line-height: 25px;
    margin-left: 80px;
    font-size: 14px;
    color: #666;
}
.shopdes .tm_icon {
    margin-left: 80px;
    width: 80px;
    height: 13px;
}
.shopdes .shopasess {
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    padding-left: 10px;
    margin-top: 6px;
    color: #999;
}
.shopdes .shopasess li {
    float: left;
    margin-right: 12px;
}
.shopdes .shopasess li .red {
    color: #E61414;
    font-size: 12px;
}
.shopdes .shopasess li .grade {
    display: inline-block;
    width: 15px;
    height: 19px;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    font-style: normal;
}
.shopdes .shopasess li .bad {
    background-color: #32aa3a;
}
.tabwrap {
    position: relative;
    z-index: 20;
}
.tabwrap .jutabs {
    height: 42px;
    width: 100%;
    background: #fff;
    position: relative;
    top: 0;
}
.stab-wrap {
    height: 42px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
    position: relative;
    left: 0;
    top: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 1000;
    -webkit-tap-highlight-color: transparent;
}
.stab-wrap .stab-scroll-wrap {
    height: 42px;
    overflow: hidden;
    background: #fff;
}
.stab-wrap .stab-scroll {
    height: 92px;
    display: block;
    overflow: hidden;
    overflow-x: scroll;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
    vertical-align: top;
    text-align: left;
    position: relative;
    margin-right: 40px;
    left: 0;
}
.stab-wrap .stab-canvas {
    height: 42px;
    overflow: hidden;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 0!important;
    line-height: 0!important;
}
.tabwrap .jutabs .stab-canvas {
    margin: 0 auto;
}
.stab-wrap ul {
    float: left;
    text-align: left;
    font-size: 0;
}
.stab-wrap li {
    height: 42px;
    min-width: 50px;
    display: inline-block;
    overflow: hidden;
    font-size: 16px;
    line-height: 42px;
    padding: 0 8px;
    text-align: center;
    vertical-align: top;
    color: #666;
    box-sizing: border-box;
    transition: color .5 ease;
    -webkit-transition: color .5s ease;
}
.stab-wrap .stab-current {
    color: #ec1c43;
}
.tabwrap .jutabs ul li {
    width: 100px;
    font-size: 14px;
}
.tabwrap .jutabs ul li.stab-current {
    color: #E61414;
    border-bottom: 2px solid #E61414;
}
.tabwrap .jutabs .tools-bot {
    position: absolute;
    right: 20px;
    width: 30px;
    height: 0;
}
.tabwrap .jutabs .tools-bot .btn {
    position: absolute;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    -webkit-border-radius: 36px;
    background: rgba(0,0,0,.5);
    font-family: JHSIconfont;
    color: #eee;
}
.tabwrap .jutabs .tools-bot .btn.gototop {
    font-size: 36px;
    top: 50px;
}

.topnav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    z-index: 41;
}
.topnav .btngroup {
    padding-top: 8px;
    float: right;
}
.topnav .btn {
    float: left;
    margin-right: 15px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    -webkit-border-radius: 32px;
    background-color: rgba(0,0,0,.5);
    font-family: JHSIconfont;
    font-size: 18px;
    color: #eee;
}
.alert-trans, .shopsku, .shopsku>div {
    left: 0;
    bottom: 0;
    right: 0;
}
.shopsku {
    position: fixed;
    top: 0;
    z-index: 1000;
    display: none;
    width: 100%;
}
.shopsku:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0;
    -webkit-transition: all .3s ease;
}
.shopsku.show:before {
    opacity: .7;
}
.shopsku.show:before {
    opacity: .7;
}
.d-prop {
    background-color: #fff;
    color: #666;
    font-size: 14px;
}
.shopsku>div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 90%;
    overflow-y: auto;
    -webkit-transition: all .3s ease;
    -webkit-transform: translateY(100%);
}
.alert-trans, .shopsku, .shopsku>div {
    left: 0;
    bottom: 0;
    right: 0;
}
.shopsku.show>div {
    -webkit-transform: translateY(0);
}
.shopsku.show>div {
    -webkit-transform: translateY(0);
}
.d-prop {
    background-color: #fff;
    color: #666;
    font-size: 14px;
}
.dp-top, .dpt-r {
    display: -webkit-box;
}
.dp-top, .dpc-tl {
    border-bottom: 1px #cdcdcd solid;
}
.dp-top {
    padding: 12px 0;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
}
.dpt-l {
    width: 45px;
    padding-left: 16px;
}
.dpt-l>img {
    max-height: 45px;
    max-width: 45px;
    border: 1px solid #777f93;
}
.dpn-l, .dpt-r {
    -webkit-box-flex: 1;
}
.dp-top, .dpt-r {
    display: -webkit-box;
}
.dpt-r {
    -webkit-box-align: center;
    margin-left: 12px;
    font-size: 12px;
    line-height: 140%;
    margin-top: -2px;
}
.dpc-pr>span, .dpt-rt {
    display: inline-block;
}
.dpt-rt {
    width: 100%;
}
.dpt-opt {
    color: #999;
}
.dpt-gray {
    color: #666;
}
.alert-trans, .dp-btom, .dpc-pr>span, .dpn-buy, .dpn-r, .dpt-c {
    text-align: center;
}
.dpt-c {
    width: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAA3NCSVQICAjb4U/gAAAAHlBMVEX////5+fn39/f09PTU1NTR0dGZmZmVlZV3d3d1dXVz+zGOAAAACnRSTlMA////////////fokUVgAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAC3SURBVCiRbdO7EcJADARQ3YxxTAIxESXQDwTXCiXQLtLJsj4rj53cvEC3K9N2JXw22t94Oia/yO8f/oCP+aCGC0a+MHLFlR+4csOZnzhzx5EHHHnEzhN2nrHxgo1XrBywcsTCGyz82WDm3wbz8a9bgjFfzRLwGN0SyBi4BGtm5DozcL1g5XbBwi2NzD2NxD26yGN0gcecneecT55LMV5LOXhtUDk2uDjWLbyrm/ne1M2/6wVPiW5/sggn4SG2FKIAAAAASUVORK5CYII=) center center no-repeat;
    background-size: 22px;
}
.dp-cont, .dp-oto {
    padding: 0 16px;
}
.dpc-p {
    margin: 16px 0;
}
.dp-top, .dpc-tl {
    border-bottom: 1px #cdcdcd solid;
}
.dpc-tl {
    padding-bottom: 12px;
}
.alert-trans .alert, .dpc-pr>span {
    vertical-align: middle;
    text-align: center;
}
.dpc-pr>span, .dpt-rt {
    display: inline-block;
}
.dpc-pr .dpc-sl, .dpc-pr>span {
    height: 28px;
    margin: 10px 10px 0 0;
}
.dpc-pr>span {
    border: 1px solid #c5c8cf;
    line-height: 28px;
    border-radius: 3px;
    padding: 0 8px;
    overflow: hidden;
}
.dp-num {
    border-top: 1px #cdcdcd solid;
    margin: 0 16px;
    padding: 12px 0;
    line-height: 18px;
}
.dpn-l {
    -webkit-box-align: center;
}
.dpn-r {
    border-radius: 2px;
    width: 112px;
    border: 1px solid #b4b4b4;
    font-size: 24px;
    color: #5f646e;
}
.dpn-add, .dpn-buy, .dpn-del {
    -webkit-box-flex: 1;
    width: 100%;
    display: block;
}
.dpn-del {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAGAgMAAACkxbaAAAAAA3NCSVQICAjb4U/gAAAADFBMVEX///9kaHJiZnBfZG518K+4AAAABHRSTlMA////sy1AiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAATSURBVAiZY8haBQIM+/+DAD4KAIFhIF/tW9ysAAAAAElFTkSuQmCC) center center no-repeat;
    background-size: 12px 3px;
}
.dpn-buy {
    height: 32px;
    line-height: 32px;
    border: 1px solid #b4b4b4;
    border-width: 0 1px;
}
.dpn-add {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAAA3NCSVQICAjb4U/gAAAADFBMVEX///9kaHJiZnBfZG518K+4AAAABHRSTlMA////sy1AiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAlSURBVAiZY2BgkFrBAAL6f8ihslbt/7dqFcP+/yCAlyLXBggFAD7ONWXRZoD8AAAAAElFTkSuQmCC) center center no-repeat;
    background-size: 12px;
}
.dp-btom {
    border-top: 1px #ddd solid;
    padding: 8px 0;
}
.dp-bton {
    display: inline-block;
    border-radius: 5px;
    min-width: 72px;
    padding: 0 8px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background-color: #ff5000;
}
.dpc-pr .sel {
    border-color: #ff5000;
    color: #ff5000;
}
.dpc-pr .disabled {
    color: #bababa;
    background-color: #f3f3f3;
}
.dp-num, .dpn-l, .dpn-r {
    display: -webkit-box;
}
.shopdes .shopasess li .good {
    background-color: #E61414;
}
.dachu-yl-banner {
clear: both;
margin-bottom: 5px;
}

.dachu-yl-banner img {
width: 100%;
}
.h5-desc {
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.h5-desc .des-pages {
    background-color: #fff;
}
.des-alimg {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///+ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZnHHh8xAAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAHrSURBVEiJ7Za9SgNBEMfvEtH4nUKw0CKV2IgJPoB5A1OIYCMphKAIsYqCRSyEVBLfIBa+gBZiF6NgGzvtDsHCzi8wiTH3d29j7vays7kF20xxt9z+b347czs7Zxh969s/LXwMhT3GRZ1ZUumAhiicUeuAc0HYw6HPZRhoFTKZXG5PuuxbgLfKYeBEFaZvbhwtdUIs3LvjSdTVwiLeBGGNJylBCfM+4Re7Tlt4iMrCbLfHUJWl4ibIIxPOOjn7kV1K6DzP7m4w2kJjHUIqVGjTSWwJ74HoEJBmmA9RM5dJyWjZo8n2aJ2IuorvbeDaE26w2Gwi6iyPOu0+jPB0EVGPORNNL4/8xVsCbZbZxIX7jAVnH0WJqA1jsIo7b4UjQOXPs7R7jJiQmkXY7WVI6C4rcgqJ9puFp05QPT2yejukPErCiFt8AWiv3mj01GqsPVhx641E77CcXyWdURmfpLCNXuCf275MmPPe9iDQA6/ikZNSo5dFXdMghQ46xByeLW1ZbWGlMymjR4FndgsfOCt4idIea/xVmwdshNcKm96+lNCmRXxxCj0EnFJCCT0BxIKFvLjoQ1JCl/3Fr0SbiiVKaCZM6qFLTVInRx2K6wg1u4J2n9HuXNq9ULu76vfrnn8Avtaj+0/Rt74J9gtwfIE3dy66ggAAAABJRU5ErkJggg==) center center no-repeat;
    -webkit-background-size: 40px;
    margin: 0 auto;
    display: block;
}
.h5-desc img {
    vertical-align: middle;
    max-width: 100%;
}
.h5-desc .des-pages img {
    max-width: 100%;
}
.h5-desc .des-pages .des-alimg {
    margin: 0 auto;
    display: block;
}
.taglist {
    display: none;
    padding: 10px 8px;
    background: #fff;
    overflow: hidden;
    position: relative;
}
.taglist li {
    float: left;
    padding: 0 6px;
    margin: 3px 6px 3px 0;
    height: 24px;
    line-height: 24px;
    -webkit-border-radius: 3px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #666;
}
.taglist li.on {
    background: #555;
    color: #fff;
}
.taglist:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}
.pagination {
    padding: 10px 0;
    height: 20px;
    background-color: #fff;
    text-align: center;
    position: relative;
}.pagination:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}

.pagination .pagebtn.disabled {
    opacity: .4;
}
.pagination .pagenumwrap {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 20px;
    border: 1px solid #9B9B9B;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    vertical-align: top;
}
.pagination .pagebtn {
    display: inline-block;
    vertical-align: top;
    width: 65px;
    height: 20px;
    line-height: 20px;
    padding: 0;
    margin: 0 5px;
    background-color: #fff;
    border: 1px solid #9B9B9B;
    border-radius: 3px;
    font-size: 12px;
    color: #000;
}.pagination .pagenumwrap:after, .pagination .pagenumwrap:before {
    position: absolute;
    right: 5px;
    top: 50%;
    content: "";
    width: 0;
    height: 0;
}
.pagination .pagenumwrap:before {
    margin-top: -5px;
    border-top: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #000;
}.pagination .pagenumwrap .selmoni {
    position: absolute;
    left: 0;
    top: 0;
    text-indent: 5px;
    width: 100%;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #000;
    text-align: left;
    z-index: 1;
}
.pagination .pagenumwrap select {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 20px;
    z-index: 2;
    opacity: 0;
}.pagination .pagenumwrap:after, .pagination .pagenumwrap:before {
    position: absolute;
    right: 5px;
    top: 50%;
    content: "";
    width: 0;
    height: 0;
}

.pagination .pagenumwrap:after {
    margin-top: 1px;
    border-bottom: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
}
.evallist>ul .evalli .evalpiclist li img {
    width: 40px;
    height: 40px;
}
.evallist>ul .evalli .evalpiclist {
    width: 100%;
    height: auto;
    margin: 7px 0 2px 0;
    display: inline-block;
}
.evallist>ul .evalli .evalpiclist li {
    float: left;
    margin-right: 10px;
}
.itemshopinfor {
    width: 90%;
    background-color: #fff;
    padding: 20px 5% 30px 5%;
}
.itemshopinfor li {
    margin-top: 5px;
    font-size: 13px;
    line-height: 18px;
    color: #666;
    padding: 2px 5px;
}
.itemshopinfor li span {
    color: #999;
}
.evallist>ul .evalli .diabox {
    margin-top: 10px;
    position: relative;
    padding: 5px;
    background: #e9e9e9;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
}
.evallist>ul .evalli .diabox.appendfeed {
    color: #555;
}
.evallist>ul .evalli:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    height: 1px;
    background-color: #ddd;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: left top;
}
.evallist>ul .evalli .diabox:before {
    content: "";
    position: absolute;
    left: 10%;
    top: -8px;
    width: 0;
    height: 0;
    border: 8px solid #e9e9e9;
    border-top: none;
    border-color: #e9e9e9 transparent;
}
img[lazy=loading]{
}
img[lazy=loaded]{
  animation:fade 0.5s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

/*购物车栏*/
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f7f7f7;
    color: #575757;
    font-size: 12px;
    z-index: 30;
    -webkit-perspective: 1000;
    -webkit-animation: bottomIn .5s ease-in-out;
    -webkit-backface-visibility: hidden;
    vertical-align: middle;
}
.bottom-bar .btnbar .col_2 .cart {
    width: 34%;
}
.bottom-bar .btnbar .btn.cart {
    background: #fbfbfb;
    color: #666;
    height: 48px;
    line-height: 47px;
    border-top: 1px solid #f4f4f4;
}
.bottom-bar .btnbar .btn .icon {
    font-family: JHSIconfont;
    font-size: 18px;
}
.bottom-bar .btnbar .btn {
    float: left;
    width: 100%;
    height: 49px;
    line-height: 50px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.bottom-bar .btnbar .btn.buy, .bottom-bar .btnbar .btn.remind {
    background: #E61414;
    text-align: right;
    font-size: 18px;
    font-weight: 700;
}
.bottom-bar .btnbar .col_2 .buy, .bottom-bar .btnbar .col_2 .remind {
    width: 66%;
    position: absolute;
    top: 0;
    right: 0;
}
.bottom-bar .btnbar .btn.buy .text, .bottom-bar .btnbar .btn.remind .text, .bottom-bar .btnbar .btn.buy .subText, .bottom-bar .btnbar .btn.remind .subText {
    margin: 0 12px;
    display: block;
}
.bottom-bar .btnbar .btn.buy .subText, .bottom-bar .btnbar .btn.remind .subText {
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.bottom-bar .btnbar .col_2 .buy .subText, .bottom-bar .btnbar .col_2 .remind .subText {
    margin-left: 12px;
}
</style>