import * as monaco from 'monaco-editor';

let monacoEditor;
let dotNetObjRef;

window.setDotNetObjRef	= function (ref) {
	dotNetObjRef = ref;
}

window.sendTextToCSharp = function (text) {
	dotNetObjRef.invokeMethodAsync('EditorContentChanged', text);
}

window.InitializeMonaco = function (text, language) {
	monacoEditor = monaco.editor.create(document.getElementById('codeEditor'), {
		value: text,
		language: language,
		automaticLayout: true,
		wordWrap: "on"
	});

	monacoEditor.onDidChangeModelContent(function (event) {
		window.sendTextToCSharp(monacoEditor.getValue());
	});
}

window.SetMonacoContent = function (text) {
	monacoEditor.setValue(text);
}

window.GetMonacoContent = function () {
	return monacoEditor.getValue();
}

window.GetMonacoLanguages = function () {
	return monaco.languages.getLanguages();
}

window.SetMonacoLanguage = function (language) {
	const model = monacoEditor.getModel();

	monaco.editor.setModelLanguage(model, language);
}

window.ToggleMonacoWordwrap = function (value) {
	let wrap = "off";

	if (value)
		wrap = "on";

	monacoEditor.updateOptions({ wordWrap: wrap });
}

window.FormatMonacoEditors = async function () {
	const model = monacoEditor.getModel();
	const language = model.getLanguageId();

	if (language === 'json') {
		try {
			JSON.parse(model.getValue());
		} catch (e) {
			return 'Could not format: editor contains invalid JSON.';
		}
	}

	await monacoEditor.getAction('editor.action.formatDocument')?.run();

	return '';
}