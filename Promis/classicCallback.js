console.log('hello')
doSometing(function(result){
    doSomethingElse(result,function(newResult){
        doThirdThing(newResult,function(finalResult){
            console.log(`got the ${finalResult}`)
        },failurCallback)
    },failurCallback)
},failurCallback)

function doSomething(){
    
}
