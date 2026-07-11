// Day Itinerary Data
const itineraryData = {
    1: {
        date: "8/11 (二)",
        title: "抵達東京 & 首日秋葉原 3C 動漫深度遊 (Day 1)",
        activities: [
            {
                time: "07:00 - 08:30",
                title: "班機抵達成田機場 T3 & 購買票券",
                desc: "捷星日本 GK012 於 07:00 順利降落成田機場第三航廈。帶孩子辦理入境與行李提領。隨後前往第二航廈購買 Welcome Suica 卡（或設定手機 Suica），並買好京成電鐵 Skyliner 車票直奔秋葉原。首日因清晨剛落地未入住，早餐可在機場或抵達飯店後享用，其餘天數早餐皆在飯店內享用。",
                cp: "紅眼抵達 ─ 買好地鐵 72 小時券搭配 Suica 使用",
                heat: "上午較涼爽",
                heatClass: "cool",
                transit: "成田 T3 步行至 T2 → 搭乘京成電鐵 Skyliner 到日暮里站 → 轉 JR 山手線至秋葉原站（約 1 小時 10 分鐘）",
                cost: "交通費約 ¥2,300 - ¥2,800 / 人",
                altTitle: "省錢交通備案：京成 Access 特急",
                altDesc: "若不趕時間，可搭乘「京成 Access 特急」直達東日本橋（約 65 分鐘，僅約 ¥1,300），轉乘都營新宿線至岩本町（秋葉原旁），可省下近一半的車資！"
            },
            {
                time: "09:00 - 10:30",
                title: "前往飯店寄存行李 & 享用精緻早茶",
                desc: "抵達秋葉原站後，從昭和通口步行約 6~8 分鐘，抵達本次住宿的 **THE TOURIST HOTEL & Cafe AKIHABARA**。辦理大件行李寄存，隨後可直接在飯店極具口碑的 1 樓設計感咖啡廳（THE TOURIST HOTEL & Cafe）歇腳，享用精緻的手沖咖啡、三明治與飲品，給剛搭完紅眼班機的家人一個舒適的起點。",
                cp: "飯店精品咖啡廳 ─ 環境幽雅，歇腳首選",
                heat: "室內冷氣開放",
                heatClass: "cool",
                transit: "從 JR 秋葉原站昭和通口或地鐵秋葉原站 1 號出口步行約 6~8 分鐘即達飯店",
                cost: "咖啡與輕食約 ¥600 - ¥1,000 / 人",
                altTitle: "早餐備案：秋葉原連鎖早餐",
                altDesc: "若飯店咖啡廳客滿，可至車站周邊的 Komeda's Coffee（點咖啡送吐司）享用經典日式朝食。"
            },
            {
                time: "10:30 - 12:30",
                title: "秋葉原動漫聖地巡禮：Radio Kaikan 廣播會館 & Yodobashi",
                desc: "步行前往秋葉原大門口的動漫地標「Radio Kaikan（廣播會館）」，9 層樓裝滿了 K-Books、AmiAmi、Yellow Submarine 等公仔、模型與卡牌店，升國一與升高一的孩子一定會瘋狂！隨後逛隔壁的「Yodobashi-Akiba（友都八喜）」，6樓有整層的電競硬體、組裝PC配件與最新 3C 科技設備。",
                cp: "免門票 ─ 全球 3C 與動漫模型大本營",
                heat: "全室內冷氣開放",
                heatClass: "cool",
                transit: "從飯店步行約 8 分鐘",
                cost: "免費參觀（購物另計）",
                altTitle: "避暑備案：秋葉原 Gachapon 會館",
                altDesc: "若戶外陽光太強，可改去「秋葉原扭蛋會館」，室內數百台扭蛋機可安心避暑。"
            },
            {
                time: "12:30 - 14:00",
                title: "外用餐點 (午餐)：秋葉原 Roast Beef Ono (火山烤牛肉丼)",
                desc: "中午在外面吃！推薦極受日本國高中生喜愛的排隊名店「Roast Beef Ono（ローストビーフ大野）」，這家的山狀烤牛肉丼份量十足、香嫩可口；或選擇「Gyukatsu Motomura（炸牛元村）」，自烤石板炸牛排，好吃又好玩！",
                cp: "大份量美食 ─ 國高中生最愛",
                heat: "室內冷氣排隊",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,200 - ¥2,200 / 人",
                altTitle: "午餐備案：友都八喜 8 樓美食街",
                altDesc: "若街邊排隊太曬，直接上友都八喜 8 樓美食街，冷氣開放且餐廳種類齊全（拉麵、蛋包飯、炸豬排）。"
            },
            {
                time: "14:00 - 16:30",
                title: "飯店辦理 Check-in & 強制補眠",
                desc: "返回 **THE TOURIST HOTEL & Cafe AKIHABARA** 辦理入住手續並拿行李進房。由於凌晨搭乘 02:40 的紅眼班機，全家體力已透支，**務必在此時段強制睡覺補眠 2~3 小時**。這段休息時間是保證接下來 5 天旅遊品質的生存關鍵！",
                cp: "適度補眠 ─ 換取後半段行程好體力",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行回飯店",
                cost: "免費",
                altTitle: "體力充足備案：直接逛 Kotobukiya 壽屋",
                altDesc: "若孩子精力旺盛不想睡，可先去逛「壽屋 Kotobukiya Store」，採購寶可夢與各大遊戲官方周邊。"
            },
            {
                time: "17:00 - 21:00",
                title: "動漫商圈挖寶：Mandarake Complex & GiGO 遊戲中心",
                desc: "傍晚氣溫轉涼，出門逛黑色的「Mandarake Complex」大樓，8 層樓擺滿了二手珍稀公仔、絕版懷舊遊戲與古老電子設備。隨後前往「GiGO 秋葉原」大玩夾娃娃機、音樂節奏遊戲或賽車，感受道地的日式遊樂場氛圍！",
                cp: "免門票 ─ 體驗中古老街與大型電玩魅力",
                heat: "傍晚稍涼/室內",
                heatClass: "cool",
                transit: "從飯店步行約 8-10 分鐘",
                cost: "遊戲機單次約 ¥100 - ¥200",
                altTitle: "雨天備案：Super Potato 懷舊遊戲店",
                altDesc: "若下雨，可改逛有頂棚的電玩店，或專攻復古遊戲天堂「Super Potato」，順便品嚐日本古早味零食。"
            },
            {
                time: "19:00 - 20:30",
                title: "外用餐點 (晚餐)：秋葉原 九州じゃんがら拉麵 或 UDX 美食街",
                desc: "晚餐在外面吃！推薦秋葉原名店「九州じゃんがら拉麵」，濃郁豚骨湯頭非常合台灣人口味；或前往 UDX 大樓的「AKIBA ICHI」美食街享用定食或迴轉壽司，用餐環境寬敞且乾淨舒適。",
                cp: "傳奇豚骨拉麵 ─ 口味絕佳",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,000 - ¥2,200 / 人",
                altTitle: "晚餐備案：肉之萬世和牛漢堡排",
                altDesc: "若想吃肉，可以去「肉之萬世」享用鐵板和牛漢堡排，一邊臨窗俯瞰神田川與秋葉原電車鐵道。"
            }
        ]
    },
    2: {
        date: "8/12 (三)",
        title: "澀谷電玩動漫總部與池袋世界最大 Animate 巡禮 (Day 2)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用美味精緻的早茶/早餐。該店以手沖咖啡與優質烘焙聞名，在極具質感的工業風空間內享用完早餐後，滿電出發！",
                cp: "飯店優質早茶 ─ 質感品味首選",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費中",
                altTitle: "無備案",
                altDesc: "於飯店用餐。"
            },
            {
                time: "09:30 - 12:00",
                title: "澀谷 PARCO 6F (CyberSpace Shibuya) 電玩動漫總部",
                desc: "直衝澀谷 PARCO 百貨 6 樓！這裡是全球玩家的聖地，集結了官方的「Nintendo TOKYO (任天堂旗艦店)」、「Pokemon Center Shibuya (極酷黑超夢寶可夢中心)」、「Capcom Store」、「Jump Shop (少年JUMP週刊店)」以及「Koei Tecmo」。店內有各種巨大精美雕像，升國一與升高一的孩子一定會瘋狂拍照！",
                cp: "免門票 ─ 電玩巨頭官方直營旗艦店群",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "從飯店步行 6 分鐘至地鐵秋葉原站 ➔ 搭乘日比谷線至神保町轉半藏門線 ➔ 澀谷站；或步行至 JR 秋葉原站搭山手線直達",
                cost: "免費參觀（購物另計）",
                altTitle: "避暑備案：Shibuya Sky 展望台",
                altDesc: "如果對電玩沒興趣，可預約 Shibuya Sky 展望台（須提前預訂）觀賞涉谷十字路口，但門票較貴且戶外防曬要注意。"
            },
            {
                time: "12:15 - 13:45",
                title: "外用餐點 (午餐)：澀谷 Harajuku Gyoza Lou (煎餃) 或 烤牛肉丼",
                desc: "中午在外面吃！推薦帶國高中生去吃大份量又好吃的炭火燒肉丼，或者去吃平價美味的「原宿餃子樓」享用煎餃與小菜，CP值高且非常合青少年的胃口。",
                cp: "日式燒肉/煎餃 CP 值高",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥800 - ¥1,500 / 人",
                altTitle: "午餐備案：PARCO 7樓/地下美食街",
                altDesc: "若不想出大樓曬太陽，PARCO 本身的高樓層與地下「CHAOS KITCHEN」就有許多超酷的名店（如極味屋漢堡排、拉麵店）。"
            },
            {
                time: "14:00 - 17:30",
                title: "池袋：世界最大 Animate 總店 & Sunshine City 扭蛋百貨",
                desc: "搭電車前往池袋。首站挑戰 2023 年全新擴建完工、被金氏世界紀錄認證「世界最大動漫店」的「Animate 池袋本店」，整棟 9 層樓滿滿的漫畫、遊戲、輕小說與熱門動漫周邊。接著步行至「Sunshine City（太陽城）」，造訪「神奇寶貝中心 Mega Tokyo」與全東京最大的「萬代扭蛋百貨（Gachapon Bandai Official Shop）」，數千台扭蛋機令人震撼！",
                cp: "免門票 ─ 動漫/扭蛋的終極宇宙",
                heat: "全程室內冷氣",
                heatClass: "cool",
                transit: "JR 山手線：澀谷站 → 池袋站（約 15 分鐘）",
                cost: "免費參觀",
                altTitle: "太熱/雨天備案：池袋 Sunshine 水族館",
                altDesc: "如果逛街逛累了，可以加購 Sunshine 水族館門票，看屋頂的「空中企鵝」游泳，非常療癒消暑。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：池袋 麵創房無敵家拉麵",
                desc: "晚餐在外面吃！來到池袋絕對不能錯過超高人氣的「麵創房無敵家（Mutekiya）」，濃郁厚實的豚骨叉燒拉麵是無數台灣遊客的東京最愛！或者在太陽城內享用平價美味的「和幸炸豬排」定食，白飯與高麗菜絲可無限續加，CP值極高。",
                cp: "無敵家拉麵 ─ 叉燒超厚實超滿足",
                heat: "室內冷氣/排隊",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,000 - ¥1,800 / 人",
                altTitle: "晚餐備案：池袋東武百貨美食街",
                altDesc: "若無敵家排隊過長，東武或西武百貨高樓層美食街有各種精緻定食與迴轉壽司，排隊環境有冷氣極佳。"
            }
        ]
    },
    3: {
        date: "8/13 (四)",
        title: "葛西臨海公園水族館與晴空塔動漫商店街 (Day 3)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用元氣早餐。今天將前往臨海的海藍色水族館以及東京地標晴空塔，行程多采多姿。",
                cp: "飯店美味早餐 ─ 充電出發",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費中",
                altTitle: "無備案",
                altDesc: "在飯店用餐。"
            },
            {
                time: "09:30 - 12:30",
                title: "公立高 CP 值：葛西臨海公園與葛西臨海水族館",
                desc: "葛西臨海水族館門票只要 ¥700（兩位國高中生出示學生證或護照可能享學生優惠，小學生以下免費）。大玻璃圓頂建築內有超壯觀的黑鮪魚群游與全日本最大的企鵝展區，冷氣涼爽、票價便宜。接著可搭乘有冷氣的「鑽石與花大摩天輪」眺望東京灣與迪士尼樂園！",
                cp: "公立水族館 CP 值之王，門票僅民營的 1/3",
                heat: "館內冷氣，摩天輪內有冷氣",
                heatClass: "cool",
                transit: "從飯店步行 6 分鐘至地鐵秋葉原站 ➔ 搭地鐵至八丁堀站 ➔ 轉乘 JR 京葉線直達葛西臨海公園站（約 30 分鐘）",
                cost: "水族館門票大人 ¥700，摩天輪 ¥800 / 人",
                altTitle: "避暑備案：葛西臨海公園小火車遊園",
                altDesc: "若公園戶外太曬，水族館出來後直接搭乘有遮陽的遊園小火車，吹著海風繞公園一圈，免去烈日鋪曬。"
            },
            {
                time: "13:00 - 14:00",
                title: "外用餐點 (午餐)：葛西水族館景觀餐廳 或 公園平價輕食",
                desc: "中午在外面吃！在水族館內部的「Sea Wind」景觀餐廳或公園販賣部享用午餐。一邊隔著玻璃觀賞外面的蔚藍海景，一邊享用日式咖哩飯、義大利麵或豚骨拉麵，價格平實，極具 CP 值。",
                cp: "海景餐廳 ─ 價格親民",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥800 - ¥1,300 / 人",
                altTitle: "午餐備案：前往晴空塔再吃",
                altDesc: "若想吃好一點，可直接搭電車前往晴空塔，在 Solamachi 商城內極豐富的美食街享用牛舌或仙台利久燒肉。"
            },
            {
                time: "14:30 - 17:30",
                title: "東京晴空塔 Solamachi 動漫城大採購 (Jump Shop & 寶可夢)",
                desc: "前往東京晴空塔底下的大型商城「Solamachi」。這裡不需要花昂貴門票上展望台，只逛 3 樓與 4 樓的動漫街區就超好玩！這裡有「Jump Shop（少年JUMP動漫店）」、「Pokemon Center Skytree Town」、「橡子共和國（吉卜力周邊）」、「Loft 雜貨店」以及各式平價服飾店（UNIQLO, GU）。國高中生能買到最新動漫限定商品！",
                cp: "免登塔門票 ─ 直接攻 Solamachi 免費動漫街",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "JR 京葉線：葛西臨海公園 → 市川鹽濱，轉 JR 總武線 → 錦糸町，再搭地鐵 → 押上站",
                cost: "免費逛街",
                altTitle: "雨天/太熱備案：墨田水族館",
                altDesc: "若下雨或太熱想靜態休息，可直接去 Solamachi 5 樓的「墨田水族館（Sumida Aquarium）」，欣賞絕美的金魚水槽與投影水母區。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：晴空塔 Solamachi 仙台利久牛舌",
                desc: "晚餐在外面吃！推薦晴空塔商場內的「仙台牛舌專賣店 ─ 利久」，炭烤牛舌厚實帶彈性，搭配麥飯與山藥泥，美味無比；或是前往「Toriton 迴轉壽司（トリトン）」，以高 CP 值著稱的北海道名店，大啖肥美壽司。",
                cp: "利久牛舌 ─ 東北名店免排隊太久",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,500 - ¥3,000 / 人",
                altTitle: "晚餐備案：錦糸町薩莉亞",
                altDesc: "若晴空塔餐廳客滿，可搭地鐵 1 站回錦糸町，吃全日本最便宜美味的「薩莉亞」家庭餐廳，省預算首選。"
            }
        ]
    },
    4: {
        date: "8/14 (五)",
        title: "明治神宮森林浴、原宿潮流與新宿 3C 旗艦店 (Day 4)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用美味早餐，補充足夠的水分與能量。今天將結合神道森林與繁華的新宿 3C 超級街區。",
                cp: "飯店早餐 ─ 節省早晨時間",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "飯店用餐。"
            },
            {
                time: "09:30 - 11:30",
                title: "避暑森林浴：明治神宮晨間散步",
                desc: "清晨的明治神宮大樹遮天，碎石參道兩旁高聳的林蔭能阻擋熱氣，溫度比周邊鬧區低上 2-3°C，非常適合晨間散步。帶孩子看全日本最大的木造大鳥居，寫個繪馬祈願，感受宏偉寧靜的神社風光。",
                cp: "免門票 ─ 自然陰涼消暑",
                heat: "高聳樹蔭，上午較清爽",
                heatClass: "cool",
                transit: "從飯店步行 8 分鐘至 JR 秋葉原站 ➔ 搭乘中央總武線（各停）至代代木站 ➔ 步行至神宮入口",
                cost: "免費",
                altTitle: "下雨備案：直接前往新宿西口地下街",
                altDesc: "若雨勢太大，取消神宮行程，直接搭電車去新宿站，逛全室內的新宿西口地下商城與 3C 連鎖店。"
            },
            {
                time: "11:30 - 13:00",
                title: "原宿竹下通潮流逛街與點心時間",
                desc: "出明治神宮後就是「竹下通」。這條街聚集了日式可麗餅、彩虹棉花糖、大創百貨、以及國高中生最愛的時尚街頭服飾與潮物小配件。隨便買一份現做可麗餅，香甜消暑！",
                cp: "街頭流行聖地 ─ 平價雜貨多",
                heat: "戶外高溫",
                heatClass: "danger",
                transit: "步行",
                cost: "可麗餅/點心約 ¥600 - ¥800 / 人",
                altTitle: "避暑備案：東急廣場 (Tokyu Plaza)",
                altDesc: "若竹下通太擠太曬，可直接走進東急廣場表參道原宿，6樓的空中花園有綠蔭冷氣，在此喝杯星巴克休息。"
            },
            {
                time: "13:00 - 14:30",
                title: "外用餐點 (午餐)：原宿 Red Rock (火山烤牛肉丼)",
                desc: "中午在外面吃！帶國高中生去吃超高顏值的「Red Rock」，招牌「火山烤牛肉丼」將粉嫩的烤牛肉片堆疊成小山，再淋上特製酸奶醬與蛋黃，視覺與味覺效果都讓青少年著迷！",
                cp: "火山烤牛肉丼 ─ 照片上傳社群首選",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,100 - ¥1,800 / 人",
                altTitle: "午餐備案：原宿一蘭拉麵",
                altDesc: "若想吃湯麵，原宿竹下通出口旁的一蘭拉麵也是極佳選擇，一人一格的點餐方式孩子們會覺得新奇。"
            },
            {
                time: "14:45 - 17:30",
                title: "新宿西口 3C 街 (Bic Camera & Yodobashi) & 東京都廳展望台",
                desc: "搭電車前往新宿。首先來到「新宿西口 3C 街」，這裡有整棟的 Yodobashi Camera 與 Bic Camera 電器大樓。可帶孩子看最新款的電競筆電、日本限定 3C 周邊及相機配件。隨後步行至「東京都廳」，搭乘專屬電梯直達 45 樓展望室。此處**免費開放**，能以極高 CP 值鳥瞰整個東京市區，省下昂貴的晴空塔門票！",
                cp: "都廳展望台免費 ─ 每人現省 NT$800 門票費！",
                heat: "展望台內冷氣舒適",
                heatClass: "cool",
                transit: "JR 山手線：原宿站 → 新宿站（5分鐘）",
                cost: "免費",
                altTitle: "避暑備案：新宿高島屋迪士尼商店",
                altDesc: "若對 3C 疲勞，可改逛新宿高島屋 (Takashimaya) 百貨內的 Disney Store 與 Hands 雜貨，全程在冷氣大樓內。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：新宿 Yakiniku Like (平價個人燒肉)",
                desc: "晚餐在外面吃！推薦「Yakiniku Like 新宿西口店」，這是一家主打平價、快速的個人燒肉店，一人一爐，肉質極佳且價格非常便宜，很適合食量大又想吃燒肉的國高中生；或吃「風雲兒」或「六厘舍」沾麵，超濃郁的柴魚豚骨湯沾麵非常美味！",
                cp: "個人燒肉 ─ 好吃好玩又平價",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,000 - ¥2,500 / 人",
                altTitle: "晚餐備案：新宿中村屋咖哩餐廳",
                altDesc: "想要精緻又經典的日式咖哩，可至中村屋地下美食街享用正宗雞肉咖哩定食，座位寬敞舒適。"
            }
        ]
    },
    5: {
        date: "8/15 (六)",
        title: "中野百老匯挖寶 & 搭乘深夜紅眼航班返台 (Day 5)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店早餐 & 辦理退房寄放行李",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用最後一餐美味早餐，大杯手沖咖啡。隨後辦理退房，並將大件行李暫時免費寄放在前台。今天下午要將行李取回並搭車前往機場。",
                cp: "飯店早餐 ─ 補充本日充足體力",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "飯店用餐。"
            },
            {
                time: "09:30 - 12:30",
                title: "御宅族第二聖地：中野百老匯挖寶",
                desc: "搭電車前往中野，直奔動漫中古天堂「中野百老匯 (Nakano Broadway)」。這座復古大樓內有數十家「Mandarake」分店，專售二手公仔、懷舊遊戲卡帶、老相機及絕版動漫卡牌。在這裡常能挖到比秋葉原更便宜的高 CP 值好貨，是兩位大孩子的獵寶天堂！",
                cp: "免門票 ─ 二手動漫模型與懷舊科技寶庫",
                heat: "全室內商場冷氣",
                heatClass: "cool",
                transit: "從飯店步行 8 分鐘至 JR 秋葉原站 ➔ 搭乘總武線直達中野站（約 20 分鐘）",
                cost: "免費參觀",
                altTitle: "防暑/雨天備案：中野 Sun Mall 商店街",
                altDesc: "若天氣炎熱或下雨，可逛中野站出口至百老匯之間有全天候遮棚的「Sun Mall 商店街」，內有多家平價美食、鞋店與零食專賣店。"
            },
            {
                time: "12:30 - 13:30",
                title: "外用餐點 (午餐)：中野 陸蒸汽 (炭火沙坑烤魚)",
                desc: "中午在外面吃！推薦中野名店「陸蒸氣（Rikujouki）」，店內中心有巨大的沙坑火爐，以傳統炭火圍爐烤製當季鮮魚。午間烤魚定食性價比極高（約 ¥1000~¥1200），白飯可免費續碗，國高中生能吃得飽足又滿足！",
                cp: "炭火烤魚 ─ 傳統圍爐風味與超值午餐",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,000 - ¥1,500 / 人",
                altTitle: "午餐備案：中野百老匯地下街平價小吃",
                altDesc: "百老匯地下街有許多便宜的日式烏龍麵、讚岐烏龍麵與知名的八層彩虹霜淇淋 (Daily Chiko)，好玩又省錢。"
            },
            {
                time: "14:00 - 17:30",
                title: "返回秋葉原進行最後採購 ─ 提取行李",
                desc: "下午搭車返回秋葉原。給孩子們最後的自由時間，前往駿河屋、Super Potato 或 Animate 進行補貨。傍晚 18:00 前返回 **THE TOURIST HOTEL & Cafe AKIHABARA** 提取寄放的行李，準備出發前往成田機場。",
                cp: "把握最後採買時間 ─ 將行李箱裝滿",
                heat: "戶外高溫/室內",
                heatClass: "cool",
                transit: "JR 總武線：中野站 → 秋葉原站，步行回飯店提取行李",
                cost: "免費",
                altTitle: "無備案",
                altDesc: "下午需完成取行李，時間較固定。"
            },
            {
                time: "18:00 - 19:30",
                title: "利用地鐵優勢 ─ 搭乘 Skyliner 直奔成田機場 T3",
                desc: "從飯店提領行李後，利用飯店的地理優勢，步行至地鐵秋葉原站搭乘日比谷線直達上野，並轉乘京成電鐵 Skyliner 直達成田機場。Skyliner 全車對號且有冷氣，適合玩了一整天、拖著戰利品的疲憊家人休息。",
                cp: "極速交通 ─ 利用日比谷線 3 分鐘轉乘 Skyliner，省時省力",
                heat: "車廂內冷氣",
                heatClass: "cool",
                transit: "從飯店步行 6 分鐘 ➔ 地鐵秋葉原站搭乘日比谷線（2站，3分鐘）➔ 上野站 ➔ 轉乘京成 Skyliner 直達成田機場 T2，步行至第三航廈",
                cost: "車資約 ¥2,500 / 大人，兒童半價",
                altTitle: "省錢備案：都營地下鐵轉 Access 特急",
                altDesc: "可步行 5 分鐘至岩本町站搭都營新宿線 ➔ 東日本橋站轉京成 Access 特急直達成田機場（約 ¥1,450 / 人）。"
            },
            {
                time: "19:30 - 22:40",
                title: "成田 T3 辦理登機 & 免稅店最後採購",
                desc: "晚上 19:30 抵達捷星櫃檯辦理登機手續並託運行李。隨後在三航廈美食街外用餐點吃晚餐（如宮武讚岐烏龍麵或長崎強棒麵），並在過關後的免稅店做伴手禮最後大掃貨（東京 Banana、白色戀人、Royce生巧克力）。搭乘 22:40 的 GK011 返台，結束這趟精彩好玩又省錢的 3C 動漫親子自由行！",
                cp: "回程航班時間極佳 ─ 玩滿整整五天！",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "搭乘 GK011 返台 (01:30抵達桃園)",
                cost: "免稅伴手禮自理",
                altTitle: "無備案",
                altDesc: "安全登機是唯一任務。"
            }
        ]
    }
};

// Global State
let currentDay = 1;
let showAlternative = false;

// DOM Elements
const themeToggle = document.getElementById('checkbox');
const toggleRouteBtn = document.getElementById('toggle-route-btn');
const itineraryContent = document.getElementById('itinerary-content');
const tabButtons = document.querySelectorAll('.tab-btn');

// Budget inputs
const bgFlights = document.getElementById('bg-flights');
const bgHotel = document.getElementById('bg-hotel');
const bgFood = document.getElementById('bg-food');
const bgTickets = document.getElementById('bg-tickets');
const bgTransport = document.getElementById('bg-transport');

const totalBudgetEl = document.getElementById('total-budget');
const perPersonBudgetEl = document.getElementById('per-person-budget');
const cpAdviceText = document.getElementById('cp-advice-text');

// Theme Switch Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark for rich aesthetics
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}

themeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Itinerary Rendering
function renderItinerary(dayNum) {
    const dayData = itineraryData[dayNum];
    if (!dayData) return;

    let html = `
        <div class="day-overview">
            <h3 class="day-overview-title"><i class="fas fa-flag"></i> ${dayData.date} - ${dayData.title}</h3>
        </div>
    `;

    dayData.activities.forEach((act) => {
        const heatIcon = act.heatClass === 'danger' ? 'fa-temperature-high' : 'fa-snowflake';
        const heatTextClass = act.heatClass === 'danger' ? 'danger' : 'cool';
        
        html += `
            <div class="timeline-item ${act.title.includes('退房') || act.title.includes('機場') || act.title.includes('Skyliner') || act.title.includes('寄存行李') ? 'lodging-move' : ''}">
                <div class="timeline-dot"></div>
                <span class="item-time"><i class="far fa-clock"></i> ${act.time}</span>
                <div class="item-card ${showAlternative ? 'alternative-active' : ''}">
                    <div class="item-title-row">
                        <h4 class="item-title">${act.title}</h4>
                        <div class="item-badges">
                            <span class="cp-badge"><i class="fas fa-thumbs-up"></i> ${act.cp}</span>
                            <span class="heat-badge ${act.heatClass}"><i class="fas ${heatIcon}"></i> ${act.heat}</span>
                        </div>
                    </div>
                    <p class="item-desc">${act.desc}</p>
                    
                    <!-- Alternative / Backup Route -->
                    <div class="item-alternative">
                        <div class="alternative-title">
                            <i class="fas fa-cloud-sun-rain"></i> ${act.altTitle}
                        </div>
                        <p class="alternative-desc">${act.altDesc}</p>
                    </div>

                    <div class="item-details">
                        <div class="detail-point">
                            <i class="fas fa-route"></i> <strong>交通：</strong> ${act.transit}
                        </div>
                        <div class="detail-point">
                            <i class="fas fa-yen-sign"></i> <strong>預估費用：</strong> ${act.cost}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    itineraryContent.innerHTML = html;
}

// Tab Click Events
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentDay = parseInt(this.getAttribute('data-day'));
        renderItinerary(currentDay);
    });
});

// Toggle Alternative route (Hot/Rainy weather)
toggleRouteBtn.addEventListener('click', function() {
    showAlternative = !showAlternative;
    if (showAlternative) {
        this.innerHTML = '<i class="fas fa-cloud-showers-heavy icon-rainy"></i> 雨天/大熱冷氣行程';
        this.className = 'btn btn-outline active-rainy';
    } else {
        this.innerHTML = '<i class="fas fa-sun icon-sunny"></i> 晴天防暑行程';
        this.className = 'btn btn-outline active-sunny';
    }
    renderItinerary(currentDay);
});

// Budget Calculator Logic
function calculateBudget() {
    const flights = parseFloat(bgFlights.value) || 0;
    const hotel = parseFloat(bgHotel.value) || 0;
    const food = parseFloat(bgFood.value) || 0;
    const tickets = parseFloat(bgTickets.value) || 0;
    const transport = parseFloat(bgTransport.value) || 0;

    const total = flights + hotel + food + tickets + transport;
    const perPerson = total / 4; // 2 adults + 2 kids

    totalBudgetEl.textContent = `NT$ ${total.toLocaleString()}`;
    perPersonBudgetEl.textContent = `NT$ ${perPerson.toLocaleString()}`;

    // Dynamic Optimization Advice
    let advice = "";
    if (transport > 4500) {
        advice += "💡 您的交通預算偏高，建議善用東京地鐵 72 小時券 (大人只需 ¥1,500/約 NT$320)，因為兩位孩子皆為國高中生，皆適用成人票價，因此使用 72 小時地鐵券更是划算！";
    } else if (tickets > 8000) {
        advice += "💡 門票預算稍高。本行程精選了免費的東京都廳展望台（省下晴空塔昂貴門票）以及極便宜的葛西臨海水族館（門票僅 ¥700）。建議多利用這些公立或免費景點來維持高 CP 值。";
    } else if (hotel < 10000) {
        advice += "💡 住宿預算相當精實！秋葉原附近有很多高 CP 值的親子商務旅館（如 Super Hotel、Dormy Inn 包含免費溫泉或早餐），適合家庭入住。";
    } else {
        advice += "🎉 預算控制得非常完美！主打秋葉原 4 晚平價親子住宿（無額外機場飯店開銷），加上善用地鐵券，能以極佳的 CP 值完成一趟高品質的東京親子之旅！";
    }

    cpAdviceText.textContent = advice;
}

[bgFlights, bgHotel, bgFood, bgTickets, bgTransport].forEach(input => {
    input.addEventListener('input', calculateBudget);
});

// Checklist State Persistence (Local Storage)
const packingItems = [
    'pack-fan', 'pack-cool', 'pack-sun', 'pack-bottle', 'pack-umbrella', 'pack-towel'
];

function initChecklist() {
    packingItems.forEach(item => {
        const checkbox = document.getElementById(item);
        if (checkbox) {
            const isChecked = localStorage.getItem(item) === 'true';
            checkbox.checked = isChecked;
            checkbox.addEventListener('change', function() {
                localStorage.setItem(item, this.checked);
            });
        }
    });
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderItinerary(currentDay);
    calculateBudget();
    initChecklist();
});
