---
title: Privacy and data in Cosmo Studio
sidebar_label: Privacy and data
sidebar_position: 7
---

# Privacy and data in Cosmo Studio

Cosmo Studio is local-first, but the services and tools you choose can receive data. This guide describes practical considerations; consult each provider's policy for its own handling and retention practices.

## Chats and model providers

Chat history is stored locally on the device. When you send a message to a cloud model, the selected provider processes the request and its contents under that provider's settings and policies. A local model can process prompts on your computer, but connected tools or services may still use the network. Review the model, provider, attachments, and conversation context before sending sensitive information.

## Credentials

Cosmo stores provider credentials for later use. In the desktop app, credentials use the operating system's encryption facility when it is available. If it is unavailable, the app falls back to base64 encoding, which is not encryption. Avoid sharing configuration files, database backups, or logs containing credentials.

## Agents and tools

ACP agents run as local processes and may access the workspace and other resources permitted to them. MCP servers and their tools may access local or remote resources depending on their configuration. Install and enable only components you trust, review their permissions and tool requests, and consult their own documentation and privacy policies.

## Removing data and getting help

You can delete individual chats in Cosmo and remove configured providers, agents, or servers from their settings. Deleting a local item does not necessarily delete copies held by a provider, connected tool, backup, or another application. Contact those services about their own retention and deletion options.

For setup and troubleshooting, see [Getting started](./getting-started.md), the [FAQ](./faq.md), and [Troubleshooting](./troubleshooting.md). When reporting a problem, remove API keys, private conversations, and sensitive paths from logs and screenshots.

## Website analytics

The Cosmo website uses analytics services. Website activity is separate from your locally stored app chat history.
