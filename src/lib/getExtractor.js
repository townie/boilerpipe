var Boilerpipe = require('boilerpipe');

function getExtractor(extractorName) {
  'use strict';

  extractorName = extractorName.toLowerCase();

  var extractor = null;
  switch (extractorName) {
    case 'article':
      extractor = Boilerpipe.Extractor.Article;
      break;
    case 'keepeverything':
      extractor = Boilerpipe.Extractor.KeepEverything;
      break;
    case 'largestcontent':
      extractor = Boilerpipe.Extractor.LargestContent;
      break;
    case 'numwordsrules':
      extractor = Boilerpipe.Extractor.NumWordsRules;
      break;
    case 'canola':
      extractor = Boilerpipe.Extractor.Canola;
      break;
    case 'default':
      extractor = Boilerpipe.Extractor.Default;
      break;
  }

  return extractor;
}

module.exports = getExtractor;
