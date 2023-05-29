const { Realm } = require("@realm/react");

class NotesModel extends Realm.Object {
    static schema = {
        name: 'Notes',
        properties: {
            _id: 'objectId',
            title: 'string',
            content: 'string',
            color: 'string',
        },
        primaryKey: '_id'
    }
}

export default NotesModel;