
<template>
	<ul class="jx-row jx-julist items">
		<li v-for="item in items" class="jx-juitem jx-item-avil">
			<a class="link" :href="item.baseinfo.itemUrl">
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
			<del class="tag-price">{{item.price.origPrice}}</del>
			<div class="sale-info">
				<span class="price">
				<i class="jx-yen">¥</i>
				<em class="base-price">¥{{item.price.actPrice}}</em>
				</span>
				<span class="sold-count">
				<i class="sold-hot"><svg viewbox="0 0 13 15"><g transform="translate(-94, -256)" fill="#E61414"><path d="M97.7853319,266.2515 C98.5885284,265.0625 98.7956712,263.885929 98.7956712,263.885929 C98.7956712,263.885929 99.4269391,264.717089 99.1747426,266.016911 C100.290207,264.759554 100.499939,262.756482 100.332153,261.989018 C102.853082,263.773554 103.930225,267.636768 102.478671,270.5 C110.199403,266.074393 104.398368,259.453071 103.388546,258.706839 C103.725153,259.452554 103.78885,260.715607 103.108903,261.328232 C101.957707,256.90625 99.1110462,256 99.1110462,256 C99.4476534,258.280643 97.8909748,260.774125 96.3897069,262.637375 C96.3368855,261.728018 96.2809569,261.100375 95.8091891,260.230375 C95.7030284,261.882339 94.4570641,263.228768 94.1194212,264.883839 C93.6621534,267.125125 94.4617248,268.766214 97.4989569,270.499482 C96.5435105,268.489161 97.0520462,267.336929 97.7853319,266.2515 Z" id="Shape-Copy-2"></path></g></svg></i>
				<em class="count-wp">{{item.remind.soldCount}}件已售</em>
				</span>
			</div>
			</a>
		</li>
	</ul>
</template>

<script>
    var Slider = require('../public/js/slider.js')

    export default{
        data(){
            return{
                items:[],
                banner:[],
                boxGroup:[]
            }
        },
        created(){
           this.changeData();

        },
        /*mounted(){

            var data = [];
            this.banner.forEach(function(item){
                data.push({'src':item.imageURL+'_10000x500Q90.jpg_.webp'})
            })
            window.slider = new Slider(data)
        },*/
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'changeData',
        },
        methods:{
            changeData(){
                var that = this;

                if(location.has == '#/'){
                    this.items = require('../json/index.js').itemList;

                     this.$nextTick(() => {
                     window.slider = new Slider([
                            {'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742575004-goldrms.jpg@970x970_80Q_.webp'},
                            {'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742842976-goldrms.jpg@970x970_80Q_.webp'},
                            {'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742856683-goldrms.jpg@970x970_80Q_.webp'},
                            {'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742869312-goldrms.jpg@970x970_80Q_.webp'},
                            {'src':'http://ossgw.alicdn.com/ju-moqie-bucket-cn/img/img1489742558869-goldrms.jpg@970x970_80Q_.webp'}
                        ])
                    })
                }else{
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
                }                                        
            },
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
</style>