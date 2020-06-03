
class esayHttp {
    get(url) {
        return new Promise((reslove, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => reslove(data))
                .catch(err => reject(err))
        })
    }
    post(url, data) {
        return new Promise((reslove, reject) => {
            fetch(url, {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => reslove(data))
                .catch(err => reject(err))
        })

    }
    put(url, data) {
        return new Promise((reslove, reject) => {
            fetch(url, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => reslove(data))
                .catch(err => reject(err))
        })

    }

    delete(url) {
        return new Promise((reslove, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: { 'Content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => reslove("删除成功！！！"))
                .catch(err => reject(err))
        })
    }

}
