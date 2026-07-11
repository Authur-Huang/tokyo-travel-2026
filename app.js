// Day Itinerary Data
const itineraryData = {
    1: {
        date: "8/11 (二)",
        title: "秋葉原 3C 與動漫探索之旅 (Day 1)",
        activities: [
            {
                time: "04:30 - 08:30",
                title: "抵達東京 & 前往秋葉原寄放行李",
                desc: "紅眼班機抵達（成田/羽田）。先在機場洗漱並買好交通票券。搭電車直奔秋葉原飯店寄放行李。因為首日清晨即抵達，尚未入住，今日早餐在秋葉原外面的連鎖店（如 Komeda's Coffee 或松屋）享用，其餘各天早餐皆在飯店內享用。",
                cp: "紅眼搭電車 - 買好 Subway Ticket 72小時券",
                heat: "早晨涼爽",
                heatClass: "cool",
                transit: "羽田：單軌電車至濱松町轉 JR；成田：京成 Skyliner 至日暮里轉 JR",
                cost: "交通費約 ¥600 - ¥2,500 / 人",
                altTitle: "極度疲憊備案：機場接送直達",
                altDesc: "若紅眼班機上沒睡好，建議預約 Klook 機場接送直達秋葉原飯店，少走點路保留體力。"
            },
            {
                time: "09:00 - 12:30",
                title: "秋葉原動漫聖地巡禮：Radio Kaikan 廣播會館 & Yodobashi-Akiba",
                desc: "直接進擊秋葉原最狂的 9 層樓動漫地標「Radio Kaikan（廣播會館）」，裡面有 AmiAmi、K-Books、黃色潛水艇等無數卡牌與模型店，升國一與升高一的孩子一定會瘋狂！隨後逛隔壁的「Yodobashi-Akiba（友都八喜）」，6樓有整層的遊戲硬體、電競滑鼠、組裝PC配件及爆量扭蛋區，3C迷的樂園！",
                cp: "免門票 - 全球 3C 與模型大本營",
                heat: "全室內冷氣開放",
                heatClass: "cool",
                transit: "步行",
                cost: "免費參觀（購物另計）",
                altTitle: "避暑備案：秋葉原 Gachapon 會館",
                altDesc: "若想專攻扭蛋，可至「秋葉原扭蛋會館」，數百台扭蛋機保證讓孩子大呼過癮。"
            },
            {
                time: "12:30 - 14:00",
                title: "外用餐點 (午餐)：秋葉原 Roast Beef Ono (烤牛肉丼) 或 炸牛元村",
                desc: "中午在秋葉原外面享用人氣美食！極力推薦「Roast Beef Ono（ローストビーフ大野）」，這家的山狀烤牛肉丼極受國高中生喜愛；或選擇「Gyukatsu Motomura（炸牛元村）」，酥脆炸牛排自己用石板烤，好玩又美味！",
                cp: "大份量美味 - 國高中生最愛",
                heat: "室內冷氣排隊",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,200 - ¥2,200 / 人",
                altTitle: "午餐排隊備案：友都八喜 8 樓美食街",
                altDesc: "若街邊小店排隊太長，直接搭電梯去友都八喜 8 樓，有冷氣且餐廳選擇極多（拉麵、炸豬排、蛋包飯）。"
            },
            {
                time: "14:00 - 16:30",
                title: "飯店 Check-in & 休息充電",
                desc: "返回飯店辦理 Check-in 並拿行李回房。紅眼班機後，強烈建議全家在飯店睡個午覺補眠 2 小時。因為孩子已經是國高中生，不需像幼童睡很久，但適度休息能保證傍晚有充足精力戰鬥！",
                cp: "休息是為了走更長遠的路",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行回飯店",
                cost: "免費",
                altTitle: "體力充足備案：直接開逛 Kotobukiya 壽屋",
                altDesc: "若孩子精神極佳，可省去睡覺，直接先逛「壽屋 Kotobukiya Store」，採購官方正版寶可夢、勇者鬥惡龍等模型周邊。"
            },
            {
                time: "17:00 - 21:00",
                title: "秋葉原動漫商圈：Mandarake Complex & GiGO 遊戲中心",
                desc: "傍晚出門逛黑色的「Mandarake Complex」大樓，這裡有 8 層樓的復古玩具、中古珍稀模型、懷舊遊戲機（如紅白機、GameBoy）。接著前往「GiGO 秋葉原」大玩夾娃娃機、音樂節奏遊戲或賽車，感受極致的日式大型電玩氛圍！",
                cp: "體驗道地日式大型電玩店",
                heat: "傍晚稍涼/室內",
                heatClass: "cool",
                transit: "步行",
                cost: "電玩店單次遊戲約 ¥100 - ¥200",
                altTitle: "雨天備案：駿河屋 / Super Potato",
                altDesc: "若下雨，可改逛有雨棚的街區，或專攻「Super Potato（秋葉原店）」，這是一家懷舊遊戲專賣店，還能買到日本童年古早味零食。"
            },
            {
                time: "19:00 - 20:30",
                title: "外用餐點 (晚餐)：九州じゃんがら拉麵 或 UDX 美食街",
                desc: "晚餐在外面吃！推薦秋葉原的傳奇拉麵「九州じゃんがら（Kyushu Jangara）」，提供濃郁豚骨湯頭，深受台灣遊客喜愛；或前往 UDX 大樓的「AKIBA ICHI」美食街享用高級天婦羅或鰻魚飯，位置寬敞舒服。",
                cp: "傳統豚骨拉麵 - 口味極佳",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,000 - ¥2,200 / 人",
                altTitle: "晚餐備案：肉之萬世和牛漢堡排",
                altDesc: "若想吃肉，可以去「肉之萬世」享用香嫩多汁的鐵板漢堡排，一邊欣賞秋葉原鐵道夜景。"
            }
        ]
    },
    2: {
        date: "8/12 (三)",
        title: "澀谷電玩動漫旗艦店與池袋世界最大 Animate 巡禮 (Day 2)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐 & 準備出發",
                desc: "在秋葉原住宿飯店享用美味健康的早餐。今天行程鎖定東京另外兩個「電玩/動漫」的宇宙級聖地：澀谷 PARCO 與池袋。",
                cp: "飯店早餐吃飽飽 - 省錢又省時",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "已含在飯店房費中",
                altTitle: "無備案",
                altDesc: "在飯店安心用餐即可。"
            },
            {
                time: "09:30 - 12:00",
                title: "澀谷 PARCO 6F (CyberSpace Shibuya) 電玩動漫總部",
                desc: "直奔澀谷 PARCO 百貨 6 樓，這裡是電玩迷的天堂！集結了官方的「Nintendo TOKYO（任天堂旗艦店）」、「Pokemon Center Shibuya（極酷黑超夢寶可夢中心）」、「Capcom Store TOKYO」、「Jump Shop（少年JUMP動漫店）」以及「Koei Tecmo」。店內充滿互動設計與巨大雕像，兩位青少年在此絕對會拍不停、買不停！",
                cp: "免門票 - 電玩巨頭官方直營旗艦店群",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "地鐵半藏門線：神保町 (秋葉原旁搭接駁地鐵) → 澀谷站；或 JR 山手線直達",
                cost: "免費參觀（購物另計）",
                altTitle: "避暑備案：Shibuya Sky 展望台",
                altDesc: "如果對電玩沒興趣，可預約 Shibuya Sky 展望台（須提前預訂）觀賞涉谷十字路口，但門票較貴且戶外防曬要注意。"
            },
            {
                time: "12:15 - 13:45",
                title: "外用餐點 (午餐)：澀谷 Harajuku Gyoza Lou (煎餃) 或 炭火燒肉丼",
                desc: "中午在澀谷街頭享用午餐。推薦帶國高中生去吃大份量又好吃的炭火燒肉丼，或者去吃平價美味的「原宿餃子樓」享用日式煎餃與小菜，CP值高且非常合青少年的胃口。",
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
                cp: "免門票 - 動漫/扭蛋的終極宇宙",
                heat: "全程室內冷氣",
                heatClass: "cool",
                transit: "JR 山手線：澀谷站 → 池袋站（約 15 分鐘）",
                cost: "免費參觀",
                altTitle: "太熱/雨天備案：池袋 Sunshine 水族館",
                altDesc: "如果逛街逛累了，可以加購 Sunshine 水族館門票，看屋頂的「空中企鵝」游泳，非常療癒消暑。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：池袋麵創房無敵家拉麵 或 炸豬排定食",
                desc: "晚餐在外面吃！來到池袋絕對不能錯過超高人氣的「麵創房無敵家（Mutekiya）」，濃郁厚實的豚骨叉燒拉麵是無數台灣遊客的東京最愛！或者在太陽城內享用平價美味的「和幸炸豬排」定食，白飯與高麗菜絲可無限續加，CP值極高。",
                cp: "無敵家拉麵 - 叉燒超厚實超滿足",
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
                desc: "在飯店享用早餐，吃得營養飽足，為今天的行程做好準備。今日重點是臨海水族館與東京地標晴空塔。",
                cp: "飯店早餐 - 節省首站交通時間",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
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
                transit: "JR 山手線：秋葉原 → 東京站，轉 JR 京葉線 → 葛西臨海公園站（約 25 分鐘）",
                cost: "水族館門票大人 ¥700，摩天輪 ¥800 / 人",
                altTitle: "避暑備案：葛西臨海公園小火車遊園",
                altDesc: "若公園戶外太曬，水族館出來後直接搭乘有遮陽的遊園小火車，吹著海風繞公園一圈，免去烈日曝曬。"
            },
            {
                time: "13:00 - 14:00",
                title: "外用餐點 (午餐)：葛西水族館玻璃餐廳 或 公園平價輕食",
                desc: "中午在水族館內部的「Sea Wind」景觀餐廳或公園販賣部享用午餐。一邊隔著玻璃觀賞外面的蔚藍海景，一邊享用日式咖哩飯、義大利麵或豚骨拉麵，價格平實，極具 CP 值。",
                cp: "海景餐廳 - 餐點價格合理",
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
                cp: "免登塔門票 - 直接攻 Solamachi 免費動漫街",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "JR 京葉線：葛西臨海公園 → 市川鹽濱，轉 JR 總武線 → 錦糸町，再搭地鐵 → 押上站",
                cost: "免費逛街",
                altTitle: "雨天/太熱備案：墨田水族館",
                altDesc: "若下雨或太熱想靜態休息，可直接去 Solamachi 5 樓的「墨田水族館（Sumida Aquarium）」，欣賞絕美的金魚水槽與投影水母區。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：晴空塔 Solamachi 仙台利久牛舌 或 迴轉壽司",
                desc: "晚餐在外面吃！推薦晴空塔商場內的「仙台牛舌專賣店 ─ 利久」，炭烤牛舌厚實帶彈性，搭配麥飯與山藥泥，美味無比；或是前往「Toriton 迴轉壽司（トリトン）」，以高 CP 值著稱的北海道名店，大啖肥美壽司。",
                cp: "利久牛舌 - 東北名店免排隊太久",
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
                desc: "在飯店享用早餐後，準備好防曬與隨身水瓶。今日行程結合日本神道文化與新宿 3C 超級大本營。",
                cp: "飯店早餐 - 節省早晨找餐廳時間",
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
                cp: "免門票 - 自然陰涼消暑",
                heat: "高聳樹蔭，上午較清爽",
                heatClass: "cool",
                transit: "JR 山手線：秋葉原站 → 原宿站（直達 25 分鐘）",
                cost: "免費",
                altTitle: "下雨備案：直接前往新宿西口地下街",
                altDesc: "若雨勢太大，取消神宮行程，直接搭電車去新宿站，逛全室內的新宿西口地下商城與 3C 連鎖店。"
            },
            {
                time: "11:30 - 13:00",
                title: "原宿竹下通潮流逛街與點心時間",
                desc: "出明治神宮後就是「竹下通」。這條街聚集了日式可麗餅、彩虹棉花糖、大創百貨、以及國高中生最愛的時尚街頭服飾與潮物小配件。隨便買一份現做可麗餅，香甜消暑！",
                cp: "街頭流行聖地 - 平價雜貨多",
                heat: "戶外高溫",
                heatClass: "danger",
                transit: "步行",
                cost: "可麗餅/點心約 ¥600 - ¥800 / 人",
                altTitle: "避暑備案：東急廣場 (Tokyu Plaza)",
                altDesc: "若竹下通太擠太曬，可直接走進東急廣場表參道原宿，6樓的空中花園有綠蔭冷氣，在此喝杯星巴克休息。"
            },
            {
                time: "13:00 - 14:30",
                title: "外用餐點 (午餐)：原宿 Red Rock (火山烤牛肉丼) 或 九州拉麵",
                desc: "中午在原宿外面享用午餐！帶國高中生去吃超高顏值的「Red Rock」，招牌「火山烤牛肉丼」將粉嫩的烤牛肉片堆疊成小山，再淋上特製酸奶醬與蛋黃，視覺與味覺效果都讓青少年著迷！",
                cp: "火山烤牛肉丼 - 照片上傳社群首選",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,100 - ¥1,800 / 人",
                altTitle: "午餐備案：原宿一蘭拉麵",
                altDesc: "若想吃湯麵，原宿竹下通出口旁的一蘭拉麵也是極佳選擇，一人一格的點餐方式孩子們會覺得新奇。"
            },
            {
                time: "14:45 - 17:30",
                title: "新宿西口 3C 街 (Bic Camera & Yodobashi Camera) & 東京都廳展望台",
                desc: "搭電車前往新宿。首先來到「新宿西口 3C 街」，這裡有整棟的 Yodobashi Camera 與 Bic Camera 電器大樓。可帶孩子看最新款的電競筆電、日本限定 3C 周邊及相機配件。隨後步行至「東京都廳」，搭乘專屬電梯直達 45 樓展望室。此處**免費開放**，能以極高 CP 值鳥瞰全東京百萬市景，省下昂貴的晴空塔門票！",
                cp: "都廳展望台免費 - 每人現省 NT$800 門票費！",
                heat: "展望台內冷氣舒適",
                heatClass: "cool",
                transit: "JR 山手線: 原宿站 → 新宿站（5分鐘）",
                cost: "免費",
                altTitle: "避暑備案：新宿高島屋迪士尼商店",
                altDesc: "若對 3C 疲勞，可改逛新宿高島屋 (Takashimaya) 百貨內的 Disney Store 與 Hands 雜貨，全程在冷氣大樓內。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：新宿 Yakiniku Like (平價燒肉) 或 沾麵名店",
                desc: "晚餐在外面吃！推薦「Yakiniku Like 新宿西口店」，這是一家主打平價、快速的個人燒肉店，一人一爐，肉質極佳且價格非常便宜，很適合食量大又想吃燒肉的國高中生；或吃「風雲兒」或「六厘舍」沾麵，超濃郁的柴魚豚骨湯沾麵非常美味！",
                cp: "個人燒肉 - 好吃好玩又平價",
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
        title: "中野百老匯動漫獵寶與入住機場溫泉飯店 (Day 5)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐 & 辦理退房",
                desc: "在秋葉原飯店享用美味早餐，接著辦理退房手續，將大件行李寄放在前台。今天下午要將行李取走並移宿機場飯店。",
                cp: "飯店早餐 - 補充足夠體力",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "飯店用餐。"
            },
            {
                time: "09:30 - 12:30",
                title: "中野百老匯 (Nakano Broadway) 中古模型獵寶",
                desc: "搭電車前往中野。直奔被譽為「御宅族第二聖地」的「中野百老匯 (Nakano Broadway)」。這座復古大樓內有數十家「Mandarake」分店，專門收購與販售中古模型、絕版懷舊電玩、二手動漫周邊與珍稀漫畫。相較於秋葉原，中野常能挖到驚人的高 CP 值寶物，喜愛動漫的兩位孩子在這裡一定能大開眼界！",
                cp: "免門票 - 中古動漫迷的神殿，挖寶性價比極高",
                heat: "全室內商場冷氣",
                heatClass: "cool",
                transit: "JR 總武線（各停）：秋葉原站 → 中野站（直達 20 分鐘）",
                cost: "免費參觀",
                altTitle: "避暑備案：中野太陽城 (Sun Mall) 有頂棚商店街",
                altDesc: "從中野站出口到百老匯大樓之間是「Sun Mall 商店街」，有防曬防雨頂棚，裡面有平價鞋店、藥妝與零食店，非常好逛。"
            },
            {
                time: "12:30 - 13:30",
                title: "外用餐點 (午餐)：中野陸蒸氣 (炭火烤魚) 或 經典豬排",
                desc: "中午在中野外面吃！強烈推薦「陸蒸氣（Rikujouki）」，這是一家用傳統炭火圍爐（沙坑烤魚）烤製時令鮮魚的超人氣老店，午間定食極便宜（一餐約 ¥1000~¥1200），白飯可免費續，高 CP 值首選！或到 Sun Mall 吃平價炸豬排。",
                cp: "陸蒸氣炭火烤魚 - 日本傳統風味與超高性價比",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,000 - ¥1,500 / 人",
                altTitle: "午餐備案：中野百老匯地下街平價小吃",
                altDesc: "百老匯地下街有許多便宜的日式烏龍麵、讚岐烏龍麵與知名的八層彩虹霜淇淋 (Daily Chiko)，好玩又省錢。"
            },
            {
                time: "14:00 - 15:30",
                title: "回秋葉原取行李 ─ 前往機場飯店",
                desc: "搭電車返回秋葉原飯店領取寄放的行李，隨即啟程前往今天晚上的住宿點 ─ 機場飯店。提早一天入住機場附近飯店，能讓最後一天早上不用提早三小時起床趕電車，也省去拖著沉重行李擠早班地鐵的折磨，對親子自由行是最聰明的安排方式！",
                cp: "消除最後一天交通焦慮 - 親子旅遊必備舒適安排",
                heat: "交通移動，車廂內有冷氣",
                heatClass: "cool",
                transit: "往羽田：搭京急線直達羽田機場；往成田：搭京成 Skyliner 直達成田機場",
                cost: "交通費約 ¥600 - ¥2,500 / 人",
                altTitle: "直奔飯店無備案",
                altDesc: "大行李移動行程，安全送達飯店是唯一要務。"
            },
            {
                time: "16:00 - 21:00",
                title: "入住機場飯店 (推薦羽田花園溫泉 或 成田周邊飯店)",
                desc: "辦理機場飯店 Check-in。若您搭乘羽田起飛的航班，強烈推薦入住與羽田第 3 航廈直通的「Villa Fontaine Grand 羽田機場」。晚餐就在連接航廈與飯店的全新購物商城「羽田機場花園」外用餐點享用，隨後全家去頂樓的「泉天空之湯」享受富士景觀露天溫泉，完美收尾！",
                cp: "泡湯看飛機 + 高級溫泉飯店 = 完美回憶",
                heat: "室內冷氣/溫泉",
                heatClass: "cool",
                transit: "步行",
                cost: "溫泉門票（房客優惠）約 ¥2,000 / 大人，晚餐約 ¥1,500 - ¥2,500 / 人",
                altTitle: "成田機場備案：成田東武機場飯店",
                altDesc: "若於成田起飛，推薦入住房價平易近人、配有免費往返航廈接駁車的「成田東武機場飯店（Narita Tobu Hotel Airport）」，晚餐可在館內或搭車至成田 AEON Mall 享用大餐。"
            }
        ]
    },
    6: {
        date: "8/16 (日)",
        title: "機場伴手禮最後大採購 & 搭機返台 (Day 6)",
        activities: [
            {
                time: "07:30 - 09:00",
                title: "飯店享用早餐 & 退房辦理登機",
                desc: "在飯店享用最後一餐豐盛的早餐。吃完後退房，輕鬆步行或搭乘接駁車前往航廈大廳辦理登機與行李託運。因為昨晚就住在機場，今早大家都能安穩睡飽，不用在清晨睡眼惺忪地狂奔趕車！",
                cp: "從容不迫 - 睡飽飽神清氣爽搭機",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行或接駁巴士",
                cost: "早餐含在房費中",
                altTitle: "無備案",
                altDesc: "直奔機場櫃檯。"
            },
            {
                time: "09:30 - 11:30",
                title: "機場免稅店最後大獵奇與採購",
                desc: "過完海關後，在免稅店為同學、親友進行最後的伴手禮採購！包含東京 Banana 蛋糕、Royce 生巧克力、白色戀人、薯條三兄弟等。免稅店購買不用折抵退稅手續，直接帶上飛機最划算。隨後前往登機門搭機返台，圓滿結束這趟高 CP 值又讓動漫電玩迷大滿足的東京親子神級之旅！",
                cp: "免稅購物 - 划算又省時",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "搭機返台",
                cost: "購物費用自理",
                altTitle: "無備案",
                altDesc: "安全登機返台。"
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
            <div class="timeline-item ${act.title.includes('退房') || act.title.includes('機場') ? 'lodging-move' : ''}">
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
        advice += "💡 門票預算稍高。本行程精選了免費的東京都廳展望台（省下晴空塔昂貴門票）以及極便宜的葛西臨海水族館（小學生以下免費！）。建議多利用這些公立或免費景點來維持高 CP 值。";
    } else if (hotel < 12000) {
        advice += "💡 住宿預算相當精實！秋葉原附近有很多高 CP 值的親子商務旅館（如 Super Hotel、Dormy Inn 包含免費溫泉或早餐），適合家庭入住。";
    } else {
        advice += "🎉 預算控制得非常完美！主打秋葉原 4 晚平價親子住宿 + 1 晚機場溫泉飯店，加上善用地鐵券，能以極佳的 CP 值完成一趟高品質的東京親子之旅！";
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
