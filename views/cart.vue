<template>
	<div class="cartbuy">
		<div v-if="item.goods.length" v-for="(item,key) in items" class="bundlev2" id="bundlev2_s_126446588" :data-seller="key">
			<div class="shop" >
				<div class="o-t-title-shop">
					<div class="tcont">
						<div class="shopcb">
							<p >
								<input :id="key" class="o-t-cb" type="checkbox" @click="selectRange('seller',$event)"><label :for="key" ></label>
							</p>
						</div>
						<div class="ico">
							<span class="shopIco_B" ></span>
						</div>
						<div class="contact">
							<a href="//shop.m.taobao.com/shop/shop_index.htm?shop_id=57301063">
							<p class="title" v-if="item.goods.length">{{item.goods[0].sellerNick}}</p>
							<p class="arrow">
								<span class="icon-right"></span>
							</p>
							</a>
						</div>
						<div class="state">
							<div class="state-cont">
								<p class="edit undefined" @click="toggleEditor">
									编辑
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-for="good in item.goods" class="group" :data-skuId="good.skuId">
				<div class="itemv2 edit-false" >
					<div class="item-box" >
						<div class="item-list o-t-item undefined" >
							<div class="item-cb">
								<p>
									<input  @click="countMoney" :data-skuId="good.skuId" :data-quantity="good.quantity" :id="good.skuId" type="checkbox" class="cb o-t-cb" ><label :for="good.skuId"></label>
								</p>
							</div>
							<div class="item-detail">
								<div >
									<div class="item-img">
										<a href="//a.m.taobao.com/i544551041175.htm"><img class="lazy" :src="'http:'+good.imgUrl"></a>
									</div>
									<div class="item-info">
										<a href="//a.m.taobao.com/i544551041175.htm" >
										<h3 class="title" >{{good.title}}</h3>
										<div class="sku" >
											<p>
												<span v-for="(value,key) in good.params">{{key}}:{{value}},</span>
											</p>
										</div>
										</a>
										<div class="item-logos" >
											<div class="item-logo-text" >
												<div class="item-logo-title" style="color:#FF5000;" >
													限购{{good.info.limit}}件
												</div>
												<span></span>
											</div>
										</div>
										<div class="pay">
											<div class="pay-price" >
												<div class="price" >
													<p class="o-t-price" data-symbol="￥" >
														<span ><span class="major" >{{good.info.price.priceText}}</span><span class="point">.</span><span class="minor" >00</span></span>
													</p>
												</div>
												<div class="originPrice" >
													<p >
														<del>￥{{good.oldPrice}}</del>
													</p>
												</div>
											</div>
											<div class="quantity">
												<p>
													<span >x</span><span>{{good.quantity}}</span>
												</p>
											</div>
										</div>
									</div>
									<div class="item-info2" style="display: none">
										<div style="-webkit-box-flex:1">
											<div class="edit-quantity">
												<p class="btn-minus"><a class="btn minus off" :data-sellerId="key" :data-skuId="good.skuId" min="1" @click="changeQun('minus',$event)"></a></p>
												<p class="btn-input"><input type="tel" :max="good.info.limit" min="1" :value="good.quantity"></p>
												<p class="btn-plus"><a class="btn plus" :data-sellerId="key" :data-skuId="good.skuId" :max="good.info.limit" @click="changeQun('add',$event)"></a></p>
											</div>
											<div class="edit-sku" >
												<div><p><span v-for="(value,key) in good.params">{{key}}:{{value}},</span></p></div>
											</div>
										</div>
										<div style="-webkit-box-flex:1" class="item-del c-edit-delshow" :data-sellerId="key" :data-skuId="good.skuId" @click="delSkuObj">删除</div>
									</div>
								</div>
							</div>
							<div class="item-del c-edit-delhide">
								<p>
									删除
								</p>
							</div>
						</div>
					</div>
					<div class="op" >
						<div class="item-del c-edit-delhide">
							<p>
								删除
							</p>
						</div>
					</div>
					<div class="op2">
					</div>
				</div>
			</div>
		</div>
		<div class="footer" >
			<div class="f-fx" >
				<div>
					<div class="ft-cb" >
						<p>
							<input id="cb-footer" type="checkbox" class="cb o-t-cb"  @click="selectRange('all',$event)"><label for="cb-footer"></label>
						</p>
					</div>
					<div class="qx">
						全选
					</div>
					<div class="pay">
						<div>
							<div>
								<span class="hj">合计：</span>
								<p class="o-t-price" data-symbol="￥">
									<span ><span class="major">{{totalMoney | _parseInt}}</span><span class="point">.</span><span class="minor">{{totalMoney | sliceDecimal}}</span></span>
								</p>
							</div>
							<p>
								不含运费
							</p>
						</div>
					</div>
					<div class="btn" @click="addToOrder">
						<p>
							<span>结算</span><span>(</span><span>{{totalQun}}</span><span>)</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="emptyCart" v-if="isEmpty" style="position: fixed;z-index:-1;top: 0;
		left: 0;right: 0;bottom: 0;width: 100%;height: 100%;display: -webkit-box;-webkit-box-pack:center;-webkit-box-align:center">
			<div class="centerbox">
				<img src="public/images/emptyCart.png" alt="" style="display: block;margin: 0 auto;width: 60%;">
				<p style="font-size:0.325rem;margin-top: 0.125rem;">购物车空啦，再忙也要买点东西</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:{},
				price:{},
				totalMoney:0,
				totalQun:0,
				isEmpty:true,
			}
		},
		created(){
			/*window.onunload = function(){
				localStorage.jhsCart = JSON.stringify(this.items)
			}*/
			var count = 0;

			if(localStorage.jhsCart){
				this.items = JSON.parse(localStorage.jhsCart)

				for(var i in this.items){
					var that = this;
					if(that.items[i].goods.length<1)return;
					that.items[i].goods.forEach(function(item){
						//console.log(item)
						that.price[item.skuId] = item.info.price.priceText;

						count++;
					})
				}
				//console.log(that.price)
			}

			this.isEmpty = count>0?false:true;
			//console.log(window)
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
			changeQun(str,ev){
				var that = this;
				var max = $(ev.target).attr('max');
				var sellerId = $(ev.target).attr('data-sellerId')
				var index = this.findSkuId(ev.currentTarget);

				var value = this.items[sellerId].goods[index].quantity;
				if(str == 'minus'){		
					value--;
					value = value<1?1:value
				}else{
					value++;
					value = value>max?max:value
				}
				this.items[sellerId].goods[index].quantity = value;
				//console.log(value);
				setTimeout(function(){
					that.countMoney();
				},17)
				
				localStorage.jhsCart = JSON.stringify(this.items)
			},
			delSkuObj(ev){
				var that = this;
				console.log(ev.currentTarget)
				var sellerId = $(ev.target).attr('data-sellerId');
				var index = this.findSkuId(ev.target);
				this.items[sellerId].goods.splice(index,1);

				localStorage.jhsCart = JSON.stringify(this.items)
				setTimeout(function(){
					that.countMoney();
				},17)
			},
			findSkuId(ele){

				var sellerId = $(ele).attr('data-sellerId');
				var skuId = $(ele).attr('data-skuId');
				var _index;
				this.items[sellerId].goods.forEach(function(item,index){
					if(item.skuId == skuId){
						_index = index;
						return;
					}
				})
				return _index;
			},
			findTargetParent(ele, classStr) {
				var target;
				while (ele = ele.parentElement) {
					if (ele.className == classStr) {
						target = ele;
			            break
					}
				}
			return target
			},
			toggleEditor(ev){
				if(ev.target.innerText === '编辑'){
					ev.target.innerText = '完成'
				}else{
					ev.target.innerText = '编辑'
				}
				var sellerEle = this.findTargetParent(ev.target,'bundlev2');
				var goods = $('.group', sellerEle);

				goods.forEach(function(item){
					var info2 = $('.item-info2',item)[0];
					var info = $('.item-info',item)[0];
					if(info.style.display == 'none'){
						info.style.display = '';
						info2.style.display = 'none';
					}else{
						info.style.display = 'none';
						info2.style.display = '';
					}
				})

			},
			selectRange(range,ev){
				var that = this;
				var _boolean = ev.currentTarget.checked;
				//console.log(ev.currentTarget.checked)
				if(range === 'seller'){
					var parent = this.findTargetParent(ev.target);
					Array.prototype.forEach.call(document.querySelectorAll('input[data-skuId]',parent),function(item){
						item.checked = _boolean;
					})
					 //.checked = true;
				}else if(range === 'all'){
					Array.prototype.forEach.call(document.querySelectorAll('input[type="checkbox"]'),function(item){
						item.checked = _boolean;
					})					
				}
				setTimeout(function(){
					that.countMoney();
				},17)
			},
			countMoney(ev){
				/*$('.group[data-skuId]').forEach(function(item){
					var arr = [];
					var input = $(item).find('input[data-skuId]');					
				})*/
				var that = this;

				this.totalMoney = 0;
				this.totalQun = 0;

				$('input:checked[data-skuId]').forEach(function(item,index){
					//console.log(item)
					var item = $(item);

					var skuId = item.attr('data-skuId');
					var quantity = item.attr('data-quantity');
					console.log('quantity: '+quantity)
					//console.log( that.total)
					that.totalMoney += that.price[skuId] * quantity;
					that.totalQun ++;

					//console.log(item)
				})
			},
			addToOrder(ev){
				if(this.isEmpty)return;
				var that = this;
				var obj = {};
				var rest = {};

				var sellers = $('.bundlev2[data-seller');
				sellers.forEach(function(item){
					var goods = $('input[data-skuId]',item);
					var seller = $(item).attr('data-seller');
					obj[seller] = {};
					rest[seller] = {};
					obj[seller].goods = [];
					rest[seller].goods = [];
					obj[seller].totalQun = 0;
					obj[seller].totalPrice = 0;

					goods.forEach(function(item2){	
						if(item2.checked){

						 	that.items[seller].goods.forEach(function(item3,index3){							
								if(item3.skuId == $(item2).attr('data-skuId')){						
									obj[seller].totalQun += item3.quantity * 1;
									obj[seller].totalPrice += item3.quantity * item3.info.price.priceText;

									obj[seller].goods.push(item3);
								}
								return;
							})

						}else{

							that.items[seller].goods.forEach(function(item3,index3){							
								if(item3.skuId == $(item2).attr('data-skuId')){					
									rest[seller].goods.push(item3);
								}
								return;
							})
						}			
						
						//console.log(that.items[item])
						
					})
					
										
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
				})
				localStorage.order = JSON.stringify(obj);
				localStorage.rest = JSON.stringify(rest);

				setTimeout(function(){
					location.href = 'order.html';
				},300)
			}
		},
	}
</script>
