# Decent Paste

![decent paste app image](https://eecs.blog/wp-content/uploads/2026/01/decent-paste-image.png)

## About
This is an old project I revived. In fact, I wrote about abandoning the idea of making a decentralized pastebin clone in [this post](https://eecs.blog/projects-graveyard/#title11:~:text=in%20the%20future%20%E2%80%A6-,DecentBin%20a%20Decentralized%20PasteBin%20Clone,-I%20was%20planning). At the time, I was trying to create a simple dApp(decentralized application) using Sia Skynet as I was planning to use it for another project. Then Sia Skynet shut down, and I abandoned both projects.

However, I recently made an [online C# compiler](https://github.com/EECSB/CsharpOnlineCompiler) and decided to use [GUN.js](https://gun.js.org/)(decentralized graph database) to store the data and live share the code editor. This gave me the idea to take some of the code from there, make just a few changes to it and use it for the decentralized pastebin dApp.

The account and its data are saved to the GUN.js decentralized database. **Warning: I'm not hosting a relay node, so any data you save is reliant on public nodes, which may not store your data indefinitely.** You can add additional nodes under: Gun Nodes

## Try it out
You can try it out [here](https://eecs.blog/BlazorApps/DecentPaste/)
