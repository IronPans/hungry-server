module.exports = class BaseRequest {
    constructor(model) {
        this.model = model;
    }

    save(body) {
        return new Promise((resolve, reject) => {
            const model = new this.model(body);
            model.save((err) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success'
                });
            });
        })
    }

    insertMany(docs) {
        return new Promise((resolve, reject) => {
            this.model.insertMany(docs, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            });
        })
    }

    find(condition) {
        return new Promise((resolve, reject) => {
            this.model.find(condition).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            })
        })
    }

    findById(condition, projection, options = {}) {
        return new Promise((resolve, reject) => {
            this.model.findById(condition, projection, options).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            })
        })
    }

    update(condition, doc, options = {}) {
        return new Promise((resolve, reject) => {
            this.model.update(condition, doc, options).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            })
        })
    }

    count(condition = {}) {
        return new Promise((resolve, reject) => {
            this.model.count(condition).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            })
        })
    }

    delete(condition, multi) {
        const model = multi ? this.model.deleteMany : this.model.deleteOne;
        return new Promise((resolve, reject) => {
            model(condition).exec((err) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success'
                })
            })
        })
    }

    queryPage(condition = {}, {page = 1, limit = 10}) {
        return new Promise(async (resolve, reject) => {
            const totalResult = await this.count();
            const skipFrom = page * limit - limit;
            this.model.find(condition).skip(skipFrom).limit(limit).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data,
                    total: totalResult.data,
                    page,
                    limit
                })
            })
        })
    }

    remove(condition) {
        return new Promise((resolve, reject) => {
            this.model.remove(condition).exec((err) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success'
                })
            })
        })
    }

    aggregate(pipeline) {
        return new Promise((resolve, reject) => {
            this.model.aggregate(pipeline).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    message: 'success',
                    data
                })
            })
        })
    }
}