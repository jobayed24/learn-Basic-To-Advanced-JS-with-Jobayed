class Configurator{
  constructor(defaultSetting){
    this.defaultSetting=defaultSetting;
  }

  //method to apply  setting
  applySetting(customSetting){
    return {...this.defaultSetting,...customSetting}
  }
}
const con=new Configurator({
  theme: 'dark',
  language: 'en',
  layout: 'grid'
});


const appliedSetting=con.applySetting.bind(con);
const applied=appliedSetting({
  language: 'bn',
  layout: 'list'
})
console.log('after new setting applied',applied)

console.log(con.defaultSetting)