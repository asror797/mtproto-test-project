const districts = [{"id":"15","region_id":"1","name_uz":"Amudaryo tumani","name_oz":"Амударё тумани"},{"id":"16","region_id":"1","name_uz":"Beruniy tumani","name_oz":"Беруний тумани"},{"id":"17","region_id":"1","name_uz":"Kegayli tumani","name_oz":"Кегайли тумани"},{"id":"18","region_id":"1","name_uz":"Qonliko‘l tumani","name_oz":"Қонликўл тумани"},{"id":"19","region_id":"1","name_uz":"Qorao‘zak tumani","name_oz":"Қораўзак тумани"},{"id":"20","region_id":"1","name_uz":"Qo‘ng‘irot tumani","name_oz":"Қўнғирот тумани"},{"id":"21","region_id":"1","name_uz":"Mo‘ynoq tumani","name_oz":"Мўйноқ тумани"},{"id":"22","region_id":"1","name_uz":"Nukus tumani","name_oz":"Нукус тумани"},{"id":"23","region_id":"1","name_uz":"Nukus shahri","name_oz":"Нукус шаҳри"},{"id":"24","region_id":"1","name_uz":"Taxtako‘pir tumani","name_oz":"Тахтакўпир тумани"},{"id":"25","region_id":"1","name_uz":"To‘rtko‘l tumani","name_oz":"Тўрткўл тумани"},{"id":"26","region_id":"1","name_uz":"Xo‘jayli tumani","name_oz":"Хўжайли тумани"},{"id":"27","region_id":"1","name_uz":"Chimboy tumani","name_oz":"Чимбой тумани"},{"id":"28","region_id":"1","name_uz":"Shumanay tumani","name_oz":"Шуманай тумани"},{"id":"29","region_id":"1","name_uz":"Ellikqal‘a tumani","name_oz":"Элликқалъа тумани"},{"id":"30","region_id":"2","name_uz":"Andijon shahri","name_oz":"Андижон шаҳри"},{"id":"31","region_id":"2","name_uz":"Andijon tumani","name_oz":"Андижон тумани"},{"id":"32","region_id":"2","name_uz":"Asaka tumani","name_oz":"Асака тумани"},{"id":"33","region_id":"2","name_uz":"Baliqchi tumani","name_oz":"Балиқчи тумани"},{"id":"34","region_id":"2","name_uz":"Buloqboshi tumani","name_oz":"Булоқбоши тумани"},{"id":"35","region_id":"2","name_uz":"Bo‘z tumani","name_oz":"Бўз тумани"},{"id":"36","region_id":"2","name_uz":"Jalaquduq tumani","name_oz":"Жалақудуқ тумани"},{"id":"37","region_id":"2","name_uz":"Izbosgan tumani","name_oz":"Избосган тумани"},{"id":"38","region_id":"2","name_uz":"Qorasuv shahri","name_oz":"Қорасув шаҳри"},{"id":"39","region_id":"2","name_uz":"Qo‘rg‘ontepa tumani","name_oz":"Қўрғонтепа тумани"},{"id":"40","region_id":"2","name_uz":"Marhamat tumani","name_oz":"Марҳамат тумани"},{"id":"41","region_id":"2","name_uz":"Oltinko‘l tumani","name_oz":"Олтинкўл тумани"},{"id":"42","region_id":"2","name_uz":"Paxtaobod tumani","name_oz":"Пахтаобод тумани"},{"id":"43","region_id":"2","name_uz":"Ulug‘nor tumani","name_oz":"Улуғнор тумани"},{"id":"44","region_id":"2","name_uz":"Xonabod tumani","name_oz":"Хонабод тумани"},{"id":"45","region_id":"2","name_uz":"Xo‘jaobod tumani","name_oz":"Хўжаобод тумани"},{"id":"46","region_id":"2","name_uz":"Shahrixon tumani","name_oz":"Шаҳрихон тумани"},{"id":"47","region_id":"3","name_uz":"Buxoro shahri","name_oz":"Бухоро шаҳри"},{"id":"48","region_id":"3","name_uz":"Buxoro tumani","name_oz":"Бухоро тумани"},{"id":"49","region_id":"3","name_uz":"Vobkent tumani","name_oz":"Вобкент тумани"},{"id":"50","region_id":"3","name_uz":"G‘ijduvon tumani","name_oz":"Ғиждувон тумани"},{"id":"51","region_id":"3","name_uz":"Jondor tumani","name_oz":"Жондор тумани"},{"id":"52","region_id":"3","name_uz":"Kogon tumani","name_oz":"Когон тумани"},{"id":"53","region_id":"3","name_uz":"Kogon shahri","name_oz":"Когон шаҳри"},{"id":"54","region_id":"3","name_uz":"Qorako‘l tumani","name_oz":"Қоракўл тумани"},{"id":"55","region_id":"3","name_uz":"Qorovulbozor tumani","name_oz":"Қоровулбозор тумани"},{"id":"56","region_id":"3","name_uz":"Olot tumani","name_oz":"Олот тумани"},{"id":"57","region_id":"3","name_uz":"Peshku tumani","name_oz":"Пешку тумани"},{"id":"58","region_id":"3","name_uz":"Romitan tumani","name_oz":"Ромитан тумани"},{"id":"59","region_id":"3","name_uz":"Shofirkon tumani","name_oz":"Шофиркон тумани"},{"id":"60","region_id":"4","name_uz":"Arnasoy tumani","name_oz":"Арнасой тумани"},{"id":"61","region_id":"4","name_uz":"Baxmal tumani","name_oz":"Бахмал тумани"},{"id":"62","region_id":"4","name_uz":"G‘allaorol tumani","name_oz":"Ғаллаорол тумани"},{"id":"63","region_id":"4","name_uz":"Do‘stlik tumani","name_oz":"Дўстлик тумани"},{"id":"64","region_id":"4","name_uz":"Sh.Rashidov tumani","name_oz":"Ш.Рашидов тумани"},{"id":"65","region_id":"4","name_uz":"Jizzax shahri","name_oz":"Жиззах шаҳри"},{"id":"66","region_id":"4","name_uz":"Zarbdor tumani","name_oz":"Зарбдор тумани"},{"id":"67","region_id":"4","name_uz":"Zafarobod tumani","name_oz":"Зафаробод тумани"},{"id":"68","region_id":"4","name_uz":"Zomin tumani","name_oz":"Зомин тумани"},{"id":"69","region_id":"4","name_uz":"Mirzacho‘l tumani","name_oz":"Мирзачўл тумани"},{"id":"70","region_id":"4","name_uz":"Paxtakor tumani","name_oz":"Пахтакор тумани"},{"id":"71","region_id":"4","name_uz":"Forish tumani","name_oz":"Фориш тумани"},{"id":"72","region_id":"4","name_uz":"Yangiobod tumani","name_oz":"Янгиобод тумани"},{"id":"73","region_id":"5","name_uz":"G‘uzor tumani","name_oz":"Ғузор тумани"},{"id":"74","region_id":"5","name_uz":"Dehqonobod tumani","name_oz":"Деҳқонобод тумани"},{"id":"75","region_id":"5","name_uz":"Qamashi tumani","name_oz":"Қамаши тумани"},{"id":"76","region_id":"5","name_uz":"Qarshi tumani","name_oz":"Қарши тумани"},{"id":"77","region_id":"5","name_uz":"Qarshi shahri","name_oz":"Қарши шаҳри"},{"id":"78","region_id":"5","name_uz":"Kasbi tumani","name_oz":"Касби тумани"},{"id":"79","region_id":"5","name_uz":"Kitob tumani","name_oz":"Китоб тумани"},{"id":"80","region_id":"5","name_uz":"Koson tumani","name_oz":"Косон тумани"},{"id":"81","region_id":"5","name_uz":"Mirishkor tumani","name_oz":"Миришкор тумани"},{"id":"82","region_id":"5","name_uz":"Muborak tumani","name_oz":"Муборак тумани"},{"id":"83","region_id":"5","name_uz":"Nishon tumani","name_oz":"Нишон тумани"},{"id":"84","region_id":"5","name_uz":"Chiroqchi tumani","name_oz":"Чироқчи тумани"},{"id":"85","region_id":"5","name_uz":"Shahrisabz tumani","name_oz":"Шаҳрисабз тумани"},{"id":"86","region_id":"5","name_uz":"Yakkabog‘ tumani","name_oz":"Яккабоғ тумани"},{"id":"87","region_id":"6","name_uz":"Zarafshon shahri","name_oz":"Зарафшон шаҳри"},{"id":"88","region_id":"6","name_uz":"Karmana tumani","name_oz":"Кармана тумани"},{"id":"89","region_id":"6","name_uz":"Qiziltepa tumani","name_oz":"Қизилтепа тумани"},{"id":"90","region_id":"6","name_uz":"Konimex tumani","name_oz":"Конимех тумани"},{"id":"91","region_id":"6","name_uz":"Navbahor tumani","name_oz":"Навбаҳор тумани"},{"id":"92","region_id":"6","name_uz":"Navoiy shahri","name_oz":"Навоий шаҳри"},{"id":"93","region_id":"6","name_uz":"Nurota tumani","name_oz":"Нурота тумани"},{"id":"94","region_id":"6","name_uz":"Tomdi tumani","name_oz":"Томди тумани"},{"id":"95","region_id":"6","name_uz":"Uchquduq tumani","name_oz":"Учқудуқ тумани"},{"id":"96","region_id":"6","name_uz":"Xatirchi tumani","name_oz":"Хатирчи тумани"},{"id":"97","region_id":"7","name_uz":"Kosonsoy tumani","name_oz":"Косонсой тумани"},{"id":"98","region_id":"7","name_uz":"Mingbuloq tumani","name_oz":"Мингбулоқ тумани"},{"id":"99","region_id":"7","name_uz":"Namangan tumani","name_oz":"Наманган тумани"},{"id":"100","region_id":"7","name_uz":"Namangan shahri","name_oz":"Наманган шаҳри"},{"id":"101","region_id":"7","name_uz":"Norin tumani","name_oz":"Норин тумани"},{"id":"102","region_id":"7","name_uz":"Pop tumani","name_oz":"Поп тумани"},{"id":"103","region_id":"7","name_uz":"To‘raqo‘rg‘on tumani","name_oz":"Тўрақўрғон тумани"},{"id":"104","region_id":"7","name_uz":"Uychi tumani","name_oz":"Уйчи тумани"},{"id":"105","region_id":"7","name_uz":"Uchqo‘rg‘on tumani","name_oz":"Учқўрғон тумани"},{"id":"106","region_id":"7","name_uz":"Chortoq tumani","name_oz":"Чортоқ тумани"},{"id":"107","region_id":"7","name_uz":"Chust tumani","name_oz":"Чуст тумани"},{"id":"108","region_id":"7","name_uz":"Yangiqo‘rg‘on tumani","name_oz":"Янгиқўрғон тумани"},{"id":"109","region_id":"8","name_uz":"Bulung‘ur tumani","name_oz":"Булунғур тумани"},{"id":"110","region_id":"8","name_uz":"Jomboy tumani","name_oz":"Жомбой тумани"},{"id":"111","region_id":"8","name_uz":"Ishtixon tumani","name_oz":"Иштихон тумани"},{"id":"112","region_id":"8","name_uz":"Kattaqo‘rg‘on tumani","name_oz":"Каттақўрғон тумани"},{"id":"113","region_id":"8","name_uz":"Kattaqo‘rg‘on shahri","name_oz":"Каттақўрғон шаҳри"},{"id":"114","region_id":"8","name_uz":"Qo‘shrabot tumani","name_oz":"Қўшработ тумани"},{"id":"115","region_id":"8","name_uz":"Narpay tumani","name_oz":"Нарпай тумани"},{"id":"116","region_id":"8","name_uz":"Nurabod tumani","name_oz":"Нурабод тумани"},{"id":"117","region_id":"8","name_uz":"Oqdaryo tumani","name_oz":"Оқдарё тумани"},{"id":"118","region_id":"8","name_uz":"Payariq tumani","name_oz":"Паяриқ тумани"},{"id":"119","region_id":"8","name_uz":"Pastarg‘om tumani","name_oz":"Пастарғом тумани"},{"id":"120","region_id":"8","name_uz":"Paxtachi tumani","name_oz":"Пахтачи тумани"},{"id":"121","region_id":"8","name_uz":"Samarqand tumani","name_oz":"Самарқанд тумани"},{"id":"122","region_id":"8","name_uz":"Samarqand shahri","name_oz":"Самарқанд шаҳри"},{"id":"123","region_id":"8","name_uz":"Toyloq tumani","name_oz":"Тойлоқ тумани"},{"id":"124","region_id":"8","name_uz":"Urgut tumani","name_oz":"Ургут тумани"},{"id":"125","region_id":"9","name_uz":"Angor tumani","name_oz":"Ангор тумани"},{"id":"126","region_id":"9","name_uz":"Boysun tumani","name_oz":"Бойсун тумани"},{"id":"127","region_id":"9","name_uz":"Denov tumani","name_oz":"Денов тумани"},{"id":"128","region_id":"9","name_uz":"Jarqo‘rg‘on tumani","name_oz":"Жарқўрғон тумани"},{"id":"129","region_id":"9","name_uz":"Qiziriq tumani","name_oz":"Қизириқ тумани"},{"id":"130","region_id":"9","name_uz":"Qo‘mqo‘rg‘on tumani","name_oz":"Қўмқўрғон тумани"},{"id":"131","region_id":"9","name_uz":"Muzrabot tumani","name_oz":"Музработ тумани"},{"id":"132","region_id":"9","name_uz":"Oltinsoy tumani","name_oz":"Олтинсой тумани"},{"id":"133","region_id":"9","name_uz":"Sariosiyo tumani","name_oz":"Сариосиё тумани"},{"id":"134","region_id":"9","name_uz":"Termiz tumani","name_oz":"Термиз тумани"},{"id":"135","region_id":"9","name_uz":"Termiz shahri","name_oz":"Термиз шаҳри"},{"id":"136","region_id":"9","name_uz":"Uzun tumani","name_oz":"Узун тумани"},{"id":"137","region_id":"9","name_uz":"Sherobod tumani","name_oz":"Шеробод тумани"},{"id":"138","region_id":"9","name_uz":"Sho‘rchi tumani","name_oz":"Шўрчи тумани"},{"id":"139","region_id":"10","name_uz":"Boyovut tumani","name_oz":"Боёвут тумани"},{"id":"140","region_id":"10","name_uz":"Guliston tumani","name_oz":"Гулистон тумани"},{"id":"141","region_id":"10","name_uz":"Guliston shahri","name_oz":"Гулистон шаҳри"},{"id":"142","region_id":"10","name_uz":"Mirzaobod tumani","name_oz":"Мирзаобод тумани"},{"id":"143","region_id":"10","name_uz":"Oqoltin tumani","name_oz":"Оқолтин тумани"},{"id":"144","region_id":"10","name_uz":"Sayxunobod tumani","name_oz":"Сайхунобод тумани"},{"id":"145","region_id":"10","name_uz":"Sardoba tumani","name_oz":"Сардоба тумани"},{"id":"146","region_id":"10","name_uz":"Sirdaryo tumani","name_oz":"Сирдарё тумани"},{"id":"147","region_id":"10","name_uz":"Xavos tumani","name_oz":"Хавос тумани"},{"id":"148","region_id":"10","name_uz":"Shirin shahri","name_oz":"Ширин шаҳри"},{"id":"149","region_id":"10","name_uz":"Yangiyer shahri","name_oz":"Янгиер шаҳри"},{"id":"150","region_id":"11","name_uz":"Angiren shahri","name_oz":"Ангирен шаҳри"},{"id":"151","region_id":"11","name_uz":"Bekabod tumani","name_oz":"Бекабод тумани"},{"id":"152","region_id":"11","name_uz":"Bekabod shahri","name_oz":"Бекабод шаҳри"},{"id":"153","region_id":"11","name_uz":"Bo‘ka tumani","name_oz":"Бўка тумани"},{"id":"154","region_id":"11","name_uz":"Bo‘stonliq tumani","name_oz":"Бўстонлиқ тумани"},{"id":"155","region_id":"11","name_uz":"Zangiota tumani","name_oz":"Зангиота тумани"},{"id":"156","region_id":"11","name_uz":"Qibray tumani","name_oz":"Қибрай тумани"},{"id":"157","region_id":"11","name_uz":"Quyichirchiq tumani","name_oz":"Қуйичирчиқ тумани"},{"id":"158","region_id":"11","name_uz":"Oqqo‘rg‘on tumani","name_oz":"Оққўрғон тумани"},{"id":"159","region_id":"11","name_uz":"Olmaliq shahri","name_oz":"Олмалиқ шаҳри"},{"id":"160","region_id":"11","name_uz":"Ohangaron tumani","name_oz":"Оҳангарон тумани"},{"id":"161","region_id":"11","name_uz":"Parkent tumani","name_oz":"Паркент тумани"},{"id":"162","region_id":"11","name_uz":"Piskent tumani","name_oz":"Пискент тумани"},{"id":"163","region_id":"11","name_uz":"O‘rtachirchiq tumani","name_oz":"Ўртачирчиқ тумани"},{"id":"164","region_id":"11","name_uz":"Chinoz tumani","name_oz":"Чиноз тумани"},{"id":"165","region_id":"11","name_uz":"Chirchiq shahri","name_oz":"Чирчиқ шаҳри"},{"id":"166","region_id":"11","name_uz":"Yuqorichirchiq tumani","name_oz":"Юқоричирчиқ тумани"},{"id":"167","region_id":"11","name_uz":"Yangiyo‘l tumani","name_oz":"Янгийўл тумани"},{"id":"168","region_id":"12","name_uz":"Beshariq tumani","name_oz":"Бешариқ тумани"},{"id":"169","region_id":"12","name_uz":"Bog‘dod tumani","name_oz":"Боғдод тумани"},{"id":"170","region_id":"12","name_uz":"Buvayda tumani","name_oz":"Бувайда тумани"},{"id":"171","region_id":"12","name_uz":"Dang‘ara tumani","name_oz":"Данғара тумани"},{"id":"172","region_id":"12","name_uz":"Yozyovon tumani","name_oz":"Ёзёвон тумани"},{"id":"173","region_id":"12","name_uz":"Quva tumani","name_oz":"Қува тумани"},{"id":"174","region_id":"12","name_uz":"Quvasoy shahri","name_oz":"Қувасой шаҳри"},{"id":"175","region_id":"12","name_uz":"Qo‘qon shahri","name_oz":"Қўқон шаҳри"},{"id":"176","region_id":"12","name_uz":"Qo‘shtepa tumani","name_oz":"Қўштепа тумани"},{"id":"177","region_id":"12","name_uz":"Marg‘ilon shahri","name_oz":"Марғилон шаҳри"},{"id":"178","region_id":"12","name_uz":"Oltiariq tumani","name_oz":"Олтиариқ тумани"},{"id":"179","region_id":"12","name_uz":"Rishton tumani","name_oz":"Риштон тумани"},{"id":"180","region_id":"12","name_uz":"So‘x tumani","name_oz":"Сўх тумани"},{"id":"181","region_id":"12","name_uz":"Toshloq tumani","name_oz":"Тошлоқ тумани"},{"id":"182","region_id":"12","name_uz":"Uchko‘prik tumani","name_oz":"Учкўприк тумани"},{"id":"183","region_id":"12","name_uz":"O‘zbekiston tumani","name_oz":"Ўзбекистон тумани"},{"id":"184","region_id":"12","name_uz":"Farg‘ona tumani","name_oz":"Фарғона тумани"},{"id":"185","region_id":"12","name_uz":"Farg‘ona shahri","name_oz":"Фарғона шаҳри"},{"id":"186","region_id":"12","name_uz":"Furqat tumani","name_oz":"Фурқат тумани"},{"id":"187","region_id":"13","name_uz":"Bog‘ot tumani","name_oz":"Боғот тумани"},{"id":"188","region_id":"13","name_uz":"Gurlan tumani","name_oz":"Гурлан тумани"},{"id":"189","region_id":"13","name_uz":"Qo‘shko‘pir tumani","name_oz":"Қўшкўпир тумани"},{"id":"190","region_id":"13","name_uz":"Urganch tumani","name_oz":"Урганч тумани"},{"id":"191","region_id":"13","name_uz":"Urganch shahri","name_oz":"Урганч шаҳри"},{"id":"192","region_id":"13","name_uz":"Xiva tumani","name_oz":"Хива тумани"},{"id":"193","region_id":"13","name_uz":"Xazarasp tumani","name_oz":"Хазарасп тумани"},{"id":"194","region_id":"13","name_uz":"Xonqa tumani","name_oz":"Хонқа тумани"},{"id":"195","region_id":"13","name_uz":"Shavot tumani","name_oz":"Шавот тумани"},{"id":"196","region_id":"13","name_uz":"Yangiariq tumani","name_oz":"Янгиариқ тумани"},{"id":"197","region_id":"13","name_uz":"Yangibozor tumani","name_oz":"Янгибозор тумани"},{"id":"198","region_id":"14","name_uz":"Bektimer tumani","name_oz":"Бектимер тумани"},{"id":"199","region_id":"14","name_uz":"Mirzo Ulug'bek tumani","name_oz":"Мирзо-Улугбекский район"},{"id":"200","region_id":"14","name_uz":"Mirobod tumani","name_oz":"Миробод тумани"},{"id":"201","region_id":"14","name_uz":"Olmazor tumani","name_oz":"Олмазор тумани"},{"id":"202","region_id":"14","name_uz":"Sirg'ali tumani","name_oz":"Сиргали тумани"},{"id":"203","region_id":"14","name_uz":"Uchtepa tumani","name_oz":"Учтепа тумани"},{"id":"204","region_id":"14","name_uz":"Yashnobod tumani","name_oz":"Яшнобод тумани"},{"id":"205","region_id":"14","name_uz":"Chilonzor tumani","name_oz":"Чилонзор тумани"},{"id":"206","region_id":"14","name_uz":"Shayxontohur tumani","name_oz":"Шайхонтоҳур тумани"},{"id":"207","region_id":"14","name_uz":"Yunusobod tumani","name_oz":"Юнусобод тумани"},{"id":"208","region_id":"14","name_uz":"Yakkasaroy tumani","name_oz":"Яккасарой тумани"},{"id":"209","region_id":"1","name_uz":"Taxiatosh shahri","name_oz":"Тахиатош шаҳри"},{"id":"210","region_id":"2","name_uz":"Asaka shahri","name_oz":"Асака шаҳри"},{"id":"211","region_id":"9","name_uz":"Bandixon tumani","name_oz":"Бандихон тумани"},{"id":"212","region_id":"11","name_uz":"Ohangaron shahri","name_oz":"Оҳангарон шаҳри"},{"id":"213","region_id":"11","name_uz":"Yangiyo‘l shahri","name_oz":"Янгийўл шаҳри"},{"id":"215","region_id":"11","name_uz":"Toshkent tumani","name_oz":"Тошкент тумани"},{"id":"216","region_id":"13","name_uz":"Xiva shahri","name_oz":"Хива шаҳри"},{"id":"217","region_id":"13","name_uz":"Do'stlik shahri","name_oz":"Дўстлик шаҳри\nДўстлик шаҳри"},{"id":"218","region_id":"14","name_uz":"Yangihayot tumani","name_oz":"Янгиҳаёт тумани"},{"id":"219","region_id":"13","name_uz":"Tuproqqala tumani","name_oz":"Тупроққалъа тумани"},{"id":"220","region_id":"7","name_uz":"Davlatobod tumani","name_oz":"Давлатобод тумани"},{"id":"221","region_id":"6","name_uz":"G‘ozg‘on shahri","name_oz":"Ғозғон шаҳри"},{"id":"222","region_id":"1","name_uz":"Bo‘zatov tumani","name_oz":"Бўзатов тумани"},{"id":"224","region_id":"5","name_uz":"Shahrisabz shahri","name_oz":"Шаҳрисабз шаҳри"},{"id":"225","region_id":"5","name_uz":"Ko‘kdala tumani","name_oz":"Кўкдала тумани"}]

module.exports = districts