{
	"_Name": "Viajes",
	"Version": "/Viajes/Globals/AppDefinition_Version.global",
	"MainPage": "/Viajes/Pages/Main.page",
	"OnLaunch": [
		"/Viajes/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/Viajes/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/Viajes/Actions/Service/InitializeOnline.action",
	"Styles": "/Viajes/Styles/Styles.less",
	"Localization": "/Viajes/i18n/i18n.properties",
	"_SchemaVersion": "23.4"
}