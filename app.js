// Day Itinerary Data
const itineraryData = {
    1: {
        date: "8/11 (二)",
        title: "抵達東京 & 首日秋葉原 3C 動漫深度遊 (Day 1)",
        activities: [
            {
                time: "07:00 - 08:30",
                title: "班機抵達成田機場 T3 & 購買票券",
                desc: "捷星日本 GK012 於 07:00 順利降落成田機場第三航廈。帶孩子辦理入境與行李提領。隨後前往第二航廈購買 Welcome Suica 卡，並買好京成電鐵 Skyliner 車票直奔秋葉原。首日因清晨剛落地未入住，早餐可在機場或抵達飯店後享用，其餘天數早餐皆在飯店內享用。",
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
                desc: "中午在外面吃！推薦極受日本國高中生喜愛的排隊名店「Roast Beef Ono（ローストビーフ大野）」，這家的山狀烤牛肉丼份量十足、香嫩可口，非油炸且極具能量；或是前往「九十九拉麵」享用濃郁的起司豚骨拉麵！",
                cp: "大份量美食 ─ 國高中生最愛，烤牛肉非油炸更健康",
                heat: "室內冷氣排隊",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,200 - ¥2,200 / 人",
                altTitle: "午餐備案：友都八喜 8 樓拉麵街",
                altDesc: "若街邊排隊太曬，直接上友都八喜 8 樓美食街，有各式非油炸的拉麵、日式定食可選。"
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
                title: "外用餐點 (晚餐)：秋葉原 UDX 鐵板大阪燒/文字燒",
                desc: "晚餐在外面吃！推薦前往秋葉原 UDX 大樓 3 樓的「千房」或「ゆかり (Yukari)」大阪燒/文字燒專賣店。讓孩子們在鐵板上親自動手翻煎大阪燒、翻炒文字燒，既好玩又新奇，體驗道地的日本平民美食文化，且完全非油炸，口感豐富！",
                cp: "鐵板體驗 ─ 好吃、好玩且非油炸，晚餐互動感極佳",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "晚餐約 ¥1,200 - ¥2,200 / 人",
                altTitle: "晚餐備案：秋葉原 九州じゃんがら拉麵",
                altDesc: "若想吃湯麵，可去吃經典的九州豚骨拉麵，提供溫暖又濃郁的道地湯頭。"
            }
        ]
    },
    2: {
        date: "8/12 (三)",
        title: "經典淺草寺與銀座「雙向並行」逛街路線 (Day 2)",
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
                time: "11:45 - 13:15",
                title: "外用餐點 (午餐)：淺草釜飯 或 淺草蕎麥麵 (非油炸清爽美食)",
                desc: "中午在外面吃！避開炸物，推薦淺草極具代表性的老店「淺草釜飯 むつみ (Mutsumi)」，釜飯是將高湯、雞肉、海鮮或野菜放入小鐵鍋中現燜的傳統炊飯，香氣撲鼻且完全非油炸，健康高 CP 值！或在雷門旁享用清爽消暑的日式蕎麥冷麵配特製醬汁。",
                cp: "傳統炊飯 ─ 燜出米飯清甜，健康又飽足",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,200 - ¥2,200 / 人",
                altTitle: "午餐備案：前往銀座吃特色燒肉丼",
                altDesc: "可直接搭乘地鐵前往下一站銀座，享用香氣濃郁的日式炭火燒肉飯。"
            },
            {
                time: "13:30 - 17:30",
                title: "銀座雙向分流：媽媽雜貨服飾 vs 孩子科技玩具",
                momDesc: "專攻銀座最大家居與雜貨選品旗艦店！首站 **「無印良品 銀座全球旗艦店」**（整棟大樓包含 MUJI 烘焙坊、超大家居與服飾區）；接著逛隔壁的 **「銀座 Loft」**（多層樓生活創意雜貨、文具與廚房設計小物），並可至附近的 **Uniqlo Tokyo & GU 銀座旗艦店** 採購簡約舒適的日系服飾，好逛且價格適中！",
                kidsDesc: "挑戰銀座三大科技與玩具天堂！首站 **「Sony Store 銀座」**（親自體驗最新 PlayStation VR 遊戲設備、數位相機與科技新品）；接著逛 **「Nissan Crossing」**（展示未來感概念跑車，還能親自操作賽車模擬器）；最後逛 4 層樓的 **「博品館 Toy Park」**（東京數一數二的大型玩具百貨，4樓有超大賽車跑道可以讓孩子操作遙控賽車跑圈！）。",
                meeting: "【MUJI 銀座全球旗艦店 1 樓麵包坊/Cafe】或【銀座 Loft 1 樓咖啡區】。所有店鋪皆位於銀座中央通/並木通周邊，步行僅 3-5 分鐘即可互相抵達，安全且不怕迷路！",
                cp: "分流雙贏 ─ 媽媽盡情逛街，孩子大玩科技遙控賽車，互不干涉",
                heat: "全程室內冷氣",
                heatClass: "cool",
                transit: "地鐵銀座線：淺草站 ➔ 銀座站（直達 16 分鐘）",
                cost: "免費參觀",
                altTitle: "下雨/避暑分流備案",
                altDesc: "若天氣過熱，可將集合點改在 GINZA SIX 的蔦屋書店，裡面有冷氣與設計小物，適合坐著看書休息。"
            },
            {
                time: "18:00 - 20:30",
                title: "外用餐點 (晚餐)：銀座 鍋爸 (Nabezo) 頂級 Sukiyaki/Shabu-shabu",
                desc: "晚餐在外面吃！推薦銀座高 CP 值的「鍋爸（Nabezo）」，這是一家主打天然食材的日式壽喜燒與涮涮鍋吃到飽名店。提供高品質的牛肉、豬肉與無限續加的豐富新鮮野菜，完全非油炸，能在疲憊的逛街後補滿優質蛋白質，國高中孩子正值發育期一定能大快朵頤！隨後搭乘日比谷線一線直達秋葉原飯店，免換車！",
                cp: "鍋物吃到飽 ─ 優質和牛與野菜，非油炸的極致享受",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "從地鐵銀座站搭乘日比谷線 ➔ 直達地鐵秋葉原站（只需 12 分鐘，一線直達免換車！）",
                cost: "晚餐約 ¥3,500 - ¥5,000 / 人",
                altTitle: "晚餐備案：銀座三越百貨美食街",
                altDesc: "若鍋物客滿，可至三越百貨高樓層美食街，有烏龍麵、壽司、釜飯等精緻餐廳，免去室外排隊之苦。"
            }
        ]
    },
    3: {
        date: "8/13 (四)",
        title: "六本木中城「雙向並行」與東京鐵塔體感樂園 (Day 3)",
        activities: [
            {
                time: "08:00 - 09:00",
                title: "飯店享用早餐",
                desc: "在 **THE TOURIST HOTEL & Cafe AKIHABARA** 享用美味早餐，補充足夠體力。今日行程全程依靠日比谷線地鐵，一線直達，不用為換車大傷腦訊！",
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
                title: "六本木雙向分流：質感家居服飾 vs 電視台動漫探索",
                momDesc: "專攻「東京中城 (Tokyo Midtown)」的質感家居與服飾！推薦造訪 **「IDÉE Shop」**（無印良品旗下高端北歐風家居雜貨品牌，設計感十足且溫暖舒適），以及 **「Studio CLIP」** 與 **「GLOBAL WORK」**（日系自然風男女服飾與生活雜貨，剪裁舒適、價格中等好入手），讓媽媽能優雅地採購居家布置小物與日常服飾。",
                kidsDesc: "探索六本木的地標與動漫展示！前往「六本木之丘」與巨大的蜘蛛雕像拍照。隨後直奔 **「朝日電視台 (TV Asahi) 總部大樓」**，1 樓大廳免費開放，展出超大哆啦A夢、蠟筆小新、假面騎士等經典動漫互動拍照區與限定商品店，對孩子們來說是非常有趣的探索聖地！",
                meeting: "【東京中城 Midtown 戶外廣場星巴克露天座】。Midtown 內部有許多公共休息沙發，媽媽逛累了或孩子探索完，都可在此喝飲料會合。",
                cp: "動靜皆宜 ─ 媽媽買質感家居，孩子拍動漫巨型模型，各取所需",
                heat: "室內冷氣/戶外樹蔭",
                heatClass: "cool",
                transit: "從地鐵秋葉原站搭乘日比谷線 ➔ 直達六本木站（22 分鐘，無須轉乘）",
                cost: "免費參觀",
                altTitle: "避暑分流備案",
                altDesc: "若天氣太熱，可直接約在 Midtown 內部的 IDÉE Shop 附設休息區或 B1 美食街飲料鋪會合。"
            },
            {
                time: "12:15 - 13:45",
                title: "外用餐點 (午餐)：六本木 AFURI (阿夫利) 招牌柚子鹽拉麵",
                desc: "中午在外面吃！避開重口味與油炸物，帶家人品嚐東京極具人氣的「AFURI（阿夫利）拉麵」。其招牌「柚子鹽拉麵」使用金黃色雞湯底，加入新鮮炙燒叉燒（可換成舒肥雞肉）與天然清爽的柚子汁，清澈爽口、一點都不油膩，非常適合炎熱的 8 月正午享用！",
                cp: "招牌柚子拉麵 ─ 清爽解膩，非油炸高 CP 值名店",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,100 - ¥1,800 / 人",
                altTitle: "午餐備案：Midtown B1 平價美食街",
                altDesc: "若 AFURI 排隊太長，Midtown B1 美食街有平價的日式烏龍麵、壽司餐盒、或熟食便當，選擇極多。"
            },
            {
                time: "14:00 - 18:00",
                title: "東京鐵塔地標 & RED° 科技體感樂園 (青少年最愛)",
                desc: "搭電車一站前往神谷町，步行前往東京最重要的地標「東京鐵塔」！帶孩子在芝公園以草地為背景與紅白色鐵塔拍下經典合照。隨後進入鐵塔內部，挑戰全新的 **「RED° TOKYO TOWER」** 體感電競樂園（擁有各種 VR 賽車、互動運動遊戲與電競體驗，是 12/15 歲青少年會玩到瘋掉的室內科技天堂！）。媽媽若不玩體感遊戲，可在鐵塔低樓層的 FootTown 咖啡廳休息，或逛日式紀念品店。",
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
                title: "外用餐點 (晚餐)：大門/濱松町 鳥貴族 (Torikizoku) 平價炭烤串燒",
                desc: "晚餐在外面吃！前往東京鐵塔附近的平價居酒屋首選「鳥貴族（Torikizoku）」。全店所有餐點均為單一平價（每樣僅約 ¥370/NT$80 左右），提供超大份量的現烤雞肉串燒、金黃釜飯、高麗菜（可免費無限續盤）與多種無酒精飲料。無油炸且分量扎實，大人小孩都能點滿整桌，吃得開心又省預算！隨後地鐵直達回秋葉原飯店。",
                cp: "均一價串燒 ─ 現點現烤、分量充足且非油炸，親子居酒屋首選",
                heat: "夜間較涼爽/室內",
                heatClass: "cool",
                transit: "從地鐵神谷町站（或大門站）搭乘日比谷線 ➔ 直達地鐵秋葉原站（20 分鐘，一線直達）",
                cost: "晚餐約 ¥1,500 - ¥2,500 / 人",
                altTitle: "晚餐備案：回秋葉原 UDX 吃日本燒肉",
                altDesc: "若鳥貴族排隊太長，可直接搭日比谷線回秋葉原，在飯店附近的 UDX 大樓美食街享用晚餐。"
            }
        ]
    },
    4: {
        date: "8/14 (五)",
        title: "明治神宮、原宿潮流與澀谷 3C 「雙向並行」一日遊 (Day 4)",
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
                transit: "從飯店步行 8 分鐘至 JR 秋葉原站 ➔ 搭乘山手線至原宿站（直達約 25 分鐘）",
                cost: "免費",
                altTitle: "雨天備案：直接去澀谷 Hikarie 室內商城",
                altDesc: "若早上下大雨，直接去澀谷 Hikarie 百貨內逛街，內有非常多質感日系家居與香氛選物店。"
            },
            {
                time: "11:15 - 13:00",
                title: "原宿表參道雙向分流：Niko and 旗艦店 vs Kiddy Land 玩具國度",
                momDesc: "直奔媽媽最愛的 **「Niko and... TOKYO」** 表參道旗艦店！這家兩層樓的超大店鋪展示了最具設計感的平價生活雜貨、室內盆栽、日系簡約男女服飾與生活香氛。隨後還可逛隔壁的 **「Studio CLIP 表參道店」**，選購充滿日系自然溫暖感的小布包與家居擺飾。",
                kidsDesc: "進擊原宿玩具天堂 **「Kiddy Land 原宿店」**！這棟 6 層樓大樓是動漫與角色玩具的王國，包含 Snoopy Town、Sanrio、吉卜力、角落生物、Marvel 英雄與熱門動漫周邊。兩位國高中孩子可以在這裡買到精緻的扭蛋、盒玩與正版玩具！",
                meeting: "【Niko and... TOKYO 1樓的附設 Cafe 休息區】。Kiddy Land 與 Niko and... 僅相距 3 分鐘步行路程，媽媽可以喝杯咖啡看雜貨，孩子逛完玩具後直接來咖啡廳會合，極度便利！",
                cp: "完美街區分流 ─ 媽媽沉浸於 Niko and 雜貨，孩子在 Kiddy Land 買爆周邊",
                heat: "戶外高溫/店內冷氣",
                heatClass: "danger",
                transit: "步行",
                cost: "免費逛街",
                altTitle: "雨天分流備案",
                altDesc: "若下雨，可改約在原宿竹下通出口處的室內星巴克或輕食店會合。"
            },
            {
                time: "13:00 - 14:30",
                title: "外用餐點 (午餐)：原宿 Sakura Tei (櫻亭) DIY 鐵板文字燒/大阪燒",
                desc: "中午在外面吃！帶孩子前往原宿的創意藝術餐館「Sakura Tei（櫻亭）」。這裡提供平價的 DIY 大阪燒與文字燒，桌上有大鐵板可以讓國高中生自行調配食材、翻面煎製，配上美味的日式炒麵。非油炸且充滿歡樂互動，是原宿極具 CP 值的親子午餐選擇！",
                cp: "藝術風大阪燒 ─ 趣味 DIY、價格平實且非油炸，深受年輕人喜愛",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "步行",
                cost: "午餐約 ¥1,100 - ¥1,800 / 人",
                altTitle: "午餐備案：原宿 Kamukura (神座拉麵)",
                altDesc: "若不想動手做，可去吃神座拉麵，其清甜的大白菜蔬菜湯底拉麵非常健康解膩。"
            },
            {
                time: "14:45 - 18:00",
                title: "澀谷雙向分流：無印/Loft/Standard Products vs Parco動漫與 Donki 3C",
                momDesc: "專攻澀谷最具口碑的平價雜貨！推薦逛 **「Standard Products 澀谷店」**（Daiso旗下高質感簡約家居品牌，均一價 ¥300~¥500，主打日系極簡風餐具、抱枕、收納罐，CP值極高）；並可逛 5 層樓的 **「澀谷 Loft」** 與 **「Shibuya Hikarie 5樓」**（內有 Today's Special 等多家知名日本精緻家居選品雜貨店）。",
                kidsDesc: "挑戰電玩大本營與 3C 獵奇！直接前往 **「澀谷 PARCO 6樓」**，大逛任天堂官方旗艦店、卡普空及 Jump Shop。隨後前往 **「MEGA 唐吉訶德 澀谷本店」**，這家全東京最大的唐吉訶德有整層樓的 3C 科技配件、動漫電玩周邊與奇特小玩具，孩子們探索這裡絕對不會無聊！",
                meeting: "【澀谷 PARCO 10 樓的露天空中花園 (Rooftop Garden)】或【澀谷 Loft 2 樓咖啡廳】。兩處均有冷氣與寬敞的休息區域，方便分頭逛街後會合。",
                cp: "分流各取所需 ─ 媽媽買超划算 Standard Products 家居，孩子大逛任天堂官方店與唐吉訶德",
                heat: "室內冷氣",
                heatClass: "cool",
                transit: "從原宿步行約 15 分鐘（沿貓街散步）；或搭乘 JR 山手線一站直達澀谷站",
                cost: "免費逛街",
                altTitle: "避暑/下雨分流備案",
                altDesc: "可直接約在澀谷站旁的 Scramble Square 百貨內會合，免去室外走動。"
            },
            {
                time: "18:30 - 21:00",
                title: "外用餐點 (晚餐)：澀谷 藏壽司 (Kura) 全球最大旗艦店",
                desc: "晚餐在外面吃！帶孩子朝聖位於澀谷站旁的「藏壽司全球最大旗艦店」。店內由世界名設計師打造，充滿精緻的木質和風裝潢、巨大紅白燈籠與江戶浮世繪牆面。除了美味平價的壽司外，每吃 5 盤就能玩一次螢幕抽獎（有機會獲得限定扭蛋），這對 12/15 歲的孩子來說是充滿樂趣與驚喜的晚餐體驗，且非油炸、CP值極高！餐後看涉谷十字路口，搭山手線直達回秋葉原。",
                cp: "科技迴轉壽司 ─ 吃壽司玩抽獎，全球最大旗艦店互動感極佳，非油炸高 CP 值",
                heat: "夜間涼爽/室內",
                heatClass: "cool",
                transit: "搭乘 JR 山手線：澀谷站 ➔ 直達秋葉原站（約 28 分鐘）",
                cost: "晚餐約 ¥1,000 - ¥2,500 / 人",
                altTitle: "晚餐備案：澀谷宮下公園美食街",
                altDesc: "可至宮下公園 B1 享用平價的日式烏龍麵、定食與烤魚，選擇多且無油炸負擔。"
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
                desc: "將最後一天的時間留給秋葉原。您可以帶孩子去逛第一天沒逛完的「駿河屋」、「Super Potato（復古遊戲）」或「Animate 秋葉原」。若媽媽還想尋找質感雜貨，可以逛逛萬世橋附近的 **「2k540 AKI-OKA ARTISAN」**，這是位於高架橋下的手工藝與設計雜貨街，有許多極具質感、日本製的日常精緻小物店，人潮少且非常精緻好逛！",
                cp: "高架下文創街 ─ 避開秋葉原擁擠人潮，媽媽採購日製工藝小物的隱藏版好去處",
                heat: "室內冷氣/高架橋下陰涼處",
                heatClass: "cool",
                transit: "從飯店步行約 10 分鐘即達 2k540",
                cost: "免費參觀",
                altTitle: "避暑備案：秋葉原 UDX 商城",
                altDesc: "若中午陽光過大，可直接躲入 UDX 大樓內的冷氣商場與餐廳休息。"
            },
            {
                time: "13:00 - 14:00",
                title: "外用餐點 (午餐)：神田明神 大手蕎麥麵 或 傳統日式定食 (非油炸)",
                desc: "中午在外面吃！推薦步行至秋葉原旁的神田明神神社參道旁，在傳統茶屋或蕎麥麵店享用熱/冷蕎麥麵、日式親子丼或烤魚定食。食材天然、清爽非油炸，且能順便欣賞宏偉的神田明神神社，極具 CP 值！",
                cp: "神社參道美食 ─ 涼爽蕎麥麵，清淡非油炸，消暑有文化氣息",
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
        
        let bodyHtml = '';
        if (act.momDesc && act.kidsDesc) {
            bodyHtml = `
                <div class="split-route-container">
                    <div class="route-col mom">
                        <h5><i class="fas fa-venus"></i> 👩 媽媽逛街路線</h5>
                        <p>${act.momDesc}</p>
                    </div>
                    <div class="route-col kids">
                        <h5><i class="fas fa-gamepad"></i> 👦 孩子探索路線</h5>
                        <p>${act.kidsDesc}</p>
                    </div>
                </div>
                <div class="meeting-point">
                    <i class="fas fa-map-marker-alt"></i> <strong>📍 集合地點與建議：</strong> ${act.meeting}
                </div>
            `;
        } else {
            bodyHtml = `<p class="item-desc">${act.desc}</p>`;
        }
        
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
                    ${bodyHtml}
                    
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
