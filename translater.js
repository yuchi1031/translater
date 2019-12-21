//輸入npm install ibm-watson
//輸入npm install ibm-watson@^5.2.1

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: 'YNWXH-X_e5vSXtZ-KTFNv8GYaZUpevDKvzVDDtgGTlWN',
  }),
  url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/343d26b0-3ead-4ef8-aca6-55a01f82c9f8',
});

const translateParams = {
  text: 'Hello',//輸入翻譯文字
  modelId: 'en-zh-TW',//en是英文,zh-TW是繁體中文
};

languageTranslator.translate(translateParams)
  .then(translationResult => {
    console.log(JSON.stringify(translationResult, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  const translateParams2 = {
    text: '你好',
    modelId: 'zh-TW-en',
  };
  
  languageTranslator.translate(translateParams2)
    .then(translationResult => {
      console.log(JSON.stringify(translationResult, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });