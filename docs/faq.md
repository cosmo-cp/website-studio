---
title: LLM and Cosmo Studio FAQ
description: Clear answers about large language models, API keys, privacy, local models, and using Cosmo Studio.
sidebar_position: 6
---

# LLM and Cosmo Studio FAQ

## What is a large language model (LLM)?

An LLM is a model trained to predict and generate text from a prompt. It can summarize, draft, explain code, and answer questions, but it does not independently verify every claim it makes. Cosmo Studio is an interface for using models from different providers, not a model provider itself.

## What are tokens and a context window?

Tokens are the pieces of text a model processes; a word may use one or several tokens. The context window limits how much of your prompt, previous messages, and generated response a model can consider at once. Long conversations may reach that limit, so start a new chat or summarize earlier context when a model loses track of details. Cloud providers may bill by input and output tokens; check the model's current pricing before sending large documents.

## How do I choose an LLM for a task?

Choose based on the task, the data you can share, the model's context and capabilities, and the provider's current cost and latency. For sensitive offline work, try a local model first; for tasks requiring a particular cloud model, use that provider and review its data policy. Test important prompts on more than one model rather than assuming a larger model is always better. See [supported features](./features.md) for what the app exposes.

## What is the difference between a local model and a cloud model?

A local model runs using your own computer, for example through [Ollama](https://ollama.com/) or [LM Studio](https://lmstudio.ai/). This can avoid sending the prompt to a cloud inference provider, but it requires adequate hardware and downloaded model files. Cloud models run on the provider's infrastructure and require a network connection; prompts you submit are processed according to that provider's terms and settings. Neither choice automatically guarantees that a generated answer is accurate.

## Can an LLM hallucinate, and how do I check its answers?

Yes. Models can give plausible but incorrect facts, citations, or code. Check important claims against primary sources, test generated code, and do not treat a confident response as proof. For current events or changing prices, consult up-to-date sources directly; web search is listed as a future Cosmo feature, not a built-in source of live facts today.

## Do I need an API key, and who charges for usage?

You usually need your own API key for a cloud provider, and that provider may bill you independently of Cosmo. A chat subscription does not necessarily include API usage. Check the provider's current pricing, limits, and key permissions before using it; do not publish keys or paste them into public posts. Local inference through Ollama or LM Studio does not require a cloud inference API key, though it uses your computer's resources. Cost Intelligence is in development for Cosmo Professional; until it is available, check usage and billing with your provider. See our guides to [OpenAI API keys](/blog/how-to-get-openai-api-key) and [Gemini API keys](/blog/how-to-get-gemini-api-key).

## What is Cost Intelligence?

Cost Intelligence is a planned Cosmo Professional capability to help people understand and manage AI spending across models, agents, and tasks. The vision includes cost-effective recommendations, ways to optimize spending and safeguards for expensive or repetitive agent loops.

## How do I connect my first model in Cosmo Studio?

Install the desktop app, open **Settings → Providers**, add a supported provider, and enter its credentials if required. Then open **New Chat**, choose a model, and send a prompt. For the exact screens and download options, follow [Getting started](./getting-started.md) and [Installation](./installation.md).

## Which providers does Cosmo Studio support?

Cosmo Studio works with providers including OpenAI, Anthropic, Google Gemini, xAI, Groq, DeepSeek, Perplexity, Ollama, and LM Studio. Available models and credentials vary by provider and app version; the [features overview](./features.md) covers the currently documented integrations. Supporting a provider does not mean every model or provider feature is available in every release.

## Can I switch between multiple providers?

Yes. Configure more than one provider in **Settings → Providers** and select the model you want in chat. Different providers can have different capabilities, usage charges, privacy policies, and context limits. When comparing results, send the same task and relevant context to each model rather than assuming prior chats transfer between providers.

## Where do my prompts and chat history go?

Cosmo Studio stores your chat history locally by default and does not upload it to a separate Cosmo cloud history service. Prompts sent to a cloud model still go to the provider you selected; check that provider's retention and training controls before sharing sensitive information. For local models, review the local runtime and any tools you connect. Back up your device if you need to preserve local conversations.

## What are MCP servers and ACP agents?

[Model Context Protocol (MCP)](./features.md#model-context-protocol-mcp-) servers connect tools or data sources to a model, while [Agent Client Protocol (ACP)](./features.md#agent-client-protocol-acp-) agents run as local processes with a workspace for an agent session. Both can access resources beyond a plain chat, depending on their configuration. Review the permissions and source of any server or agent before enabling it, particularly for private files or credentials.

## Is there a mobile app or cross-device chat sync?

Not currently. Cosmo Studio supports macOS, Windows, and Linux; a mobile app and sync are roadmap items, not available features. Chats remain on the device where they were created, so keep your own backups if those conversations matter. Check [release notes](./release-notes.md) for shipped changes rather than relying on a roadmap date.
