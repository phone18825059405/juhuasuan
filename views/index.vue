
<template>
<div class="main" style="margin-top:.4rem;">
	<div class="slider"></div>
	<div data-spm="Boxsys-JU_WAP_ALL" class=" box-group box-type-group " pre-display="block" style="font-size:0;width: 100%; height: auto; position: relative; background-size: 100% 100%; background-color: transparent; display: block;">
		<a style="display:inline-block;width:50%;height:auto;left:0px;top:0px;overflow:hidden;background-color:transparent" class="box-action box-btn box-col"><img class="box-img " style="width:100%;height:100%" src="http://gju4.alicdn.com/tps/i2/1000005030085287818/TB2lN5uhYtlpuFjSspoXXbcDpXa_!!0-2-jupush.png_660x440Q90.jpg_.webp"></a>
		<a style="display:inline-block;;width:25%;height:auto;left:207.5549597855228px;top:0px;overflow:hidden;background-color:transparent;" class="box-action box-btn box-col"><img  class="box-img " style="width:100%;height:100%" src="http://gju1.alicdn.com/tps/i3/1000005029384838536/TB2g7.xjilnpuFjSZFgXXbi7FXa_!!0-2-jupush.png_350x1000Q90.jpg_.webp"></a>
		<a style="display:inline-block;width:25%;height:auto;left:310.7774798927614px;top:0px;overflow:hidden;background-color:transparent" class="box-action box-btn box-col"><img  class="box-img " style="width:100%;height:100%" src="http://gju4.alicdn.com/tps/i2/1000005030535354533/TB2TCG_h9BjpuFjy1XdXXaooVXa_!!0-2-jupush.png_350x1000Q90.jpg_.webp"></a>
	</div>
	<div data-spm="Boxsys-JU_WAP_ALL" class=" box-group box-type-group " pre-display="block" style="font-size:0;width: 100%; height: auto; position: relative; background-size: 100% 100%; background-color: transparent; display: block;">
		<a style="display:inline-block;width:50%;height:auto;left:0px;top:0px;overflow:hidden;background-color:transparent" class="box-action box-btn box-col"><img class="box-img " style="width:100%;height:100%" src="http://gju1.alicdn.com/tps/i2/1000005030908445034/TB2M0VljOpnpuFjSZFkXXc4ZpXa_!!0-2-jupush.png_660x440Q90.jpg_.webp"></a>
		<a style="display:inline-block;width:25%;height:auto;left:207.5549597855228px;top:0px;overflow:hidden;background-color:transparent;" class="box-action box-btn box-col"><img  class="box-img " style="width:100%;height:100%" src="http://gju4.alicdn.com/tps/i2/1000005030398885903/TB2TwnAjtFopuFjSZFHXXbSlXXa_!!0-2-jupush.png_350x1000Q90.jpg_.webp"></a>
		<a style="display:inline-block;width:25%;height:auto;left:310.7774798927614px;top:0px;overflow:hidden;background-color:transparent" class="box-action box-btn box-col"><img  class="box-img " style="width:100%;height:100%" src="http://gju2.alicdn.com/tps/i3/1000005029702100071/TB2IIRIh88lpuFjy0FnXXcZyXXa_!!0-2-jupush.png_350x1000Q90.jpg_.webp"></a>
	</div>
	<div data-spm="Boxsys-JU_WAP_ALL" class=" box-group box-type-group " style="width: 100%; height: auto; position: relative; background-size: 100% 100%; background-color: transparent;"><a style="width:100%;height:auto;left:0px;top:0px;overflow:hidden;background-color:transparent" class="box-action box-btn box-col"><img class="box-img " style="width:100%;height:100%" src="http://gw.alicdn.com/tps/TB1qzQeNpXXXXbkXpXXXXXXXXXX-1125-180.png_10000x340Q90.jpg_.webp"></a>
	</div>
	<div class="hot-recomand">热卖推荐</div>
	<ul class="jx-row jx-julist items">
		<li v-for="item in items" class="jx-juitem jx-item-avil">
			<a class="link" href="detail.html">
			<div class="jx-imgwp main-picwp">
				<img class="main-pic" v-lazy="'http:'+item.baseinfo.picUrlNew+'_540x540Q90.jpg_.webp'">
				<div class="merits">
					<div class="merit">{{item.merit.down[0]}}</div>
				</div>
			</div>
			<div class="namewp">
				<div :class="['name', item.extend.titleIcons.length ==0?'':'short']">{{item.name.shortName}}</div>
				<div v-if="item.extend.titleIcons.length>=1" class="title-icons">
					<img class="title-icon" v-for="img in item.extend.titleIcons" :src="'http:'+img" alt="">
				</div>
			</div>
			<del class="tag-price">¥{{item.price.origPrice}}</del>
			<div class="sale-info">
				<span class="price">
				<i class="jx-yen">¥</i>
				<em class="base-price">{{item.price.actPrice}}</em>
				</span>
				<span class="sold-count">
				<i class="sold-hot"><svg viewbox="0 0 13 15"><g transform="translate(-94, -256)" fill="#E61414"><path d="M97.7853319,266.2515 C98.5885284,265.0625 98.7956712,263.885929 98.7956712,263.885929 C98.7956712,263.885929 99.4269391,264.717089 99.1747426,266.016911 C100.290207,264.759554 100.499939,262.756482 100.332153,261.989018 C102.853082,263.773554 103.930225,267.636768 102.478671,270.5 C110.199403,266.074393 104.398368,259.453071 103.388546,258.706839 C103.725153,259.452554 103.78885,260.715607 103.108903,261.328232 C101.957707,256.90625 99.1110462,256 99.1110462,256 C99.4476534,258.280643 97.8909748,260.774125 96.3897069,262.637375 C96.3368855,261.728018 96.2809569,261.100375 95.8091891,260.230375 C95.7030284,261.882339 94.4570641,263.228768 94.1194212,264.883839 C93.6621534,267.125125 94.4617248,268.766214 97.4989569,270.499482 C96.5435105,268.489161 97.0520462,267.336929 97.7853319,266.2515 Z" id="Shape-Copy-2"></path></g></svg></i>
				<em class="count-wp">{{item.remind.soldCount}}件已售</em>
				</span>
			</div>
			</a>
		</li>
	</ul>
    <div data-spm="icons" v-show="scrollTop>2000">
      <button type="button" name="button" class="jx-gotop show"  id="JX_GoTop" @click="toTop"></button>
    </div>
    <div class="jx-myhome" data-spm="mine"><a href="person.html"></a></div>
</div>
</template>

<script>
var Slider = require('../public/js/slider.js')
	export default{
		data(){
			return{
				items:[],
                scrollTop:0,
			}
		},
		created(){
			this.items = require('../json/index.js').itemList;
		},
		mounted(){
            var that = this;
			new Slider([
				{'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742575004-goldrms.jpg@970x970_80Q_.webp'},
				{'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742842976-goldrms.jpg@970x970_80Q_.webp'},
				{'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742856683-goldrms.jpg@970x970_80Q_.webp'},
				{'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742869312-goldrms.jpg@970x970_80Q_.webp'},
				{'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742558869-goldrms.jpg@970x970_80Q_.webp'}
			])

            window.onscroll = function(){
                that.scrollTop = document.body.scrollTop;
            }
		},
        methods:{
            toTop(){
                document.body.scrollTop = 0
            }
        }
	}
</script>

<style>
.hot-recomand {
    height: .2rem;
    font-size: .14rem;
    color: #666;
    margin: .05rem auto;
    position: relative;
    text-align: center;
}

.hot-recomand::after, .hot-recomand::before {
    content: "";
    position: absolute;
    right: 0;
    width: 40%;
    height: 1px;
    top: 50%;
    background: #ddd;
}
.hot-recomand::before {
    left: 0;
}
.jx-row {
    width: 100%;
    box-sizing: border-box;
}
.jx-julist {
    text-align: left;
    position: relative;
    z-index: 200;
}
.jx-julist {
    overflow: hidden;
    background: #F5F5F5;
    list-style: none;
}
.jx-juitem {
    float: left;
    box-sizing: border-box;
    width: 1.85rem;
    height: 2.82rem;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
    margin-bottom: .05rem;
    position: relative;
}
.link, .link:hover, .link:visited, a {
    color: #333;
}
.jx-juitem .link {
    display: block;
    width: 100%;
    height: 100%;
}
.jx-imgwp {
    overflow: hidden;
}
.jx-juitem .main-picwp {
    position: relative;
    padding-bottom: 100%;
}
.jx-juitem .main-pic {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
.jx-juitem .merits {
    position: absolute;
    left: .1rem;
    bottom: .1rem;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
}
.jx-juitem .merit, .jx-juitem .sold-ttc {
    color: #fff;
    font-size: .22rem;
    white-space: nowrap;
}
.jx-juitem .merit {
    border-radius: .03rem;
    background: rgba(0,0,0,.75);
    position: relative;
    height: .32rem;
    padding: 0 .1rem;
    box-sizing: border-box;
}
.jx-juitem .merit:before {
    position: absolute;
    content: "";
    left: -.17rem;
    height: 0;
    width: 0;
    font-size: 0;
    top: 50%;
    margin-top: -.09rem;
    border: .09rem solid transparent;
    border-right-color: rgba(0,0,0,.75);
}
.jx-juitem .namewp, .jx-juitem .sale-info, .jx-juitem .tag-price {
    padding: 0 .05rem;
    display: block;
}
.jx-juitem .namewp {
    font-size: .13rem;
    color: #333;
    margin-top: .03rem;
}
ul.jx-julist .jx-juitem .namewp {
    height: .36rem;
}
.jx-juitem .name {
    height: .36rem;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.jx-juitem .name.short {
    height: .2rem;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
ul.jx-julist .name.short {
    height: .16rem;
}
.jx-juitem .title-icons {
    height: .15rem;
}
ul.jx-julist .title-icons {
    margin-top: .05rem;
}
.jx-juitem .title-icon {
    height: 100%;
    width: auto;
}
del {
    text-decoration: line-through;
}
.jx-juitem .tag-price {
    font-size: .12rem;
    margin-top: .05rem;
    height: .2rem;
    color: #ccc;
}
.jx-juitem .sale-info {
    height: .3rem;
    position: relative;
}
.jx-juitem .price {
    color: #E61414;
    font-size: .12rem;
    text-align: left;
}
.jx-juitem em, .jx-juitem i {
    font-style: normal;
}
.jx-juitem em, .jx-juitem i {
    font-style: normal;
}
.jx-juitem .base-price {
    font-size: .2rem;
    margin-left: -.03rem;
}
.jx-juitem .sold-count {
    font-style: normal;
    font-size: .12rem;
    color: #999;
    text-align: right;
    position: absolute;
    right: .05rem;
    bottom: 0;
    height: .22rem;
}
.jx-juitem em, .jx-juitem i {
    font-style: normal;
}
.jx-juitem .sold-hot {
    height: .15rem;
    width: .13rem;
    display: inline-block;
    text-align: right;
    vertical-align: top;
}
.jx-juitem .count-wp {
    vertical-align: top;
    font-size: .12rem;
}
.jx-juitem:nth-child(even) {
    margin-left: .05rem;
}
.jx-gotop, .jx-myhome {
    position: fixed;
    right: .1rem;
    bottom: .1rem;
    width: .45rem;
    height: .45rem;
    border: 0;
    border-radius: 100%;
    z-index: 100000;
}
.jx-gotop {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAAAXNSR0IArs4c6QAAAv9JREFUaAXtmj1rFUEUhrMxFv6BIPgPBI0JgooBQRTBIiAIFhHBwsJCBEGwsLGwEC0sRKwlFkZtksLCxhQW2tjaW2n8jN+aeH2O3F3ObGZnZyeTuSlm4GXnzDlzznPPHe7H3js0FHn0er2t6C5a7GuG67bIZeKmA3CsD8vFGG+wdsStFikbYOPovYFrGm8xNxY8QLvRB5PTasnx2RjwgOxBn6yY9sXBw8O1D3228zlXBX5npFPaLQ2FJ9GSE8/tTA8PzwH01c3l5U0HD85B9M0Lyy/oHWHre2wocAh99+PpFCXwY90Oq2c0iY+gH51wugXHh6f+UfSzG0dQdDx4yk+hX0EY5qa/ptloCfwuz4NgDyPBMfS7sYTpuIO5Yi4Z1mOsR8ZKsxEOT87j6E9zbsNzC6tALvA5/CPIF14+93TrPBtOIF/om+XzxR4nuMQRI/APkc/whyfbNFr2yUrMjRK6D9UKHgg/ruusmgNyCrmK68dzrZ6gZe+cjie2a+ft8CQ63VIYdzWuaohyjtf1oA1w2UO8wD+osroncmxMeBbOIN+XqyslaP1Kjk7gAfDymX/if10m+1sK4q7G5TqstonqDK7gZ6sq7ol8kxqVp2vBHVd5L2lI25zIIPAA+NsC7vNF4KINtL62FnAFf79qVfPk5TAbXtcBavaFoiiu19bWxaTOMomn0WxLgY/S8fPND6x3riWB4SZP8FHRicgjrzauzp8V8GEkb9n6VUW+/J7UyXzm7IkCLrXItQnJ55/6mGGhKEogjO3M96IltMDTtlj6fK/kWCFWjp9tzJNzyuZwrZFzEv9hNIKekuOJKz7IJ+Coaax6Awoq0t/U1J215EyyN4MnabMqkjuumpFkmjuepM2qSO64akaSae54kjarIrnjqhlJprnjSdqsiuSOq2YkmeaOJ2mzKpI7rpqRZBq743Jro2l8aXKErMcGf+GAeO7wDdbFDZUJZPuV7hXrWwZL11IdQPn/yjMkv43Krbx7aLRl28ZxA7sZVbf4YpP9A14Bnt2tpN/sAAAAAElFTkSuQmCC") center center no-repeat rgba(0,0,0,0.6);
    -webkit-background-size: 50%;
}
.jx-gotop {
    opacity: 0;
    -webkit-transition: opacity .4s ease .4s;
    transition: opacity .4s ease .4s;
}
.jx-gotop.show {
    opacity: 1;
}
.jx-gotop, .jx-myhome {
    position: fixed;
    right: .1rem;
    bottom: .1rem;
    width: .45rem;
    height: .45rem;
    border: 0;
    border-radius: 100%;
    z-index: 100000;
}.jx-myhome {
    left: .1rem;
    background: #E61414;
}.jx-myhome a {
    display: block;
    width: 100%;
    height: 100%;
}.jx-myhome::after, .jx-myhome::before {
    content: "";
    position: absolute;
    left: 50%;
    pointer-events: none;
    border: .015rem solid #fff;
}.jx-myhome::before {
    width: .08rem;
    height: .08rem;
    border-radius: .08rem;
    margin-left: -0.055rem;
    top: .09rem;
}.jx-myhome::after {
    width: .22rem;
    height: .11rem;
    border-top-left-radius: .22rem;
    border-top-right-radius: .22rem;
    top: .185rem;
    margin-left: -0.125rem;
}
</style>