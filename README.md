React courses

##HT1 Реализовать список комментов для статьи, показывать/скрывать его по клику на кнопку,
 на которой должен меняться текст

##HT2.1 Вынести функционал аккордеона в декоратор
##HT2.2 Добавить в него возможность закрыть статью при повторном клике
##HT2.3 Написать для всего propTypes

##HT3.1 Подключить https://github.com/gpbl/react-day-picker с возможностью отображения промежутка дат, выводить этот промежуток на экран
##HT3.2 Создать в CommentList форму добавления нового коммента(user, text), без самого функционала добавления
##HT3.3 Добавить валидацию (подсвечивать красным инпут, если там < 5 или > 15 символов для имени и <20 или >50 для текста)

##HT4.1 Поместить состояние фильтров в стор
##HT4.2 Реалзовать фильрацию статей(попадают в промежуток дат и выбраны в комбобоксе), если фильтр не активен - не учитывать его

##HT5.1 Хранить статьи аналогично комментам(ключ-значение)
##HT5.2 Создать мидлвару для генерации рандомных id
##HT5.3 Реализовать функционал добавления коммента к статье

##HT6.1 Создать Record для комментария, хранить комменты в структуре аналогичной articles
##HT6.2 Реализовать загрузку комментов для статьи(при открытии списка), грузить один раз, показывать лоадер

##HT7.1 Реализовать роуты для пагинаци комментов(/comments/:page)
##HT7.2 Реализовать функционал пагианции комментов(по 5 на страницу, загружать каждую страницу только один раз), api: /api/comment?limit=5&offset=5

##HT8.1 Подготовить и прислать мне на почту список вопросов к последней встрече
##HT8.2 Починить баг с загрузкой статьи
##HT8.3 Реализовать локализацию, поместив словарь в контекст. С возможностью переключения языка