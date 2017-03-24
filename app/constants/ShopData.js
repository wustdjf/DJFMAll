'use strict'

const ShopCatagory = [
    {
        name: '推荐分类',
        index: 0
    },
    {
        name: '潮流女装',
        index: 1
    },
    {
        name: '品牌男装',
        index: 2
    },
    {
        name: '美妆个护',
        index: 3
    },
    {
        name: '家用电器',
        index: 4
    },
    {
        name: '电脑办公',
        index: 5
    },
    {
        name: '手机数码',
        index: 6
    },
    {
        name: '母婴童装',
        index: 7
    },
    {
        name: '图书音像',
        index: 8
    },
    {
        name: '家居家纺',
        index: 9
    },
    {
        name: '厨房用品',
        index: 10
    },
    {
        name: '家具建材',
        index: 11
    },
    {
        name: '食品生鲜',
        index: 12
    },
    {
        name: '酒水饮料',
        index: 13
    },
    {
        name: '运动户外',
        index: 14
    },
    {
        name: '鞋靴箱包',
        index: 15
    },
    {
        name: '奢品礼品',
        index: 16
    },
    {
        name: '钟表珠宝',
        index: 17
    },
    {
        name: '玩具乐器',
        index: 18
    },
    {
        name: '内衣配饰',
        index: 19
    },
    {
        name: '汽车用品',
        index: 20
    },
    {
        name: '医药保健',
        index: 21
    },
    {
        name: '计生情趣',
        index: 22
    },
    {
        name: '全球购',
        index: 23
    },
    {
        name: '京东金融',
        index: 24
    },
    {
        name: '生活旅行',
        index: 25
    },
    {
        name: '宠物农资',
        index: 26
    } 
]

const ShopData = [
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '热卖品类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '当季新品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '针织开衫'
                },{
                    icon: require('../images/shop/category_default.png'),
                    title: '春季新品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '长袖衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套头卫衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '休闲裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牛仔裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '毛呢大衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '自营女装'
                }
            ]
        },
        {
            title: '裙装',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '春装连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '长袖连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '针织连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '蕾丝连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '棉麻连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '雪纺连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '印花连衣裙'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '半身裙'
                }
            ]
        },
        {
            title: '上装',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '针织衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '短外套'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卫衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '气质风衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '打底衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '羊绒衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '毛呢大衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '棉服'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '羽绒服'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '皮草'
                }
            ]
        },
        {
            title: '下装',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牛仔裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '休闲裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '加绒裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '打底裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '小脚裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '高腰裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '哈伦裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '阔腿裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '灯芯绒'
                }
            ]
        },
        {
            title: '特色类目',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '大码女装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '妈妈装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '婚纱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '旗袍/唐装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '礼服'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '设计师'
                }
            ]
        },
        {
            title: '商场大牌',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'VERO MODA'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'ONLY'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '哥弟'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '欧时力'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '拉夏贝尔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'MO&Co'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '太平鸟'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '伊芙丽'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '歌莉娅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'Five Plus'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '艾格'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '百图'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '秋水伊人'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '圣迪奥'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '拉谷谷'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '季候风'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '朗姿'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '音儿'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '鄂尔多斯'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '雪莲'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'BLUE ERDOS'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '波司登'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '米尚'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '雅鹿'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '鸭鸭'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '金羽杰'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '雪中飞'
                }
            ]
        },
        {
            title: '知名品牌',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '烟花烫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '韩都衣舍'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '妖精的口袋'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '茵曼'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'AMII'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'ONEBUYE'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洛诗琳'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '森宿'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '伊莲娜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '初语'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'Tune Tune'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '高梵'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'M&E'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '欧丝璐'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '思诺芙德'
                }
            ]
        }
    ],
    [
        {
            title: '热卖选购',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '新品T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '精品衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '新款夹克'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牛仔裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '休闲裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '西裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '潮流卫衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '西服'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '短裤'
                }
            ]
        },
        {
            title: 'T恤',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '新款T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '长袖T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '短袖T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纯棉T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '印花T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纯色T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '翻领T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '条纹T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '亚麻T恤'
                }
            ]
        },
        {
            title: '牛仔裤',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '加绒牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '直筒牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '修身牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纯色牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '小脚牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '弹力牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '黑色牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '破洞牛仔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '加大码牛仔'
                }
            ]
        },
        {
            title: '男士内搭',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '长袖T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '短袖T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '长袖衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '短袖衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'POLO衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卫衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纯棉T恤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纯棉衬衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '针织衫'
                }
            ]
        },
        {
            title: '男士外套',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '夹克'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '单西'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '风衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '仿皮皮衣'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '真皮外套'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '西服套装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '马甲'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牛仔外套'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '毛呢大衣'
                }
            ]
        },
        {
            title: '男士裤装',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牛仔裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '休闲裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '加绒裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '西裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '运动裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '阔腿裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '工装裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '棉裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '皮裤'
                }
            ]
        },
        {
            title: '特色男装',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '自营男装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '设计师/潮牌'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中长款羽绒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中老年男装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '唐装/中山装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '工装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '沙滩裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '皮裤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '棒球衫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '印花卫衣'
                }
            ]
        },
        {
            title: '热卖品牌',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'GXG'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '森马'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '海澜之家'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '美特斯邦威'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'JACK&JONES'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'A21'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '真维斯'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '班尼路'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '劲霸'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '杉杉'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '七匹狼'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '红豆'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '太平鸟'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'Levis'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'SELECTED'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '柒牌'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '九牧王'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '佐丹奴'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'AK'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '凡客'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卡宾'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '骆驼'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'HAZZYS'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '马克华菲'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '波司登'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'gxg.geans'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'Dickies'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '唐狮'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '雅戈尔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '威可多'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'Lacoste'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: 'TOMMY HILFIGER'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '鸭鸭'
                }
            ]
        }
    ],
    [
        {
            title: '面部护肤',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卸妆'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洁面'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '爽肤水'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '乳液面霜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '精华'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '眼霜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '防晒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '面膜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '剃须'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装'
                }
            ]
        },
        {
            title: '身体护理',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '沐浴'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '润肤'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '精油'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '颈部'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手足'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纤体塑形'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '美胸'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装'
                }
            ]
        },
        {
            title: '口腔护理',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牙膏/牙粉'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '牙刷/牙线'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '漱口水'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装'
                }
            ]
        },
        {
            title: '香水彩妆',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '女士香水'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '男士香水'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '底妆'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '眉笔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '睫毛膏'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '眼线'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '眼影'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '唇部'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '腮红'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '美甲'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '美妆工具'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装'
                }
            ]
        },
        {
            title: '洗发护发',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洗发'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '护发'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '染发'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '造型'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '假发'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '套装'
                }
            ]
        },
        {
            title: '女性护理',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卫生巾'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '卫生护垫'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '私密护理'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '脱毛膏'
                }
            ]
        },
        {
            title: '清洁用品',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '纸品湿巾'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '衣物清洁'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '清洁工具'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '家庭清洁'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '一次性用品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '驱虫用品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '皮具护理'
                }
            ]
        }
    ],
    [
        {
            title: '推荐品牌',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '美的'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '海尔'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '格力'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '飞利浦'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '华帝'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '海信'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '九阳'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '三洋'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '三星'
                }
            ]
        },
        {
            title: '电视',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '合资电视'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '国产电视'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '互联网电视'
                }
            ]
        },
        {
            title: '空调',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '壁挂式空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '柜式空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调配件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中央空调'
                }
            ]
        },
        {
            title: '洗衣机',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '滚筒洗衣机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洗烘一体机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '波轮洗衣机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '迷你洗衣机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洗衣机配件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '全部'
                }
            ]
        },
        {
            title: '冰箱',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '多门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '对开门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '三门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '双门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '单门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '冰柜/冷吧'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '酒柜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '冰箱配件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '十字对开门'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '全部'
                }
            ]
        },
        {
            title: '厨卫大电',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '油烟机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '燃气灶'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '烟灶套装'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '消毒柜'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '单门冰箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '洗碗机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '嵌入式厨电'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电热水器'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '燃气热水器'
                }
            ]
        },
        {
            title: '厨卫小电',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '料理机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '豆浆机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '榨汁机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电饭煲'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电压力锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '面包机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '咖啡机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '微波炉'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空气炸锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电烤箱'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电磁炉'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电饼铛'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '煮蛋器'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '酸奶机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电炖锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电水瓶/热水器'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '多用途锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电烧烤炉'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '果蔬解毒机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '其他厨房电器'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '养生壶/煎药壶'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '电热饭盒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '面包机'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ],
    [
        {
            title: '专场推荐',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '荣耀V9超级单品日'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '努比亚M2 0元赢新'
                }
            ]
        },
        {
            title: '热门分类',
            data: [
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '手机'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '笔记本'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '空调'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '收纳物品'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '炒锅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '床品套件'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '啤酒'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '中小学教辅'
                },
                {
                    icon: require('../images/shop/category_default.png'),
                    title: '火车票'
                }
            ]
        }
    ]
]
    


module.exports = {
    ShopCatagory: ShopCatagory,
    ShopData: ShopData
}






  
