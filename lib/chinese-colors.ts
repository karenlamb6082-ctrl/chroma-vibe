export interface ChineseColor {
    name: string;
    hex: string;
    poem: string;
    family: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'white' | 'black' | 'cyan' | 'brown' | 'gold';
    sentiment: {
        energy: number;   // 0 (Calm) -> 10 (Excited)
        valence: number;  // 0 (Negative) -> 10 (Positive)
        chaos: number;    // 0 (Pure) -> 10 (Complex/Conflicted)
    };
}

export const CHINESE_COLORS: ChineseColor[] = [
    // --- Red (High Energy, High Valence) ---
    { name: "海棠红", hex: "#db5a6b", poem: "海棠不惜胭脂色，独立蒙蒙细雨中。", family: "red", sentiment: { energy: 7, valence: 8, chaos: 2 } },
    { name: "朱砂", hex: "#ff461f", poem: "丹砂点绛唇，红炉照夜寒。", family: "red", sentiment: { energy: 9, valence: 8, chaos: 1 } },
    { name: "胭脂", hex: "#9d2933", poem: "一抹胭脂艳，春风不可收。", family: "red", sentiment: { energy: 8, valence: 9, chaos: 3 } },
    { name: "榴花红", hex: "#f2481b", poem: "五月榴花照眼明，枝间时见子初成。", family: "red", sentiment: { energy: 8, valence: 9, chaos: 1 } },
    { name: "银红", hex: "#f05654", poem: "红酥手，黄縢酒，满城春色宫墙柳。", family: "red", sentiment: { energy: 7, valence: 7, chaos: 4 } }, // Nostalgic
    { name: "品红", hex: "#f00056", poem: "一道残阳铺水中，半江瑟瑟半江红。", family: "red", sentiment: { energy: 8, valence: 8, chaos: 2 } },
    { name: "胭脂水", hex: "#b95c68", poem: "胭脂洗出秋阶影，冰雪招来夜窗声。", family: "red", sentiment: { energy: 5, valence: 6, chaos: 5 } }, // Melancholy red
    { name: "苏木", hex: "#cb4042", poem: "平生不解藏人善，到处逢人说项斯。", family: "red", sentiment: { energy: 6, valence: 7, chaos: 3 } },
    { name: "丹红", hex: "#ff4c00", poem: "丹凤鸣金奏，灵鼍吼玉渊。", family: "red", sentiment: { energy: 9, valence: 9, chaos: 0 } },
    { name: "落红", hex: "#f09c9c", poem: "落红不是无情物，化作春泥更护花。", family: "red", sentiment: { energy: 4, valence: 6, chaos: 2 } }, // Gentle red
    { name: "桃夭", hex: "#f47983", poem: "桃之夭夭，灼灼其华。", family: "red", sentiment: { energy: 8, valence: 10, chaos: 0 } },

    // --- Blue (Low/Mid Energy, Variable Valence, Low Chaos usually) ---
    { name: "天青", hex: "#77969a", poem: "雨过天青云破处，这般颜色做将来。", family: "blue", sentiment: { energy: 2, valence: 8, chaos: 0 } }, // Ultimate Zen
    { name: "黛蓝", hex: "#41555d", poem: "远山如黛，近水含烟。", family: "blue", sentiment: { energy: 3, valence: 6, chaos: 2 } },
    { name: "群青", hex: "#1772b4", poem: "长空万里，云无留迹。", family: "blue", sentiment: { energy: 5, valence: 8, chaos: 0 } },
    { name: "景泰蓝", hex: "#2775b6", poem: "蓝田日暖玉生烟，锦瑟华年谁与度。", family: "blue", sentiment: { energy: 5, valence: 7, chaos: 4 } }, // Nostalgic
    { name: "宝蓝", hex: "#4b5cc4", poem: "水光潋滟晴方好，山色空蒙雨亦奇。", family: "blue", sentiment: { energy: 6, valence: 8, chaos: 1 } },
    { name: "藏蓝", hex: "#3b2e7e", poem: "明月松间照，清泉石上流。", family: "blue", sentiment: { energy: 4, valence: 7, chaos: 2 } },
    { name: "鸦青", hex: "#424c50", poem: "鸦鸟归巢夕阳斜，枯藤老树昏鸦。", family: "blue", sentiment: { energy: 2, valence: 3, chaos: 6 } }, // Depressed/Complex
    { name: "天渺", hex: "#87a7d6", poem: "天渺渺，云依依，水绕孤村暮。", family: "blue", sentiment: { energy: 3, valence: 7, chaos: 1 } },
    { name: "蔚蓝", hex: "#70f3ff", poem: "海上生明月，天涯共此时。", family: "blue", sentiment: { energy: 6, valence: 9, chaos: 0 } },
    { name: "霁蓝", hex: "#11659a", poem: "林表明霁色，城中增暮寒。", family: "blue", sentiment: { energy: 4, valence: 5, chaos: 3 } },
    { name: "靛青", hex: "#177cb0", poem: "青，取之于蓝，而青于蓝。", family: "blue", sentiment: { energy: 5, valence: 7, chaos: 1 } },
    { name: "星郎", hex: "#8fb2c9", poem: "危楼高百尺，手可摘星辰。", family: "blue", sentiment: { energy: 6, valence: 8, chaos: 0 } },
    { name: "晴山", hex: "#8a9dc1", poem: "江流天地外，山色有无中。", family: "blue", sentiment: { energy: 4, valence: 7, chaos: 1 } },
    { name: "黛螺", hex: "#2f3844", poem: "妆罢低眉问夫婿，画眉深浅入时无。", family: "blue", sentiment: { energy: 3, valence: 6, chaos: 3 } },
    { name: "孔雀蓝", hex: "#0eb83a", poem: "孔雀东南飞，五里一徘徊。", family: "blue", sentiment: { energy: 7, valence: 6, chaos: 5 } }, // Conflicted

    // --- Green (Mid Energy, High Valence, Nature) ---
    { name: "竹青", hex: "#789262", poem: "咬定青山不放松，立根原在破岩中。", family: "green", sentiment: { energy: 5, valence: 7, chaos: 0 } }, // Firm
    { name: "艾绿", hex: "#a4e2c6", poem: "碧艾香蒲处处忙，谁家儿共女，庆端阳。", family: "green", sentiment: { energy: 6, valence: 8, chaos: 0 } },
    { name: "松柏绿", hex: "#21372B", poem: "岁寒，然后知松柏之后凋也。", family: "green", sentiment: { energy: 3, valence: 6, chaos: 1 } },
    { name: "柳黄", hex: "#c9dd22", poem: "柳绿桃红一径斜，东风不惜对梨花。", family: "green", sentiment: { energy: 7, valence: 9, chaos: 0 } },
    { name: "葱倩", hex: "#0eb83a", poem: "天街小雨润如酥，草色遥看近却无。", family: "green", sentiment: { energy: 6, valence: 9, chaos: 0 } },
    { name: "翠微", hex: "#4c8dae", poem: "在此山中，云深不知处。", family: "green", sentiment: { energy: 3, valence: 7, chaos: 2 } }, // Mysterious
    { name: "碧山", hex: "#5dbe8a", poem: "问余何事栖碧山，笑而不答心自闲。", family: "green", sentiment: { energy: 4, valence: 9, chaos: 0 } }, // Zen
    { name: "官绿", hex: "#2a5caa", poem: "春风得意马蹄疾，一日看尽长安花。", family: "green", sentiment: { energy: 8, valence: 9, chaos: 0 } },
    { name: "苔古", hex: "#6e8b74", poem: "苔痕上阶绿，草色入帘青。", family: "green", sentiment: { energy: 2, valence: 6, chaos: 2 } },
    { name: "满庭芳", hex: "#9dbe63", poem: "满庭芳草积，一水护田将绿绕。", family: "green", sentiment: { energy: 5, valence: 8, chaos: 0 } },
    { name: "嫩鹅黄", hex: "#f2e6ce", poem: "最是一年春好处，绝胜烟柳满皇都。", family: "green", sentiment: { energy: 6, valence: 9, chaos: 0 } },
    { name: "千山翠", hex: "#5dbe8a", poem: "千山鸟飞绝，万径人踪灭。", family: "green", sentiment: { energy: 1, valence: 4, chaos: 2 } }, // Lonely

    // --- Yellow/Gold (High Energy, High Valence) ---
    { name: "鹅黄", hex: "#fff143", poem: "鹅黄酒色春酿浓，醉卧花间梦亦香。", family: "yellow", sentiment: { energy: 7, valence: 9, chaos: 0 } },
    { name: "杏黄", hex: "#ffa631", poem: "沾衣欲湿杏花雨，吹面不寒杨柳风。", family: "yellow", sentiment: { energy: 7, valence: 8, chaos: 0 } },
    { name: "赤金", hex: "#f2be45", poem: "金戈铁马，气吞万里如虎。", family: "yellow", sentiment: { energy: 9, valence: 8, chaos: 1 } },
    { name: "秋香", hex: "#d9b611", poem: "冲天香阵透长安，满城尽带黄金甲。", family: "yellow", sentiment: { energy: 8, valence: 8, chaos: 1 } },
    { name: "明黄", hex: "#ffc90c", poem: "日出江花红胜火，春来江水绿如蓝。", family: "yellow", sentiment: { energy: 8, valence: 10, chaos: 0 } },
    { name: "郁金", hex: "#ffd600", poem: "兰陵美酒郁金香，玉碗盛来琥珀光。", family: "gold", sentiment: { energy: 8, valence: 9, chaos: 0 } },
    { name: "枯黄", hex: "#d7b966", poem: "零落成泥碾作尘，只有香如故。", family: "gold", sentiment: { energy: 2, valence: 4, chaos: 4 } }, // Sad/Past
    { name: "琥珀", hex: "#ca6924", poem: "葡萄美酒夜光杯，欲饮琵琶马上催。", family: "gold", sentiment: { energy: 7, valence: 7, chaos: 2 } },
    { name: "黄栌", hex: "#e29c45", poem: "日暮秋风起，萧萧枫树林。", family: "gold", sentiment: { energy: 5, valence: 5, chaos: 3 } }, // Autumn/Sad
    { name: "藤黄", hex: "#ffb61e", poem: "绿鬓朱颜，只恐流年暗中换。", family: "gold", sentiment: { energy: 6, valence: 6, chaos: 4 } }, // Anxiety
    { name: "金盏", hex: "#fccb17", poem: "金盏倒垂帘下，玉梅开尚一枝。", family: "yellow", sentiment: { energy: 7, valence: 8, chaos: 0 } },
    { name: "雄黄", hex: "#e9dd1c", poem: "雄黄酒，蒲叶扇，艾草门前挂。", family: "yellow", sentiment: { energy: 8, valence: 7, chaos: 1 } },
    { name: "蜜合", hex: "#dfc289", poem: "蜜意柔情，似水佳期。", family: "gold", sentiment: { energy: 5, valence: 9, chaos: 0 } },
    { name: "缃色", hex: "#f0c239", poem: "缃裙罗袜，步步生莲。", family: "yellow", sentiment: { energy: 6, valence: 8, chaos: 0 } },
    { name: "昏黄", hex: "#c89b40", poem: "月上柳梢头，人约黄昏后。", family: "gold", sentiment: { energy: 3, valence: 7, chaos: 2 } }, // Romantic/Quiet

    // --- Purple (Mid Energy, Variable Valence, High Chaos/Mystery) ---
    { name: "紫檀", hex: "#4c221b", poem: "紫檀金粉香未销，红袖添香夜读书。", family: "purple", sentiment: { energy: 3, valence: 6, chaos: 4 } },
    { name: "丁香", hex: "#cca4e3", poem: "芭蕉不展丁香结，同向春风各自愁。", family: "purple", sentiment: { energy: 4, valence: 4, chaos: 6 } }, // Melancholy
    { name: "藕荷", hex: "#e4c6d0", poem: "芙蓉不及美人妆，水殿风来珠翠香。", family: "purple", sentiment: { energy: 5, valence: 8, chaos: 1 } },
    { name: "紫罗兰", hex: "#986db2", poem: "等闲识得东风面，万紫千红总是春。", family: "purple", sentiment: { energy: 6, valence: 8, chaos: 2 } },
    { name: "绛紫", hex: "#8c4356", poem: "万紫千红安排著，只待新雷第一声。", family: "purple", sentiment: { energy: 7, valence: 6, chaos: 3 } }, // Expectation
    { name: "青莲", hex: "#801dae", poem: "戒得长天秋月色，心如红藕香残。", family: "purple", sentiment: { energy: 4, valence: 3, chaos: 7 } }, // Spiritual/Complex
    { name: "紫鸢", hex: "#9c58ac", poem: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。", family: "purple", sentiment: { energy: 5, valence: 4, chaos: 6 } }, // Dreamy
    { name: "暮山紫", hex: "#5d3f51", poem: "落霞与孤鹜齐飞，秋水共长天一色。", family: "purple", sentiment: { energy: 2, valence: 7, chaos: 3 } },
    { name: "魏紫", hex: "#801dae", poem: "魏紫姚黄，百花之王。", family: "purple", sentiment: { energy: 8, valence: 9, chaos: 1 } },
    { name: "葛巾", hex: "#7e277c", poem: "采葛采萧，一日不见，如三秋兮。", family: "purple", sentiment: { energy: 5, valence: 3, chaos: 7 } }, // Longing

    // --- Cyan/White (Low Energy, High Valence, Pure) ---
    { name: "月白", hex: "#d6ecf0", poem: "梨花院落溶溶月，柳絮池塘淡淡风。", family: "white", sentiment: { energy: 1, valence: 7, chaos: 0 } },
    { name: "水绿", hex: "#8cc269", poem: "春风又绿江南岸，明月何时照我还。", family: "cyan", sentiment: { energy: 5, valence: 8, chaos: 1 } },
    { name: "碧色", hex: "#1bd1a5", poem: "接天莲叶无穷碧，映日荷花别样红。", family: "cyan", sentiment: { energy: 7, valence: 9, chaos: 0 } },
    { name: "天水碧", hex: "#5aa4ae", poem: "夜凉如水，卧看牵牛织女星。", family: "cyan", sentiment: { energy: 2, valence: 7, chaos: 0 } },
    { name: "缥色", hex: "#7fecad", poem: "缥缈孤鸿影，冷月葬花魂。", family: "cyan", sentiment: { energy: 3, valence: 5, chaos: 4 } }, // Lonely
    { name: "淡霜", hex: "#e7d9d5", poem: "蒹葭苍苍，白露为霜。", family: "white", sentiment: { energy: 1, valence: 5, chaos: 2 } },
    { name: "缟羽", hex: "#eee5e0", poem: "白羽千千，不知何处系乡愁。", family: "white", sentiment: { energy: 2, valence: 5, chaos: 3 } },
    { name: "鸥骨", hex: "#e6e3d5", poem: "鸥鸟忘机，白云无心。", family: "white", sentiment: { energy: 1, valence: 6, chaos: 0 } }, // Zen
    { name: "云水蓝", hex: "#baccd9", poem: "行到水穷处，坐看云起时。", family: "white", sentiment: { energy: 2, valence: 6, chaos: 0 } },
    { name: "碧落", hex: "#a4e2c6", poem: "上穷碧落下黄泉，两处茫茫皆不见。", family: "cyan", sentiment: { energy: 4, valence: 4, chaos: 5 } }, // Lost

    // --- Black/Brown (Low Energy, Variable Valence, High Chaos often) ---
    { name: "墨色", hex: "#161823", poem: "黑云压城城欲摧，甲光向日金鳞开。", family: "black", sentiment: { energy: 8, valence: 2, chaos: 8 } }, // Pressure/Conflict
    { name: "霜色", hex: "#e9f1f6", poem: "月落乌啼霜满天，江枫渔火对愁眠。", family: "white", sentiment: { energy: 1, valence: 3, chaos: 4 } }, // Sad
    { name: "玄青", hex: "#3d3b4f", poem: "天阶夜色凉如水，卧看牵牛织女星。", family: "black", sentiment: { energy: 2, valence: 6, chaos: 2 } },
    { name: "相思灰", hex: "#61649f", poem: "一寸相思一寸灰，蜡炬成灰泪始干。", family: "black", sentiment: { energy: 3, valence: 2, chaos: 7 } }, // Heartbreak
    { name: "鱼肚白", hex: "#fcefe8", poem: "东方渐白，星河欲晓。", family: "white", sentiment: { energy: 3, valence: 8, chaos: 0 } }, // Hope
    { name: "铅灰", hex: "#72777b", poem: "铅华洗尽，珠玑不御。", family: "black", sentiment: { energy: 2, valence: 5, chaos: 1 } },
    { name: "茶色", hex: "#b35c44", poem: "被酒莫惊春睡重，赌书消得泼茶香。", family: "brown", sentiment: { energy: 3, valence: 7, chaos: 0 } },
    { name: "驼色", hex: "#a88462", poem: "大漠孤烟直，长河落日圆。", family: "brown", sentiment: { energy: 4, valence: 6, chaos: 1 } },
    { name: "赭石", hex: "#845a33", poem: "念去去，千里烟波，暮霭沉沉楚天阔。", family: "brown", sentiment: { energy: 3, valence: 4, chaos: 3 } }, // Longing
    { name: "檀色", hex: "#b89485", poem: "檀板金尊，唱彻阳关叠。", family: "brown", sentiment: { energy: 4, valence: 5, chaos: 2 } },
    { name: "苍黄", hex: "#514438", poem: "苍黄反复无穷事，且向花间留晚照。", family: "brown", sentiment: { energy: 3, valence: 4, chaos: 6 } }, // Complicated
    { name: "苍烟", hex: "#5e5343", poem: "大漠孤烟直，长河落日圆。", family: "brown", sentiment: { energy: 2, valence: 5, chaos: 2 } },
    { name: "缁色", hex: "#493131", poem: "素衣化为缁，路歧安可越。", family: "black", sentiment: { energy: 3, valence: 3, chaos: 5 } }, // Lost/Conflict
    { name: "褐衣", hex: "#6e511e", poem: "无端更渡桑干水，却望并州是故乡。", family: "brown", sentiment: { energy: 3, valence: 4, chaos: 4 } },
    { name: "黯黮", hex: "#313131", poem: "黯黮凝尘，香消玉殒。", family: "black", sentiment: { energy: 1, valence: 1, chaos: 9 } }, // Despair
    { name: "山岚", hex: "#637a85", poem: "山岚设色，水月虚空。", family: "black", sentiment: { energy: 2, valence: 5, chaos: 3 } },
    { name: "暮云", hex: "#524b46", poem: "暮云收尽溢清寒，银汉无声转玉盘。", family: "black", sentiment: { energy: 2, valence: 4, chaos: 2 } },
    { name: "沉香", hex: "#815c3a", poem: "沉香燃尽，心字成灰。", family: "brown", sentiment: { energy: 2, valence: 3, chaos: 5 } }  // Burned out
];


function getDistance(c: ChineseColor['sentiment'], target: { energy: number, valence: number, chaos: number }): number {
    return Math.sqrt(
        Math.pow(c.energy - target.energy, 2) +
        Math.pow(c.valence - target.valence, 2) +
        Math.pow(c.chaos - target.chaos, 2)
    );
}

// Function to calculate hex similarity (approximate logic to avoid visually identical results)
// Simplified check using first 3 chars or strict equality if needed
function isVisuallySimilar(hex1: string, hex2: string): boolean {
    return hex1 === hex2;
}

export function getColorsBySentiment(
    inputVector: { energy: number, valence: number, chaos: number },
    recentHexCodes: string[] = [] // History context
): ChineseColor[] {

    // 1. Calculate distance for every color
    const scoredColors = CHINESE_COLORS.map(color => {
        let distance = getDistance(color.sentiment, inputVector);
        let note = "";

        // 2. Apply History Penalty
        // If color was recently used, increase its "distance" (push it away)
        if (recentHexCodes.includes(color.hex)) {
            distance += 100; // Massive penalty for exact duplicate
            note = "(Duplicate)";
        }

        // Bonus: Random jitter to prevent strict deterministic boredom
        distance += (Math.random() * 0.5);

        return { ...color, distance, note };
    });

    // 3. Sort by distance (asc)
    const sorted = scoredColors.sort((a, b) => a.distance - b.distance);

    // 4. Return top 4 matches
    return sorted.slice(0, 4).map(c => ({
        name: c.name,
        hex: c.hex,
        poem: c.poem,
        family: c.family,
        sentiment: c.sentiment
    }));
}

// Helper to check luminance for text contrast
export function getLuminance(hex: string): number {
    const c = hex.substring(1);      // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >> 8) & 0xff;  // extract green
    const b = (rgb >> 0) & 0xff;  // extract blue

    // Standard luma formula per ITU-R BT.709
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
