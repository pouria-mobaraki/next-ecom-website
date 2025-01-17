
const handleError = (message) => {
    if(typeof message === 'object'){
        const errors = []
        Object.keys(message).map(key=> {
            message[key].map(e=>{
                errors.push(e)
            })
        })

        return errors.join()
    }

    return message
}

export {handleError}