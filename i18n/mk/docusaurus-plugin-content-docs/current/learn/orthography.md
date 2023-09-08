---
sidebar_position: 2
license: republish
author: Jan van Steenbergen
origin: http://steen.free.fr/interslavic/orthography.html
---

import { AlphabetOverview } from '@site/src/components';

# Правопис

## Стандардна азбука \{#standard-alphabet}

Прашањето како треба да се пишува меѓусловенски секогаш било предмет на дискусија. Идеално, секој Словен треба да може да го пишува на своја тастатура, но тоа би ја исклучило можноста за единствен стандарден правопис. Различните национални правописи едноставно се премногу различни за да се најде решение кое е погодно за секого. Ако било кој од нив да стане „официјален“ или „стандарден“ би било неправедно, бидејќи сите други можности автоматски би биле „неофицијални“, „нестандардни“ и затоа „неточни“. Но, од друга страна, ситуацијата со премногу различни стандарди за пишување има недостаток на тоа што е збунувачка и потенцијално обесхрабрувачка за луѓето кои се надеваат да учат меѓусловенски.

Бидејќи границата помеѓу латиницата и кирилицата минува директно низ средината на словенската територија, интерсловенскиот има стандардни азбуки за двете. Ниту еден од нив не се заснова на некој национален правопис особено. Наместо тоа, тие беа дизајнирани како компромис, со цел да бидат интуитивно разбирливи и да овозможат лесна транслитерација меѓу нив. Корисниците се охрабруваат да ги користат овие стандардни азбуки, но на оние кои имаат проблеми со пишувањето одредени знаци им се нудат и некои [алтернативни решенија][1].

**Меѓусловенската латинска азбука** користи 27 букви: 23 букви од основната латиница (сите освен `q`, `w` и `x`) плус четири согласки со карон (`š`, `ž`, `č` и `ě`), како и три диграфи (`dž`, `lj`, `nj`):

:::component{name=MDOrthography1}
:::

**Меѓусловенската кирилица** има 29 букви: сите знаци што ги имаат заедничко различните кирилични правописи, со додавање на `є`, `ы`, `ј`, `љ`, `њ`, како и еден диграф (`дж`):

:::component{name=MDOrthography2}
:::

Двата правописи се еднакви, а во објавените текстови заслужува препорака да се дадат верзии и на латиница и на кирилица, за да можат да се разберат од двете страни на границата.

Распоредот на меѓусловенската тастатура може да се преземе [тука][2].

## Застапеност на проблематични ликови \{#representation-of-problematic-characters}

Како што е наведено погоре, и латинската и кирилицата вклучуваат знаци кои не можат да се напишат на секоја словенска тастатура. Оние кои не можат да напишат лик на сопствената тастатура имаат на располагање неколку алтернативи. Еве неколку препораки:

### Латински `Č` `Š` `Ž` \{#latin-č-š-ž}

Овие букви се многу важни во словенскиот. Испуштањето на каронот (како што често го прават мајчин јазик на СМС јазик) има негативно влијание врз разбирливоста на интерсловенскиот јазик, бидејќи **`c` `s` `z`** се сосема различни фонеми.

Бидејќи Полјаците ги немаат буквите на нивната тастатура, предложената алтернатива за нив е `cz sz ż`. Оние кои немаат `ż` на тастатурата можат да користат **`cz` `sz` `zs`**. Алтернативно решение е **`cx` `sx` `zx`**, кое има предност што е доследен и недвосмислен, но недостаток е неприродно (и во очите на многу луѓе, грд). Другите опции подобро се избегнуваат. На пример, **`ch` `sh` `zh`** базиран на англиски јазик има недостаток што западните Словени би го читале `ch` како `h` :ipa[x], додека решенијата што вклучуваат знаци што не се букви (како `c^`, `c*`, `c'`) го прават да изгледа како компјутерски код. Конечно, не користете знаци како `q` или `w` (т.н. _Volapük кодирање_) како замена, бидејќи тоа само ќе создаде конфузија.

### латиница `Ě` и кирилица `Є` \{#latin-ě-and-cyrillic-є}

Важноста на `ě` (т.н. _yat_) лежи во неговиот изговор. Додека кај повеќето јазици `e` не ја омекнува претходната согласка, `ě` ја омекнува во сите јазици освен словенечкиот, српскиот и македонскиот, што изнесува 96% од говорителите. Затоа е логично дека оваа прилично значителна дистинкција се прави и во меѓусловенскиот. Во латиницата, традиционалното претставување на оваа фонема е `ě`, што исто така прави добар компромис помеѓу, на пример, српскиот `e` и хрватскиот **`ije`/`je`**. Недостаток на `ě` е што само чешки и лужички го имаат во нивните азбуки.

Кирилицата на `ě` е буквата `є`, позајмена од украински, каде што нејзиниот изговор е сличен. Избран е поради неговата визуелна сличност со `е`, а исто така и поради недостаток на друга добра алтернатива на кирилица. Теоретски, архаичното писмо `ѣ` (традиционалното _yat_) е историски поточно, но бидејќи не се користи во ниту еден жив словенски јазик во денешно време (во 1945 година, бугарскиот и русинскиот биле последни кои го укинале) и ретко кој може да го препознае. , неговото користење во меѓусловенски текстови сериозно би ја попречило разбирливоста.

За оние кои не знаат да напишат **`ě` / `є`** и оние кои не знаат кога да напишат, најдобра алтернатива е латиницата `e` / кирилица `е`. Ова е легитимно поедноставување што го става `ě` во позиција слична на буквата `ё` на руски, со други зборови: дијакритикот претставува различен изговор, но може да остане непишан.

### латиница `Y` и кирилица `Ы` \{#latin-y-and-cyrillic-ы}

Писмото **`y` / `ы`** најмногу им помага на Русите, Белорусите и Полјаците. На јужнословенски, украински и говорен чешки и словачки јазик, се спои со `i`. Оние кои не знаат кога да направат разлика, како и оние кои се насочени кон доминантно јужнословенска публика, се советуваат да користат **`i` / `и`** во сите случаи.

### кирилица `Ј` \{#cyrillic-ј}

Interslavic ја користи буквата `ј` од српската и македонската кирилица како еквивалент на латинскиот `j`, бидејќи `й` (руски, украински, белоруски и бугарски) е премногу рестриктивен во однос на околните самогласки и согласки. За оние кои имаат проблеми со пишувањето `ј`, логичката замена е `й`, но кога е проследена со самогласка, наместо тоа во повеќето случаи ќе се користи јотирана самогласка:

- `йа` и `йу` може да се напишат `я` и `ю` соодветно; ова е дефинитивно најприродното решение, но треба да се запомни дека не сите Срби и Македонци ги знаат овие ликови, исто така затоа што нивните форми не се особено сугестивни;
- `йо` никогаш не е проблем; Сепак, рускиот `ё` треба да се избегнува, бидејќи се користи во различни ситуации и можеби не е јасен за оние кои не знаат руски;
- `йе` е попроблематично; најдобро решение е веројатно `е` по самогласка, `ье` по согласка и `йе` на почетокот на зборот;
- `йи` може да се напише како `ьи` по согласка и `и` на други позиции, бидејќи и онака нема фундаментална разлика со слог-почетен `и`.

### кирилица `Љ` и `Њ` \{#cyrillic-љ-and-њ}

Кирилицата на `lj` и `nj` се `љ` и `њ`, преземени и од српската и од македонската кирилица. Оние кои ги немаат овие букви на нивната тастатура секогаш можат да напишат `ль` и `нь` наместо тоа.

## Етимолошка азбука \{#etymological-alphabet}

Покрај стандардната латинска азбука, меѓусловенскиот содржи и голем број изборни букви кои се однесуваат конкретно на прасловенски/староцрковнословенски фонеми кои се разделиле или исчезнале во повеќето современи јазици:

:::component{name=MDOrthography3}
:::

- Самогласките `ę` и `ų` се совпаѓаат со носните самогласки `ѧ` и `ѫ` на старословенски јазик (малку ју и големо ју, соодветно, обично транслитерирани како `ę` и `ǫ`).
- Самогласката `å` се јавува во комбинациите `rå` и `lå` проследена со согласка, каде полскиот има **`ro`/`ró`** и **`ło`/`łó`** и источнословенскиот има **(`o` )`ro`** и **(`o`)`lo`**.
- Самогласките `ė` и `ȯ` претставуваат силни годови: `ь` (`ĭ`) и `ъ` (`ŭ`).
- Согласките `ć` и `đ` се однесуваат на прасловенски `tj` и `dj`, кои во староцрковнословенски станале `щ` (`št`) и `жд` (`žd`).
- Меките согласки **`ĺ` `ń` `ŕ` `t́` `d́` `ś` `ź`** се однесуваат на согласки проследени со слаба `ь`.

Горенаведените букви се само опционални екстензии на стандардната латиница. Од таа причина, никогаш нема потреба да се претставуваат на некој друг начин освен со едноставно изоставување на дијакритиката; единствени исклучоци се `ć` и `đ`, кои во стандардниот правопис треба да се заменат со `č` и `dž`.

Буквите `ĺ` и `ń` се појавуваат само пред согласка. Фонетски, тие се идентични со `lj` и `nj`, единствената разлика е што обично не се пишуваат на меѓусловенски.

Забележете дека меѓусловенската етимолошка азбука не вклучува маркери за должина или тон, ниту пак вклучува специјални букви за позајмици од несловенски јазици (како што се старословенски `ѳ` и `ѵ`, кои се користат само за грчки зборови, или @@ 158 за германски или француски зборови).

### Образложение \{#rationale}

Основното латинско и кирилско писмо на меѓусловенското се состојат од букви чиј изговор е сличен во сите словенски јазици. Меѓутоа, прасловенскиот и старословенскиот имаа голем број фонеми кои се развиваа во различни правци. Во повеќето современи јазици, овие промени во звукот се неверојатно предвидливи. Со доделување на посебен знак на овие фонеми, секоја од нив може да се поврзе со одредена фонема во кој било од современите словенски јазици, со што ќе се покријат главните фонолошки разлики меѓу вторите. Со други зборови, оваа проширена азбука може да послужи како мост меѓу старословенскиот и современиот словенски јазици, но и како посредник правопис меѓу старословенскиот и меѓусловенскиот.

За разлика од азбуките како што се Меѓународната фонетска азбука и [словенската азбука][3], овој правопис не е наменет да даде информации за изговорот на одделни јазици, туку да ја покаже врската меѓу нив. Може да се спореди со правописот на англискиот јазик: иако постојат огромни разлики во изговорот помеѓу британскиот, шкотскиот и американскиот англиски, сите се напишани практично на ист начин, користејќи конвенции за правопис што го претставуваат говорниот јазик од 14 век. Ако Словените би користеле слична азбука наместо нивните национални правописи засновани на изговор, зборот за „пет“ би можел да биде напишан како :isv[_pęt́_] на сите словенски јазици, наместо :ru[_пять_], :pl[_pięć_], :csb[_piãc_], :hsb[_pjeć_], :cs[_pět_], :sk[_päť_], :sl[_pet_] итн.

Оваа азбука заснована на етимологија (претходно позната како :notr[_Naučny medžuslovjansky_] „Научно меѓусловенско“) служи и како изворен код за интерсловенски. Дизајниран е на таков начин што се разликува од стандардниот меѓусловенски само по дополнителни дијакритички, така што читателот кој не е запознаен со тие дијакритички може едноставно да ги игнорира. Користењето на овој правопис на интерсловенски јазик може да послужи за следните цели:

- пренесување етимолошки информации,
- поддршка на процесот на учење преку олеснување на меѓусловенските зборови за поврзување со нивните колеги на други словенски јазици,
- давање попрецизни информации за идеалниот (најцентралниот) изговор,
- овозможување на корисниците да го приспособат („вкусот“) пишаниот и говорниот меѓусловенски јазик за говорителите на одредени јазици (види [ароматизација][4]),
- овозможување на транскрипција на текст од кој било словенски јазик во меѓусловенски правопис.

### Користење \{#usage}

Текст со многу дијакритички може да изгледа застрашувачки за новодојденците, чиј прв контакт со Interslavic веројатно не е ова објаснување. За луѓето што го учат јазикот, збунувачки е кога различни учесници во разговорот користат различни ортографии. Можеби погрешно веруваат дека овие дијакритични знаци се задолжителни или дека меѓусловенскиот напишан со овие наставки е супериорен во однос на меѓусловенскиот напишан без нив. Конечно, буквите како `ę` и `ų` може да им бидат од помош на Полјаците, а можеби и на источните Словени, но особено на јужните Словени воопшто не им помага користењето на овој правопис: за нив тоа само ги прави работите непотребно комплицирани. Затоа, ве молиме воздржете се од користење на овој правопис во секојдневните разговори, освен ако не го користите со одредена цел на ум. Во тој случај, ве молиме објаснете зошто ги користите и дека овие дијакритици се само опционални додатоци.

Оние што ги користат овие проширени знаци во секој случај не се обврзани да го користат целиот сет: корисниците можат од него да изберат што сакаат и да изостават што не сакаат. Има само две ограничувања. Како прво, штом ќе одлучите да користите одреден знак од продолжениот сет, користете го постојано. Второ, некои букви доаѓаат во парови (**`ę`/`ų`**, **`ė`/`ȯ`**, **`t́`/`d́`**, **`ś`/`ź`**), и нема смисла да се користи една ставка од пар, а другата испуштање.

Бидејќи овие екстензии се опционални, алтернативните претстави не се строго потребни. Меѓутоа, бидејќи буквите `t́` и `d́` не се појавуваат на ниту еден јазик (дури и во Unicode тие можат да се напишат само со помош на комбиниран дијакритик), тие можат да бидат напишани и со хачек: `ť` и `ď`; Забележете дека во повеќето фонтови хачекот се појавува како апостроф. Исто така, `ĺ` може да се напише како `ľ`. Конечно, наместо `ė` и `ȯ` може да се напише и `è` и `ò`.

### кирилица \{#cyrillic}

Во латинската азбука, дополнителните етимолошки информации се пренесуваат само со помош на дијакритични знаци. Така, пасивната разбирливост не е попречена, а читателот кој не е запознаен со нив може и онака да го разбере текстот. Сличен пристап за кирилицата (користење знаци како `ӑ`, `ԙ`, `ө`, `ұ`, `ӣ`, `ҷ`, `ӝ`, итн.) не само што би направил текстот да изгледа крајно вештачки, туку би бил и малку корисен, бидејќи модификациите би биле далеку од самообјаснување. Проширено кирилично писмо со историски (`ѣ`, `ѩ`, `ѫ`) и регионални (`ћ`, `ђ`) знаци би било многу тешко да се разбере за луѓето што не се запознаени со старословенскиот правопис и затоа е во конфликт со целта на меѓусловенскиот. Од таа причина, меѓусловенската етимолошка азбука нема кириличен еквивалент.

## Преглед \{#overview}

Следната табела ја прикажува кореспонденцијата помеѓу буквите споменати погоре (предложените алтернативни правописи се прикажани во сива боја меѓу заградите). [Транслитератор][5] овозможува транслитерација помеѓу латиница и кирилица.

<Tabs>
  <TabItem value="latin" label={translate({ id: 'com.script.Latin', message: 'Latin' })} default>
    <AlphabetOverview script="art-Latn-x-interslv" />
  </TabItem>

<TabItem value="cyrillic" label={translate({ id: 'com.script.Cyrillic', message: 'Cyrillic' })}>
<AlphabetOverview script="art-Cyrl-x-interslv" />
</TabItem>
</Tabs>

## Насоки \{#guidelines}

Да резимираме, постојат неколку можности за пишување на истиот збор. Општото упатство е: колку поразбирливо, толку подобро. Сепак, има неколку работи што треба да се имаат на ум:

- За да избегнете забуна кај новодојденците, обидете се да го следите стандардниот латински и/или кириличен правопис колку што е можно повеќе. Распоредот на меѓусловенската тастатура може да се преземе [тука][2].
- Од истата причина, не користете ја етимолошката азбука (порано позната како :notr[_Naučny medžuslovjansky_]) во обичните разговори. Секогаш кога го користите, ве молиме наведете експлицитно зошто го користите.
- Избегнувајте да користите кирилични букви кои повеќе не се користат (како `ѣ`, `ѩ`, `ѫ`, `ѱ`) и не обидувајте се да ја кирилизирате етимолошката азбука на кој било друг начин, бидејќи и двете сериозно би ја попречиле разбирливоста.
- Ако имате проблеми со пишување одредени знаци, ве молиме користете една од предложените алтернативи.
- Бидете доследни во вашите избори. Ако, на пример, одлучите да користите `sz` за претставување на `š`, така останете во целиот текст или разговор, инаку само ќе создадете конфузија. Од истата причина, ако користите `sz`, тогаш не користете `č` или `cx` во исто време.
- Не користете знаци што не се букви (:kbd[^], :kbd['] итн.) како средство за замена на дијакритици. Тие нема да го направат вашиот текст почитлив и на повеќето луѓе им се чини грди.
- Никогаш не мешајте латиница со кирилица.
- Кога им се обраќате на припадниците на одредена словенска нација (на пример, кога патувате), може да размислите за [да го вкусите вашиот меѓусловенски јазик][4]. Сепак, не користете ароматизација во мултисловенски средини.

[1]: #representation-of-problematic-characters
[2]: ../resources/keyboards.md
[3]: https://web.archive.org/web/20230201091637/http://grzegorz.jagodzinski.prv.pl/gram/en/ipa.html
[4]: vocabulary/flavourisation.md
[5]: http://steen.free.fr/interslavic/transliterator.html