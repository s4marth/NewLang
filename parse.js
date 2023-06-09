const nearley = require("nearley");
const grammar = require("./newlang.js");
const fs = require("mz/fs");

async function main()
{
    const filename = process.argv[2];
    if(!filename){
        console.log("please provide a file name");
        return ;
    }

    const code = (await fs.readFile(filename)).toString();
    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    
    // Parse something!
    parser.feed(code);
    if(parser.results.length>1)
    {
        console.log("error : ambiguous");
    }
    else if(parser.results.length==1)
    {
        const ast = parser.results[0];
        const outputFilename = filename.replace(".newlang", ".ast");
        await fs.writeFile(outputFilename, JSON.stringify(ast,null," "));
        console.log(`Wrote ${outputFilename}.`);
    }
    else{
        console.log("no parse found");
    }

    
}

main().catch(err=>console.log(err.stack));