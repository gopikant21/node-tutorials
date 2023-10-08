const {readFile,writeFile} = require('fs')

console.log('start')
readFile('./folder2/content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./folder2/content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './folder2/content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next one')