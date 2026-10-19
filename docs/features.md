---
sidebar_position: 4
---

# Features

Cosmo Studio focuses on speed, clarity, and control. Below is a practical overview of the core capabilities you can expect today.

## Multi-provider support

Connect multiple AI providers and switch between them without changing tools. Cosmo Studio supports a vast array of models:

- **Major Providers**: OpenAI, Anthropic, Google Gemini.
- **High Performance**: Groq, xAI (Grok).
- **Open Source & Local**: Ollama, LMStudio, HuggingFace, Mistral.
- **Specialized Search & Reasoning**: Perplexity, DeepSeek, Moonshot, Cohere.

## Personas 👥

Create and switch between specialized **Personas** to give your AI assistants unique contexts, instructions, and behaviors. Whether you need a code reviewer, a creative writer, or a technical guide, Personas adapt the AI to your specific needs.

## Model Context Protocol (MCP) 🧩

Cosmo Studio supports the **Model Context Protocol**, allowing for deeper integration and richer context sharing between models and external data sources for more grounded responses.

## Agent Client Protocol (ACP) 🤖

Cosmo Studio can launch local agents that implement the [Agent Client Protocol (ACP)](https://agentclientprotocol.com/). An ACP agent runs as a local process and receives a workspace directory for its session. Cosmo streams the agent's response into chat.

### Install an agent

1. Open **Settings** and choose **Agents**.
2. Select **Registry**. Cosmo loads the public ACP registry when the dialog opens.
3. Search by agent name, description, or registry ID. Select **Refresh** to reload the registry.
4. Review the distribution type and version. Select **Install** for an entry marked `npx` or `uvx`.
5. After installation, use **Test connection** to check whether Cosmo can initialize an ACP session.

Entries marked **Manual** (such as binary distributions) cannot be installed from the registry dialog in this version. The Settings screen can edit existing agent records, but does not currently provide a custom-agent creation form. Installable registry entries are the setup path exposed in this UI.

### Configure and enable an agent

In **Settings → Agents**, use the **On** switch to enable an agent. Disabled agents cannot be started from chat. Use the edit button to review or change the agent's name, command, arguments, default workspace, and authentication method ID.

Arguments must be a JSON array of strings, for example:

```json
["--stdio"]
```

To replace environment values, enter a JSON object of strings, for example:

```json
{"API_TOKEN":"replace-with-your-token"}
```

Leave the replacement environment field blank to keep the stored values. Cosmo stores agent environment values in the backend and shows variable names in the management screen, not their values. Only configure agents you trust.

**Test connection** starts an ACP session and reports whether initialization succeeds. If it fails, check the command and arguments, required runtime, authentication setup, and workspace.

### Use an agent in chat

1. Open a chat and switch the composer runtime from **Model** to **Agent**.
2. Choose an enabled agent from the agent selector.
3. Enter a workspace path in the composer, or use the agent's configured default workspace.
4. Enter a prompt and send it.

Quotes are useful when the agent name contains spaces. The name must match an agent in Settings. Cosmo removes the directive before sending the remaining prompt to the agent. A workspace path is required unless the agent has a default workspace configured.

### Manage and troubleshoot agents

- **Test connection** checks whether Cosmo can initialize an ACP session.
- **On** enables or disables the agent for chat.
- **Edit** changes the command, arguments, workspace, authentication method ID, description, or replacement environment values.
- **Delete** removes the agent definition from Cosmo. It does not uninstall its package or executable.

| Problem | What to check |
| --- | --- |
| Agent is missing from the selector | Confirm it is enabled in **Settings → Agents** and reload the chat if needed. |
| Chat asks for a workspace path | Enter a path in the composer or set a default workspace in the agent's edit dialog. |
| Registry entry shows **Manual** | That distribution type cannot be installed from this dialog in this version. |
| Test connection fails | Confirm the command is available to Cosmo, review arguments and authentication, and try a valid workspace. |
| Agent cannot access project files | Check the workspace path and local user permissions. |

ACP agents execute locally with access to the configured workspace and permissions granted by their runtime. Review an agent's source and requirements before installing or running it.

## Commands ⌨️

Navigate with speed using our keyboard-driven **Commands** interface. Quickly navigate through frequently used prompts and actions.

## Enhanced Chat Experience 💬

A clean, distraction-free interface with advanced control:

- **Reasoning Transparency**: Visible "thinking" process for reasoning-enabled models.
- **Model Labels**: Clearly see which model generated each message.
- **Streaming Control**: Stop model responses mid-stream with a single click.
- **Token Tracking**: Monitor token consumption for every model directly in the chat.
- **Markdown Support**: Full Markdown rendering, including code blocks, tables, and latex.

## Local-first history 📜

Your conversations are stored locally, making it easy to revisit past work without uploading content to a third-party service by default.

## Provider management 🛠️

Add, edit, and remove providers with simple configuration flows. Keep keys organized and update settings when your needs change.

## Cross-platform availability 🖥️

Run the same experience on Windows, macOS, and Linux with consistent behavior across all supported platforms.

## Multimodal input 🖼️

Support for image-based prompts in chat for vision-capable models.
