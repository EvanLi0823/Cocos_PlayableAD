
(function () {
var scripts = [{"deps":{"./assets/script/BubbleAnimationScript":2,"./assets/script/ButtonSafe":25,"./assets/script/DestroyLocationScript":13,"./assets/script/DialogBase":15,"./assets/script/DownloadBtn":9,"./assets/script/GradeNoticeBoardScript":26,"./assets/script/GuideScript":8,"./assets/script/LocalAssetsManager":12,"./assets/script/RightNode":10,"./assets/script/RoundRectMask":11,"./assets/script/TrayScript":14,"./assets/script/UpRewardNode":37,"./assets/script/aduioTools":17,"./assets/script/boomScript":19,"./assets/script/gameConfig":18,"./assets/script/levelBarScript":21,"./assets/script/localDataManager":20,"./assets/script/redbagFly":22,"./assets/script/tireSteakScript":23,"./assets/script/topBubbleBgScript":24,"./assets/script/utiltools":30,"./assets/script/BigWinNode":40,"./assets/script/FinalRandom/Point":1,"./assets/script/FinalRandom/FinalRandom":29,"./assets/script/Model/DataModel":3,"./assets/script/PlatformInteraction/PIDelegate":27,"./assets/script/PlatformInteraction/JsbSdkScript":4,"./assets/script/TargetScript/TargetqiuScript":39,"./assets/script/TargetScript/TargetCompleteScript":5,"./assets/script/qiuScript/InputController":6,"./assets/script/qiuScript/Juice":32,"./assets/script/qiuScript/qiuCollisionScript":33,"./assets/script/qiuScript/qiuItsOwnScript":28,"./assets/script/qiuScript/qiuMoveScript":31,"./assets/script/qiuScript/GameManager":34,"./assets/script/rewardScript/rewardTipScript":7,"./assets/script/rewardScript/rewardAnimScript":35,"./assets/script/utils/RewardMgr":16,"./assets/script/utils/ResMgr":38,"./assets/script/BingoScript":36},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/FinalRandom/Point.js"},{"deps":{},"path":"preview-scripts/assets/script/BubbleAnimationScript.js"},{"deps":{},"path":"preview-scripts/assets/script/Model/DataModel.js"},{"deps":{},"path":"preview-scripts/assets/script/PlatformInteraction/JsbSdkScript.js"},{"deps":{},"path":"preview-scripts/assets/script/TargetScript/TargetCompleteScript.js"},{"deps":{"../gameConfig":18,"../PlatformInteraction/JsbSdkScript":4,"./GameManager":34,"./qiuMoveScript":31},"path":"preview-scripts/assets/script/qiuScript/InputController.js"},{"deps":{"../aduioTools":17,"../gameConfig":18},"path":"preview-scripts/assets/script/rewardScript/rewardTipScript.js"},{"deps":{"./gameConfig":18,"./qiuScript/GameManager":34},"path":"preview-scripts/assets/script/GuideScript.js"},{"deps":{"./gameConfig":18},"path":"preview-scripts/assets/script/DownloadBtn.js"},{"deps":{"./gameConfig":18},"path":"preview-scripts/assets/script/RightNode.js"},{"deps":{},"path":"preview-scripts/assets/script/RoundRectMask.js"},{"deps":{},"path":"preview-scripts/assets/script/LocalAssetsManager.js"},{"deps":{},"path":"preview-scripts/assets/script/DestroyLocationScript.js"},{"deps":{},"path":"preview-scripts/assets/script/TrayScript.js"},{"deps":{},"path":"preview-scripts/assets/script/DialogBase.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/RewardMgr.js"},{"deps":{"./gameConfig":18,"./PlatformInteraction/JsbSdkScript":4},"path":"preview-scripts/assets/script/aduioTools.js"},{"deps":{"./localDataManager":20,"./PlatformInteraction/JsbSdkScript":4},"path":"preview-scripts/assets/script/gameConfig.js"},{"deps":{},"path":"preview-scripts/assets/script/boomScript.js"},{"deps":{},"path":"preview-scripts/assets/script/localDataManager.js"},{"deps":{"./gameConfig":18,"./localDataManager":20},"path":"preview-scripts/assets/script/levelBarScript.js"},{"deps":{},"path":"preview-scripts/assets/script/redbagFly.js"},{"deps":{"./gameConfig":18},"path":"preview-scripts/assets/script/tireSteakScript.js"},{"deps":{},"path":"preview-scripts/assets/script/topBubbleBgScript.js"},{"deps":{},"path":"preview-scripts/assets/script/ButtonSafe.js"},{"deps":{},"path":"preview-scripts/assets/script/GradeNoticeBoardScript.js"},{"deps":{},"path":"preview-scripts/assets/script/PlatformInteraction/PIDelegate.js"},{"deps":{"./GameManager":34,"./qiuCollisionScript":33,"./qiuMoveScript":31},"path":"preview-scripts/assets/script/qiuScript/qiuItsOwnScript.js"},{"deps":{"./Point":1},"path":"preview-scripts/assets/script/FinalRandom/FinalRandom.js"},{"deps":{},"path":"preview-scripts/assets/script/utiltools.js"},{"deps":{},"path":"preview-scripts/assets/script/qiuScript/qiuMoveScript.js"},{"deps":{},"path":"preview-scripts/assets/script/qiuScript/Juice.js"},{"deps":{},"path":"preview-scripts/assets/script/qiuScript/qiuCollisionScript.js"},{"deps":{"../aduioTools":17,"../gameConfig":18,"../GuideScript":8,"../LocalAssetsManager":12},"path":"preview-scripts/assets/script/qiuScript/GameManager.js"},{"deps":{"../gameConfig":18},"path":"preview-scripts/assets/script/rewardScript/rewardAnimScript.js"},{"deps":{},"path":"preview-scripts/assets/script/BingoScript.js"},{"deps":{"./gameConfig":18,"./utils/ResMgr":38},"path":"preview-scripts/assets/script/UpRewardNode.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/ResMgr.js"},{"deps":{"../gameConfig":18},"path":"preview-scripts/assets/script/TargetScript/TargetqiuScript.js"},{"deps":{"./gameConfig":18},"path":"preview-scripts/assets/script/BigWinNode.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    