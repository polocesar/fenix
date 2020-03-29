const { hooks } = require('@adonisjs/ignitor')
const Helpers = use('Helpers')

const mixManifest = require(Helpers.publicPath('mix-manifest.json'))

hooks.after.providersBooted(async () => {
    const View = use('View');
    const Env = use('Env');

    View.global('mix', (path) => {
        if (!mixManifest.hasOwnProperty(path)) {
            throw new Error('Could not find asset for versioning' + path)
        }
        return mixManifest[path];
    });

    View.global('env', (name) => {
        return Env.get(name);
    });
})