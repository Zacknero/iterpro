var l=3,f=5,r=15;var p=(n,i)=>{let e="";for(let o=n;o<=i;o+=1)o>=r&&o%r===0?e=e.concat("tiptap "):o%f===0?e=e.concat("tap "):o%l===0?e=e.concat("tip "):e=e.concat(`${o} `);return e};function b(n){return`${n}`.indexOf(`${l}`)>-1}var m=(n,i)=>{let e="";for(let o=n;o<=i;o+=1)b(o)?e=e.concat("gold "):o>=r&&o%r===0?e=e.concat("tiptap "):o%f===0?e=e.concat("tap "):o%l===0?e=e.concat("tip "):e=e.concat(`${o} `);return e};function $(n){return`${n}`.indexOf(`${l}`)>-1}function d(n){return n%2===0}var g=(n,i)=>{let e=0,o=0,a=0,u=0,s=0,t="";for(let c=n;c<=i;c+=1)d(c)&&(s+=1),$(c)?(t=t.concat("gold "),u+=1):c>=r&&c%r===0?(t=t.concat("tiptap "),a+=1):c%f===0?(t=t.concat("tap "),o+=1):c%l===0?(t=t.concat("tip "),e+=1):t=t.concat(`${c} `);return t=t.concat(`
tip: ${e}`),t=t.concat(`
tap: ${o}`),t=t.concat(`
tiptap: ${a}`),t=t.concat(`
gold: ${u}`),t=t.concat(`
integer: ${s}`),t};console.log("---------------------Step 1---------------------");console.log(p(2,16));console.log(p(-3,-1));console.log("---------------------Step 2---------------------");console.log(m(2,14));console.log("---------------------Step 3---------------------");console.log(g(1,20));
