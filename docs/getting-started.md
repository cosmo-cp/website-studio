---
title: Connect AI Providers in Cosmo Studio
sidebar_label: Getting started
description: Install Cosmo Studio, connect a cloud AI provider or local Ollama model, start a chat, and learn when you need an API key.
sidebar_position: 2
---

# Getting started

This guide walks you through the fastest way to get Cosmo Studio running and connected to your preferred model provider.

## Install Cosmo Studio

Download the [installer](/) for your operating system and complete the setup. The app runs on Windows, macOS, and Linux. See the [installation guide](./installation.md) for platform-specific steps.

## Add your first provider

1. Open Cosmo Studio and go to **Settings → Providers**.
2. Choose **Add Provider**, then select a cloud provider such as OpenAI or Google Gemini, or a local runtime such as Ollama.
3. For a cloud provider, create a key in that provider's account, paste it into Cosmo Studio, and save. Read our [OpenAI key guide](/blog/how-to-get-openai-api-key) or [Gemini key guide](/blog/how-to-get-gemini-api-key) for setup and billing notes.
4. For Ollama, [install Ollama and download a model](https://ollama.com/download) on your computer first. Select Ollama in Cosmo Studio; local inference does not need a cloud API key, but it uses your machine's resources.

Cloud providers process the prompts you send and may charge for API usage. Review their current pricing and privacy policies before sharing sensitive information. The [FAQ](./faq.md) explains the differences between cloud and local models.

## Start a chat

Open **Chat**, select **New Chat**, choose a model available from a configured provider, and send a prompt. If a model does not appear, check the provider's connection and whether the model is available for your account.

## Customize your experience with Personas

Navigate to the **Personas** section to create specialized AI profiles. You can define custom system instructions for different tasks like coding, writing, or analysis. Use `@` in the chat input and select the persona you want to use.

## Tips for best results

- Use clear prompts with specific outcomes.
- Keep long-running threads organized by different chats.
- Review previous chats for context and reusable answers.
