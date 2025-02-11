class DataModel {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = new Date(data.updatedAt);
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
        };
    }

    static fromJSON(json) {
        return new DataModel(json);
    }

    static fromJSONArray(jsonArray) {
        return jsonArray.map(json => DataModel.fromJSON(json));
    }
}

export default DataModel;
