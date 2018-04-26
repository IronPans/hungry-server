const crypto = require('crypto');

const fs = require('fs');
const root_path=process.argv[2];

const md5 = function (data) {
    const str = crypto.createHash('md5').update(data).digest('hex');
    return str;
};


function getAllFiles(root) {
    let res = [] , files = fs.readdirSync(root);
    files.forEach(function(file){
        const pathname = root+'/'+file, stat = fs.lstatSync(pathname);
        if (!stat.isDirectory()){
            res.push(pathname.replace(root_path,'.'));
        } else {
            res = res.concat(getAllFiles(pathname));
        }
    });
    return res
}

function getRandom(len = 8) {
    const random = [];
    random.push(Math.ceil(Math.random() * 8) + 1);
    for (let i = 0; i < len - 1; i++) {
        random.push(Math.ceil(Math.random() * 9));
    }
    return Number(random.join(''));
}

function now(){
    return Date.now() + 8*60*60*1000;
}

module.exports = {
    getAllFiles,
    md5,
    getRandom,
    now
};
