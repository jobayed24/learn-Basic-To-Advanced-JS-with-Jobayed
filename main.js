//reserved characters

const name="Tom & Jerry";

const myUrl=`http://example.com/?resouce=${encodeURIComponent(name)}`

const links=encodeURI(myUrl);
const decodeURl=decodeURI(links)
const decodelinks=decodeURIComponent(links);

console.log(decodelinks)