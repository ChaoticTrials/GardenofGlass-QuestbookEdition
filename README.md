[![CurseForge](http://cf.way2muchnoise.eu/full_275351_downloads.svg)](https://www.curseforge.com/minecraft/modpacks/garden-of-glass-questbook-edition)
[![Bugs label](https://img.shields.io/github/issues/MelanX/GardenofGlass-QuestbookEdition/bug)](https://github.com/MelanX/GardenofGlass-QuestbookEdition/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
[![GitHub license](https://img.shields.io/github/license/MelanX/GardenofGlass-QuestbookEdition.svg)](https://github.com/MelanX/GardenofGlass-QuestbookEdition/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/MelanX/GardenofGlass-QuestbookEdition.svg)](https://GitHub.com/MelanX/GardenofGlass-QuestbookEdition/releases/)
[![CastCrafter Server](https://img.shields.io/discord/411271477128724482.svg?color=7289da&label=MelanX%20Server&logo=discord&style=flat-square)](https://discord.gg/u8ZE5Ts)

### This modpack puts your knowledge to the test!

This is the official repository of the Minecraft modpack `Garden of Glass (Questbook Edition)` on
[CurseForge](https://www.curseforge.com/minecraft/modpacks/garden-of-glass-questbook-edition)! It contains all necessary
files to create a server and to create a client .zip file for importing into any known launcher which can import the
default CurseForge modpack files.

Releases for server and client files can be
found [here](https://github.com/MelanX/GardenofGlass-QuestbookEdition/releases)
or on [CurseForge](https://www.curseforge.com/minecraft/modpacks/garden-of-glass-questbook-edition).

## Content

### Basic

The included content in the folders are only the files which were changed. If a config isn't changed, it doesn't need to
be here. It will be automatically generated on first launch of the modpack.

### Server Data

The serverdata is for setting up a server with Garden of Glass.

### Script Overview

To use the scripts you need to add your tokens in `tokens.json`. The file should look
like [tokens-example.json](tokens-example.json). The twitch token needs no specific access (It only needs to be able to
convert user-names to ids). The GitHub Token needs the scopes `public_repo`, `repo:status` and `repo_deployment` and
needs push access to this repository.

**All the scripts must be run with the repository root as current working directory**

| script | description |
| :---: | :---  |
| changelog_generator.py | Creates a changelog from the current manifest and the latest release manifest |
| create_release.py | Creates a new release and publishes it on github. **IMPORTANT: Make sure to push your current branch before calling this!!!** |
| downloadmods.py | Downloads all mods from `manifest.json` into the `mods` folder. **This will delete all mods previously in the mods folder!** |
| modlist.py | Generates the manifest from the manifest without file ids at [pack.json](pack.json) and the files in the `mods` folder. Uses a cache file `modcache.json`. This file should be committed. |

## Contribution

You want to contribute to the project? The simplest way is to open issues if there is any. If there is a bug, use
[this template](https://github.com/MelanX/GardenofGlass-QuestbookEdition/issues/new?labels=bug&template=bug_report.md).
If you only like to suggest a mod or another cool feature, use
[this template](https://github.com/MelanX/GardenofGlass-QuestbookEdition/issues/new?labels=enhancement&template=feature_request.md)
.

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/MelanX/GardenofGlass-QuestbookEdition)
