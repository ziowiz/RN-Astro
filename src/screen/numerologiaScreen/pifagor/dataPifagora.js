const interpretCharacter = (count) => {
	switch (count) {
		case 0:
			return "Встречается только у людей, рожденных после 2000 года. Такие люди считают, что мир крутится вокруг них, и все им чем-то обязаны. Важно еще в раннем детстве избавить их от ощущения своей неповторимости и особенности. Предпочтительно воспитание в коллективе, где ребенок учится ценить других и уважать чужие границы. Родители должны обращать внимание на развитие эмпатии и умения работать в команде.";
		case 1:
			return "Перед нами типичный эгоист. Свои интересы ставит превыше всего, что часто приводит к конфликтам с окружающими. С таким человеком сложно найти общий язык, так как он не склонен к компромиссам. Однако, он чувствует себя прекрасно в одиночестве, наслаждаясь собственным обществом. Ему стоит учиться слушать и понимать других людей.";
		case 2:
			return "Близок к типичному эгоисту. Самодовольство и самовосхваление преобладают над коллективными интересами. В случае, когда он не может самостоятельно решить свои вопросы, он использует других людей. Важно развивать навыки сотрудничества и умение ценить вклад каждого в общее дело.";
		case 3:
			return "Золотая середина. Уравновешенный человек, общительный, дружелюбный, любознательный. Знает себе цену, но способен понимать интересы других людей. Готов прийти на помощь, если это нужно. Такие люди часто становятся лидерами, так как умеют находить баланс между своими и чужими потребностями.";
		case 4:
			return "Сильный характер. Решительность и действенность – его кредо. Общительный, дружелюбный, любознательный, готов к риску. Способен самостоятельно решать волнующие его вопросы. Такие люди часто добиваются успеха благодаря своему упорству и настойчивости. Им стоит развивать терпимость и уважение к мнению других.";
		case 5:
			return "Абьюзер. Очень близок к типичному абьюзеру. Общение строит на подчинении, приемлет унижение и оскорбления. Способен добиваться своих целей любой ценой, но способен уважать дружбу с другими людьми. Таким людям стоит работать над самоконтролем и уважением к окружающим.";
		case 6:
			return "Достаточно жестокий, сложный характер. Способен совершить благородный поступок, но в целом склонен к диктатуре. Часто такие люди становятся главами корпораций или лидерами. Способны самостоятельно решать любые вопросы любым способом. Опасные люди, но их это не волнует. Важно развивать эмпатию и уважение к другим.";
		default:
			return "Почти не встречаются у людей, невероятно редкий случай. Недостаточно информации для анализа, но можно утверждать, что это крайне опасные люди. Жестокость и насилие, если не подавлены в детстве, будут грузом для общества. Таким людям необходимо постоянное внимание со стороны близких и специалистов.";
	}
};

const interpretEnergy = (count) => {
	switch (count) {
		case 0:
			return "Это энергетические вампиры в хорошем смысле слова. Они открыты для общения, подпитываются от окружающих новыми идеями и впечатлениями. В любом человеке способны найти общий язык. Они могут вдохновлять и мотивировать других своей энергией и энтузиазмом. Им стоит следить за тем, чтобы не переутомляться.";
		case 1:
			return "Достаточно своей энергии, однако для поддержания баланса рекомендуются занятия спортом или отдых в комфорте. Они могут найти общий язык с людьми, которые не замкнуты в своем поле зрения. Таким людям стоит научиться управлять своей энергией, чтобы избежать выгорания.";
		case 2:
			return "Золотая середина. Баланс и гармония. Своей энергией с радостью делятся с окружающими. Они могут найти общий язык с людьми, которые не имеют психологических расстройств. Способны отдавать и брать эмоции. Такие люди часто становятся хорошими друзьями и партнерами.";
		case 3:
			return "Из него может получиться неплохой экстрасенс. Есть смысл развивать интуицию. Они прекрасно понимают окружающих людей на эмоциональном уровне. Способны читать эмоции по глазам, поэтому не очень любят смотреть фильмы, так как видят фальшь. Они замечательные друзья и партнеры, умеющие поддерживать и вдохновлять.";
		case 4:
			return "Пользуется популярностью у противоположного пола за счет своей активности и непосредственности. Особенно привлекателен для людей с тремя шестерками в квадрате. Способны заворожить любого своей харизмой и радостью. Обладают талантом передавать свои эмоции людям, что делает их отличными лидерами и вдохновителями.";
		default:
			return "Достаточно редкие цифры. Харизматические лампочки. Куда бы вы ни пришли, вас ждет успех и счастье. Вам открыты все пути и дороги. Ваша улыбка – ваше главное оружие. Будьте бдительны с единицами и двойками, они способны выпить вас досуха. Не злоупотребляйте своей энергией, чтобы не истощить свои ресурсы.";
	}
};

const interpretInterest = (count) => {
	switch (count) {
		case 0:
			return "Он пунктуален и очень любит чистоту. В его жизни порядок и дисциплина занимают важное место. Такие люди часто обладают высокой организованностью и стремятся к идеалу во всем. Их педантичность может вызывать раздражение у окружающих, но они сами чувствуют себя комфортно в такой среде. Им важно находить баланс между порядком и гибкостью.";
		case 1:
			return "Уборка по настроению. У него может быть как идеальный порядок, так и хаос. Причем как в доме, так и в голове. Такие люди часто творческие и импульсивные, им сложно придерживаться рутины. Их настроения и состояния могут меняться быстро, что отражается на их окружении. Им важно учиться планированию и организации.";
		case 2:
			return "Перед нами ученый или тот, кто им точно мог бы стать. Точные науки интересуют и даются легко. Эти люди стремятся к знаниям и имеют аналитический ум. Часто углубляются в изучение сложных концепций и обладают способностью находить решения для сложных задач. Им важно развивать критическое мышление и практические навыки.";
		case 3:
			return "Желание есть, а возможностей мало. Как бы не хотел углубиться в изучение формул, не получается. Возможно, ему не хватает мотивации или поддержки. Такие люди часто компенсируют свои недостатки креативностью и находят необычные способы решения проблем. Им важно находить источники вдохновения и мотивации.";
		case 4:
			return "Эти люди обладают уравновешенным подходом к жизни. Им удается сочетать научные интересы с практическими навыками. Целеустремленные и трудолюбивые, они часто достигают поставленных целей благодаря упорству. Им важно продолжать развиваться и совершенствовать свои навыки.";
		case 5:
			return "Такой человек находится в постоянном поиске нового. Легко увлекается новыми идеями и проектами, но может быстро терять интерес. Его энтузиазм заразителен, и он часто вдохновляет окружающих на новые начинания. Им важно учиться доводить начатое до конца и развивать терпение.";
		default:
			return "Этот человек обладает глубоким пониманием мира и окружающих. Склонен к философским размышлениям и часто занимается саморазвитием. Его интересы разнообразны и охватывают как научные, так и гуманитарные сферы. Такие люди часто становятся учителями и наставниками, помогая другим найти свой путь.";
	}
};

const interpretHealth = (count) => {
	switch (count) {
		case 0:
			return "Слабый, подвержен болезням, особенно если в матрице много двоек. Таким людям важно заботиться о своем здоровье и избегать переутомления. Они могут часто болеть простудными заболеваниями и нуждаются в регулярных медицинских осмотрах. Им следует уделять внимание укреплению иммунитета и здоровому образу жизни.";
		case 1:
			return "Здоровье среднестатистического человека. Болеет, но не часто. Такие люди могут справляться с болезнями достаточно быстро, но им все же стоит следить за своим образом жизни и питанием, чтобы поддерживать здоровье на должном уровне. Регулярные физические упражнения и профилактические осмотры помогут избежать проблем.";
		case 2:
			return "Крепкий орешек. Он не простудится на сквозняке, и любая хворь быстро пройдет. Запас здоровья сказывается на сексуальной активности. Такие люди обладают хорошей выносливостью и редко обращаются к врачам. Им важно продолжать поддерживать активный образ жизни и следить за питанием.";
		case 3:
			return "Третья четверка является дополнительным бонусом ко всему тому, о чем написано в предыдущем пункте. Эти люди обладают еще большей выносливостью и энергией. Они часто занимаются спортом и ведут активный образ жизни. Им важно не переусердствовать и находить время для отдыха и восстановления.";
		case 4:
			return "Их здоровье находится на высшем уровне. Они редко болеют и быстро восстанавливаются после болезней. Такие люди часто ведут здоровый образ жизни, занимаясь спортом и правильно питаясь. Им важно поддерживать баланс между активностью и отдыхом.";
		case 5:
			return "Обладатели пяти пятерок имеют почти неистощимый запас здоровья. Они редко обращаются к врачам и могут похвастаться долгой жизнью. Эти люди часто обладают отличной физической формой и способны выдерживать большие нагрузки. Им важно продолжать следить за своим здоровьем и не забывать о профилактике.";
		default:
			return "Такие люди обладают природным иммунитетом ко многим болезням. Их организм легко адаптируется к изменениям и справляется с любыми заболеваниями. Они часто живут дольше среднего и сохраняют активность до глубокой старости. Им важно поддерживать здоровый образ жизни и следить за своим состоянием.";
	}
};

const interpretLogic = (count) => {
	switch (count) {
		case 0:
			return "Его мозг всегда в работе. Он что-то придумывает, что-то доказывает, в том числе и самому себе. Методом проб и ошибок достигает поставленной цели. Такие люди обладают высокой мотивацией и способны преодолевать любые препятствия на своем пути. Им важно учиться планированию и анализу своих действий.";
		case 1:
			return "Интуиция развита. В жизни все дается легко. Такие люди часто принимают правильные решения, не задумываясь долго. Их интуитивные способности помогают им избегать ошибок и находить верные пути. Им важно доверять своим ощущениям и развивать интуицию.";
		case 2:
			return "Хорошая интуиция. Главное – к ней прислушиваться. Часто из обладателей двух пятерок получаются грамотные следователи и юристы. Они обладают аналитическим умом и способны быстро разбираться в сложных ситуациях. Им важно развивать свои аналитические навыки и критическое мышление.";
		case 3:
			return "Совершить ошибку для них редкость, ведь они почти ясновидящие. Судьба постоянно посылает им знаки свыше, и они умело пользуются подсказками. Такие люди часто доверяют своим предчувствиям и редко ошибаются в своих решениях. Им важно продолжать развивать свою интуицию и аналитические способности.";
		case 4:
			return "У этих людей есть все шансы сделать экстрасенсорику своей профессией. Они способны видеть будущее. Им снятся вещие сны, а также быстро приходят ответы на интересующие вопросы. Их способность предугадывать события часто вызывает восхищение у окружающих. Им важно развивать свои способности и использовать их на благо.";
		case 5:
			return "Такие люди обладают уникальной способностью к предсказаниям и интуитивным знаниям. Они могут предвидеть события и часто оказываются правы в своих прогнозах. Их интуиция позволяет им принимать мудрые решения и избегать опасностей. Им важно использовать свои способности с умом и на благо окружающих.";
		default:
			return "Эти люди могут быть настоящими медиумами. Они ощущают и понимают то, что скрыто от других. Их способности к экстрасенсорике позволяют им помогать людям и находить ответы на сложные вопросы. Они часто становятся духовными наставниками и целителями. Им важно продолжать развивать свои способности и использовать их на благо общества.";
	}
};

const interpretLabor = (count) => {
	switch (count) {
		case 0:
			return "Этот человек может испытывать трудности с выполнением физической работы. Ему не хватает профессионализма и мастерства в своем деле. Возможно, он предпочитает интеллектуальный труд или работу, не связанную с физическими усилиями. Идеальный вариант – это труд, не связанный с физической и интеллектуальной деятельностью. Блогер – отличный вариант. Им важно находить занятия, которые приносят удовлетворение и не требуют значительных физических усилий.";
		case 1:
			return "Обладатель одной шестерки имеет базовый уровень профессионализма и способности к физическому труду. Он способен выполнять работу на среднем уровне и стремится к улучшению своих навыков. Но не ставит работу целью своей жизни. У него есть более важные задачи. Если будет возможность использовать свое время, он может попробовать улучшить свои навыки, но скорее всего потратит его на соцсети или прогулку. Такой человек не отчаивается. Вселенная все равно каждый раз дает ему средства для выживания.";
		case 2:
			return "Две шестерки указывают на высокий уровень мастерства и профессионализма в своем деле. Такой человек умеет работать усердно и качественно, часто достигая значительных успехов в своей профессии. Но важным условием жизни является успешное завершение своих задач за достойную плату. При слабом вознаграждении такой человек будет работать на уровне этого вознаграждения. Достойный труд за достойную плату – его девиз.";
		case 3:
			return "Три шестерки свидетельствуют о выдающемся профессионализме и способности к физическому труду. Эти люди часто становятся экспертами в своей области, демонстрируя высокую производительность и умение. Эти люди редко ошибаются в своих действиях, но часто делают слишком быстрые выводы и ошибаются в своих действиях. За это постоянно себя корят, но продолжают ошибаться. Но это им простительно. Они знают, что выполнят эту работу лучше других.";
		case 4:
			return "Четыре шестерки указывают на чрезвычайно высокий уровень мастерства и профессионализма. Такие люди способны выполнять самые сложные задачи, их труд ценится и уважается в любой сфере деятельности. Часто это мастерство уходит в бизнес или стартапы. Эти люди часто становятся экспертами в любой интересной области. Часто они становятся менеджерами высшего уровня, заядлыми карьеристами.";
		case 5:
			return "Пять шестерок в матрице указывают на уникальные способности к физическому труду и профессионализму. Эти люди могут достигать невероятных высот в своей профессии, проявляя исключительное мастерство и преданность делу. Такие люди смело могут открывать бизнес или мастерские. Им можно доверить управление отделами или филиалами компаний. Им стоит задуматься о карьере в IT или торговле на бирже, их ждет неминуемый успех.";
		default:
			return "Крайне редкие варианты. Это гении в своем роде. Они могут быть настоящими первооткрывателями и способны к технической революции. Идеальные юристы, которые могут смотреть свысока на государство. Если такой человек в торговле, то скорее всего он банкир или играет на бирже. Редкие люди с уникальными чертами, настолько уникальные, что они даже не могут объяснить, как выполняют свою работу.";
	}
};

const interpretLuck = (count) => {
	switch (count) {
		case 0:
			return "Этот человек может испытывать недостаток везения в материальном мире. Ему трудно взаимодействовать с высшими силами и интуицией. Однако, он может компенсировать это упорным трудом и настойчивостью. Он не ставит работу целью своей жизни. Удача ему улыбается редко, но он привык игнорировать этот недостаток. Он сам себе хозяин и не просит подачек с небес.";
		case 1:
			return "Обладатель одной семерки имеет средний уровень везения и интуиции. Ему часто везет в делах, связанных с материальным миром, и он умеет находить правильные решения благодаря интуитивному подходу. К удаче он относится как к случайности. Повезло – и хорошо. Однако, он не полагается на удачу при выборе решения своего вопроса.";
		case 2:
			return "Две семерки указывают на высокий уровень удачи и интуиции. Такие люди часто везучи в финансовых делах и умеют чувствовать правильные моменты для принятия решений. Им часто снятся вещие сны, они часто чувствуют дежавю и способны знать туманное будущее. Они не могут это контролировать, но научились чувствовать потоки энергии, которые влияют на их жизнь.";
		case 3:
			return "Три семерки свидетельствуют о чрезвычайно высоком уровне удачи и интуиции. Эти люди способны находить выход из самых сложных ситуаций, их интуиция практически никогда не подводит. Они могут видеть не только вещие сны, но и туманное будущее. Они сами способны трактовать знаки. Там, где обычные люди видят птицу в небе, они могут увидеть знак свободы и решимости к действию. И действительно такие действия часто приводят к успеху.";
		case 4:
			return "Четыре семерки указывают на уникальную способность к взаимодействию с высшими силами и невероятное везение. Эти люди обладают природной интуицией, которая помогает им достигать успеха в любом начинании. Госпожа удача – их верная подруга. Им часто везет в делах, связанных с материальным миром. Если в магазине останется одно мороженое, то это мороженое не будет продано, а дождется нашего везунчика. Они могут взаимодействовать с высшими силами и интуицией на уровне чувств и эмоций.";
		case 5:
			return "Пять семерок в матрице указывают на исключительное везение и способность к интуитивному взаимодействию с окружающим миром. Эти люди часто становятся успешными предпринимателями или занимаются духовными практиками, доверяя своим внутренним ощущениям. Это прекрасные учителя. Они чувствуют удачу, для них она материальна. Они могут ей управлять, но понимают эту ценность и не злоупотребляют. Они могут взаимодействовать с высшими силами своими мыслями и эмоциями.";
		default:
			return "Редкие случаи с числом 6+: Это гении в своем роде. Они удачливы во всем и всегда. Все дается легко и бесплатно. Они с удачей друзья. Для таких людей она материальна. Они могут взаимодействовать с высшими силами обычными словами. Если бы другие числа в матрице были не столь низкими, они могли бы претендовать на высшие политические должности.";
	}
};

const interpretDuty = (count) => {
	switch (count) {
		case 0:
			return "Чувство долга и ответственности может быть недостаточно развито. Такие люди могут испытывать трудности в соблюдении обещаний и обязательств. Однако, они могут работать над этим, стремясь к большей порядочности и ответственности. Постепенно развивая свои навыки, они могут достичь высокого уровня дисциплины.";
		case 1:
			return "Обладатель одной восьмерки имеет базовое чувство долга и ответственности. Он старается быть порядочным и выполняет свои обязательства, хотя иногда может испытывать сомнения. Старательно работает над собой, чтобы укрепить свою внутреннюю дисциплину и надежность. Со временем он может стать примером для других.";
		case 2:
			return "Две восьмерки указывают на высокий уровень чувства долга и ответственности. Такие люди ответственны и порядочны, их внутреннее чувство справедливости помогает им поддерживать хорошие отношения с окружающими. Их порядочность и честность часто становятся примером для других. Они могут заниматься общественной деятельностью и помогать окружающим.";
		case 3:
			return "Три восьмерки свидетельствуют о чрезвычайно высоком уровне ответственности и порядочности. Эти люди всегда выполняют свои обещания и обладают сильной внутренней совестью. Их чувство долга является основополагающим в их жизни, и они часто выступают в роли наставников и лидеров.";
		case 4:
			return "Четыре восьмерки указывают на уникальное чувство долга и ответственности. Такие люди обладают глубокой связью с родителями и социумом, их порядочность и честность вызывают уважение. Они часто принимают на себя важные социальные роли и помогают поддерживать порядок в сообществе. Им важно продолжать развивать свои навыки и знания.";
		default:
			return "Пять и более восьмерок в матрице указывают на исключительное чувство долга и ответственности. Эти люди всегда выполняют свои обязательства и обладают глубокой порядочностью и совестью. Их связи с родителями и социумом являются чрезвычайно крепкими. Они могут стать лидерами в своем окружении благодаря своей надежности и честности. Им важно использовать свои способности на благо общества.";
	}
};

const interpretMemory = (count) => {
	switch (count) {
		case 0:
			return "Нет цифры 9: Человек может испытывать трудности с запоминанием информации и аналитическим мышлением. Ему нужно больше времени и усилий для анализа и понимания сложных концепций. Однако, он может развивать эти навыки через практику и обучение. Постоянное совершенствование поможет улучшить его когнитивные способности. Ему важно находить подходящие методики обучения и практиковаться в запоминании.";
		case 1:
			return "Число 1: Обладатель одной девятки имеет базовый уровень памяти и аналитического мышления. Он способен запоминать важную информацию и анализировать её, но может нуждаться в дополнительных усилиях для более глубокого понимания. Систематическое обучение и практика помогут ему развивать свои умственные способности. Такие люди могут стать хорошими специалистами в своей области.";
		case 2:
			return "Число 2: Две девятки указывают на хороший уровень памяти и аналитического мышления. Такие люди обладают способностью к ясновидению и состраданию, что помогает им делать выводы на основе опыта и рассудительности. Они часто обладают хорошей интуицией и могут быстро находить решения для сложных задач. Им важно продолжать развивать свои навыки и использовать их на благо.";
		case 3:
			return "Число 3: Три девятки свидетельствуют о чрезвычайно высоком уровне памяти и аналитических способностей. Эти люди способны быстро усваивать информацию и применять её на практике, их аналитическое мышление помогает им находить решения для сложных задач. Их когнитивные способности делают их ценными в любой области. Им важно использовать свои таланты на благо общества и продолжать саморазвитие.";
		case 4:
			return "Число 4: Четыре девятки указывают на уникальные способности к запоминанию и анализу. Такие люди обладают феноменальной памятью и способны предвидеть события благодаря своему ясновидению и глубокой интуиции. Они часто становятся экспертами в своей области благодаря своим исключительным умственным способностям. Им важно использовать свои знания и навыки на благо общества и продолжать развивать свои таланты.";
		default:
			return "Число 5+: Пять и более девяток в матрице указывают на исключительные умственные способности и память. Эти люди обладают невероятной способностью к ясновидению и состраданию, их аналитические навыки помогают им в любой сфере деятельности. Они могут стать лидерами мнений благодаря своей проницательности и мудрости. Им важно продолжать развивать свои таланты и использовать их на благо общества.";
	}
};
const textAbaut = `Основные концепции матрицы Пифагора:
Дата рождения: Основой для построения матрицы служит дата рождения человека.
Дополнительные числа: Из даты рождения выводятся дополнительные числа, которые также включаются в матрицу в расчете комбинаций.
Ячейки матрицы: Матрица состоит из девяти ячеек, каждая из которых отражает определенные качества личности:

Характер (1): Жизненная стойкость, волевые качества.
Энергия (2): Энергетические ресурсы, выносливость.
Интерес (3): Познавательный потенциал, смекалка.
Здоровье (4): Физическая выносливость, работоспособность.
Логика (5): Способность к логическому мышлению, интуиция.
Труд (6): Профессионализм, трудоспособность.
Удача (7): Везение, мудрость.
Долг (8): Чувство долга, ответственность.
Память (9): Ум, память, способность к анализу.

Используем оснвные числа для построения матрицы:
1: Первое число: складываем все цифры без нулей.
2: Второе число: складываются цифры первого.
3: Третье число: первую цифру из общей даты рождения умножаем на 2.
4: Вычитаем получившуюся цифру из суммы пункта два.
5: Четвертое число: складываем цифры третьего числа.
6: Получились все необходимые цифры для внесениях их в квадрат. 
Наша матрица готова. Получем 9-квадратов в каждом по 9 цифр комбинаций. Используем базу данных всех комбинаций. Подставляем нужные числа в матрицу.
`;

module.exports = {
	interpretCharacter,
	interpretEnergy,
	interpretInterest,
	interpretHealth,
	interpretLogic,
	interpretLabor,
	interpretLuck,
	interpretDuty,
	interpretMemory,
	textAbaut,
};
