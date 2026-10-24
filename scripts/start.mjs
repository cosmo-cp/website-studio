// Keep development client modules separate from production-only analytics modules.
process.env.DOCUSAURUS_GENERATED_FILES_DIR_NAME ??= '.docusaurus/dev';
process.argv.splice(2, 0, 'start');
await import('@docusaurus/core/bin/docusaurus.mjs');
