﻿//特别感谢
var clothesNotice = "";
var clothesHistoryNotice = "";

//历史更新
var levelNotice = "";
var levelHistoryNotice = "<br>历史更新记录。<br>2017.11.20数据修改更新V1.0.0。<br>2017.11.25配装器网页修改V1.0.5。<br>2017.12.04配装器网页细节修改V1.0.9。<br>2017.12.05更新格莱斯，婚纱，十二章，服装店上新，充值部件翻译V1.1.0。<br>2017.12.06更新铁羽神迹，远野童子中文名称翻译V1.1.1。<br>2017.12.07更新时光礼赞套装属性，版本号整理V1.1.2。<br>2017.12.08更新卡萨布兰卡套装属性。V1.1.3<br>2017.12.14黑蔷薇活动和衣服数据、特供魔女套装数据更新V1.1.4。<br>2017.12.23雪夜回旋曲、圣诞奇遇记、联邦商店、圣槿元熙衣服、赠送各服部件数据更新V1.7.1。<br>2018.01.03繁星活动关卡及衣服数据更新V1.8.1。<br>2018.01.17Hip-hop衣服数据更新V1.8.2。<br>2018.01.22冰雪舞会衣服及关卡数据更新V1.8.3。<br>2018.01.29添加英文套装名称V1.8.4。<br>2018.02.07魑魅魍魉及充值套装更新V2.0.1。<br>2018.02.11情人节套装及愚人节套装更新、Dreamy Nocturne活动及衣服数据套装更新V2.0.3。<br>2018.03.12活动0.99元、婚纱套装、爱丽丝时空、京剧套装更新V2.1.0。<br>2018.03.19花火排位赛、Clover's Ceremony Pack、Blessed Bark衣服数据数据更新V2.1.1。<br>2018.03.24废墟活动、充值套装、Chap13数据数据更新V2.2.0。<br>2018.04.12福袋、赛车活动及关卡、复活节套装数据更新V2.3.0。<br>2018.04.25福袋龙套装、新阁、周年庆赠送两套、登陆送套装、博物馆套装、联邦商店三套数据更新V2.3.2。<br>2018.05.05风渊两套活动数据更新V2.3.5。<br>2018.05.11Chap14、联盟第五章、乐队活动、舞绣银花、签到10-13月V2.4.0。<br>2018.05.13问答奖励衣服、充值套装及部分衣服获取方式数据更新V2.4.0。<br>2018.06.01星辰祭司、魂骨梦、部分衣服数据更新V2.5.0。<br>2018.06.02婚纱关卡更新、粉莓摇滚套装添加中文、套装整理V2.5.0。<br>2018.06.15Night Castle两套，极道之义更新V2.5.1。<br>2018.06.28翻糖游戏、冥狱之火、荒漠活动两套更新V2.5.2。<br>2018.08.10夏沫海歌、凝砂、夏日雪糕、愚人节两套、充值两套、足球散件、Chap15、繁星活动关卡及衣服数据V3.1.0。<br>2018.08.26Voice of Heart、狐妖、和服染色三套、星光小夜曲衣服数据V3.1.0。<br>2018.08.28阵营两套、樱花两套衣服数据V3.1.2。<br>2018.09.19 联盟Chap6，地图Chap16更新V3.2.0。<br>2018.09.23补回乐队套装韩服充值套装Jade OrchidV3.1.0。<br>2018.09.23Inter Miko、星座散件V3.1.4。<br>2018.09.23登录樱桃、凝砂孔雀、Magic Pocket Watch、童话两套V3.2.1。<br>2018.09.23大提琴、Rose Oath、一梦还秋和日服两套V3.2.2。<br>2018.09.23补充前期遗漏套装巴西少女、孟加拉、银翎云梦、热恋404、花羽扉光、花坞春晓V0.0.0。<br>2018.09.27补回一元购散件、Dream Sky及14-17月签到散件V3.1.4。<br>2017.09.27地图Chap16套装及散件、联盟第六章套装、风火山林和充值福袋更新V3.3.1。<br>2017.10.02联盟两套和游园两套更新V3.3.1。<br>2018.10.08更新重构衣服、联盟小铺两套及婚纱两套V3.3.1。<br>2018.10.20更新氪金两套，万圣节两套及修改美服部分衣服BUG数据V3.3.2。<br>2018.11.08更新海盗及废墟活动套装，魔女姐姐及北地废墟氪金套装、登录赠送套装V3.4.3。<br>2018.11.26买买买、命运回响两套、Nekomata氪金套V3.5.0。<br>2018.11.26联盟Chap7、地图Chap17、水晶花园、兰、氪金套招财福喵及Backlight Chord、蝶变之谜两套，凝砂套止战之羽V3.5.1。<br>2018.12.15钻石梦境及韶华之歌氪金套、芭比两套、成就清妍曲V3.5.2。<br>2018.12.15部分衣服名称错误，遗漏套装及部件添加V3.5.2。<br>2018.12.16岁月集影、织梦人、黎明之冠、绮幻万圣夜、氪金套V3.6.1。<br>2018.12.23补充前期遗漏套装Flower of Magic KissV0.0.0。<br>2018.12.23织梦人散件、圣诞节充值散件及活动套装、氪金套Tales of Starry Night和Snowland Stich已补充完毕V3.6.1。<br>2019.01.03元旦套装Ode to Lantern锦灯赋更新V3.6.1。<br>2019.01.10梦鹦鹉之歌、血鹦鹉之火、魔力音符、Chant of Devotion、Dark Raven更新V3.6.2。<br>2019.01.15登录赠送套装、氪金套装、梦幻甜点、联盟五套更新V3.7.2。<br>2019.01.30氪金套白色森林、吸血鬼及Fate Trio活动套更新V3.7.3。<br>2019.02.02织梦人及散件、免费套装、氪金套装、钟楼活动套装、地图Chap18数据更新V3.8.1。<br>2019.02.13情人节散件、熊猫散件及其余散件、天鹅套、氪金套装、签到18-24月数据更新V3.8.2。<br>2019.02.23氪金散件、Where Wind Dwells、Rose Palace、活动套潮汐、免费套及衣柜新套装Fluffy Heart数据更新V3.9.0。<br>2019.03.15更新二选一套装、氪金两套、知识问答散件及芭比散件V3.9.3。<br>2019.03.24更新芭比套装及韩服首发氪金套装V3.9.3。<br>2019.03.26更新故事阁风花雪月、福袋充值套装、免费套装及补充部分关卡英文名称V3.10.1。<br>2019.03.29更新萨普莱斯套装、充值套装二哈套装和废墟套装V3.10.1。<br>2019.04.07更新小精灵套装V3.10.1。<br>2019.04.09更新深海废墟获取方式及关卡数据V3.10.1。<br>2019.04.16更新复活节两套、氪金套装、联盟Chap8和地图Chap19数据关卡及套装衣服、分解套装、免费套装及凝砂套装V3.11.0。";
