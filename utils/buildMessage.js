/**
 * Return a string with the action in past time
 * @param {string} entity 
 * @param {string} action 
 */
function buildMessage(entity, action) {
    if(action === 'list') {
        return `${entity}s ${action}ed`;
    }
    return `${entity} ${action}d`;
};

module.exports = buildMessage;