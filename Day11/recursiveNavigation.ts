// Recuresive Type
type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};

//Example Data
const projectFolder: FolderNode = {
    name: "Root",

    files: ["index.html", "style.css"],

    subFolders: [
        {
            name: "src",
            files: ["app.ts", "main.ts"],

            subFolders: [
                {
                    name: "components",
                    files: ["Header.ts", "Footer.ts"],
                }
            ]
        },

        {
            name: "assets" ,
            files: ["logo.png"]
        }
    ]
};

console.dir(projectFolder, { depth: null });