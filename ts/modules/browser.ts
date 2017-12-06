module Browser {

    type browser = { name: string, version: Number };

    export const supported_browsers = {
        'Chrome': 47,
        'Edge': 12,
        'Firefox': 43,
        'InternetExplorer': 11,
        'Safari': 7      
    }

    export const get_browser = (): browser => {
        let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem = /\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }   
        M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
        name: M[0],
        version: Number(M[1])
        };
    }

    export let check_browser = (browser: browser): Boolean => {
        if (browser.version <= supported_browsers[browser.name]) {
            notify(browser);
            return false
        }
        else return true;
    }

    export let notify = (browser: browser): void => {
        console.error(`¡!The current browser is not supported on this site!¡ You may encounter problems. - ${browser} -  Supported Browsers: ${supported_browsers}`);
    }
}