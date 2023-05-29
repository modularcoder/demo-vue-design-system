// build types
const path = require('path')
const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor')


const extractorConfigPath = process.env.LIB === 'next'
  ? path.resolve(__dirname, `../api-extractor-lib-next.json`)
  : path.resolve(__dirname, `../api-extractor-lib.json`)


const extractorConfig = ExtractorConfig.loadFileAndPrepare(extractorConfigPath)
const extractorResult = Extractor.invoke(extractorConfig, {
  localBuild: true,
  showVerboseMessages: true,
  // showDiagnostics: true,
})

if (extractorResult.succeeded) {
  console.log(`API Extractor completed successfully`);
  process.exitCode = 0;
} else {
  console.error(`API Extractor completed with ${extractorResult.errorCount} errors`
    + ` and ${extractorResult.warningCount} warnings`);
  process.exitCode = 1;
}
