###### The Minotaur Labyrinth for making JS work on my windows, on VScode which is not recognizing the word 'node'-

in vscode command line,
winget --version
winget install OpenJS.NodeJS.LTS
node let_const.js
If it does not work, restart VScode.
Still, if it does not work then -
Win + X
Select System
Search for Advanced System settings
This will directly open the Advanced tab in the System properties
Click Environment Variables
In the Environment Variables window, under 'System variables', scroll down and find the Path variable.
Select it and click Edit
In the Edit Environmental Variable window, click New and add C:\Program Files\nodejs\ including the backslash at the end
Click OK on all dialogs to save change
Restart VS code or any open terminals or command prompts for the change to take effect

f5 for debug and run
Debug consile will show result
