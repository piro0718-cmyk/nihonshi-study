const questions = [
  {
    era: "鎌倉時代",
    q: "1274年に起きた元の最初の襲来を何という？",
    choices: ["文永の役", "弘安の役", "承久の乱", "平治の乱"],
    answer: 0,
    explanation: "1274年が文永の役、1281年が弘安の役です。この2回をまとめて元寇（蒙古襲来）と呼びます。"
  },
  {
    era: "鎌倉時代",
    q: "1281年に起きた元の2回目の襲来を何という？",
    choices: ["弘安の役", "文永の役", "応仁の乱", "島原・天草一揆"],
    answer: 0,
    explanation: "2回目の1281年が弘安の役です。鎌倉幕府は博多湾岸に石塁を築くなどして備えました。"
  },
  {
    era: "鎌倉時代",
    q: "元寇後、鎌倉幕府に対する御家人の不満が強まった主な理由は？",
    choices: ["新領地がなく十分な恩賞を与えにくかった", "幕府が明との貿易を禁止した", "農民に刀狩を行った", "朝鮮へ出兵した"],
    answer: 0,
    explanation: "防衛戦だったため、幕府は敵から新しい土地を得られず、御家人へ十分な恩賞を与えにくくなりました。"
  },
  {
    era: "室町時代",
    q: "足利義満が明と行った、正式な船の証明札を用いる貿易は？",
    choices: ["勘合貿易", "朱印船貿易", "南蛮貿易", "日宋貿易"],
    answer: 0,
    explanation: "日明貿易では勘合を使い、正式な貿易船と倭寇を区別しました。そのため勘合貿易とも呼ばれます。"
  },
  {
    era: "室町時代",
    q: "日本・中国・東南アジアを結ぶ中継貿易で栄えた国は？",
    choices: ["琉球王国", "蝦夷地", "高麗", "百済"],
    answer: 0,
    explanation: "琉球王国は那覇を拠点に中継貿易で栄えました。後に薩摩藩の支配を受けながら、中国との関係も保ちます。"
  },
  {
    era: "室町時代",
    q: "1467年に始まり、室町幕府の権威低下を進めた戦乱は？",
    choices: ["応仁の乱", "承久の乱", "壬申の乱", "大塩の乱"],
    answer: 0,
    explanation: "応仁の乱は1467〜1477年。京都を中心に戦乱が続き、戦国時代へ向かう大きなきっかけになりました。"
  },
  {
    era: "戦国時代",
    q: "1543年、種子島に伝わったものは？",
    choices: ["鉄砲", "活版印刷", "羅針盤", "蒸気機関"],
    answer: 0,
    explanation: "ポルトガル人を乗せた中国船が種子島に漂着し、鉄砲が伝わりました。のちに堺や国友などで国産化されます。"
  },
  {
    era: "戦国時代",
    q: "1549年、鹿児島に来航してキリスト教を伝えた人物は？",
    choices: ["フランシスコ＝ザビエル", "ペリー", "ラクスマン", "シーボルト"],
    answer: 0,
    explanation: "イエズス会宣教師フランシスコ＝ザビエルがキリスト教を伝えました。1543年の鉄砲伝来とセットで覚えます。"
  },
  {
    era: "戦国時代",
    q: "南蛮貿易で日本から多く輸出されたものは？",
    choices: ["銀", "生糸", "綿織物", "香辛料"],
    answer: 0,
    explanation: "日本から銀などを輸出し、中国産の生糸や絹織物などを輸入しました。"
  },
  {
    era: "織田信長",
    q: "1573年、織田信長が足利義昭を京都から追放したことで滅んだ幕府は？",
    choices: ["室町幕府", "鎌倉幕府", "江戸幕府", "大宰府"],
    answer: 0,
    explanation: "足利義昭の追放により室町幕府が滅びました。信長の統一事業の重要な節目です。"
  },
  {
    era: "織田信長",
    q: "1575年、信長・家康の連合軍が鉄砲を有効に用いた戦いは？",
    choices: ["長篠の戦い", "関ヶ原の戦い", "山崎の戦い", "川中島の戦い"],
    answer: 0,
    explanation: "長篠の戦いで武田勝頼の軍を破りました。鉄砲の活用を示す代表的な戦いです。"
  },
  {
    era: "織田信長",
    q: "信長が市場の特権を廃止して商工業を活発にしようとした政策は？",
    choices: ["楽市・楽座", "太閤検地", "刀狩", "参勤交代"],
    answer: 0,
    explanation: "楽市・楽座で座の特権などを廃止し、自由な商業を促しました。関所の廃止も進めました。"
  },
  {
    era: "織田信長",
    q: "信長がキリスト教の布教を保護した理由として最も適切なものは？",
    choices: ["仏教勢力への対抗や南蛮貿易を重視したため", "自らキリスト教徒になったため", "朝鮮出兵の兵力を集めるため", "元との同盟を結ぶため"],
    answer: 0,
    explanation: "信長自身がキリスト教徒だったわけではありません。仏教勢力への対抗や南蛮貿易との関係が重要です。"
  },
  {
    era: "豊臣秀吉",
    q: "豊臣秀吉が小田原の北条氏を倒し、全国統一を果たした年は？",
    choices: ["1590年", "1582年", "1600年", "1603年"],
    answer: 0,
    explanation: "1590年、小田原攻めで北条氏を倒し、奥州も服属させて全国統一を果たしました。"
  },
  {
    era: "豊臣秀吉",
    q: "全国の田畑を測量し、土地の生産力と年貢負担者を把握した政策は？",
    choices: ["太閤検地", "地租改正", "班田収授", "上知令"],
    answer: 0,
    explanation: "太閤検地は、統一した基準で田畑を測量し、石高と耕作者を検地帳に記しました。"
  },
  {
    era: "豊臣秀吉",
    q: "農民から武器を取り上げ、兵農分離を進めた政策は？",
    choices: ["刀狩", "廃刀令", "武家諸法度", "生類憐みの令"],
    answer: 0,
    explanation: "1588年の刀狩令により農民の武器を取り上げ、武士と農民の身分の区別を進めました。"
  },
  {
    era: "豊臣秀吉",
    q: "1587年、秀吉が出したキリスト教宣教師の国外追放命令は？",
    choices: ["バテレン追放令", "異国船打払令", "禁中並公家諸法度", "海舶互市新例"],
    answer: 0,
    explanation: "バテレンは宣教師の意味です。追放令後も、秀吉は南蛮貿易そのものは続けました。"
  },
  {
    era: "豊臣秀吉",
    q: "秀吉が1592年と1597年に行った朝鮮出兵を何という？",
    choices: ["文禄・慶長の役", "文永・弘安の役", "大坂の陣", "前九年・後三年の役"],
    answer: 0,
    explanation: "1592年が文禄の役、1597年が慶長の役です。秀吉の死後、日本軍は朝鮮から撤兵しました。"
  },
  {
    era: "徳川家康",
    q: "1600年、徳川家康が石田三成らの西軍を破った戦いは？",
    choices: ["関ヶ原の戦い", "長篠の戦い", "山崎の戦い", "大坂の陣"],
    answer: 0,
    explanation: "関ヶ原の戦いで家康の東軍が勝利。1603年の江戸幕府成立へつながります。"
  },
  {
    era: "徳川家康",
    q: "徳川家康が征夷大将軍となり、江戸幕府を開いた年は？",
    choices: ["1603年", "1590年", "1615年", "1639年"],
    answer: 0,
    explanation: "1600年の関ヶ原、1603年の幕府、1614・15年の大坂の陣、という順番です。"
  },
  {
    era: "江戸初期",
    q: "幕府の許可証を持つ船によって行われた海外貿易は？",
    choices: ["朱印船貿易", "勘合貿易", "南蛮貿易", "日宋貿易"],
    answer: 0,
    explanation: "徳川家康は朱印状を与えて海外貿易を許可しました。東南アジア各地に日本町も成立しました。"
  },
  {
    era: "江戸初期",
    q: "徳川幕府がキリスト教禁止を全国へ広げた年は？",
    choices: ["1614年", "1549年", "1587年", "1854年"],
    answer: 0,
    explanation: "1612年に幕府直轄地で禁教令を出し、1614年に全国へ広げました。"
  },
  {
    era: "鎖国の形成",
    q: "1639年、幕府が来航を禁止したヨーロッパの国は？",
    choices: ["ポルトガル", "オランダ", "ロシア", "アメリカ"],
    answer: 0,
    explanation: "1639年にポルトガル船の来航を禁止。オランダはキリスト教布教を伴わない貿易相手として残りました。"
  },
  {
    era: "鎖国の形成",
    q: "1641年、オランダ商館が平戸から移された場所は？",
    choices: ["長崎の出島", "対馬", "下田", "箱館"],
    answer: 0,
    explanation: "オランダ商館を長崎の出島へ移し、幕府の管理下でオランダとの貿易を続けました。"
  },
  {
    era: "江戸時代",
    q: "江戸時代、朝鮮との外交・貿易の窓口となった地域は？",
    choices: ["対馬", "長崎", "薩摩", "松前"],
    answer: 0,
    explanation: "対馬藩の宗氏が朝鮮との外交・貿易を担いました。長崎＝オランダ・中国、薩摩＝琉球、松前＝アイヌです。"
  },
  {
    era: "江戸時代",
    q: "江戸時代の「鎖国」について最も適切な説明は？",
    choices: ["幕府が窓口を限定して対外関係を管理した", "すべての外国との交流を完全に断った", "日本人の海外渡航を自由にした", "ヨーロッパとはポルトガルだけと貿易した"],
    answer: 0,
    explanation: "完全な孤立ではありません。長崎・対馬・薩摩・松前の『四つの口』を通じて交流が続きました。"
  },
  {
    era: "江戸時代",
    q: "1637〜38年に九州で起き、幕府の禁教強化にも影響した一揆は？",
    choices: ["島原・天草一揆", "大塩の乱", "加賀一向一揆", "秩父事件"],
    answer: 0,
    explanation: "重い年貢やキリスト教弾圧などを背景に島原・天草一揆が起きました。"
  },
  {
    era: "開国",
    q: "1853年、浦賀に来航して開国を求めたアメリカ使節は？",
    choices: ["ペリー", "ハリス", "ラクスマン", "レザノフ"],
    answer: 0,
    explanation: "ペリーは1853年に浦賀へ来航し、翌1854年にも再来航しました。"
  },
  {
    era: "開国",
    q: "1854年、下田・箱館を開くことなどを定めた条約は？",
    choices: ["日米和親条約", "日米修好通商条約", "下関条約", "ポーツマス条約"],
    answer: 0,
    explanation: "日米和親条約で日本は開国へ進みました。1858年の日米修好通商条約で本格的な貿易が始まります。"
  },
  {
    era: "鎌倉時代",
    q: "困窮した御家人を救うため、鎌倉幕府が1297年に出した法令は？",
    choices: ["永仁の徳政令", "分国法", "武家諸法度", "徳政相論"],
    answer: 0,
    explanation: "永仁の徳政令は、御家人が手放した土地の無償返還などを命じましたが、御家人の困窮を根本的には解決できませんでした。"
  },
  {
    era: "鎌倉〜室町",
    q: "1338年に征夷大将軍となり、室町幕府を開いた人物は？",
    choices: ["足利尊氏", "足利義満", "新田義貞", "後醍醐天皇"],
    answer: 0,
    explanation: "足利尊氏は建武の新政から離反し、1338年に征夷大将軍となりました。"
  },
  {
    era: "戦国時代",
    q: "戦国大名が領国内の家臣や住民を統制するために定めた独自の法は？",
    choices: ["分国法", "御成敗式目", "公事方御定書", "十七条憲法"],
    answer: 0,
    explanation: "分国法は戦国大名が領国支配のために定めた法です。戦国大名が地域を直接支配したことを示します。"
  },
  {
    era: "キリスト教",
    q: "キリシタン大名が1582年にローマへ派遣した使節は？",
    choices: ["天正遣欧少年使節", "慶長遣欧使節", "遣唐使", "岩倉使節団"],
    answer: 0,
    explanation: "大友宗麟・大村純忠・有馬晴信らが4人の少年を派遣しました。1590年に帰国しています。"
  },
  {
    era: "織田家の周辺",
    q: "織田信長の妹・お市の方が最初に結婚した戦国大名は？",
    choices: ["浅井長政", "柴田勝家", "明智光秀", "前田利家"],
    answer: 0,
    explanation: "お市は浅井長政と結婚しました。浅井氏滅亡後に織田方へ戻り、のちに柴田勝家と再婚します。"
  },
  {
    era: "織田家の周辺",
    q: "お市の娘で、豊臣秀吉の側室となり豊臣秀頼の母になった人物は？",
    choices: ["茶々（淀殿）", "初", "江", "細川ガラシャ"],
    answer: 0,
    explanation: "長女の茶々は淀殿とも呼ばれ、秀頼の母となりました。大坂の陣で豊臣氏と運命をともにします。"
  },
  {
    era: "織田家の周辺",
    q: "お市の娘で、徳川秀忠の妻となり3代将軍家光の母になった人物は？",
    choices: ["江", "茶々", "初", "北政所"],
    answer: 0,
    explanation: "三女の江は徳川秀忠の妻となり、家光の母になりました。織田家の血筋が徳川将軍家へつながります。"
  },
  {
    era: "天正遣欧少年使節",
    q: "天正遣欧少年使節の4人の組み合わせとして正しいものは？",
    choices: ["伊東マンショ・千々石ミゲル・原マルチノ・中浦ジュリアン", "伊東マンショ・支倉常長・原マルチノ・中浦ジュリアン", "千々石ミゲル・大友宗麟・原マルチノ・中浦ジュリアン", "伊東マンショ・千々石ミゲル・ザビエル・原マルチノ"],
    answer: 0,
    explanation: "正使が伊東マンショ・千々石ミゲル、副使が原マルチノ・中浦ジュリアンです。支倉常長は後の慶長遣欧使節です。"
  },
  {
    era: "織田信長と宗教",
    q: "信長が延暦寺や石山本願寺などの仏教勢力と対立した主な理由は？",
    choices: ["独自の武力や領地をもち統一に抵抗する政治勢力だったため", "仏教の教義を全面的に否定していたため", "すべての寺院を外国へ移すため", "キリスト教国から命令されたため"],
    answer: 0,
    explanation: "寺社や一向一揆は信仰集団であると同時に、武力・土地・経済力をもつ政治勢力でした。信長は統一を妨げる勢力として戦いました。"
  },
  {
    era: "本能寺の変",
    q: "1582年、本能寺で織田信長を討った人物は？",
    choices: ["明智光秀", "羽柴秀吉", "柴田勝家", "徳川家康"],
    answer: 0,
    explanation: "明智光秀が本能寺の変を起こしました。秀吉はその知らせを中国地方で受けます。"
  },
  {
    era: "秀吉の台頭",
    q: "『中国大返し』で秀吉が急いで畿内へ戻る直前、戦っていた相手は？",
    choices: ["毛利氏", "北条氏", "島津氏", "伊達氏"],
    answer: 0,
    explanation: "秀吉は備中高松城を攻め、毛利氏と戦っていました。講和して畿内へ戻り、明智光秀と戦います。"
  },
  {
    era: "秀吉の台頭",
    q: "中国大返しの後、秀吉が明智光秀を破った戦いは？",
    choices: ["山崎の戦い", "賤ヶ岳の戦い", "小牧・長久手の戦い", "関ヶ原の戦い"],
    answer: 0,
    explanation: "1582年6月13日の山崎の戦いで光秀を破り、秀吉は信長の後継争いで優位に立ちました。"
  },
  {
    era: "秀吉の台頭",
    q: "1583年、秀吉が柴田勝家を破った戦いは？",
    choices: ["賤ヶ岳の戦い", "姉川の戦い", "長篠の戦い", "大坂の陣"],
    answer: 0,
    explanation: "賤ヶ岳の戦いで秀吉が勝利し、柴田勝家とお市の方は北ノ庄城で死去しました。"
  },
  {
    era: "秀吉の統一",
    q: "1584年、秀吉と徳川家康・織田信雄が戦った戦いは？",
    choices: ["小牧・長久手の戦い", "桶狭間の戦い", "川中島の戦い", "九州の役"],
    answer: 0,
    explanation: "小牧・長久手の戦いの後に講和し、のちに家康は秀吉へ臣従しました。"
  },
  {
    era: "天正遣欧少年使節",
    q: "イエズス会を脱会し、千々石清左衛門と名乗った使節は？",
    choices: ["千々石ミゲル", "伊東マンショ", "原マルチノ", "中浦ジュリアン"],
    answer: 0,
    explanation: "千々石ミゲルは1591年にイエズス会へ入りましたが、1601年までに脱会し、清左衛門と名乗って大村藩に仕えました。"
  },
  {
    era: "秀吉と宗教",
    q: "秀吉がバテレン追放令を出した一方で続けたものは？",
    choices: ["南蛮貿易", "勘合貿易", "朱印船貿易の禁止", "鎖国"],
    answer: 0,
    explanation: "秀吉は宣教師やキリシタン大名の影響を警戒しましたが、利益の大きい南蛮貿易は続けました。禁教と貿易は分けて考えます。"
  },
  {
    era: "家康と宗教",
    q: "家康・江戸幕府がキリスト教禁止を強めた理由として最も適切なものは？",
    choices: ["信者の結束と宣教師・海外勢力との結びつきを警戒したため", "オランダがキリスト教国ではなかったため", "仏教をヨーロッパへ広めるため", "元寇の再来を防ぐため"],
    answer: 0,
    explanation: "幕府は全国で服従を徹底するうえで、宣教師や海外勢力につながる大きな信仰組織を警戒しました。"
  },
  {
    era: "江戸初期の外交",
    q: "伊達政宗が1613年に支倉常長らを派遣した使節は？",
    choices: ["慶長遣欧使節", "天正遣欧少年使節", "朝鮮通信使", "遣隋使"],
    answer: 0,
    explanation: "慶長遣欧使節はメキシコ・スペインを経てローマへ向かいました。"
  },
  {
    era: "鎖国の形成",
    q: "1635年の海外渡航禁止令で禁じられたことは？",
    choices: ["日本人の海外渡航と帰国", "オランダ船の来航", "朝鮮通信使の来日", "琉球との交流"],
    answer: 0,
    explanation: "日本人の海外渡航と帰国が禁止されました。1639年にはポルトガル船の来航が禁止されます。"
  },
  {
    era: "天正遣欧少年使節",
    q: "1608年に司祭となった3人に含まれない人物は？",
    choices: ["千々石ミゲル", "伊東マンショ", "原マルチノ", "中浦ジュリアン"],
    answer: 0,
    explanation: "伊東マンショ・原マルチノ・中浦ジュリアンは1608年に司祭となりました。千々石ミゲルはその前にイエズス会を脱会しています。"
  },
  {
    era: "開国",
    q: "1858年の日米修好通商条約が不平等条約とされる理由は？",
    choices: ["領事裁判権を認め、日本に関税自主権がなかった", "日本人の海外渡航をすべて禁じた", "アメリカへ領土を割譲した", "キリスト教を国教に定めた"],
    answer: 0,
    explanation: "日本は領事裁判権を認め、関税自主権をもちませんでした。これらの改正が明治政府の外交課題になります。"
  }
];

const letters = ["A", "B", "C", "D"];
const quizStart = document.querySelector("#quizStart");
const quizPlay = document.querySelector("#quizPlay");
const quizResult = document.querySelector("#quizResult");
const randomOrder = document.querySelector("#randomOrder");
const questionEra = document.querySelector("#questionEra");
const questionText = document.querySelector("#questionText");
const choicesEl = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackBody = document.querySelector("#feedbackBody");
const nextButton = document.querySelector("#nextButton");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#scoreText");
const progressBar = document.querySelector("#progressBar");
const bestScore = document.querySelector("#bestScore");
const finalScore = document.querySelector("#finalScore");
const finalTotal = document.querySelector("#finalTotal");
const resultMessage = document.querySelector("#resultMessage");
const resultAdvice = document.querySelector("#resultAdvice");

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedCount = 10;

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setupQuestion(question) {
  const options = question.choices.map((text, index) => ({ text, isCorrect: index === question.answer }));
  return { ...question, options: shuffled(options) };
}

function loadBestScore() {
  try {
    const stored = JSON.parse(localStorage.getItem("nihonshiBest"));
    if (stored && Number.isFinite(stored.score) && Number.isFinite(stored.total)) {
      bestScore.textContent = `最高記録 ${stored.score} / ${stored.total}`;
    }
  } catch (_) {
    bestScore.textContent = "最高記録 ─";
  }
}

function saveBestScore(newScore, total) {
  try {
    const old = JSON.parse(localStorage.getItem("nihonshiBest"));
    const newRate = newScore / total;
    const oldRate = old ? old.score / old.total : -1;
    if (!old || newRate > oldRate || (newRate === oldRate && newScore > old.score)) {
      localStorage.setItem("nihonshiBest", JSON.stringify({ score: newScore, total }));
    }
  } catch (_) {
    // Storage can be unavailable in private browsing; the quiz still works.
  }
  loadBestScore();
}

function startQuiz(count) {
  selectedCount = count;
  const pool = randomOrder.checked ? shuffled(questions) : [...questions];
  activeQuestions = pool.slice(0, count).map(setupQuestion);
  currentIndex = 0;
  score = 0;
  quizStart.hidden = true;
  quizResult.hidden = true;
  quizPlay.hidden = false;
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const item = activeQuestions[currentIndex];
  feedback.hidden = true;
  nextButton.hidden = true;
  choicesEl.replaceChildren();
  progressText.textContent = `${currentIndex + 1} / ${activeQuestions.length}`;
  scoreText.textContent = `正解 ${score}`;
  progressBar.style.width = `${((currentIndex + 1) / activeQuestions.length) * 100}%`;
  questionEra.textContent = item.era;
  questionText.textContent = item.q;

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `<span class="choice-letter">${letters[index]}</span><span>${option.text}</span>`;
    button.addEventListener("click", () => answerQuestion(button, option.isCorrect));
    choicesEl.append(button);
  });
}

function answerQuestion(selectedButton, isCorrect) {
  const item = activeQuestions[currentIndex];
  const buttons = [...choicesEl.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (item.options[index].isCorrect) button.classList.add("correct");
  });

  if (isCorrect) {
    score += 1;
    selectedButton.classList.add("correct");
    feedbackTitle.textContent = "正解！";
  } else {
    selectedButton.classList.add("wrong");
    feedbackTitle.textContent = "ここを確認";
  }

  scoreText.textContent = `正解 ${score}`;
  feedbackBody.textContent = item.explanation;
  feedback.hidden = false;
  nextButton.textContent = currentIndex === activeQuestions.length - 1 ? "結果を見る" : "次の問題へ";
  nextButton.hidden = false;
  nextButton.focus({ preventScroll: true });
}

function showResult() {
  quizPlay.hidden = true;
  quizResult.hidden = false;
  finalScore.textContent = score;
  finalTotal.textContent = `/ ${activeQuestions.length}`;
  const rate = score / activeQuestions.length;

  if (rate === 1) {
    resultMessage.textContent = "全問正解。流れまでつかめています！";
    resultAdvice.textContent = "年号だけでなく、政策の目的と対外関係も説明できる状態です。";
  } else if (rate >= 0.8) {
    resultMessage.textContent = "かなり定着しています！";
    resultAdvice.textContent = "間違えた時代だけ、上のまとめで前後関係を確認しましょう。";
  } else if (rate >= 0.6) {
    resultMessage.textContent = "あと一歩。順番を固めよう。";
    resultAdvice.textContent = "信長→秀吉→家康と、鎖国成立の年表を重点的に見直すと伸びます。";
  } else {
    resultMessage.textContent = "まずは因果関係から覚えよう。";
    resultAdvice.textContent = "まとめの太字と『結果・流れ・引継ぎ』だけ読み直し、10問コースに再挑戦しましょう。";
  }

  saveBestScore(score, activeQuestions.length);
}

document.querySelectorAll(".mode-card").forEach((button) => {
  button.addEventListener("click", () => startQuiz(Number(button.dataset.count)));
});

nextButton.addEventListener("click", () => {
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

document.querySelector("#retryButton").addEventListener("click", () => startQuiz(selectedCount));
document.querySelector("#printButton").addEventListener("click", () => window.print());

loadBestScore();
