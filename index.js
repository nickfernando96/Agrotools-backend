const customExpress = require('./config/customExpress')

app = customExpress()

app.listen(1000, () => console.log('Servidor em execução na porta 1000'))