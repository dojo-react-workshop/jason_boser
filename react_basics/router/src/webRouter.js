const { history, location, addEventListener } = window;
const callbackContainer = [];

const runCallbacks = () => {
    callbackContainer.forEach((cb) => {cb()});
}

addEventListener('popstate', runCallbacks);

const webRouter = {

    path: () => location.pathname,

    navigateTo(path){
        history.pushState({}, null, path);
        runCallbacks();
    },
    
    subscribe(callback){
        callbackContainer.push(callback);
    }

}

export default webRouter;