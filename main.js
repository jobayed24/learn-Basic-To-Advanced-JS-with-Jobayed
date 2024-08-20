//Ensure compatibility and in Frameworks and liberies

function Plugin(){};

const plugin=new Plugin();
function pluginRegistration(checkObj,mainObj){
    if( mainObj.prototype.isPrototypeOf(checkObj)){
        console.log('plugin registration successfully');
    }else{
        console.log('invalid plugin');
    }
}

const inheritedObj=Object.create(Plugin.prototype);

pluginRegistration(inheritedObj,Plugin)