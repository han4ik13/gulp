import replace from 'gulp-replace'; //? Поиск и замена
import gulpPlumber from 'gulp-plumber'; //? Обработка ошибок
import notify from 'gulp-notify'; //? Сообщение (подсказки)
import browserSync from 'browser-sync'; //? Локальный сервер
import newer from 'gulp-newer'; //? Проверка обновления
import gulpIf from 'gulp-if'; //? Условное ветвление

//* Экспортируем объект
export const plugins = {
	replace: replace,
	plumber: gulpPlumber,
	notify: notify,
	browserSync: browserSync,
	newer: newer,
	if: gulpIf,
};