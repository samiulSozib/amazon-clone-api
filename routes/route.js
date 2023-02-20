const authRoute = require('./authRoute')
const adminRoute = require('./adminRoute')

const routes = [{
        path: '/api/admin',
        handler: adminRoute
    },
    {
        path: '/api/auth',
        handler: authRoute
    },
    {
        path: '/',
        handler: (req, res) => {
            return res.json({ msg: 'welcome to my application' })
        }
    }
]

module.exports = (app) => {
    routes.forEach(r => {
        if (r.path == '/') {
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })
}