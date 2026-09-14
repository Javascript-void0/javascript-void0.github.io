var comments = [
    "在我们的示例中",
    "文章浅析了CS",
    "目的探讨经内镜逆行胰胆管造影",
    "设计时装不再是男同性恋和欧洲人的专利",
    "我很不喜欢现代艺术",
    "在这点上，你应被这样一种事实所鼓舞",
    "拿哥斯达黎加来说",
    "目前，IHP正在充分利用家乡经济腾飞的良机",
    "她身材高挑，一头金发",
    "较高的刻线速度提高了产能",
    "这意味着测试设备因绝缘部分的碳化而被破坏",
    "到我上高中的时候",
    "这种风险会维持多久要依那些作为许多",
    "受邀者要么被注明是家庭成员",
    "将膳食极端地改变为素食(以西瓜",
    "不仅如此",
    "牛黄解毒片对急性渗出性炎症有明显抑制作用",
    "在美国",
    "日本人的训练方法即缺乏幽默感又不知疲倦",
    "方法采用实时荧光定量聚",
    "随着全球气温升高",
    "红肉会引发癌症",
    "当他们来到榛树下时，白鸽唱道：“家！”",
    "谈话中他彬彬有礼且温文尔雅",
    "费梭·侯克",
    "埃丽诺是不是已经在盼他来了？",
    "由于签章图像在实际商业交往中的应用很广泛",
    "我们根本就不在乎时间- - - - - -我们在",
    "虽然他们和华尔街命运相连",
    "也就是说，冒号的存在",
    "推进东亚合作的方向不能改变",
    "在经典信息论的基础上",
    "主教表示说，他十分讨厌老鼠",
    "字符串必须含有格式所需的确切数据量",
    "其中三角洲沼泽平原是最好的聚煤场所",
    "捐出那些他已经读过并且不再适龄的书如何？",
    "这扇门只开了一条路然后就很快的关上了",
    "她对一个几乎是禁忌话题的干脆处理令人耳目一新",
    "“像这样的端坐在巢中，它身上肯定长",
    "这是一张让人心情愉快、有趣的卡片，前面是一幅卡通画",
    "“13年都已经过去了",
    "下午时间留出来会朋友，搜罗宝贝",
    "很多人都将其视为一种“玩具”编程语言",
    "由于叶肉细胞可进行光呼吸",
    "他能轻而易举地在各学科之间换来换去",
    "酒吧里有个陌生男人向她求欢",
    "目的探讨急性中枢神经系统感染患",
    "磁共振力显微镜的",
    "简要介绍了医疗设备维修管理的重要性",
    "大门坐西朝东，上有高大的顶楼",
]

var danmuContainer = document.getElementById('danmu-container')

function createComment() {
    var content = comments[Math.floor(Math.random() * comments.length)]
    
    var danmu = document.createElement('div')
    danmu.classList.add('danmu')
    danmu.style.top = '30px'
    randomX = Math.random() * window.innerWidth;
    randomY = Math.floor(Math.random() * 20) * 30;
    speed = 15/content.length
    speed = Math.max(1, speed)
    speed = Math.min(3, speed)
    danmu.style.right = '-' + (8.6 * (content.length + randomX)) + 'px'
    // danmu.style.right = window.innerWidth + randomX + 'px'
    // danmu.style.left = window.innerWidth + 'px';
    danmu.style.top = randomY + 'px'
    danmu.style.zIndex = 100
    danmu.setAttribute('speed', speed)
    // set lang
    danmu.textContent = content;

    danmuContainer.append(danmu);
}


for (i = 0; i < 30; i++) {
    createComment()
}


setInterval(function() {
    var allDanmu = document.getElementsByClassName('danmu')
    for (danmu of allDanmu) {
        right = danmu.style.right.slice(0, -2);
        right = parseFloat(right);
        if (right > window.innerWidth) {
            danmu.remove()
            createComment();
            return;
        }

        speed = parseFloat(danmu.getAttribute('speed'))
        // left += 8.6
        // console.log("add: " + speed)
        right += speed;
        danmu.style.right = right + 'px'
    }
}, 20)
