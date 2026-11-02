const fs=require('fs');fs.mkdirSync('dist',{recursive:true});for(const p of ['index.html','style.css','app.js'])fs.copyFileSync(p,'dist/'+p);fs.cpSync('assets','dist/assets',{recursive:true});
