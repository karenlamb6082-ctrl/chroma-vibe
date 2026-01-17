// ... Interface export (Unchanged) ...
export interface SentimentScore {
    valence: number;
    energy: number;
    isConflict?: boolean;
    specialCategory?: 'nostalgia' | 'anxiety' | 'celebration' | 'zen';
}

const WORD_SCORES: Record<string, SentimentScore & { category?: string }> = {
    // ... Previous words ...
    happy: { valence: 0.8, energy: 0.8 },
    excited: { valence: 0.9, energy: 0.9 },
    sad: { valence: -0.8, energy: 0.2 },
    angry: { valence: -0.8, energy: 0.9 },
    calm: { valence: 0.8, energy: 0.2 },
    love: { valence: 0.9, energy: 0.7 },
    tired: { valence: -0.4, energy: 0.1 },
    push: { valence: 0.4, energy: 0.9 },
    risk: { valence: 0.1, energy: 0.8 },
    full: { valence: 0.2, energy: 0.7 },
    go: { valence: 0.5, energy: 0.8 },
    fast: { valence: 0.3, energy: 0.8 },
    limit: { valence: 0.1, energy: 0.9 },
    hard: { valence: -0.1, energy: 0.7 },

    // ... Chinese Basics ...
    开心: { valence: 0.8, energy: 0.7 },
    难过: { valence: -0.7, energy: 0.3 },
    生气: { valence: -0.8, energy: 0.8 },
    平静: { valence: 0.7, energy: 0.2 },
    努力: { valence: 0.6, energy: 0.8 },
    奋斗: { valence: 0.6, energy: 0.8 },
    冲: { valence: 0.5, energy: 0.9 },
    美: { valence: 0.9, energy: 0.6 },

    // Dilemma
    放弃: { valence: -0.6, energy: 0.3 },
    继续: { valence: 0.6, energy: 0.7 },
    选择: { valence: 0.0, energy: 0.6 },
    犹豫: { valence: -0.3, energy: 0.4 },

    // Sorrow / Coldness / Disappointment (New Fix)
    寒心: { valence: -0.9, energy: 0.2 }, // Very negative, cold (low energy)
    心寒: { valence: -0.9, energy: 0.2 },
    失望: { valence: -0.7, energy: 0.3 },
    绝望: { valence: -1.0, energy: 0.1 },
    冷: { valence: -0.5, energy: 0.2 },
    凉: { valence: -0.4, energy: 0.2 },
    痛: { valence: -0.8, energy: 0.6 }, // Pain is active
    伤心: { valence: -0.8, energy: 0.3 },
    累: { valence: -0.6, energy: 0.2 },

    // Nostalgia / Memory
    memory: { valence: 0.5, energy: 0.3, category: 'nostalgia' },
    past: { valence: -0.2, energy: 0.2, category: 'nostalgia' },
    childhood: { valence: 0.7, energy: 0.4, category: 'nostalgia' },
    remember: { valence: 0.3, energy: 0.3, category: 'nostalgia' },
    old: { valence: 0.0, energy: 0.2, category: 'nostalgia' },
    回忆: { valence: 0.4, energy: 0.3, category: 'nostalgia' },
    过去: { valence: -0.1, energy: 0.2, category: 'nostalgia' },
    童年: { valence: 0.8, energy: 0.5, category: 'nostalgia' },
    昨天: { valence: 0.0, energy: 0.2, category: 'nostalgia' },
    想念: { valence: 0.2, energy: 0.4, category: 'nostalgia' },
    怀旧: { valence: 0.3, energy: 0.2, category: 'nostalgia' },

    // Anxiety / Pressure
    nervous: { valence: -0.5, energy: 0.8, category: 'anxiety' },
    worry: { valence: -0.6, energy: 0.6, category: 'anxiety' },
    scare: { valence: -0.8, energy: 0.8, category: 'anxiety' },
    panic: { valence: -0.9, energy: 0.9, category: 'anxiety' },
    pressure: { valence: -0.4, energy: 0.7, category: 'anxiety' },
    tight: { valence: -0.3, energy: 0.6, category: 'anxiety' },
    busy: { valence: -0.2, energy: 0.8, category: 'anxiety' },
    紧张: { valence: -0.5, energy: 0.8, category: 'anxiety' },
    担心: { valence: -0.6, energy: 0.6, category: 'anxiety' },
    害怕: { valence: -0.7, energy: 0.7, category: 'anxiety' },
    压力: { valence: -0.5, energy: 0.7, category: 'anxiety' },
    慌: { valence: -0.6, energy: 0.8, category: 'anxiety' },
    忙: { valence: -0.3, energy: 0.8, category: 'anxiety' },

    // Zen / Tea
    tea: { valence: 0.6, energy: 0.2, category: 'zen' },
    zen: { valence: 0.5, energy: 0.1, category: 'zen' },
    empty: { valence: 0.0, energy: 0.1, category: 'zen' },
    quiet: { valence: 0.5, energy: 0.2, category: 'zen' },
    meditate: { valence: 0.6, energy: 0.1, category: 'zen' },
    茶: { valence: 0.6, energy: 0.2, category: 'zen' },
    冥想: { valence: 0.5, energy: 0.1, category: 'zen' },
    空: { valence: 0.0, energy: 0.1, category: 'zen' },
    静: { valence: 0.5, energy: 0.2, category: 'zen' },
    无: { valence: 0.0, energy: 0.1, category: 'zen' },

    // Celebration
    celebrate: { valence: 0.9, energy: 0.8, category: 'celebration' },
    party: { valence: 0.8, energy: 0.9, category: 'celebration' },
    cheers: { valence: 0.9, energy: 0.8, category: 'celebration' },
    festival: { valence: 0.8, energy: 0.7, category: 'celebration' },
    newyear: { valence: 0.8, energy: 0.7, category: 'celebration' },
    win: { valence: 0.9, energy: 0.9, category: 'celebration' },
    庆祝: { valence: 0.9, energy: 0.8, category: 'celebration' },
    聚会: { valence: 0.8, energy: 0.8, category: 'celebration' },
    干杯: { valence: 0.9, energy: 0.8, category: 'celebration' },
    节日: { valence: 0.8, energy: 0.7, category: 'celebration' },
    过年: { valence: 0.9, energy: 0.8, category: 'celebration' },
    // ... Existing words ...

    // Nuanced Emotions / Mixed
    bittersweet: { valence: 0.1, energy: 0.4, category: 'nostalgia' },
    yearning: { valence: -0.1, energy: 0.6, category: 'nostalgia' },
    melancholy: { valence: -0.4, energy: 0.3 },
    grateful: { valence: 0.8, energy: 0.5 },
    hope: { valence: 0.7, energy: 0.6 },
    confused: { valence: -0.2, energy: 0.5 },
    lost: { valence: -0.5, energy: 0.3 },
    free: { valence: 0.8, energy: 0.8 },

    // Chinese Expansion - Nuanced
    迷茫: { valence: -0.3, energy: 0.4 },
    释怀: { valence: 0.6, energy: 0.4, category: 'zen' },
    期待: { valence: 0.7, energy: 0.7 },
    遗憾: { valence: -0.5, energy: 0.3, category: 'nostalgia' },
    疲惫: { valence: -0.6, energy: 0.2 },
    心累: { valence: -0.7, energy: 0.2 },
    想家: { valence: -0.2, energy: 0.4, category: 'nostalgia' },
    孤独: { valence: -0.6, energy: 0.2 },
    自在: { valence: 0.8, energy: 0.5, category: 'zen' },
    惬意: { valence: 0.8, energy: 0.3, category: 'zen' },
    纠结: { valence: -0.3, energy: 0.6 },
    烦躁: { valence: -0.5, energy: 0.8, category: 'anxiety' },
    委屈: { valence: -0.7, energy: 0.5 },
    感动: { valence: 0.8, energy: 0.6 },
    珍贵: { valence: 0.9, energy: 0.5 },
    不舒服: { valence: -0.6, energy: 0.3 },
    难受: { valence: -0.7, energy: 0.3 },
    舒服: { valence: 0.7, energy: 0.4, category: 'zen' },
    痛苦: { valence: -0.8, energy: 0.7 }, // High energy pain
    刺痛: { valence: -0.7, energy: 0.8 },

    // Nature / Ambience
    rain: { valence: -0.1, energy: 0.3 },
    sun: { valence: 0.8, energy: 0.8 },
    cloud: { valence: 0.5, energy: 0.2 },
    wind: { valence: 0.1, energy: 0.5 },
    flower: { valence: 0.8, energy: 0.4 },
    forest: { valence: 0.6, energy: 0.3, category: 'zen' },
    ocean: { valence: 0.5, energy: 0.6 },
    star: { valence: 0.7, energy: 0.2 },
    moon: { valence: 0.5, energy: 0.1, category: 'nostalgia' },
    雨: { valence: -0.2, energy: 0.3 },
    雪: { valence: 0.2, energy: 0.2, category: 'zen' },
    风: { valence: 0.1, energy: 0.5 },
    花: { valence: 0.8, energy: 0.4 },
    树: { valence: 0.6, energy: 0.3 },
    海: { valence: 0.5, energy: 0.6 },
    山: { valence: 0.6, energy: 0.5, category: 'zen' },
    星: { valence: 0.8, energy: 0.2 },
    月: { valence: 0.5, energy: 0.2, category: 'nostalgia' },
    夜: { valence: 0.1, energy: 0.1 },
    晨: { valence: 0.7, energy: 0.7 },
};

// ... analyzeSentiment (Unchanged) ...
export function analyzeSentiment(text: string): SentimentScore {
    let totalValence = 0;
    let totalEnergy = 0; // Fixed: Start at 0 for accurate average
    let count = 0;
    let hasPos = false;
    let hasNeg = false;
    let isChoice = false;
    const categoryCounts: Record<string, number> = { nostalgia: 0, anxiety: 0, celebration: 0, zen: 0 };
    const lowerText = text.toLowerCase();

    if (text.includes("还是") || text.includes("选择") || text.includes("or") || text.includes("?")) {
        isChoice = true;
    }
    Object.keys(WORD_SCORES).forEach(key => {
        const isChinese = /[\u4e00-\u9fa5]/.test(key);
        const matched = isChinese ? text.includes(key) : lowerText.includes(key);
        if (matched) {
            const s = WORD_SCORES[key];
            totalValence += s.valence;
            totalEnergy += s.energy;
            count++;
            if (s.valence > 0.4) hasPos = true;
            if (s.valence < -0.4) hasNeg = true;
            if (s.category) categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
        }
    });
    if (count === 0) return { valence: 0, energy: 0.5 }; // Default if no words found
    if (text.includes("阳光") || text.includes("Sun")) totalEnergy = Math.max(totalEnergy, 0.6 * count);

    let dominantCategory: 'nostalgia' | 'anxiety' | 'celebration' | 'zen' | undefined;
    let maxCatCount = 0;
    Object.entries(categoryCounts).forEach(([cat, c]) => {
        if (c > maxCatCount) {
            maxCatCount = c;
            dominantCategory = cat as any;
        }
    });
    return {
        valence: Math.max(-1, Math.min(1, totalValence / count)),
        energy: Math.max(0, Math.min(1, totalEnergy / Math.max(1, count))),
        isConflict: ((hasPos && hasNeg) || isChoice) && !dominantCategory,
        specialCategory: dominantCategory
    };
}

// ... helper pick (Unchanged) ...
function pick(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getDiagnosis(score: SentimentScore): string {
    const { valence, energy, isConflict, specialCategory } = score;

    // 1. Special Categories Priority
    if (specialCategory === 'nostalgia') {
        return pick([
            "往事如烟，思绪仿佛被带回了某段旧时光。",
            "旧日时光的温存，在心头泛起层层涟漪。",
            "一种淡淡的怀旧感，温暖而又略带感伤。",
            "时光倒流，记忆中的画面渐渐清晰起来。",
            "那些回不去的岁月，如今都化作了温柔的注脚。",
            "岁月忽已晚，山河已秋，唯有记忆长存。",
            "故乡的云，旧日的歌，都在此刻涌上心头。",
            "那一抹旧时光的余晖，温暖了整个当下。",
            "时间带走了容颜，却留下了最珍贵的怀念。"
        ]);
    }
    if (specialCategory === 'anxiety') {
        return pick([
            "能感受到您此刻紧绷的神经，似乎有着无形的重担。",
            "哪怕风雨欲来，也请记得深呼吸，给自己一点空间。",
            "焦虑如乱麻，但请相信，一切终将理出头绪。",
            "暂且停下来吧，不必急着赶路，心安即是归处。",
            "在这纷扰的世界里，允许自己暂时的脆弱与停歇。",
            "不要被未知的恐惧裹挟，相信您有足够的力量。",
            "慢慢来，比较快。无需时刻紧绷。",
            "每一次深呼吸，都是对当下的一次温柔拥抱。",
            "即使是乌云密布，云层之上依然有阳光。"
        ]);
    }
    if (specialCategory === 'zen') {
        return pick([
            "心如止水，万籁俱寂，进入了一种空灵的状态。",
            "一期一会，这杯茶的香气，正是当下的味道。",
            "放空心灵，与天地精神独往来。",
            "无欲无求，自在圆满。",
            "见山是山，见水是水，回归本真的宁静。",
            "本来无一物，何处惹尘埃。",
            "风来疏竹，风过而竹不留声。",
            "在这片刻的宁静中，听见花开的声音。",
            "心无挂碍，便是人间好时节。"
        ]);
    }
    if (specialCategory === 'celebration') {
        return pick([
            "锣鼓喧天，喜气洋洋，这是属于您的欢庆时刻。",
            "满心欢喜，忍不住要与世界分享这份快乐。",
            "举杯共饮，为了这难得的相聚与胜利。",
            "快乐如烟花般绽放，照亮了整个夜空。",
            "这一刻的荣耀与喜悦，值得被永远铭记。",
            "人生得意须尽欢，莫使金樽空对月。",
            "所有的努力，都在此刻化作了璀璨的烟火。",
            "这不仅是胜利，更是对自我的最佳奖赏。",
            "让欢笑声传得再远一些，今夜无人入眠。"
        ]);
    }

    // 2. Conflict/Dilemma
    if (isConflict) {
        return pick([
            "站在十字路口，内心正经历着一场无声的博弈。",
            "彷徨与希望交织，似乎正在做一个艰难的决定。",
            "在坚持与放下之间徘徊，试图听清内心的声音。",
            "心中有两个声音在对话，寻找着那个唯一的答案。",
            "也许答案并不重要，重要的是寻找答案的过程。"
        ]);
    }

    // 3. Fallback Standard Logic
    // Love/Warmth
    if (valence > 0.6 && energy > 0.4 && energy < 0.8) {
        return pick([
            "感受到一种温柔的爱意在流淌，温暖而美好。",
            "心底最柔软的地方被触动，满是温情。",
            "如沐春风般的惬意，充满着爱与被爱的感动。",
            "这是一种被爱包裹的安全感，甜蜜而踏实。",
            "世界因为这份爱意，变得分外温柔。",
            "愿您被这世界温柔以待，眼中常含笑意。",
            "爱是疲惫生活中的英雄梦想，您已拥有。",
            "心中有爱，行路不难，温暖常伴左右。",
            "这份柔软的情愫，是抵御寒冬最好的衣裳。"
        ]);
    }

    // High Energy
    if (energy > 0.7) {
        if (valence > 0.4) return pick([
            "感觉到您内心澎湃，如烈火烹油，充满向上的力量。",
            "意气风发，仿佛整个世界都在为您让路。",
            "满怀希冀与热情，正准备拥抱广阔的天地。",
            "这是一股不竭的动力，推动着您不断超越自我。",
            "热血沸腾，正是大展宏图的好时机。",
            "长风破浪会有时，直挂云帆济沧海。",
            "这股蓬勃的生命力，将带领您去往更高的地方。",
            "星光不问赶路人，时光不负有心人。",
            "既然选择了远方，便只顾风雨兼程。"
        ]);
        if (valence < -0.4) return pick([
            "察觉到一种激烈的动荡，似乎有场风暴正在您心中积聚。",
            "愤怒或激越的情绪在翻涌，急需释放。",
            "难以平息的波澜，在胸中激荡。",
            "如同被困的野兽，内心充满了焦躁与不安。",
            "这股强烈的情绪能量，通过色彩也许能找到宣泄口。"
        ]);
        return pick([
            "面对未知，您依然选择了勇敢前行。",
            "感受到一种一往无前的决心，您似乎正全力以赴。",
            "虽然前路未卜，但您心中的火焰已然点燃。",
            "坚定不移的步伐，正在通往您心中的彼岸。",
            "不问西东，只顾风雨兼程的执着。"
        ]);
    }
    // Low Energy (Peace/Sadness)
    else if (energy < 0.35) {
        if (valence > 0.3) return pick([
            "您现在心如止水，享受着难得的静谧时光。",
            "偷得浮生半日闲，内心正处于一种松弛的状态。",
            "淡然处之，看庭前花开花落，云卷云舒。",
            "此刻的宁静，比任何喧嚣都更有力量。",
            "像午后的猫一样慵懒，享受这份无所事事。",
            "偷得浮生半日闲，也是一种难得的智慧。",
            "什么都不做，本身就是一种奢侈的休息。",
            "让时间慢下来，听一听风经过的声音。",
            "在这喧嚣的尘世中，守住内心的这一方净土。"
        ]);
        if (valence < -0.3) return pick([
            "感受到一丝疲惫与低落，仿佛独自走在无人的雨巷。",
            "情绪低沉，或许需要一个安静的角落独自疗伤。",
            "有些许失落涌上心头，世界仿佛都安静了下来。",
            "这一刻的孤独，也许是与自己对话的最好时机。",
            "悲伤如潮水般退去后，留下的只有沙滩上的印记。",
            "心如死灰，也许正是重生的开始。", // Added for "寒心" context
            "这种寒意，让人无比清醒。",
            "允许自己悲伤，因为那也是生命的一部分。",
            "哭出来也没关系，雨过天晴后会有彩虹。",
            "虽然现在很痛，但时间的流水终将冲淡一切。",
            "每一个长夜终将过去，黎明总会准时到来。"
        ]);
        return pick([
            "您的气息平稳而深沉，正处于一种内省的状态。",
            "一种由于思考而带来的沉静，不悲不喜。",
            "沉静如渊，在沉默中积蓄着力量。",
            "在大音希声中，听见自己内心的回响。",
            "像深海一样静谧，包容着一切。"
        ]);
    }
    // Mid Energy (Daily/Mixed)
    else {
        if (valence > 0.5) return pick([
            "平和而温暖，像午后的阳光洒在肩头。",
            "一种淡淡的喜悦，不张扬却很实在。",
            "心情舒畅，若有若无的惬意。",
            "这就是生活原本的样子，简单而美好。",
            "微风拂面，一切都显得那么从容。",
            "没有什么惊天动地，却有着最真实的幸福感。"
        ]);
        if (valence < -0.5) return pick([
            "有些许忧郁在心头萦绕，挥之不去。",
            "一种莫名的惆怅，仿佛想起了往事。",
            "心事重重，欲语还休。",
            "并不是悲伤，只是觉得心里空落落的。",
            "像是在等待什么，又像是在告别什么。",
            "思绪有些纷乱，像被风吹皱的一池春水。"
        ]);
        // Default Fallback
        return pick([
            "情绪如流水般平稳，波澜不惊，自在随心。",
            "一切都刚刚好，平平淡淡才是真。",
            "在不确定中寻找着平衡，静观其变。",
            "山是山，水是水，看待世界多了一份淡然。",
            "没有太多的波澜，正适合静下心来读一本书。",
            "像是一阵路过的风，来去自由，不留痕迹。",
            "处于一种微妙的平衡态，既不急躁也不懈怠。",
            "世界在这一刻变得很安静，只剩下呼吸的声音。",
            "与其说是平淡，不如说是一种难得的留白。",
            "或许这就是所谓的“放空”，让思绪自由飘荡。",
            "像是在看一场不关己的电影，内心充满了旁观者的清醒。",
            "不以物喜，不以己悲，保持着一份超然。",
            "闲看庭前花开花落，漫随天外云卷云舒。",
            "在这平凡的一天里，藏着生活的真意。",
            "无惊无险，又是一年好风景。",
            "心宽一寸，路宽一丈，自在随心。"
        ]);
    }
}
