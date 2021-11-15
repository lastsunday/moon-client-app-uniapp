import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
/**
 * 微信小程序：
 * 		1.微信切换语言：
 * 			1.简体：zh_CN
 * 			2.繁体(香港)：zh_HK
 * 			3.英文：en
 *		2.系统切换语言：
 * 			1.简体：zh_CN
 * 			2.繁体(香港)：zh_TW
 * 			3.英文：en
 * 移动浏览器(系统切换语言)：
 * 		1.简体：zh-CN
 * 		2.繁体(香港)：zh-TW
 * 		3.英文：en-US
 */
let langArray = [
	["en", "en"],
	['zh_CN', "zh_CN"],
	["zh_HK", "zh_HK"],
	["zh_TW", "zh_HK"],
];
// Map，key：语言，value：i18n.local值 = import的fileName
const languageOptionMap = new Map(langArray)

// 统一把'-'转成'_'，
const language = uni.getSystemInfoSync().language.replace('-', '_')
console.log('i18n language=' + uni.getSystemInfoSync().language)
let locale = languageOptionMap.get(language)
if (locale) {
	//skip
} else {
	if (language.indexOf('Hans') >= 0) {
		locale = 'zh_CN';
	} else if (language.indexOf('Hant') >= 0) {
		locale = 'zh_HK';
	} else if (language.startsWith('zh')) {
		locale = 'zh_CN';
	} else {
		locale = 'en';
	}
}
const i18n = new VueI18n({
	locale: locale || 'en',
	fallbackLocale: 'en',
	messages: loadMessages(locale)
})

function loadMessages(locale) {
	console.log('locale：' + locale)
	const messages = require('@/locales/' + locale)
	const result = {
		[locale]: messages.default
	}
	return result
}

// 异步加载多语言，如果需要手动切换多语言，可以调用该方法
export function loadLanguageAsync(language) {
	// 统一把'-'转成'_'，
	const lang = language.replace('-', '_')
	const locale = languageOptionMap.get(lang)
	const messages = require('@/locales/' + locale)
	i18n.setLocaleMessage(locale, messages.default)
	setI18nLanguage(locale)
}

function setI18nLanguage(locale) {
	i18n.locale = locale
}

export default i18n
