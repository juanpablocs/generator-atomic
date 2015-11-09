var Path = {base:{},frontend:{},dest:{}};

Path.base = __dirname + '/../..';

//---------------

Path.frontend.base = Path.base + '/frontend';
Path.source        = Path.frontend.base + '/source';

Path.frontend.html = Path.source + '/html';
Path.frontend.css  = Path.source + '/css';

//---------------

Path.dest.serverFiles  = Path.base + '/public';
Path.dest.css          = Path.dest.serverFiles + '/css';
Path.dest.html         = Path.dest.serverFiles + '/html';

module.exports = Path; 