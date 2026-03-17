const mailInstances = [];
const users = [];

const random = (length = 8) => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};

const addMailInstance = ({ socketID, ownerID }) => {
    if (!ownerID) return { error: 'The socket must have an ownerID' };

    const existingInstance = mailInstances.find(inst => inst.ownerID === ownerID);
    if (existingInstance) {
        // On met à jour le socketID si l'utilisateur se reconnecte
        existingInstance.socketID = socketID;
        return { instance: existingInstance };
    }

    const instance = { socketID, ownerID, mails: [] };
    mailInstances.push(instance);
    return { instance };
};

const addMailToInstance = (ownerID) => {
    const instance = mailInstances.find(inst => inst.ownerID === ownerID);
    if (instance) {
        const newMail = { id: random(10), nbSeen: 0 };
        instance.mails.push(newMail);
        return instance;
    }
};

const openMail = (socketID, mailID) => {
    // On cherche l'instance par le socketID (utilisé dans l'URL de l'image)
    const instance = mailInstances.find(inst => inst.socketID === socketID);
    if (instance) {
        const mail = instance.mails.find(m => m.id === mailID);
        if (mail) {
            mail.nbSeen++;
            return instance;
        }
    }
    return null;
};

const resetMail = (ownerID, mailID) => {
    const instance = mailInstances.find(inst => inst.ownerID === ownerID);
    if (instance) {
        const mail = instance.mails.find(m => m.id === mailID);
        if (mail) mail.nbSeen = 0;
        return instance;
    }
};

const removeMail = (ownerID, mailID) => {
    const instance = mailInstances.find(inst => inst.ownerID === ownerID);
    if (instance) {
        instance.mails = instance.mails.filter(m => m.id !== mailID);
        return instance;
    }
};

module.exports = {
    addMailInstance,
    addMailToInstance,
    openMail,
    resetMail,
    removeMail
};
