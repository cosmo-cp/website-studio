---
sidebar_position: 5
---

# Troubleshooting

If Cosmo Studio isn’t behaving as expected, use the checks below to narrow down the issue.

## Provider connection issues

- Confirm your API key is valid and has not expired.
- Verify network connectivity and firewall rules.
- Make sure you selected a model supported by the provider.

## Messages not saving

- Check local storage permissions on your device.
- Ensure you are not running in a restricted filesystem environment.

## Slow responses

- Try a smaller model or reduce prompt length.
- Check provider status pages for outages.

## Still stuck?

Search [existing issues](https://github.com/cosmo-cp/cosmo-studio/issues) or contact [support@cosmocp.com](mailto:support@cosmocp.com). Include your Cosmo version, OS, steps to reproduce, and the exact error. Logs or screenshots can help, but remove API keys, private conversations, and sensitive paths before sharing them.

### Logs Location

- macOs: /Users/&lt;Username&gt;/Library/Application Support/CosmoStudio/logs
- Windows: C:\Users\\&lt;Username&gt;\AppData\Roaming\CosmoStudio\logs
- Linux: Check the application logs under your user configuration directory; the exact location depends on your environment.
