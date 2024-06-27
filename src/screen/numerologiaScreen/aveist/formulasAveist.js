export default function calculateAvesticNumber(day, month, year) {
	const dateString = `${day}${month}${year}`;

	// Функция для приведения числа к однозначному
	function reduceToOneDigit(num) {
		while (num > 9) {
			let sum = 0;
			while (num > 0) {
				sum += num % 10;
				num = Math.floor(num / 10);
			}
			num = sum;
		}
		return num;
	}

	// Сложение всех цифр даты рождения
	let sum = 0;
	for (let char of dateString) {
		sum += parseInt(char, 10);
	}

	// Приведение суммы к однозначному числу
	const reducedSum = reduceToOneDigit(sum);

	// Влияние планет
	const planetInfluences = {
		1: `Солнце
    Число 1 символизирует лидерство, индивидуальность и силу воли. Люди, рожденные под влиянием этого числа, обладают выдающимися лидерскими качествами и стремлением быть первыми во всем. Они часто выступают инициаторами новых проектов и идей, обладают сильной волей и способны вдохновлять окружающих на подвиги. Их уверенность в себе и решимость позволяют им преодолевать любые препятствия на пути к цели. Солнце, связанное с этим числом, усиливает эти качества, добавляя энергии, яркости и жизненной силы.

Позитивные качества:

Лидерские качества:
Люди, связанные с числом 1, часто занимают лидерские позиции и способны вести за собой других. Они уверены в себе и обладают способностью принимать быстрые и правильные решения.
Самостоятельность:
Такие люди предпочитают действовать самостоятельно, не полагаясь на помощь других. Они независимы и способны справляться с любыми трудностями.
Творческое мышление:
Их умы всегда полны новыми идеями и планами. Они часто являются инициаторами инновационных проектов и не боятся экспериментировать.

Отрицательные качества:

Эгоизм:
Из-за своей уверенности в себе, они могут иногда проявлять эгоистичное поведение, не учитывая интересы и чувства окружающих.
Нетерпеливость:
Люди с числом 1 могут быть нетерпеливыми и требовательными. Они хотят, чтобы все происходило по их плану и в их темпе.
Скрытая уязвимость:
Несмотря на внешнюю уверенность, они могут быть чувствительны к критике и негативным мнениям, хотя и стараются это не показывать.`,
		2: `Луна
    Число 2 символизирует эмоциональность, чувствительность и интуицию. Люди, рожденные под влиянием этого числа, обладают сильной эмоциональной связью с окружающими и способны глубоко понимать чувства других. Они часто действуют на основе интуиции и обладают способностью к эмпатии. Луна, связанная с этим числом, усиливает их эмоциональную природу и интуитивные способности, добавляя мягкости и восприимчивости.

Позитивные качества:

Чувствительность:
Люди с числом 2 обладают высокой чувствительностью и способны тонко воспринимать изменения в настроениях и эмоциях окружающих.
Интуиция:
Они часто принимают решения, основываясь на своей интуиции, которая редко их подводит.
Сотрудничество:
Такие люди предпочитают работать в команде и обладают способностью находить общий язык с разными людьми.

Отрицательные качества:

Неуверенность:
Из-за своей эмоциональности, они могут быть неуверенными в своих силах и часто сомневаться в принятии решений.
Излишняя чувствительность:
Высокая чувствительность может приводить к тому, что они остро реагируют на критику и негативные события.
Зависимость от окружающих:
Они могут быть склонны полагаться на мнение и поддержку других, что иногда мешает им действовать самостоятельно.`,
		3: `Марс
    Число 3 символизирует энергию, активность и решительность. Люди, рожденные под влиянием этого числа, обладают сильной внутренней энергией и стремлением к действию. Они уверены в себе, решительны и обладают способностью быстро принимать решения. Марс, связанный с этим числом, усиливает их активность и стремление к победе, добавляя им смелости и настойчивости.

Позитивные качества:

Энергичность:
Люди с числом 3 полны энергии и энтузиазма, что помогает им достигать поставленных целей.
Решительность:
Они обладают способностью быстро и уверенно принимать решения, не боясь трудностей.
Стремление к победе:
Такие люди всегда стремятся быть первыми и достигать высоких результатов.

Отрицательные качества:

Импульсивность:
Из-за своей активности и стремления к действиям, они могут принимать импульсивные решения, не обдумав все последствия.
Агрессивность:
В некоторых ситуациях их энергия может проявляться в виде агрессии и конфликта.
Нетерпеливость:
Люди с числом 3 могут быть нетерпеливыми и требовательными к окружающим.`,
		4: `Меркурий
    Число 4 символизирует разум, аналитические способности и практичность. Люди, рожденные под влиянием этого числа, обладают высоким интеллектом и склонны к аналитическому мышлению. Они практичны, рациональны и умеют планировать свои действия. Меркурий, связанный с этим числом, усиливает их умственные способности и коммуникативные навыки, добавляя им логики и ясности мысли.

Позитивные качества:

Аналитические способности:
Люди с числом 4 обладают способностью анализировать ситуацию и находить оптимальные решения.
Практичность:
Они практичны и рациональны, что помогает им эффективно управлять ресурсами и временем.
Коммуникативные навыки:
Такие люди обладают хорошими коммуникативными навыками и способны легко находить общий язык с окружающими.

Отрицательные качества:

Склонность к критике:
Из-за своей аналитичности, они могут быть склонны к излишней критике и замечаниям.
Жесткость:
В некоторых ситуациях их рациональность может проявляться в виде жесткости и негибкости.
Скрытая тревожность:
Несмотря на внешнюю уверенность, они могут переживать внутреннюю тревожность и беспокойство.`,
		5: `Юпитер
    Число 5 символизирует расширение, философию и путешествия. Люди, рожденные под влиянием этого числа, обладают стремлением к познанию и исследованию мира. Они любознательны, обладают философским складом ума и стремятся к саморазвитию. Юпитер, связанный с этим числом, усиливает их стремление к росту и развитию, добавляя им оптимизма и щедрости.

Позитивные качества:

ЛюбознательностьЛюди с числом 5 постоянно стремятся к новым знаниям и опыту.
Оптимизм:
Они обладают жизнерадостным характером и верят в лучшее будущее.
Щедрость:
Такие люди щедры и готовы делиться своими знаниями и ресурсами с другими.

Отрицательные качества:

Непостоянство:
Из-за своей любознательности, они могут быть склонны к непостоянству и частым изменениям интересов.
Безрассудство:
В некоторых ситуациях их стремление к новым опытам может приводить к безрассудным поступкам.
Излишняя философичность:
Иногда их философский подход к жизни может приводить к излишней абстракции и отрыву от реальности.`,
		6: `Венера
    Число 6 символизирует гармонию, красоту и любовь. Люди, рожденные под влиянием этого числа, обладают тонким чувством прекрасного и стремятся к гармоничным отношениям. Они ценят красоту во всем и стремятся к созданию уютной и приятной атмосферы вокруг себя. Венера, связанная с этим числом, усиливает их стремление к любви и гармонии, добавляя им обаяния и изящества.

Позитивные качества:

Стремление к гармонии:
Люди с числом 6 стремятся к гармоничным отношениям и спокойствию в жизни.
Чувство прекрасного:
Они обладают тонким вкусом и ценят красоту во всех ее проявлениях.
Забота:
Такие люди заботливы и всегда готовы помочь окружающим.

Отрицательные качества:

Излишняя эмоциональность:
Из-за своей чувствительности они могут быть слишком эмоциональными и восприимчивыми.
Склонность к идеализации:
Они могут идеализировать окружающих и ситуациях, что иногда приводит к разочарованиям.
Зависимость от других:
Люди с числом 6 могут быть склонны полагаться на других в поиске гармонии и счастья.`,
		7: `Сатурн
    Число 7 символизирует мудрость, духовность и исследование. Люди, рожденные под влиянием этого числа, обладают глубоким пониманием мира и стремятся к духовному росту. Они часто занимают позиции учителей и наставников. Сатурн, связанный с этим числом, усиливает их стремление к познанию и мудрости, добавляя им терпения и дисциплины.

Позитивные качества:

Мудрость:
Люди с числом 7 обладают глубокими знаниями и стремятся делиться ими с окружающими.
Духовность:
Они склонны к духовным практикам и поиску смысла жизни.
Терпение:
Такие люди терпеливы и обладают высокой самодисциплиной.

Отрицательные качества:

Изолированность:
Из-за своей склонности к размышлениям они могут быть склонны к изоляции от общества.
Строгость:
В некоторых ситуациях их дисциплина может проявляться в виде излишней строгости и жесткости.
Скрытая эмоциональность:
Несмотря на внешнюю мудрость, они могут переживать сильные внутренние эмоции, которые скрывают от окружающих.`,
		8: `Уран
    Число 8 символизирует изменения, инновации и непредсказуемость. Люди, рожденные под влиянием этого числа, обладают стремлением к новаторству и переменам. Они открыты для новых идей и не боятся идти против устоявшихся правил. Уран, связанный с этим числом, усиливает их стремление к изменениям и независимости, добавляя им оригинальности и непредсказуемости.

Позитивные качества:

Оригинальность:
Люди с числом 8 полны новых идей и нестандартных решений.
Независимость:
Они стремятся к свободе и самостоятельности в своих действиях.
Инициативность:
Такие люди часто становятся инициаторами перемен и инноваций.

Отрицательные качества:

Непредсказуемость:
Из-за своей стремительности к переменам они могут быть непредсказуемыми и нестабильными.
Склонность к риску:
В некоторых ситуациях их стремление к новаторству может приводить к рискованным поступкам.
Непостоянство:
Они могут быть склонны к частым изменениям планов и интересов.`,
		9: `Нептун
    Число 9 символизирует мечты, творчество и духовность. Люди, рожденные под влиянием этого числа, обладают богатым воображением и стремятся к самовыражению через творчество. Они часто увлекаются искусством и духовными практиками. Нептун, связанный с этим числом, усиливает их творческий потенциал и интуитивные способности, добавляя им мистичности и глубины.

Позитивные качества:

Творчество:
Люди с числом 9 обладают ярким воображением и стремятся выражать себя через искусство.
Духовность:
Они склонны к духовным практикам и поиску высшего смысла.
Сострадание:
Такие люди часто проявляют сочувствие и стремятся помогать другим.

Отрицательные качества:

Склонность к иллюзиям:
Из-за своей мечтательности они могут создавать иллюзии и уходить от реальности.
Неопределенность:
Они могут быть склонны к колебаниям и неопределенности в своих решениях.
Уязвимость:
Люди с числом 9 могут быть чувствительны к внешним воздействиям и легко ранимы.`,
	};

	const planet = planetInfluences[reducedSum] || "Неизвестная планета";

	// Определение циклов (пример для трех циклов)
	const cycles = {
		1: `Цикл формирования
    В этом цикле закладываются основы и фундамент будущих достижений. Люди, находящиеся в этом цикле, часто сталкиваются с новыми вызовами и возможностями для роста. Это время, когда необходимо проявлять инициативу и брать на себя ответственность за свое развитие. Важно сосредоточиться на построении прочной основы для будущих успехов, активно учиться и накапливать опыт. Цикл формирования требует от людей настойчивости, терпения и готовности к изменениям, поскольку именно в этот период закладываются ключевые принципы и ценности, которые будут определять их дальнейший путь.

    В этом цикле также важно уделять внимание саморазвитию и личностному росту. Люди должны стремиться к новым знаниям, улучшать свои навыки и укреплять свои слабые стороны. Важным аспектом является готовность к переменам и адаптация к новым условиям. Этот период может быть наполнен испытаниями, но преодоление трудностей закладывает основу для будущих достижений и успехов. Люди, проходящие через этот цикл, должны быть готовы к интенсивной работе и самоотдаче, что принесет плоды в будущем.`,

		2: `Продуктивный цикл
    В этом цикле происходит активная реализация планов и идей, заложенных в предыдущем этапе. Люди, находящиеся в продуктивном цикле, часто испытывают подъем сил и энергии, что позволяет им добиваться значительных успехов. Это время активной деятельности, когда необходимо максимально использовать все накопленные знания и навыки. Важно ставить перед собой амбициозные цели и стремиться к их достижению, проявляя настойчивость и целеустремленность.

    Продуктивный цикл требует от людей умения эффективно управлять своими ресурсами и временем. Важно сосредоточиться на приоритетных задачах и не отвлекаться на второстепенные дела. В этот период люди могут достичь значительных результатов, если будут действовать планомерно и систематически. Успехи, достигнутые в продуктивном цикле, могут существенно повлиять на дальнейшую карьеру и личную жизнь. Люди должны быть готовы к высокой нагрузке, но при этом не забывать о необходимости поддерживать баланс между работой и личной жизнью.`,

		3: `Результативный цикл
    В этом цикле люди пожинают плоды своих предыдущих усилий и трудов. Это время, когда результаты работы становятся очевидными, и можно наслаждаться достигнутыми успехами. Люди, находящиеся в результативном цикле, часто испытывают удовлетворение от выполненной работы и признание своих заслуг. Важно правильно оценивать достигнутые результаты и использовать их для дальнейшего роста и развития.

    Результативный цикл также является периодом анализа и рефлексии. Люди должны подводить итоги своей деятельности, выявлять сильные и слабые стороны, чтобы в будущем улучшить свою работу. Важно не останавливаться на достигнутом, а продолжать стремиться к новым вершинам. Этот период может стать временем наград и признаний, но также требует умения сохранять достигнутые позиции и готовности к новым вызовам. Люди должны быть внимательны к своим достижениям и использовать их для укрепления своей позиции в будущем.`,
	};

	const cycle = cycles[Math.ceil(reducedSum / 3)] || "Неизвестный цикл";

	return {
		number: reducedSum,
		planet: planet,
		cycle: cycle,
	};
}

export const about = `Согласно авестийской нумерологии, не только числа даты рождения и имени, а каждое число, которое появляется в жизни человека влияет на его жизнь, определяя тем самым как исход какой-то ситуации, так и возможность повлиять на жизнь (естественно, к лучшему).

Поэтому для каждого человека есть числа запретные, несущие зло и неудачу, а есть числа желанные, несущие удачу и счастье.
Ну а раз уж есть числа, то, конечно же есть и слова. Ведь любое слово можно оцифровать с помощью нумерологического алфавита, получив его числовое значение.

Вторая составляющая авестийской нумерологии – это число сущности, или числовая мандала. Строится она на основе чисел имени и даты рождения человека. Строится в рабочем квадрате, который разбит на 9 ячеек.`;