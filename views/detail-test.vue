<template>
	<div class="main">
		<!-- banner图片 -->
		<div class="slider"></div>
		<!-- 商品信息 -->
		<div id="J_itemInfo" data-spm="iteminfo">
			<div class="pricebar" id="J_PriceBar">
				<div class="subleft avil">
					<div class="price ">
						¥<strong class="small">{{baseInfo.activityPrice}}</strong>
					</div>
					<div class="information">
						<div class="soldcount">
							<span>{{baseInfo.soldCount}}</span>件已售
						</div>
						<div class="oprice">
							<del>¥ {{baseInfo.originalPrice}}.00</del>
						</div>
					</div>
				</div>
				<div class="countdown">
					<div id="J_CountDownTxt" class="txt">
						距结束仅剩
					</div>
					<div class="clockrun">
						<span class="num" id="J_TimeHour">67</span><span class="dot">:</span><span class="num" id="J_TimeMin">16</span><span class="dot">:</span><span class="num" id="J_TimeSec">01</span><span class="dot">.</span><span class="num" id="J_TimeWSec">09</span>
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
		<div id="J_showSku" data-spm="skubar" @click="toggleSku"> 
		   <div class="showskubar" data-spm-click="gostr=/jhs;locaid=skubar"> 
		      <span class="buytext">请选择商品的颜色尺寸等信息</span> 
		      <span class="icon"></span> 
		   </div> 
		</div>
		<!-- 评价概况 -->
		<div id="J_MinItemEval" data-spm="minieval">
			<div class="minitemeval">
				<div class="tit J_FirstRate" data-spm-click="gostr=/jhs;locaid=minieval_tit">
					<em>669</em>条评价<span class="icon"></span>
				</div>
				<div class="evallist" data-spm-click="gostr=/jhs;locaid=minieval_first">
					<ul>
						<li class="evalli">
						<div class="userinfo">
							<span class="nick">南**凯</span><span class="section" style="width:56px"><img src="http://gtms03.alicdn.com/tps/i3/TB1twgJIVXXXXXDXXXXkX_7.FXX-128-20.png_.webp"></span>
						</div>
						<div class="evalcon">
							上身很效果很好，只是线头有点多，手感不错，不知道会不会起球，穿后再来追加！
						</div>
						<div class="otherinfo">
							<span>2017-03-14</span><span>颜色分类:V领粉色;尺码:M</span>
						</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 店铺详情 -->
		<div id="J_shopH5Desc">
			<div class="shopdes">
				<img class="shoppic" src="http://img.alicdn.com/imgextra//f5/8c/TB1kpIZNVXXXXaYXVXXSutbFXXX.jpg">
				<div class="shopname">{{seller.nick}}</div>
				<img class="tm_icon" :src="'http:'+seller.picUrl">
				<ul class="shopasess">
					<li>宝贝描述:<span class="red">{{seller.evaluateInfo[0].score}}</span><span class="grade bad">低</span></li>
					<li>卖家服务:<span class="red">{{seller.evaluateInfo[1].score}}</span><span class="grade good">平</span></li>
					<li>物流服务:<span class="red">{{seller.evaluateInfo[2].score}}</span><span class="grade good">高</span></li>
				</ul>
			</div>
		</div>
		<!-- 宝贝描述，评价，参数tab -->
		<div id="J_TabWrap" class="tabwrap" data-spm="tabs" style="height: 42px;">
			<div class="jutabs" id="J_Tabs" style="position: relative;">
				<div class="stab-wrap" data-spm="stab">
					<div class="stab-scroll-wrap">
						<div class="stab-scroll" style="width: 100%;">
							<div class="stab-canvas" style="width: 300px;">
								<ul>
									<li data-spm-click="gostr=/jhs;locaid=nav0" data-index="0" class="stab-current">详情</li>
									<li data-spm-click="gostr=/jhs;locaid=nav1" data-index="1" class="">评价</li>
									<li data-spm-click="gostr=/jhs;locaid=nav2" data-index="2" class="">参数</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="tools-bot" data-spm="tools" style="top: 526px;">
					<a class="btn gotopcdesc" href="https://h5.m.taobao.com/app/detail/desc.html?_isH5Des=true#!id=543900395531&amp;type=1&amp;relatedRec=false">电脑<br>
					<em>版详情</em></a>
					<div class="btn gototop J_GoToTop">
						
					</div>
				</div>
			</div>
		</div>
		<!-- 宝贝描述，评价，参数content -->
		

		<div class="topnav">
			<div class="btngroup">
				<a data-type="icon" class="btn gotocart" href="https://h5.m.taobao.com/mlapp/cart.html?_target=_blank"></a><a data-type="icon" class="btn gohome" href="//tb.cn/x/ju/?_target=_blank"></a>
			</div>
			<div id="J_shopSku" class="shopsku show" data-spm="sku" style="display: block;">
				<div>
					<div class="d-prop">
						<div class="dp-top">
							<div class="dpt-l">
								<img class="J_pimg" src="http://img.alicdn.com/imgextra/i4/TB1oj6aLpXXXXbKaXXXXXXXXXXX_!!0-item_pic.jpg_100x100q90.jpg">
							</div>
							<div class="dpt-r">
								<div class="dpt-rt" id="J_detail_skupr">
									<span class="dpt-pri">¥45.00</span>(库存21990件)
								</div>
								<span class="dpt-opt J_skutext">还未选 <span class="dpt-gray">尺码,颜色分类</span></span>
							</div>
							<div class="dpt-c J_dclose" @click="toggleSku">
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
										<span class="dpn-del J_buydel"></span><span class="dpn-buy J_buytext">1</span><span class="dpn-add J_buyadd"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="dp-btom">
							<span id="J_skubton" class="dp-bton">加入购物车</span>
						</div>
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
				baseInfo:{},//基本信息
				seller:{},//卖家信息
				props:[],//产品参数
				skuProps:[],//产品属性(颜色、尺码)
				skus:[],//组合ID 显示库存量
				skuMap:[],//组合参数组成组合ID
                currentPrice:'',//当前价格
                currentQuantity:'',//当前存库
                skusLength:0,//当前sku有几组参数 例:20509:28315;1627207:381752166(2组)
                img:'',
                price:'',
                limit:'',
                record:[],//缓存记录
			}
		},
        methods:{
            toggleSku(ev){
                if($('#J_shopSku').hasClass('show')){
                    $('#J_shopSku').css('display','none').removeClass('show')
                }else{
                    $('#J_shopSku').addClass('show').css('display','block')
                }
            },
            togglebtn(ev){
                var that = this;
                var target = $(ev.target);
                var reg_currentSku; //  /xxxx:xxxx;[0-9:]+;?/
                var matchId; // 2505:4567;48789:16489 >= 165489789
                var addition = 0; //统计参数，当前只剩一个产品属性时才执行添加disable类
                var tempArr = [];
                var matchObj = [];
                var indexOfParent;



                //更换激活状态样式
                if(target.hasClass('disable')) return;
                if(target.attr('data-img')){
                    that.img = 'http:' + target.attr('data-img');
                }
                target.toggleClass('sel').siblings().removeClass('sel');
                console.log($('.dpc-pr span'))

                //点击span时组合查询sku正则表达式 /xxxx:xxxx;[0-9:]+;?/.test(skuMap[i])
                reg_currentSku = '';
                $('.dpc-pr').forEach(function(item,index){
                  var item = $(item);
                  var sel = $('span.sel',item);
                  //console.log(target)
                    if(sel.length){
                        reg_currentSku += sel.attr('data-id')+';?';
                        if(sel.attr('data-id') == target.attr('data-id')){
                            indexOfParent = index;
                        }
                    }else{
                        reg_currentSku += '[0-9:]+;?';
                        addition++;
                    }
                })
                
                
                if(addition >1){//未达到查询条件
                    $('.dpc-pr span').removeClass('disabled');
                    return;
                }else if(addition == 1){ //达到查询条件，只剩一个属性没选择
                    console.log('option1')
                    $('.dpc-pr span').removeClass('disabled');
                    console.log('组合：'+reg_currentSku)
                     //匹配所有符合的sku并组合得到组合ID
                    for(var c in that.skuMap){
                        if( eval('/'+reg_currentSku+'/').test(c) ){
                            matchId = that.skuMap[c];
                            tempArr.push(matchId);
                        }
                    }                   

                    //获得存库为0的ID
                    tempArr.forEach(function(item,index){
                        if(that.skus[item].quantity == 0){
                            matchObj.push(item);
                        }
                    })
                   // console.log(matchObj)
                    if(matchObj.length ==0)return;              

                    //获得没有选择的属性所在位置([0-9;]+?) 例:2541:4899;[0-9;]+?;16549:123165 在第二个属性项
                    var temp = reg_currentSku.split('?');
                    var emptyIndex;
                    temp.forEach(function(item,index){
                        if(item == '[0-9:]+;'){
                            emptyIndex = index;
                        }                  
                    })

                    //遍历所有属性项，找打“没有选择的属性项”添加disabled类
                    for(var p in that.skuMap){
                        matchObj.forEach(function(item,index){
                            if(that.skuMap[p] == item){
                                var temp = p.split(';')
                                $('[data-id="'+temp[emptyIndex]+'"]').addClass('disabled');
                                that.record.push(temp[emptyIndex]);
                            }
                        })
                    }
                }else if(addition == 0){//达到查询条件，并且有存库
                     console.log('option2')

                    console.log('组合：'+reg_currentSku)
                    for(var c in that.skuMap){
                        if( eval('/'+reg_currentSku+'/').test(c) ){
                            matchId = that.skuMap[c];
                        }
                    }
                    matchObj = that.skus[matchId];
                    that.price = matchObj.price.priceText;
                    that.limit = matchObj.limit;
                    console.log(matchObj)

                    var t = '';
                    var obj = {};//id:skus
                    var arr = [];
                    var match = [];
                    var _index;
                    console.log(indexOfParent)
                    for(var i=0,len=$('.dpc-pr').length; i<len ;i++){
                        if(i == indexOfParent){
                            t += target.attr('data-id')+';?'
                        }else{
                            t += '[0-9:]+;?'
                            if(!_index){
                                _index = i;
                            }
                        }
                    };
                    console.log(t);
                    for(var o in that.skuMap){
                        if(eval('/'+t+'/').test(o)){
                            match.push(that.skuMap[o])//id
                            obj[that.skuMap[o]] = o;

                           /* obj[that.skuMap[o]] = {};
                            obj[that.skuMap[o]][t] = o;//{464645:{'[0-9:]+;?151485:8852':'2541:1562;151485:8852'}}*/
                        }
                    };
                    match.forEach(function(item,index){
                        if(that.skus[item].quantity == 0){
                            arr.push(item)
                        }
                    });console.log(arr);
                    console.log(obj)
                    if(arr.length == 0){
                        $('.dpc-pr').forEach(function(item,index){
                           // console.log(index)
                            if(index != indexOfParent){
                                $('span.disabled',$(item)).removeClass('disabled')
                                return;
                            }
                        })
                       // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
                    }

                    arr.forEach(function(item,index){
                        console.log(obj[item].split(';')[_index])
                        $('[data-id="'+obj[item].split(';')[_index]+'"]').addClass('disabled');
                    })
                    
                    /*for(var q in obj){
                        arr.forEach(function(item,index){
                            if(item == q){
                                console.log(obj[q][t])
                                var j = obj[q][t].split('?');
                               
                                j.forEach(function(item2,index){
                                    if(item == '[0-9:]+;'){
                                         $('[data-id="'+obj[q][index]+'"]').addClass('disabled');
                                    }
                                    return;
                                })                              
                            }
                        })
                    }*/


                }
               

            }
        },
		created(){
			var data = require('../json/detail.js');
			this.baseInfo = data.baseInfo.item;
			this.seller = data.detailInfo.data.seller;
			this.props = data.detailInfo.data.props;
			this.skuProps = data.detailInfo.data.skuModel.skuProps;
			this.skus = data.detailInfo.data.apiStack[0].value.skuCore.sku2info;
			this.skuMap = data.detailInfo.data.skuModel.ppathIdmap;

            var dd = 0;
            var ff = 0;
            for(var i in this.skus){dd++}
            for(var e in this.skuMap){ff++}
                console.log('dd: '+dd+'ff: '+ff)
            console.log(this.skus)
            
            console.log(this.skuMap)
		},
		mounted(){
			var Slider = require('../public/js/slider.js');
			new Slider([
				{'src':'http://gtd.alicdn.com/tpsi1/1630405029689395933/TB2I88DhW8lpuFjy0FpXXaGrpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi1/1630405029689555416/TB22ixujstnpuFjSZFvXXbcTpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi3/1630405029689559493/TB2A94fjxBmpuFjSZFsXXcXpFXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi3/1630405029689601921/TB22RhtjtRopuFjSZFtXXcanpXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'},
				{'src':'http://gtd.alicdn.com/tpsi4/1630405029689690623/TB2ltVJjrBmpuFjSZFAXXaQ0pXa_!!0-juitemmedia.jpg_800x800Q30.jpg_.webp'}
			])

            this.skusLength = $('.dpc-pr').length;
            console.log(this.skusLength)
		},
	}
</script>

<style>
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
    width: 70px;
    height: 10px;
    margin-top: 5px;
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
    z-index: 21;
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
</style>