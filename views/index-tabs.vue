
<template>
<div class="main" style="margin-top:.4rem;">
	<div class="slider" v-if="banner.length"></div>
	<div data-spm="Boxsys-JU_WAP_ALL" class=" box-group box-type-group " pre-display="block" style="overflow:hidden;display: -webkit-box;">
		<a v-for="(item,index) in boxGroup" v-bind:style="{overFlow:'hidden', display:'-webkit-box',webkitBoxFlex:1, marginRight:index!=boxGroup.length-1?'5px':'0px'}" class="box-action box-btn box-col">
            <img class="box-img " style="width:100%;height:auto" :src="item.data.imageURL+'_350x1000Q90.jpg_.webp'">
        </a>
	</div>
	<div style="height: 10px;background-color: transparent;"></div>
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
    <div data-spm="icons" v-show="scrollTop>=2000">
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
                banner:[],
                boxGroup:[],
                scrollTop:0,
			}
		},
		created(){
           this.changeData();

		},
		mounted(){
            var that = this;
            window.addEventListener('scroll',function(){
                that.scrollTop = document.body.scrollTop;
            })
		},
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'changeData',
        },
        methods:{
            changeData(){
                var that = this;
                var data = require('../json/index_'+this.$route.params.id+'.js');
                var head = data.head.model;

                this.items  = data.itemList;
                head.blocks.forEach(function(item,index){
                    if(item.templateType == 'banner'){
                        that.banner = item.data.dataList
                        console.log(that.banner)
                    }
                    else if(item.templateType == 'group'){
                        that.boxGroup = item.blocks
                    }
                })

                //console.log(this.$nextTick)
                this.$nextTick(() => {
                    var data = [];
                    this.banner.forEach(function(item){
                        data.push({'src':item.imageURL+'_10000x500Q90.jpg_.webp'})
                    })
                    $('.slider').html('')
                    window.slider = new Slider(data)
                })
                
            },
            toTop(){
                document.body.scrollTop = 0
            }
        },
	}
</script>
