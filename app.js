// Day Itinerary Data
const itineraryData = {
    1: {
        date: "8/11 (二)",
        title: "抵達東京 & 首日秋葉原 3C 動漫深度遊 (Day 1)",
        activities: [
            {
                time: "07:00 - 08:30",
                title: "班機抵達成田機場 T3 & 購買票券",
                desc: "捷星日本 GK012 於 07:00 降落成田機場第三航廈。帶孩子辦理入境與行李提領。隨後前往第二航廈購買 Welcome Suica 卡，並買好京成電鐵 Skyliner 車票直奔秋葉原。首日因清晨剛落地未入住，早餐可在機場或抵達飯店後享用，其餘天數早餐皆在飯店內享用。",
                cp: "紅眼抵達 ─ 買好地鐵 72 小時券搭配 Suica 使用",
                heat: "上午較涼爽",
                heatClass: "cool",
                transit: "成田 T3 步行至 T2 ➔ 搭乘京成電鐵 Skyliner 到日暮里站 ➔ 轉 JR 山手線至秋葉原站（約 1 小時 10 分鐘）",
                cost: "交通費約 ¥2,300 - ¥2,800 / 人",
                altTitle: "省錢交通備案：京成 Access 特急",
                altDesc: "若不趕時間，可搭乘「京成 Access 特急」直達東日本橋（約 65 分鐘，僅約 ¥1,300），轉乘都營新宿線至岩本町（秋葉原旁），可省下近一半的車資！"
            },
            {
                time: "09:00 - 10:30",
                title: "前往飯店寄存行李 & 享用精緻早茶",
                desc: "抵達秋葉原站後，從昭和通口步行約 6~8 分鐘，抵達本次住宿的 **THE TOURIST HOTEL & Cafe AKIHABARA**。辦理大件行李寄存，隨後可直接在飯店極具口碑的 1 樓設計感咖啡廳（THE TOURIST HOTEL & Cafe）歇腳，享用精緻的手沖咖啡與輕食，給剛搭完紅眼班機的家人一個舒適的起點。",
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
                desc: "步行前往秋葉原大門口的動漫地標「Radio Kaikan（廣播會館）」，9 層樓裝滿了 K-Books、AmiAmi、Yellow Submarine 等公仔、模型與卡牌店，升國一與升高一的孩子一定會瘋狂！隨後逛隔壁的「Yodobashi-Akiba（友都八喜）」，6樓有整層的電競硬體、組裝PC配件與最新 3C 科技設備。首日先滿足喜愛 3C 與動漫的孩子們！",
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
                desc: "返回 **THE TOURIST HOTEL & Cafe AKIHABARA** 辦理入住手續並拿行李進房。由於凌晨搭乘 02:40 的紅眼班機，全家體力已透支，**務必在此時段強制睡覺補眠 2~3 小時**。這段休息時間是保證接下來幾天旅遊品質的生存關鍵！",
                cp: "適度補眠 ─ 換取後半段行程好體力",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行回飯店",
                cost: "免費",
                altTitle: "體力充足備案：直接逛 Kotobukiya 壽屋",
                altDesc: "若孩子儲備體力佳不想睡，可先去逛「壽屋 Kotobukiya Store」，採購寶可夢與各大遊戲官方周邊。"
            },
            {
                time: "17:00 - 21:00",
                title: "秋葉原動漫商圈挖寶：Mandarake Complex & GiGO 遊戲中心",
                desc: "傍晚氣溫轉涼，出門逛黑色的「Mandarake Complex」大樓，8 層樓擺滿了二手珍稀公仔、絕版懷舊遊戲與古老電子設備。隨後前往「GiGO 秋葉原」大玩夾娃娃機、音樂節奏遊戲或賽車，感受道地的日式遊樂場氛圍！",
                cp: "免門票 ─ 體驗中古老街與大型電玩魅力",
                heat: "傍晚稍涼/室內",
                heatClass: "cool",
                transit: "從飯店步行約 8-10 分鐘",
                cost: "遊戲機單次約 ¥100 - ¥200",
                altTitle: "雨天備案：Super Potato 懷舊遊戲店",
                altDesc: "若下雨，可改逛有頂棚的電玩店，或專攻復古遊戲天堂「Super Potato」，順便品嚐日本童年古早味零食。"
            },
            {
                time: "19:00 - 20:30",
                title: "外用餐點 (晚餐)：秋葉原 九州じゃんがら拉麵 或 UDX 美食街",
                desc: "晚餐在外面吃！推薦秋葉原名店「九州じゃんがら拉麵」，濃郁豚骨湯頭非常合台灣人口味；或前往 UDX 大樓的「AKIBA ICHI」美食街享用定食或迴轉壽司，用餐環境寬敞且乾淨舒適。",
                cp: "傳統豚骨拉麵 ─ 口味絕佳",
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
        title: "經典淺草寺與銀座高 CP 值生活雜貨購物 (Day 2)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用美味精緻的早茶/早餐。在質感的工業風空間內享用完手沖咖啡後，出發前往經典的淺草寺。",
                cp: "飯店優質早茶 ─ 質感品味首選",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費中",
                altTitle: "無備案",
                altDesc: "於飯店用餐。"
            },
            {
                time: "09:30 - 11:30",
                title: "經典地標：淺草寺、雷門與仲見世通晨間散步",
                desc: "早上 9:30 前抵達淺草寺，此時大批旅行團尚未湧入，氣溫也較為涼爽。可以跟巨大的「雷門」紅燈籠拍到好照片，沿著仲見世通漫步，品嚐炸饅頭、人形燒等日式傳統小點心，體驗濃厚的日式江戶風情。",
                cp: "免門票 ─ 東京必訪經典地標",
                heat: "戶外，上午較涼爽",
                heatClass: "cool",
                transit: "從飯店步行 6 分鐘 ➔ 地鐵秋葉原站搭乘日比谷線至上野站 ➔ 轉乘銀座線至淺草站（約 15 分鐘）",
                cost: "免費參觀（小點心約 ¥150 - ¥400 / 份）",
                altTitle: "下雨備案：淺草傳法院通有頂棚商店街",
                altDesc: "若遇大雨，可改在有頂棚的商店街或東武淺草百貨內逛街避雨。"
            },
            {
                time: "12:00 - 13:30",
                title: "外用餐點 (午餐)：淺草平價天婦羅/大黑家 或 淺草今半和牛",
                desc: "中午在外面吃！推薦淺草百年老店「大黑家天麩羅」，大啖醬汁濃郁的炸蝦天丼；若預算寬裕，亦可前往「淺草今半」享用頂級的和牛壽喜燒午間定食（中午限定，CP值極高！）。",
                cp: "百年老店 ─ 體驗道地江戶天丼",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,500 - ¥3,500 / 人",
                altTitle: "午餐備案：銀座百貨美食街",
                altDesc: "可直接搭乘地鐵前往下一站銀座，在三越百貨或 GINZA SIX 地下街的冷氣房內舒適享用午餐。"
            },
            {
                time: "13:45 - 17:30",
                title: "銀座：媽媽最愛！無印良品全球旗艦店 & 銀座 Loft 雜貨選品店",
                desc: "搭電車前往銀座。這裡不僅是高級名店街，更有超好逛的平價與中等價位家居/雜貨天堂！首站造訪 **「無印良品 銀座全球旗艦店」**（整棟大樓包含 MUJI 烘焙坊、超大家居與服飾區）；接著逛隔壁的 **「銀座 Loft」**，多層樓展示了無數創意文具、精緻家居用品、廚房雜貨與美妝，是媽媽和全家都會愛上的選品雜貨天堂！",
                cp: "免門票 ─ 東京最大家居與雜貨選品旗艦店群，好逛且價格親民",
                heat: "全程室內冷氣",
                heatClass: "cool",
                transit: "地鐵銀座線：淺草站 ➔ 銀座站（直達 16 分鐘）",
                cost: "免費參觀",
                altTitle: "雜貨購物備案：銀座伊東屋 Itoya",
                altDesc: "若喜愛文具與精緻紙藝，可逛 12 層樓的「伊東屋 Itoya」文具百貨，每層樓都有不同的生活設計選品主題。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：銀座 篝 (米其林雞白湯拉麵) 或 炸豬排梅林",
                desc: "晚餐在外面吃！推薦銀座最知名的「篝（Kagari）」拉麵，其濃郁如濃湯般的雞白湯拉麵極受歡迎；或到「銀座梅林」享用酥脆香嫩的日式炸豬排定食。隨後搭電車回飯店，不用換車，非常順暢！",
                cp: "經典美食 ─ 米其林推薦雞白湯拉麵",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "從地鐵銀座站搭乘日比谷線 ➔ 直達地鐵秋葉原站（只需 12 分鐘，一線直達免換車！）",
                cost: "晚餐約 ¥1,000 - ¥2,500 / 人",
                altTitle: "晚餐備案：銀座三越百貨美食街",
                altDesc: "若拉麵排隊太長，可至百貨公司高樓層，有多家日式洋食、壽司與天婦羅餐廳，排隊環境非常舒適。"
            }
        ]
    },
    3: {
        date: "8/13 (四)",
        title: "六本木藝術街區、質感北歐家居與東京鐵塔經典夜景 (Day 3)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用美味早餐，補充足夠體力。今日行程全程依靠日比谷線地鐵，一線直達，不用為換車大傷腦筋！",
                cp: "一線直達 ─ 善用日比谷線優勢，交通最順暢",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "在飯店用餐。"
            },
            {
                time: "09:30 - 12:00",
                title: "六本木之丘 & 東京中城質感家居店巡禮 (IDÉE Shop)",
                desc: "搭地鐵直達六本木。首先逛「六本木之丘」與醒目的巨大蜘蛛雕像拍照。隨後漫步至「東京中城 (Tokyo Midtown)」，這裡有優美的戶外綠地，大樓內部更聚集了多家極具質感的家居設計店，特別推薦 **「IDÉE Shop」**（無印良品旗下高端北歐風家居雜貨品牌，設計感十足且價格適中）以及各種精緻的日本工藝選品店，是居家布置的挖寶勝地。",
                cp: "免門票 ─ 欣賞現代建築與設計感家居雜貨",
                heat: "室內冷氣/戶外樹蔭",
                heatClass: "cool",
                transit: "從地鐵秋葉原站搭乘日比谷線 ➔ 直達六本木站（22 分鐘，無須轉乘）",
                cost: "免費參觀",
                altTitle: "避暑備案：六本木森美術館",
                altDesc: "若天氣太熱，可直接上六本木之丘頂樓的「森美術館 (Mori Art Museum)」，吹超強冷氣欣賞前衛藝術展覽。"
            },
            {
                time: "12:15 - 13:45",
                title: "外用餐點 (午餐)：六本木平價豬排/豚組 或 紐約人氣漢堡 Shake Shack",
                desc: "中午在外面吃！推薦至東京中城戶外廣場的「Shake Shack」，一邊看綠地一邊享用多汁的招牌牛肉堡與波浪薯條；或前往「豚組食堂」享用美味厚切的炸豬排定食，大口滿足！",
                cp: "綠意餐廳 ─ 休閒且餐點美味",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,000 - ¥2,200 / 人",
                altTitle: "午餐備案：Midtown 地下美食街",
                altDesc: "Midtown 地下街有豐富的日式便當、烏龍麵與熟食店，買完可在室內公共休息區長椅輕鬆享用。"
            },
            {
                time: "14:00 - 18:00",
                title: "東京鐵塔地標 & RED° 科技體感樂園 (青少年最愛)",
                desc: "搭電車一站前往神谷町，步行前往東京最重要的地標「東京鐵塔」！帶孩子在芝公園以草地為背景與紅白色鐵塔拍下經典合照。隨後進入鐵塔內部，挑戰全新的 **「RED° TOKYO TOWER」** 體感電競樂園（擁有各種 VR 賽車、互動運動遊戲與電競體驗，是 12/15 歲青少年會玩到瘋掉的室內科技天堂！）。",
                cp: "地標打卡免費 ─ RED° 樂園讓青少年徹底放電",
                heat: "鐵塔內部冷氣強勁",
                heatClass: "cool",
                transit: "地鐵日比谷線：六本木站 ➔ 神谷町站（1站，2分鐘），步行 7 分鐘即達東京鐵塔",
                cost: "東京鐵塔拍照免費；RED° 門票建議在 Klook 預訂約 NT$700 - $900/人",
                altTitle: "避暑備案：東京鐵塔地下街與海賊王專賣店",
                altDesc: "如果不玩 RED°，可在鐵塔低樓層的 FootTown 逛動漫雜貨，並在附近的咖啡廳喝下午茶避暑。"
            },
            {
                time: "18:30 - 21:00",
                title: "外用餐點 (晚餐)：大門/濱松町 平價炸豬排檍 或 居酒屋",
                desc: "晚餐在外面吃！前往東京鐵塔附近的「大門站」周邊，大啖日本極高 CP 值的排隊燒肉或「炸豬排 檍（Tonkatsu Aoki）」，其厚切多汁的林 SPF 豬肉配上喜馬拉雅岩鹽，美味驚人！餐後可在路口觀賞打上暖黃燈光的夜間東京鐵塔，隨後直達電車回秋葉原。",
                cp: "神級炸豬排 ─ 價格平實但肉質無可挑剔",
                heat: "夜間較涼爽/室內",
                heatClass: "cool",
                transit: "從地鐵神谷町站搭乘日比谷線 ➔ 直達地鐵秋葉原站（20 分鐘，一線直達）",
                cost: "晚餐約 ¥1,200 - ¥2,500 / 人",
                altTitle: "晚餐備案：回秋葉原 UDX 吃燒肉",
                altDesc: "若大門站排隊太長，可直接搭日比谷線回秋葉原，在飯店附近的 UDX 大樓美食街享用晚餐。"
            }
        ]
    },
    4: {
        date: "8/14 (五)",
        title: "明治神宮森林浴、原宿美式雜貨與澀谷 3C 電玩總巡禮 (Day 4)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在飯店享用美味早餐。今天行程從綠意盎然的明治神宮開始，再沿路逛原宿與澀谷的動漫與平價家居天堂。",
                cp: "飯店早餐 ─ 補充足夠水分與能量",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "飯店用餐。"
            },
            {
                time: "09:30 - 11:00",
                title: "明治神宮清晨防暑森林浴",
                desc: "清晨的明治神宮林蔭繁茂，巨大的參天大樹能有效阻擋烈日，氣溫明顯比水泥都市低 2-3°C，非常適合漫步。觀賞巨型木造大鳥居與正殿，體驗莊嚴的神社文化。",
                cp: "免門票 ─ 鬧中取靜的天然避暑大森林",
                heat: "大片樹蔭遮陽",
                heatClass: "cool",
                transit: "從飯店步行 8 分鐘至 JR 秋葉原站 ➔ 搭乘山手線（或總武線在代代木轉）至原宿站（直達約 25 分鐘）",
                cost: "免費",
                altTitle: "雨天備案：直接去澀谷 Hikarie 室內商城",
                altDesc: "若早上下大雨，直接去澀谷 Hikarie 百貨內逛街，內有非常多質感日系家居與香氛選物店。"
            },
            {
                time: "11:15 - 13:00",
                title: "原宿竹下通 & Niko and... 潮流家居選品店",
                desc: "出神宮後就是熱鬧的竹下通。買份經典的可麗餅給孩子當點心。隨後帶媽媽步行至表參道交界處的 **「Niko and... TOKYO」** 旗艦店。這家店展示了無數富有設計感的平價生活小雜貨、室內盆栽、香氛與抱枕家具，是東京年輕家庭最愛的家居與服飾選品店！",
                cp: "潮流選品店 ─ 設計雜貨價格適中，風格強烈",
                heat: "戶外高溫/店內冷氣",
                heatClass: "danger",
                transit: "步行",
                cost: "可麗餅/點心約 ¥600 - ¥800 / 人",
                altTitle: "避暑備案：東急廣場 (Tokyu Plaza)",
                altDesc: "若戶外太曬，走進東急廣場表參道原宿大樓內，6樓空中花園有陰涼的座位與冷氣。"
            },
            {
                time: "13:00 - 14:30",
                title: "外用餐點 (午餐)：原宿 Red Rock (火山烤牛肉丼)",
                desc: "中午在外面吃！帶兩位青少年去吃超受歡迎的「Red Rock」，招牌「火山烤牛肉丼」將粉嫩的烤牛肉片堆疊成小山，再淋上特製酸奶醬與蛋黃，視覺與味覺效果都讓青少年著迷！",
                cp: "火山烤牛肉丼 ─ 照片上傳社群首選",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,100 - ¥1,800 / 人",
                altTitle: "午餐備案：原宿一蘭拉麵",
                altDesc: "若想吃湯麵，原宿一蘭拉麵也是極佳選擇，一人一格的點餐方式孩子們會覺得新奇。"
            },
            {
                time: "14:45 - 18:00",
                title: "澀谷：Parco 6F 動漫天堂 & Hands 與 Standard Products 家居採購",
                desc: "步行或搭電車到澀谷。孩子們去逛 **「澀谷 PARCO 6樓」** 的任天堂與寶可夢旗艦店。媽媽則可專攻澀谷著名的 **「Hands (原東急手創館)」**（整棟大樓裝滿生活 DIY、廚房道具與創意生活用品）；或造訪 **「Standard Products」**（Daiso 旗下的簡約高質感家居品牌，主打 ¥300-¥500 的簡約生活小物，極受歡迎，CP 值破表！）。",
                cp: "極高 CP 值生活家居 ─ Standard Products 設計精美且均一低價",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "從原宿步行約 15 分鐘（沿貓街散步）；或搭乘 JR 山手線一站直達澀谷站",
                cost: "免費逛街",
                altTitle: "避暑備案：澀谷 Mark City / Scramble Square",
                altDesc: "若不想走動，可集中逛澀谷 Scramble Square 商城，高樓層有時尚生活雜貨與大盛拉麵。"
            },
            {
                time: "18:30 - 21:00",
                title: "外用餐點 (晚餐)：澀谷平價個人燒肉 Yakiniku Like 或 美登利壽司",
                desc: "晚餐在外面吃！帶孩子享用「Yakiniku Like」的平價個人單人燒肉；或者前往「梅丘壽司之美登利」，品嚐以超高 CP 值聞名的厚切極新鮮壽司。晚餐後可帶孩子朝聖著名的澀谷 Scramble 十字路口，感受東京的繁華，隨後搭車回秋葉原飯店。",
                cp: "美登利壽司 ─ 新鮮、大份量且物超所值",
                heat: "夜間涼爽/室內",
                heatClass: "cool",
                transit: "搭乘 JR 山手線：澀谷站 ➔ 直達秋葉原站（約 28 分鐘）；或搭地鐵",
                cost: "晚餐約 ¥1,000 - ¥2,800 / 人",
                altTitle: "晚餐備案：澀谷宮下公園美食街",
                altDesc: "宮下公園 (MIYASHITA PARK) 橫丁內有全日本各地特色的小吃攤，氛圍熱鬧且選擇豐富。"
            }
        ]
    },
    5: {
        date: "8/15 (六)",
        title: "秋葉原最後採購 & 搭乘深夜紅眼航班返台 (Day 5)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店早餐 & 辦理退房寄放行李",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用最後一餐美味早餐，大杯手沖咖啡。隨後辦理退房，並將所有大件行李暫時免費寄放在前台。今天下午要將行李取回並搭車前往機場。",
                cp: "飯店早餐 ─ 補充本日充足體力",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "無",
                cost: "已含在房費內",
                altTitle: "無備案",
                altDesc: "飯店用餐。"
            },
            {
                time: "09:30 - 13:00",
                title: "秋葉原 3C 與動漫商圈最後衝刺採購",
                desc: "將最後一天的時間留給秋葉原。您可以帶孩子去逛第一天沒逛完的「駿河屋」、「Super Potato（復古遊戲）」或「Animate 秋葉原」。媽媽也可以去飯店周邊的雜貨小店探險，或在精緻的咖啡廳休息，享受東京最後的優閒時光。",
                cp: "把握最後時間 ─ 補齊所有想要的動漫與 3C 周邊",
                heat: "室內冷氣/戶外",
                heatClass: "cool",
                transit: "步行",
                cost: "免費參觀",
                altTitle: "避暑備案：秋葉原 UDX 商城",
                altDesc: "若中午陽光過大，可直接躲入 UDX 大樓內的冷氣商場與餐廳休息。"
            },
            {
                time: "13:00 - 14:00",
                title: "外用餐點 (午餐)：秋葉原平價拉麵或和牛漢堡排",
                desc: "中午在外面吃！推薦去吃秋葉原大受好評的「九州裝甲車拉麵（Kyushu Jangara）」，或是在昭和通口旁的平價炸豬排店享用香脆豬排飯，為下午的移動補滿能量。",
                cp: "日式連鎖餐廳 ─ 快速、平價且美味",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥900 - ¥1,800 / 人",
                altTitle: "午餐備案：回飯店咖啡廳享用簡餐",
                altDesc: "可以直接在 THE TOURIST HOTEL & Cafe 享用精緻的三明治與美味冷萃咖啡，環境熟悉且極度舒適。"
            },
            {
                time: "14:30 - 17:30",
                title: "提取行李 ─ 準備出發前往機場",
                desc: "下午在秋葉原進行最後散步。傍晚 17:30 前返回 **THE TOURIST HOTEL & Cafe AKIHABARA** 提取寄放的行李，整理好行裝，準備前往成田機場。",
                cp: "最後整理 ─ 妥善收納所有戰利品",
                heat: "室內冷氣/移動",
                heatClass: "cool",
                transit: "步行回飯店提取行李",
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
                desc: "晚上 19:30 抵達捷星櫃檯辦理登機手續並託運行李。隨後在三航廈美食街外用餐點吃晚餐（如宮武讚岐烏龍麵或長崎強棒麵），並在過關後的免稅店做伴手禮最後大掃貨（東京 Banana、白色戀人、Royce生巧克力）。搭乘 22:40 的 GK011 返台，結束這趟精彩好玩又省錢的 3C 動漫與質感家居親子自由行！",
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
            <div class="timeline-item ${act.title.includes('退房') || act.title.includes('機場') || act.title.includes('Skyliner') || act.title.includes('寄存行李') || act.title.includes('設計感咖啡聽') || act.title.includes('早茶') ? 'lodging-move' : ''}">
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
        advice += "💡 您的交通預算偏高，建議善用東京地鐵 72 小時券 (大人只需 ¥1,500/約 NT$320)，因為兩位孩子皆為國高中生，皆適用成人票價，因此使用 72 小時地鐵券更是劃算！";
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
