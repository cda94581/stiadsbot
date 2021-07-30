---
title: Commands
---
## How to Read
### Command
This is the command name. This is what you enter to trigger the command.

### Aliases
Aliases can also be entered in place of the command name, so that the same result can be obtained from multiple ways.

### Usage
Usage defines how to use each item. Incorporate the prefix before. Items surrounded in angle brackets `<>` must be filled in which something. Items surrounded by square brackets `[]` are optional, the command will function without it. Items without any of those are inputted as-is. Items separated by a vertical line `|` mean either A *or* B, choose one.

### Description
This is a description about what the command does.

### Required Permissions
Some commands shouldn't be able to be executed by all members. These define the permissions the member must have in order to use the command.

### Example & Result
This is an example of the command used in action.

## List of Commands

| Command | Aliases | Usage | Description | Required Permissions | Example & Result |
| ------- | ------- | ----- | ----------- | -------------------- | ---------------- |
| `eval` | N/A | `eval <JavaScript Code>` | Execute a line of JavaScript code, can be useful for single-use configuration | Administrator | WIP |
| `help` | `commands` | `help [Command Name]` or `commands [Command Name]` | Gets a list of all commands to use, or a description of a command if an argument is provided | N/A | WIP |
| `leaderboard` | N/A | `leaderboard` | Gets the leaderboard for the leveling system. Only displays the first 20 members. | N/A | WIP |
| `ping` | N/A | `ping` | Checks to see the response time for Awesome Bot, and if it's still alive. | N/A | WIP |
| `presence` | N/A | `presence dnd|idle|invisible|online` | Sets the bot to appear online, idle, do not disturb, or invisible. | Administrator | WIP |
| `rank` | N/A | `rank [User]` | Gets the rank of the member, or the pinged member if an argument is provided. | N/A | WIP |
| `repo` | N/A | `repo` | Gets the link to the repository for Awesome Bot | N/A | WIP |
| `status` | N/A | `status competing|custom_status|listening|playing|streaming|watching <Name>` | Sets if Awesome Bot is competing, a custom status, listening, playing, streaming, or watching a certain thing. | Administrator | WIP |