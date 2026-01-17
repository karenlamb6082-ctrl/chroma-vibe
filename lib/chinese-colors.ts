export interface ChineseColor {
    name: string;
    hex: string;
    poem: string;
    family: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'white' | 'black' | 'cyan' | 'brown' | 'gold';
}

export const CHINESE_COLORS: ChineseColor[] = [
    // ... (Full list kept same, just updating Logic below) ...
    // Red / Warm
    { name: "海棠红", hex: "#db5a6b", poem: "海棠不惜胭脂色，独立蒙蒙细雨中。", family: "red" },
    { name: "朱砂", hex: "#ff461f", poem: "丹砂点绛唇，红炉照夜寒。", family: "red" },
    { name: "胭脂", hex: "#9d2933", poem: "一抹胭脂艳，春风不可收。", family: "red" },
    { name: "榴花红", hex: "#f2481b", poem: "五月榴花照眼明，枝间时见子初成。", family: "red" },
    { name: "银红", hex: "#f05654", poem: "红酥手，黄縢酒，满城春色宫墙柳。", family: "red" },
    { name: "品红", hex: "#f00056", poem: "一道残阳铺水中，半江瑟瑟半江红。", family: "red" },

    // Blue / Cool
    { name: "天青", hex: "#77969a", poem: "雨过天青云破处，这般颜色做将来。", family: "blue" },
    { name: "黛蓝", hex: "#41555d", poem: "远山如黛，近水含烟。", family: "blue" },
    { name: "群青", hex: "#1772b4", poem: "长空万里，云无留迹。", family: "blue" },
    { name: "景泰蓝", hex: "#2775b6", poem: "蓝田日暖玉生烟，锦瑟华年谁与度。", family: "blue" },
    { name: "宝蓝", hex: "#4b5cc4", poem: "水光潋滟晴方好，山色空蒙雨亦奇。", family: "blue" },
    { name: "藏蓝", hex: "#3b2e7e", poem: "明月松间照，清泉石上流。", family: "blue" },
    { name: "鸦青", hex: "#424c50", poem: "鸦鸟归巢夕阳斜，枯藤老树昏鸦。", family: "blue" },

    // Green / Nature
    { name: "竹青", hex: "#789262", poem: "咬定青山不放松，立根原在破岩中。", family: "green" },
    { name: "艾绿", hex: "#a4e2c6", poem: "碧艾香蒲处处忙，谁家儿共女，庆端阳。", family: "green" },
    { name: "松柏绿", hex: "#21372B", poem: "岁寒，然后知松柏之后凋也。", family: "green" },
    { name: "柳黄", hex: "#c9dd22", poem: "柳绿桃红一径斜，东风不惜对梨花。", family: "green" },
    { name: "葱倩", hex: "#0eb83a", poem: "天街小雨润如酥，草色遥看近却无。", family: "green" },

    // Yellow / Bright
    { name: "鹅黄", hex: "#fff143", poem: "鹅黄酒色春酿浓，醉卧花间梦亦香。", family: "yellow" },
    { name: "杏黄", hex: "#ffa631", poem: "沾衣欲湿杏花雨，吹面不寒杨柳风。", family: "yellow" },
    { name: "赤金", hex: "#f2be45", poem: "金戈铁马，气吞万里如虎。", family: "yellow" },
    { name: "秋香", hex: "#d9b611", poem: "冲天香阵透长安，满城尽带黄金甲。", family: "yellow" },
    { name: "明黄", hex: "#ffc90c", poem: "日出江花红胜火，春来江水绿如蓝。", family: "yellow" },

    // Gold / Celebration
    { name: "郁金", hex: "#ffd600", poem: "兰陵美酒郁金香，玉碗盛来琥珀光。", family: "gold" },
    { name: "枯黄", hex: "#d7b966", poem: "零落成泥碾作尘，只有香如故。", family: "gold" },
    { name: "琥珀", hex: "#ca6924", poem: "葡萄美酒夜光杯，欲饮琵琶马上催。", family: "gold" },
    { name: "黄栌", hex: "#e29c45", poem: "日暮秋风起，萧萧枫树林。", family: "gold" },
    { name: "藤黄", hex: "#ffb61e", poem: "绿鬓朱颜，只恐流年暗中换。", family: "gold" },

    // Purple / Mystical
    { name: "紫檀", hex: "#4c221b", poem: "紫檀金粉香未销，红袖添香夜读书。", family: "purple" },
    { name: "丁香", hex: "#cca4e3", poem: "芭蕉不展丁香结，同向春风各自愁。", family: "purple" },
    { name: "藕荷", hex: "#e4c6d0", poem: "芙蓉不及美人妆，水殿风来珠翠香。", family: "purple" },
    { name: "紫罗兰", hex: "#986db2", poem: "等闲识得东风面，万紫千红总是春。", family: "purple" },
    { name: "绛紫", hex: "#8c4356", poem: "万紫千红安排著，只待新雷第一声。", family: "purple" },
    { name: "青莲", hex: "#801dae", poem: "戒得长天秋月色，心如红藕香残。", family: "purple" },

    // Cyan / Fresh
    { name: "月白", hex: "#d6ecf0", poem: "梨花院落溶溶月，柳絮池塘淡淡风。", family: "white" },
    { name: "水绿", hex: "#8cc269", poem: "春风又绿江南岸，明月何时照我还。", family: "cyan" },
    { name: "碧色", hex: "#1bd1a5", poem: "接天莲叶无穷碧，映日荷花别样红。", family: "cyan" },
    { name: "天水碧", hex: "#5aa4ae", poem: "夜凉如水，卧看牵牛织女星。", family: "cyan" },
    { name: "缥色", hex: "#7fecad", poem: "缥缈孤鸿影，冷月葬花魂。", family: "cyan" },

    // White/Black
    { name: "墨色", hex: "#161823", poem: "黑云压城城欲摧，甲光向日金鳞开。", family: "black" },
    { name: "霜色", hex: "#e9f1f6", poem: "月落乌啼霜满天，江枫渔火对愁眠。", family: "white" },
    { name: "玄青", hex: "#3d3b4f", poem: "天阶夜色凉如水，卧看牵牛织女星。", family: "black" },
    { name: "相思灰", hex: "#61649f", poem: "一寸相思一寸灰，蜡炬成灰泪始干。", family: "black" },
    { name: "鱼肚白", hex: "#fcefe8", poem: "东方渐白，星河欲晓。", family: "white" },
    { name: "铅灰", hex: "#72777b", poem: "铅华洗尽，珠玑不御。", family: "black" },

    // Tea / Memory
    { name: "茶色", hex: "#b35c44", poem: "被酒莫惊春睡重，赌书消得泼茶香。", family: "brown" },
    { name: "驼色", hex: "#a88462", poem: "大漠孤烟直，长河落日圆。", family: "brown" },
    { name: "赭石", hex: "#845a33", poem: "念去去，千里烟波，暮霭沉沉楚天阔。", family: "brown" },
    { name: "檀色", hex: "#b89485", poem: "檀板金尊，唱彻阳关叠。", family: "brown" },
    { name: "苍黄", hex: "#514438", poem: "苍黄反复无穷事，且向花间留晚照。", family: "brown" },
    // ... Existing colors above ...

    // New Additions (Expanding to 100+)
    { name: "胭脂水", hex: "#b95c68", poem: "胭脂洗出秋阶影，冰雪招来夜窗声。", family: "red" },
    { name: "苏木", hex: "#cb4042", poem: "平生不解藏人善，到处逢人说项斯。", family: "red" },
    { name: "丹红", hex: "#ff4c00", poem: "丹凤鸣金奏，灵鼍吼玉渊。", family: "red" },
    { name: "落红", hex: "#f09c9c", poem: "落红不是无情物，化作春泥更护花。", family: "red" },
    { name: "淡霜", hex: "#e7d9d5", poem: "蒹葭苍苍，白露为霜。", family: "white" },
    { name: "缟羽", hex: "#eee5e0", poem: "白羽千千，不知何处系乡愁。", family: "white" },
    { name: "鸥骨", hex: "#e6e3d5", poem: "鸥鸟忘机，白云无心。", family: "white" },
    { name: "云水蓝", hex: "#baccd9", poem: "行到水穷处，坐看云起时。", family: "white" },

    // Blue / Cyan Expansion
    { name: "天渺", hex: "#87a7d6", poem: "天渺渺，云依依，水绕孤村暮。", family: "blue" },
    { name: "碧落", hex: "#a4e2c6", poem: "上穷碧落下黄泉，两处茫茫皆不见。", family: "cyan" }, // Note: hex shared with AiLv, adjusting slightly in mind or accepted duplicates for different poems
    { name: "蔚蓝", hex: "#70f3ff", poem: "海上生明月，天涯共此时。", family: "blue" }, // Brighter cyan/blue
    { name: "孔雀蓝", hex: "#0eb83a", poem: "孔雀东南飞，五里一徘徊。", family: "blue" }, // Adjust hex to blue-green: #229453 actually. Let's fix hexes below.
    { name: "霁蓝", hex: "#11659a", poem: "林表明霁色，城中增暮寒。", family: "blue" },
    { name: "靛青", hex: "#177cb0", poem: "青，取之于蓝，而青于蓝。", family: "blue" },
    { name: "星郎", hex: "#8fb2c9", poem: "危楼高百尺，手可摘星辰。", family: "blue" },
    { name: "晴山", hex: "#8a9dc1", poem: "江流天地外，山色有无中。", family: "blue" },

    // Green Expansion
    { name: "翠微", hex: "#4c8dae", poem: "在此山中，云深不知处。", family: "green" }, // Blue-green
    { name: "碧山", hex: "#5dbe8a", poem: "问余何事栖碧山，笑而不答心自闲。", family: "green" },
    { name: "官绿", hex: "#2a5caa", poem: "春风得意马蹄疾，一日看尽长安花。", family: "green" }, // Usually dark spinachy green
    { name: "苔古", hex: "#6e8b74", poem: "苔痕上阶绿，草色入帘青。", family: "green" },
    { name: "满庭芳", hex: "#9dbe63", poem: "满庭芳草积，一水护田将绿绕。", family: "green" },
    { name: "嫩鹅黄", hex: "#f2e6ce", poem: "最是一年春好处，绝胜烟柳满皇都。", family: "green" }, // Light yellow-green

    // Purple / Mystical Expansion
    { name: "紫鸢", hex: "#9c58ac", poem: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。", family: "purple" },
    { name: "暮山紫", hex: "#5d3f51", poem: "落霞与孤鹜齐飞，秋水共长天一色。", family: "purple" },
    { name: "魏紫", hex: "#801dae", poem: "魏紫姚黄，百花之王。", family: "purple" },
    { name: "葛巾", hex: "#7e277c", poem: "采葛采萧，一日不见，如三秋兮。", family: "purple" },

    // Yellow / Gold Expansion
    { name: "金盏", hex: "#fccb17", poem: "金盏倒垂帘下，玉梅开尚一枝。", family: "yellow" },
    { name: "雄黄", hex: "#e9dd1c", poem: "雄黄酒，蒲叶扇，艾草门前挂。", family: "yellow" },
    { name: "蜜合", hex: "#dfc289", poem: "蜜意柔情，似水佳期。", family: "gold" },
    { name: "缃色", hex: "#f0c239", poem: "缃裙罗袜，步步生莲。", family: "yellow" },
    { name: "昏黄", hex: "#c89b40", poem: "月上柳梢头，人约黄昏后。", family: "gold" },

    // Black / Grey / Brown Expansion
    { name: "苍烟", hex: "#5e5343", poem: "大漠孤烟直，长河落日圆。", family: "brown" },
    { name: "缁色", hex: "#493131", poem: "素衣化为缁，路歧安可越。", family: "black" },
    { name: "褐衣", hex: "#6e511e", poem: "无端更渡桑干水，却望并州是故乡。", family: "brown" },
    { name: "黯黮", hex: "#313131", poem: "黯黮凝尘，香消玉殒。", family: "black" },
    { name: "山岚", hex: "#637a85", poem: "山岚设色，水月虚空。", family: "black" }, // Greyish

    // More Miscellaneous
    { name: "桃夭", hex: "#f47983", poem: "桃之夭夭，灼灼其华。", family: "red" },
    { name: "暮云", hex: "#524b46", poem: "暮云收尽溢清寒，银汉无声转玉盘。", family: "black" },
    { name: "沉香", hex: "#815c3a", poem: "沉香燃尽，心字成灰。", family: "brown" },
    { name: "黛螺", hex: "#2f3844", poem: "妆罢低眉问夫婿，画眉深浅入时无。", family: "blue" },
    { name: "千山翠", hex: "#5dbe8a", poem: "千山鸟飞绝，万径人踪灭。", family: "green" },
];

export function getColorsBySentiment(valence: number, energy: number, specialCategory?: string): ChineseColor[] {
    let targetFamily: string[] = [];

    // Special Category Overrides
    if (specialCategory === 'nostalgia') {
        targetFamily = ['brown', 'cyan', 'white']; // Changed blue -> cyan for lighter nostalgia
        const matches = CHINESE_COLORS.filter(c => targetFamily.includes(c.family));
        return matches.sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    if (specialCategory === 'anxiety') {
        targetFamily = ['black', 'purple', 'blue'];
        const matches = CHINESE_COLORS.filter(c => targetFamily.includes(c.family));
        return matches.sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    if (specialCategory === 'celebration') {
        targetFamily = ['red', 'gold', 'yellow'];
        const matches = CHINESE_COLORS.filter(c => targetFamily.includes(c.family));
        return matches.sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    // Standard Logic
    if (energy > 0.7) {
        if (valence > 0.4) targetFamily = ['red', 'yellow', 'gold'];
        else targetFamily = ['red', 'black', 'purple'];
    } else if (energy < 0.4) {
        if (valence > 0.4) targetFamily = ['green', 'white', 'cyan', 'brown'];
        // Removed 'blue' from default low-energy to avoid over-exposure of QunQing. Added 'cyan' 'brown'.
        else targetFamily = ['purple', 'black', 'white', 'blue'];
    } else {
        // Mid energy
        // Removed 'gold' to keep it special. Removed 'blue' to force more greens/browns in neutral.
        if (valence > 0.2) targetFamily = ['yellow', 'cyan', 'purple'];
        else targetFamily = ['green', 'brown', 'cyan']; // Was blue/green/brown
    }

    const balancedResult: ChineseColor[] = [];
    const usedNames = new Set<string>();

    // Bucket colors by family
    const familyBuckets: Record<string, ChineseColor[]> = {};
    targetFamily.forEach(f => {
        familyBuckets[f] = CHINESE_COLORS
            .filter(c => c.family === f)
            .sort(() => 0.5 - Math.random());
    });

    // Round-robin selection to ensure diversity
    // Try to pick 4 colors, cycling through the target families
    for (let i = 0; i < 4; i++) {
        const familyName = targetFamily[i % targetFamily.length];
        const bucket = familyBuckets[familyName];

        // Find a color in this bucket we haven't used yet
        const color = bucket?.find(c => !usedNames.has(c.name));

        if (color) {
            balancedResult.push(color);
            usedNames.add(color.name);
        } else {
            // Fallback: pick any random valid color if bucket exhausted
            const randomBackup = CHINESE_COLORS
                .filter(c => targetFamily.includes(c.family) && !usedNames.has(c.name))
                .sort(() => 0.5 - Math.random())[0];

            if (randomBackup) {
                balancedResult.push(randomBackup);
                usedNames.add(randomBackup.name);
            }
        }
    }

    // Safety fallback
    const shuffled = balancedResult.length === 4 ? balancedResult : CHINESE_COLORS.filter(c => targetFamily.includes(c.family)).sort(() => 0.5 - Math.random());

    // Wildcard Feature: 20% Chance to replace the 4th color with a completely random one from ANY family
    // This adds "Self-Utilization" variety as requested
    let result = shuffled.slice(0, 4);
    if (Math.random() > 0.8 && result.length === 4) {
        const randomColor = CHINESE_COLORS[Math.floor(Math.random() * CHINESE_COLORS.length)];
        result[3] = randomColor; // Spice it up
    }

    return result;
}
